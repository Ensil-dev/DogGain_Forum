import React from 'react';
import { useSelector } from 'react-redux';
import { useComments, useDeleteComment } from '../../../shared/lib/hooks/useComments';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import styled from 'styled-components';
import { isAdminUser } from '../../../shared/lib/utils/admin';
import type { RootState } from '../../../app/model/store';
import type { Comment } from '../../../shared/types/comment';

const Divider = styled.hr`
    border: 1px solid #eee;
    margin: 0 20px;
`;

interface CommentsProps {
    postId: string | number;
    postDocId?: string;
}

export default function Comments({ postId, postDocId }: CommentsProps) {
    const { data: comments } = useComments(postId);
    const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
    const isAdmin = isAdminUser(loginUser);
    const deleteMutation = useDeleteComment();

    const handleDelete = (comment: Comment) => {
        if (window.confirm('댓글을 삭제하시겠습니까?')) {
            deleteMutation.mutate({ id: comment.id, postId: String(postId), postDocId });
        }
    };

    return (
        <section>
            {comments &&
                comments.map((c) => (
                    <React.Fragment key={c.id}>
                        <CommentItem
                            comment={c}
                            canDelete={
                                (loginUser && loginUser.uid === c.profile.uid) || isAdmin
                            }
                            onDelete={() => handleDelete(c)}
                        />
                        <Divider />
                    </React.Fragment>
                ))}
            <CommentForm postId={postId} postDocId={postDocId} />
        </section>
    );
}
