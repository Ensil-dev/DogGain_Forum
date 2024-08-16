import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addPost, postWritingModalChange } from '../redux/constants/constant';
import { categoryOptions } from '../utils/util';

const Form = styled.form`
    /* display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr; */

    width: 100%;
    height: 100%;

    border-right: 1px solid rgb(222, 226, 230);
    border-left: 1px solid rgb(222, 226, 230);
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
    const [titleInputValue, setTitleInputValue] = useState('');
    const [bodyInputValue, setBodyInputValue] = useState('');
    const [categoryOption, setCategoryOption] = useState('자유포럼');

    const writingFormCategoryOptions = categoryOptions.slice(1);

    const dispatch = useDispatch();

    const handleModalState = () => {
        console.log('✅ handleModalState');
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

    const submitWritingForm = () => {
        console.log('submitWritingForm');

        if (titleInputValue.length < 10) {
            alert('제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없습니다.');
        } else {
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
        console.log(categoryOption);
    }, [categoryOption]);

    return (
        <Form id='writingForm' style={{ overflow: 'clip', maxWidth: '550px' }}>
            <div style={{ padding: '8px 0px', border: 'none', backgroundColor: 'lightblue' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', alignItems: 'center', height: '30px', padding: '0px 8px', fontSize: 'larger' }}>
                    <div>게시판 글쓰기</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <CloseBtn className='close-btn' onClick={handleWritingModal}>
                            &times;
                        </CloseBtn>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ padding: '24px 8px 0px 8px', border: 'none', textAlign: 'center' }}>
                    <input
                        onChange={listenTitleValue}
                        type='text'
                        minLength='10'
                        maxLength='100'
                        autoFocus
                        required
                        style={{ width: '95%', height: '50px', paddingLeft: '8px' }}
                        placeholder='제목 (특수문자 금지입니다)'
                    ></input>
                </div>
                <div style={{ padding: '24px 8px 0px 8px', border: 'none', textAlign: 'center' }}>
                    <select id='writingForumOption' onChange={handleOptionChanged} value={categoryOption}>
                        {writingFormCategoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ padding: '24px 8px 0px 8px', textAlign: 'center' }}>
                    <textarea onChange={listenBodyValue} required style={{ width: '95%', height: '50vh', paddingLeft: '8px', paddingTop: '8px' }} placeholder='여기에 본문을 입력하세요.'></textarea>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8px', padding: '12px 8px', textAlign: 'center' }}>
                    <button style={{ color: 'black', backgroundColor: '#EFEFEF', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleModalState}>
                        취소
                    </button>
                    {/* <div onClick={handleModalState}> */}
                    <input
                        id='submitBtn'
                        onClick={handleModalState}
                        // disabled
                        // disabled={titleInputValue !== '' && bodyInputValue !== ''}
                        type='submit'
                        value='작성완료'
                        style={{ padding: '10px', backgroundColor: '#606060', color: '#ffffff', opacity: '0.8', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    ></input>
                    {/* </div> */}
                </div>
            </div>
        </Form>
    );
}
