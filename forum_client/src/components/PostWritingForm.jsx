import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addPost, deletePost, postWritingModalChange, saveEditingPost } from '../redux/constants/constant';
import { categoryOptions, getUniquePostId, isIosSafari } from '../utils/util';

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

export default function PostWritingForm({ handleWritingModal }) {
    const dispatch = useDispatch();
    const postInfoStore = useSelector((state) => state.postInfo);
    const { latestPostData, informationOfModifyingPost } = postInfoStore;

    const [titleInputValue, setTitleInputValue] = useState('');
    const [categoryOption, setCategoryOption] = useState('');
    const [nicknameInputValue, setNicknameInputValue] = useState('');
    const [bodyInputValue, setBodyInputValue] = useState('');
    const [isEditingForm, setIsEditingForm] = useState(false);

    const writingFormCategoryOptions = categoryOptions.slice(1);

    const handleModalState = () => {
        console.log('✅ handleModalState');
        dispatch(postWritingModalChange());
    };

    const handleCancleButtonTouched = () => {
        setIsEditingForm(false);
        dispatch(saveEditingPost(null));
        dispatch(postWritingModalChange());
    };

    const listenTitleValue = (event) => {
        console.log('TitleValue: ', event.target.value);
        setTitleInputValue(event.target.value);
    };

    const listenBodyValue = (event) => {
        console.log('BodyValue: ', event.target.value);
        setBodyInputValue(event.target.value);
    };

    const listenNicknameInputValueValue = (event) => {
        console.log('listenNicknameInputValueValue: ', event.target.value);
        setNicknameInputValue(event.target.value);
    };

    const submitWritingForm = () => {
        console.log('submitWritingForm');

        if (titleInputValue.length < 10) {
            return alert('제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없습니다.');
        }

        if (nicknameInputValue.length < 2) {
            return alert('닉네임은 최소 2글자 이상입니다.');
        }

        // const { latestPostData } = postInfoStore;

        const userInputPostInfo = {
            postId: latestPostData.length,
            profile: {
                nickname: nicknameInputValue,
            },
            title: titleInputValue,
            category: {
                id: '5',
                name: `${categoryOption}`,
            },
            content: bodyInputValue,
            comments: 0,
            created: '24/08/13/18:35',
        };

        if (isEditingForm === false) {
            const uniquePostId = getUniquePostId(userInputPostInfo, latestPostData);

            const newPost = {
                ...userInputPostInfo,
                postId: uniquePostId,
            };

            dispatch(addPost(newPost));
            handleModalState();
        } else {
            const newPost = {
                ...userInputPostInfo,
                postId: informationOfModifyingPost.postId,
            };

            dispatch(deletePost(informationOfModifyingPost.postId));
            dispatch(addPost(newPost));
            dispatch(saveEditingPost(null));
            setIsEditingForm(false);
            handleModalState();
        }
    };

    const submitElem = document.querySelector('#submitBtn');

    const handleOptionChanged = (event) => {
        setCategoryOption(event.target.value);
    };

    useEffect(() => {
        if (submitElem) {
            if (titleInputValue.length >= 1 && bodyInputValue.length >= 1) {
                console.log('⭕️ submitElem.removeAttribute disabled');
                submitElem.style.opacity = 1;
                submitElem.removeAttribute('disabled');
            } else {
                console.log('❌ submitElem.setAttribute disabled');

                submitElem.setAttribute('disabled', '');
                submitElem.style.opacity = 0.8;
            }
        }
    }, [titleInputValue, bodyInputValue, submitElem]);

    useEffect(() => {
        console.log('categoryOption: ', categoryOption);
        console.log('isEditingForm: ', isEditingForm);
    }, [categoryOption, isEditingForm]);

    useEffect(() => {
        if (informationOfModifyingPost) {
            setTitleInputValue(informationOfModifyingPost.title);
            setCategoryOption(informationOfModifyingPost.category.name);
            setNicknameInputValue(informationOfModifyingPost.profile.nickname);
            setBodyInputValue(informationOfModifyingPost.content);
            setIsEditingForm(true);
        }
    }, []);

    return (
        <Form id="writingForm" style={{ overflow: 'clip', maxWidth: '550px' }}>
            <div style={{ padding: '8px 0px', border: 'none', backgroundColor: 'lightblue' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', alignItems: 'center', height: '30px', padding: '0px 8px', fontSize: 'larger', fontWeight: 'bold' }}>
                    <div>게시판 글쓰기</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <CloseBtn className="close-btn" onClick={handleWritingModal}>
                            &times;
                        </CloseBtn>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ padding: '24px 8px 0px 8px', border: 'none', textAlign: 'center' }}>
                    <input onChange={listenTitleValue} type="text" minLength="10" maxLength="100" autoFocus required style={{ width: '95%', height: '50px', paddingLeft: '8px' }} placeholder="제목을 입력하세요." value={titleInputValue}></input>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', height: '50px', padding: '8px', fontSize: 'larger' }}>
                    <div style={{ border: 'none', textAlign: 'center' }}>
                        <select id="writingForumOption" onChange={handleOptionChanged} value={categoryOption} style={{ padding: '4px' }}>
                            {writingFormCategoryOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100px', fontSize: 'small', fontWeight: '500', textAlign: 'end' }}>닉네임: &nbsp;</div>
                        <input onChange={listenNicknameInputValueValue} type="text" minLength="2" maxLength="10" style={{ width: '100px' }} value={nicknameInputValue} />
                    </div>
                </div>

                <div style={{ padding: '0px 8px 0px 8px', textAlign: 'center' }}>
                    <textarea onChange={listenBodyValue} required style={{ width: '95%', height: '40vh', paddingLeft: '8px', paddingTop: '8px' }} placeholder="여기에 본문을 입력하세요." wrap="hard" value={bodyInputValue}></textarea>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8px', padding: '12px 8px', textAlign: 'center' }}>
                    <button style={{ color: 'black', backgroundColor: '#EFEFEF', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleCancleButtonTouched}>
                        취소
                    </button>
                    {/* <div onClick={handleModalState}> */}
                    <input
                        id="submitBtn"
                        // onClick={handleModalState}
                        onClick={submitWritingForm}
                        // disabled
                        // disabled={titleInputValue !== '' && bodyInputValue !== ''}
                        type="submit"
                        value="작성완료"
                        style={{ padding: '10px', backgroundColor: '#606060', color: '#ffffff', opacity: '0.8', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    ></input>
                    {/* </div> */}
                </div>
            </div>
        </Form>
    );
}
