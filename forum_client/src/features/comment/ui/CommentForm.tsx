import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useAddComment } from '../../../shared/lib/hooks/useComments';
import { formatKoreanTime } from '../../../shared/lib/utils/util';
import { UI } from '../../../shared/config/constants/common';
import type { RootState } from '../../../app/model/store';

const Form = styled.form`
    display: flex;
    gap: 8px;
    padding: 16px 20px;
`;

const Input = styled.textarea`
    flex-grow: 1;
    min-height: 48px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    line-height: 1.6;
    font-size: 15px;
`;

const Button = styled.button`
    background: ${UI.COLOR_PRIMARY_GRAY};
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0 12px;
    cursor: pointer;
`;

interface CommentFormProps {
    postId: string | number;
    postDocId?: string;
}

export default function CommentForm({ postId, postDocId }: CommentFormProps) {
    const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
    const [value, setValue] = useState('');
    const addMutation = useAddComment();

    if (!loginUser) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value.trim()) return;
        const nickname = loginUser.displayName.split(' ')[0];
        const uid = loginUser.uid;
        addMutation.mutate(
            {
                postId: String(postId),
                postDocId,
                profile: { nickname, uid },
                content: value,
                created: formatKoreanTime(),
            },
            {
                onSuccess: () => setValue(''),
            }
        );
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='여기에 댓글을 입력하세요'
            />
            <Button type='submit'>등록</Button>
        </Form>
    );
}
