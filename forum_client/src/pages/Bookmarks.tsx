import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/model/store';
import type { Post } from '../shared/types/post';
import ForumPost from '../entities/post/ui/ForumPost';
import { useBookmarks } from '../shared/lib/hooks/useBookmarks';

export default function Bookmarks() {
    const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
    const uid = loginUser && loginUser.uid;

    if (!loginUser) return <div style={{ padding: '20px' }}>로그인이 필요합니다.</div>;

    const { data } = useBookmarks(uid);
    const posts = data as unknown as Post[] | undefined;

    return (
        <main>
            <div style={{ padding: '20px' }}>
                <h2>북마크 목록</h2>
                {posts && posts.length > 0 ? (
                    posts.map((p) => <ForumPost key={p.postId} post={p} />)
                ) : (
                    <p>북마크한 게시글이 없습니다.</p>
                )}
            </div>
        </main>
    );
}
