import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
`;

const Tr = styled.tr`
    display: grid;
    grid-template-columns: 7fr 3fr 2fr 3fr;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        grid-template-columns: 10fr 3fr 2fr 3fr;
    }
    padding: 12px 10px;

    color: gray;
`;

const Th = styled.th`
    font-weight: bold;
    text-align: center;
    &:first-child {
        text-align: start;
        padding-right: 5px;
    }
    font-size: small;
`;

export default function PostHeader() {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>글</Th>
                    <Th>게시자</Th>
                    <Th>댓글</Th>
                    <Th>작성일</Th>
                </Tr>
            </thead>
        </Table>
    );
}
