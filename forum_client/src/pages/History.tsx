import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/model/store';
import type { Post, Comment } from '../shared/types';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../shared/lib/hooks/usePosts';
import { useCommentsByUser } from '../shared/lib/hooks/useComments';
import ForumPost from '../entities/post/ui/ForumPost';

export default function History() {
    const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
    const uid = loginUser ? loginUser.uid : '';
    const { data: postsData } = usePosts();
    const posts = postsData as unknown as Post[] | undefined;
    const { data: commentsData } = useCommentsByUser(uid);
    const comments = commentsData as unknown as Comment[] | undefined;
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>('');

    if (!loginUser) return <div style={{ padding: '20px' }}>로그인이 필요합니다.</div>;

    const myPosts = posts ? posts.filter((p) => p.profile.uid === uid) : [];
    const filteredPosts = myPosts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main>
            <div style={{ padding: '20px' }}>
                <h2>내 게시글 ({myPosts.length})</h2>
                <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='검색'
                    style={{ padding: '4px', marginBottom: '10px' }}
                />
                {filteredPosts.length === 0 ? (
                    <p>게시글이 없습니다.</p>
                ) : (
                    filteredPosts.map((p) => <ForumPost key={p.postId} post={p} />)
                )}
                <h2 style={{ marginTop: '20px' }}>내 댓글 ({comments ? comments.length : 0})</h2>
                {comments && comments.length > 0 ? (
                    comments.map((c) => (
                        <div
                            key={c.id}
                            style={{ padding: '10px', borderBottom: '1px solid #eee' }}
                        >
                            <div style={{ fontSize: 'small', marginBottom: '4px' }}>
                                {c.created} |{' '}
                                <span
                                    style={{ cursor: 'pointer', color: 'blue' }}
                                    onClick={() =>
                                        navigate(`/post/${c.postDocId ?? c.postId}`)
                                    }
                                >
                                    게시글 이동
                                </span>
                            </div>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{c.content}</div>
                        </div>
                    ))
                ) : (
                    <p>댓글이 없습니다.</p>
                )}
            </div>
        </main>
    );
}
