import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
`;

const Tr = styled.tr`
    display: grid;
    grid-template-columns: 6fr 3fr 1fr 3fr;
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

export default function PostDetailHeader() {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>글</Th>
                </Tr>
            </thead>
        </Table>
    );
}
