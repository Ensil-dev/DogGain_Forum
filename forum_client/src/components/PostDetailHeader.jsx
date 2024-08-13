import React from 'react';
import styled from 'styled-components';

const DetailHeaderContainer = styled.h2`
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    padding-bottom: 0px;
`;

const Title = styled.div`
    display: grid;
    padding: 12px 10px 0px 10px;

    color: black;
    /* font-size: large; */
    word-break: keep-all;
`;

const Category = styled.div`
    padding: 0px 10px 6px 10px;
    font-size: small;
`;

export default function PostDetailHeader({ title, category }) {
    return (
        <DetailHeaderContainer>
            <Title>{title}</Title>
            <Category>{category}</Category>
        </DetailHeaderContainer>
    );
}
