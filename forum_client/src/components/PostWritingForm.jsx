import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    /* display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr; */

    width: 100%;
    height: 100%;
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
    return (
        <Form>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', alignItems: 'center', backgroundColor: 'lightblue', height: '30px', padding: '10px 0px' }}>
                <div>게시판 글쓰기</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <CloseBtn className='close-btn' onClick={handleWritingModal}>
                        &times;
                    </CloseBtn>
                </div>
            </div>
            <div>
                <input minLength='10' autofocus required style={{ width: '100%', height: '50px' }} placeholder='제목 (특수문자 금지입니다)'></input>
                <input required style={{ display: 'flex', width: '100%', height: '90vh' }}></input>
            </div>
        </Form>
    );
}
