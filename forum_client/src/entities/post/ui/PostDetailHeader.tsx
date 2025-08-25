import React from 'react';
import styled from 'styled-components';

const DetailHeaderContainer = styled.header`
    width: 100%;
    margin-top: 15px;
    padding-bottom: 0px;
`;

const Title = styled.h2`
    padding: 16px 20px 0 20px;
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
    word-break: keep-all;
`;

const CategoryContainer = styled.div`
    padding: 8px 20px;
    font-size: 0.875rem;
    color: gray;
`;

const Category = styled.div``;

interface PostDetailHeaderProps {
    title: string;
    category: string;
}

export default function PostDetailHeader({ title, category }: PostDetailHeaderProps) {
    return (
        <DetailHeaderContainer id='post-detail-header'>
            <Title>{title}</Title>
            <CategoryContainer>
                <Category>{category}</Category>
            </CategoryContainer>
        </DetailHeaderContainer>
    );
}
