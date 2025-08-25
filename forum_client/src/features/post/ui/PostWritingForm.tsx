import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postWritingModalChange } from '../../../app/model/ui/modal';
import AlertModal from '../../../shared/ui/AlertModal';
import { saveEditingPost } from '../../../app/model/post/postInfo';
import { UI } from '../../../shared/config/constants/common';
import {
    categoryOptions,
    formatKoreanTime,
    getUniquePostId,
    isIosSafari,
    createSearchKeywords,
} from '../../../shared/lib/utils/util';
import { useAddPost, useUpdatePost, usePosts } from '../../../shared/lib/hooks/usePosts';
import type { RootState, AppDispatch } from '../../../app/model/store';
import type { Post } from '../../../shared/types/post';

const Form = styled.form`
    /* display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr; */

    width: 100%;
    margin-top: ${isIosSafari() && '7.25rem'};
    height: ${isIosSafari() ? '80%' : '100%'};

    border-right: 1px solid rgb(222, 226, 230);
    border-left: 1px solid rgb(222, 226, 230);

    @media screen and (min-width: 550px) {
        border-bottom: 1px solid rgb(222, 226, 230);
    }
`;

const CloseBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    font-weight: 200;
    width: 24px;
    height: 24px;
    padding-right: 10px;

    /* @media screen and (min-width: 550px) {
        font-size: larger;
    } */

    cursor: pointer;
`;

const WritingFormHeader = styled.div`
    padding: 8px 0;
    border: none;
    /* background-color: lightblue; */
    background-color:  ${(props) => props.theme.writingFormHeader};
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    height: 30px;
    padding: 0 8px;
    font-size: larger;
    font-weight: bold;
`;

const CloseButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const TitleInputContainer = styled.div`
    padding: 24px 8px 0 8px;
    border: none;
    text-align: center;
`;

const TitleInput = styled.input`
    width: 95%;
    height: 50px;
    padding-left: 8px;
`;

const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    height: 50px;
    padding: 8px;
    font-size: larger;
`;

const SelectContainer = styled.div`
    border: none;
    text-align: center;
`;

const StyledSelect = styled.select`
    padding: 4px;
`;

const NicknameContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NicknameLabel = styled.div`
    width: 100px;
    font-size: small;
    font-weight: 500;
    text-align: end;
`;

const NicknameInput = styled.input`
    width: 100px;
`;

const TextAreaContainer = styled.div`
    padding: 0 8px;
    text-align: center;
`;

const StyledTextArea = styled.textarea`
    width: 95%;
    height: 40vh;
    padding-left: 8px;
    padding-top: 8px;
`;

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;
    padding: 12px 8px;
    text-align: center;
`;

const CancelButton = styled.button`
    color: black;
    background-color: #efefef;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const SubmitButton = styled.input`
    padding: 10px;
    background-color: ${UI.COLOR_PRIMARY_GRAY};
    color: #ffffff;
    opacity: 0.8;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

interface PostWritingFormProps {
    handleWritingModal: () => void;
}

