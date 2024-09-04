import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addPost, deletePost, postWritingModalChange, saveEditingPost } from '../redux/constants/constant';
import { categoryOptions, formatKoreanTime, getUniquePostId, isIosSafari } from '../utils/util';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../src/firebase';

const Form = styled.form`
    /* display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr; */

    width: 100%;
    height: ${isIosSafari() ? '70%' : '100%'};

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
    background-color: lightblue;
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
    background-color: #606060;
    color: #ffffff;
    opacity: 0.8;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default function PostWritingForm({ handleWritingModal }) {
    const dispatch = useDispatch();
    const postInfoStore = useSelector((state) => state.postInfo);
    const { latestPostData, informationOfModifyingPost } = postInfoStore;

    const loginStore = useSelector((state) => state.userInfo);
    const { loginUser } = loginStore;

    const nickname = loginUser.displayName.split(' ')[0];

    const [titleInputValue, setTitleInputValue] = useState('');
    const [categoryOption, setCategoryOption] = useState(categoryOptions[1].value);
    const [nicknameInputValue, setNicknameInputValue] = useState(nickname);
    const [bodyInputValue, setBodyInputValue] = useState('');
    const [isEditingForm, setIsEditingForm] = useState(false);
    const [isWritingFormLoad, setIsWritingFormLoad] = useState(false);

    const writingFormCategoryOptions = categoryOptions.slice(1);

    const handleModalState = () => {
        dispatch(postWritingModalChange());
    };

    const handleCancellationButtonTouched = () => {
        setIsEditingForm(false);
        dispatch(saveEditingPost(null));
        dispatch(postWritingModalChange());
    };

    const listenTitleValue = (event) => {
        setTitleInputValue(event.target.value);
    };

    const listenBodyValue = (event) => {
        setBodyInputValue(event.target.value);
    };

    const listenNicknameInputValueValue = (event) => {
        setNicknameInputValue(event.target.value);
    };

    const submitWritingForm = () => {
        // console.log('submitWritingForm');

        if (titleInputValue.length < 10) {
            return alert('제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없습니다.');
        }

        if (nicknameInputValue.length < 2) {
            return alert('닉네임은 최소 2글자 이상입니다.');
        }

        const userInputPostInfo = {
            postId: latestPostData.length,
            profile: {
                nickname: nicknameInputValue,
            },
            title: titleInputValue,
            category: {
                name: `${categoryOption}`,
            },
            content: bodyInputValue,
            comments: 0,
            created: formatKoreanTime(),
        };

        async function CreatePost(post) {
            // console.log('CreatePost');
            try {
                const docRef = await addDoc(collection(db, 'posts'), post);
                dispatch(addPost(Object.assign({}, post, { id: docRef.id })));
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        }

        async function UpdatePost(post) {
            // console.log('UpdatePost');

            // console.log(informationOfModifyingPost);

            if (informationOfModifyingPost.id) {
                await updateDoc(doc(db, 'posts', String(informationOfModifyingPost.id)), post);
            } else {
                // console.log(informationOfModifyingPost);
                // console.log(informationOfModifyingPost.id);
            }
        }

        // 게시글 CREATE 생성
        if (isEditingForm === false) {
            const uniquePostId = getUniquePostId(userInputPostInfo, latestPostData);

            const newPost = {
                ...userInputPostInfo,
                postId: uniquePostId,
            };

            CreatePost(newPost);

            handleModalState();
        } else {
            // 게시글 UPDATE 업데이트

            // console.log('게시글 UPDATE 업데이트');

            const newPost = {
                ...userInputPostInfo,
                postId: informationOfModifyingPost.postId,
            };

            dispatch(deletePost(informationOfModifyingPost.postId));
            dispatch(addPost(newPost));

            UpdatePost(newPost);

            dispatch(saveEditingPost(null));
            setIsEditingForm(false);
            handleModalState();
        }
    };

    const handleOptionChanged = (event) => {
        setCategoryOption(event.target.value);
    };

    const submitElem = document.querySelector('#submitBtn');

    useEffect(() => {
        if (submitElem) {
            // console.log('submitElem true case');
            if (titleInputValue.length >= 1 && bodyInputValue.length >= 1) {
                // console.log('⭕️ submitElem.removeAttribute disabled');
                submitElem.style.opacity = 1;
                submitElem.removeAttribute('disabled');
            } else {
                // console.log('❌ submitElem.setAttribute disabled');
                // console.log(submitElem);

                submitElem.setAttribute('disabled', '');
                submitElem.style.opacity = 0.7;
            }
        }
    }, [titleInputValue, bodyInputValue, submitElem, isWritingFormLoad]);

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
                    <NicknameInput onChange={listenNicknameInputValueValue} type='text' minLength='2' maxLength='10' disabled value={nicknameInputValue} style={{ textAlign: 'center' }} />
                </NicknameContainer>
            </OptionsContainer>

            <TextAreaContainer>
                <StyledTextArea onChange={listenBodyValue} required placeholder='여기에 본문을 입력하세요.' wrap='hard' value={bodyInputValue} />
            </TextAreaContainer>

            <ButtonContainer>
                <CancelButton onClick={handleCancellationButtonTouched}>취소</CancelButton>
                <SubmitButton id='submitBtn' onClick={submitWritingForm} type='submit' value='작성완료' />
            </ButtonContainer>
        </Form>
    );
}
