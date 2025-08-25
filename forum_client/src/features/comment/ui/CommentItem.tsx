import React from 'react';
import styled from 'styled-components';
import UnifiedButton from '../../../shared/ui/UnifiedButton';
import type { Comment } from '../../../shared/types/comment';

const Container = styled.div`
    padding: 12px 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
`;

const Nickname = styled.span`
    font-weight: bold;
    font-size: 15px;
`;

const Created = styled.span`
    font-size: 13px;
    color: #777;
    margin-left: 8px;
`;

const Content = styled.p`
    white-space: pre-wrap;
    word-break: keep-all;
    line-height: 1.6;
    font-size: 15px;
    margin-bottom: 4px;
`;

interface CommentItemProps {
    comment: Comment;
    canDelete: boolean;
    onDelete: () => void;
}

export default function CommentItem({ comment, canDelete, onDelete }: CommentItemProps) {
    return (
        <Container>
            <Header>
                <Info>
                    <Nickname>{comment.profile.nickname}</Nickname>
                    <Created>{comment.created}</Created>
                </Info>
                {canDelete && (
                    <UnifiedButton
                        text='삭제'
                        $fontSize='small'
                        $padding='2px 4px'
                        $backgroundColor='lightgray'
                        $onClick={onDelete}
                    />
                )}
            </Header>
            <Content>{comment.content}</Content>
        </Container>
    );
}
