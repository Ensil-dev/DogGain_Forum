import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UnifiedDivider from './UnifiedDivider';
import { useNavigate } from 'react-router-dom';

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

export default function ForumPost({ post }) {

    const navigate = useNavigate();

    return (
        <>
            <Table onClick={() => navigate('/post')}>
                <tbody>
                    <Tr>
                        <Td>
                            <Title>{post.title}</Title>
                            <ForumType>{post.category.name}</ForumType>
                        </Td>
                        <Td>
                            <Username>{post.profile.nickname}</Username>
                        </Td>
                        <Td>
                            <Count>{post.comments}</Count>
                        </Td>
                        <Td>
                            <Date>{post.created}</Date>
                        </Td>
                    </Tr>
                </tbody>
            </Table>
            <UnifiedDivider $padding='0px 10px' $border='1px solid gray' $opacity='0.15' />
        </>
    );
}
