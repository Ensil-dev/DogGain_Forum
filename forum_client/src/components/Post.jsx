import React from 'react';
import styled from 'styled-components';
import UnifiedDivider from './UnifiedDivider';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Tr = styled.tr`
    display: grid;
    grid-template-columns: 6fr 3fr 1fr 3fr;
    padding: 12px 10px;

    &:hover {
        background-color: #e0e0e0;
    }
`;

const Td = styled.td`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    &:first-child {
        justify-content: start;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Title = styled.div`
    font-size: medium;
    font-weight: bold;
    padding-right: 5px;
`;

const ForumType = styled.div`
    font-size: x-small;
`;

const Username = styled.div`
    font-size: small;
    font-weight: bold;
    opacity: 0.5;
`;

const Count = styled.div`
    font-size: small;
    opacity: 0.5;
`;

const Date = styled.div`
    font-size: x-small;
    opacity: 0.5;
`;

// const Divider = styled.hr`
//     border: 1px solid gray;
//     opacity: 0.15;
// `;
export default function Post() {
    return (
        <>
            <Table>
                <tbody>
                    <Tr>
                        <Td>
                            <Title>무료 백신 추천하실 만한 것 있나요? 무료 백신 추천하실 만한 것 있나요?</Title>
                            <ForumType>🟠 자유포럼🗽</ForumType>
                        </Td>
                        <Td>
                            <Username>벨루가벨루가</Username>
                        </Td>
                        <Td>
                            <Count>3</Count>
                        </Td>
                        <Td>
                            <Date>24/08/02/15:00</Date>
                        </Td>
                    </Tr>
                </tbody>
            </Table>
            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />
        </>
    );
}