export default function PostWritingForm({ handleWritingModal }: PostWritingFormProps) {
    const dispatch = useDispatch<AppDispatch>();
    const postInfoStore = useSelector((state: RootState) => state.postInfo);
    const { informationOfModifyingPost } = postInfoStore;
    const { data: latestPostData } = usePosts();
    const addPostMutation = useAddPost();
    const updatePostMutation = useUpdatePost();

    const loginStore = useSelector((state: RootState) => state.userInfo);
    const { loginUser } = loginStore;

    const nickname = loginUser.displayName.split(' ')[0];
    const uid = loginUser.uid;

    const [titleInputValue, setTitleInputValue] = useState('');
    const [categoryOption, setCategoryOption] = useState(categoryOptions[1].value);
    const [nicknameInputValue, setNicknameInputValue] = useState(nickname);
    const [bodyInputValue, setBodyInputValue] = useState('');
    const [isEditingForm, setIsEditingForm] = useState(false);
    const [isWritingFormLoad, setIsWritingFormLoad] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [submitOpacity, setSubmitOpacity] = useState(0.7);
    const [modalMessage, setModalMessage] = useState('');

    const writingFormCategoryOptions = categoryOptions.slice(1);

    const handleModalState = () => {
        dispatch(postWritingModalChange());
    };

    const handleCancellationButtonTouched = () => {
        setIsEditingForm(false);
        dispatch(saveEditingPost(null));
        dispatch(postWritingModalChange());
    };

    const listenTitleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleInputValue(event.target.value);
    };

    const listenBodyValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBodyInputValue(event.target.value);
    };

    const listenNicknameInputValueValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNicknameInputValue(event.target.value);
    };

    const submitWritingForm = () => {
        // console.log('submitWritingForm');

        if (titleInputValue.length < 10) {
            setModalMessage('제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없습니다.');
            return;
        }

        if (nicknameInputValue.length < 2) {
            setModalMessage('닉네임은 최소 2글자 이상입니다.');
            return;
        }

        const userInputPostInfo: Post = {
            postId: latestPostData ? latestPostData.length : 0,
            profile: {
                nickname: nicknameInputValue,
                uid,
            },
            title: titleInputValue,
            keywords: createSearchKeywords(titleInputValue, nicknameInputValue),
            category: {
                name: `${categoryOption}`,
            },
            content: bodyInputValue,
            comments: isEditingForm ? informationOfModifyingPost.comments : 0,
            views: isEditingForm ? informationOfModifyingPost.views ?? 0 : 0,
            likesCount: isEditingForm ? informationOfModifyingPost.likesCount ?? 0 : 0,
            created: isEditingForm
                ? informationOfModifyingPost.created
                : formatKoreanTime(),
            ...(isEditingForm && { updated: formatKoreanTime() }),
        };

        if (isEditingForm === false) {
            const uniquePostId = getUniquePostId(userInputPostInfo, latestPostData || []);

            const newPost = {
                ...userInputPostInfo,
                postId: uniquePostId,
            };

            addPostMutation.mutate(newPost, {
                onSuccess: handleModalState,
            });
        } else if (informationOfModifyingPost) {
            const newPost = {
                ...userInputPostInfo,
                postId: informationOfModifyingPost.postId,
                id: informationOfModifyingPost.id,
            };

            updatePostMutation.mutate(newPost, {
                onSuccess: () => {
                    dispatch(saveEditingPost(null));
                    setIsEditingForm(false);
                    handleModalState();
                },
            });
        }
    };

    const handleOptionChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryOption(event.target.value);
    };

    useEffect(() => {
        if (titleInputValue.length >= 1 && bodyInputValue.length >= 1) {
            setIsSubmitDisabled(false);
            setSubmitOpacity(1);
        } else {
            setIsSubmitDisabled(true);
            setSubmitOpacity(0.7);
        }
    }, [titleInputValue, bodyInputValue]);

    useEffect(() => {
        // console.log('categoryOption: ', categoryOption);
        // console.log('isEditingForm: ', isEditingForm);
    }, [categoryOption, isEditingForm]);

    useEffect(() => {
        if (informationOfModifyingPost) {
            setTitleInputValue(informationOfModifyingPost.title);
            setCategoryOption(informationOfModifyingPost.category.name);
            setNicknameInputValue(informationOfModifyingPost.profile.nickname);
            setBodyInputValue(informationOfModifyingPost.content);
            setIsEditingForm(true);
        }
    }, [informationOfModifyingPost]);

    useEffect(() => {
        setIsWritingFormLoad(true);
    }, []);

    return (
        <>
        <Form id='writingForm' style={{ overflow: 'clip', maxWidth: '550px' }}>
            <WritingFormHeader>
                <Header>
                    <div>게시판 글쓰기</div>
                    <CloseButtonContainer>
                        <CloseBtn onClick={handleWritingModal}>&times;</CloseBtn>
                    </CloseButtonContainer>
                </Header>
            </WritingFormHeader>

            <TitleInputContainer>
                <TitleInput onChange={listenTitleValue} type='text' minLength='10' maxLength='100' autoFocus required placeholder='제목을 입력하세요.' value={titleInputValue} />
            </TitleInputContainer>

            <OptionsContainer>
                <SelectContainer>
                    <StyledSelect id='writingForumOption' onChange={handleOptionChanged} value={categoryOption}>
                        {writingFormCategoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </StyledSelect>
                </SelectContainer>
                <NicknameContainer>
                    <NicknameLabel>닉네임: &nbsp;</NicknameLabel>
                    <NicknameInput onChange={listenNicknameInputValueValue} disabled type='text' minLength='2' maxLength='10' value={nicknameInputValue} style={{ textAlign: 'center' }} />
                </NicknameContainer>
            </OptionsContainer>

            <TextAreaContainer>
                <StyledTextArea onChange={listenBodyValue} required placeholder='여기에 본문을 입력하세요.' wrap='hard' value={bodyInputValue} />
            </TextAreaContainer>

            <ButtonContainer>
                <CancelButton onClick={handleCancellationButtonTouched}>취소</CancelButton>
                <SubmitButton
                    id='submitBtn'
                    onClick={submitWritingForm}
                    type='submit'
                    value='작성완료'
                    disabled={isSubmitDisabled}
                    style={{ opacity: submitOpacity }}
                />
            </ButtonContainer>
        </Form>
        {modalMessage && (
            <AlertModal message={modalMessage} onClose={() => setModalMessage('')} />
        )}
        </>
    );
}
