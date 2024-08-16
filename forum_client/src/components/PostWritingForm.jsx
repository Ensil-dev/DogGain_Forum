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
        <Form id='writingForm' style={{ overflow: 'clip' }}>
            <div style={{ padding: '8px', border: 'none', backgroundColor: 'lightblue' }}>
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
                    <input minLength='10' maxLength='100' autoFocus required style={{ width: '95%', height: '50px', paddingLeft: '8px' }} placeholder='제목 (특수문자 금지입니다)'></input>
                </div>
                <div style={{ padding: '24px 8px 0px 8px', textAlign: 'center' }}>
                    <textarea required style={{ width: '95%', height: '50vh', paddingLeft: '8px', paddingTop: '8px' }} placeholder='여기에 본문을 입력하세요.'></textarea>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8px', padding: '12px 8px', textAlign: 'center' }}>
                    <button style={{ color: 'black', backgroundColor: '#EFEFEF', border: 'none', borderRadius: '5px' }}>취소</button>
                    <input type='submit' value='작성완료' style={{ padding: '10px', backgroundColor: '#606060', color: '#ffffff', border: 'none', borderRadius: '5px' }}></input>
                </div>
            </div>
        </Form>
    );
}
