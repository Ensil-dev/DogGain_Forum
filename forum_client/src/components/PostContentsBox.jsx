import React from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';

export default function PostContentsBox() {
    return (
        <main>
            <PostHeader />

            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />

            <ForumPost />
            <ForumPost />
            <ForumPost />
            <ForumPost />
            <ForumPost />
            <ForumPost />
            <ForumPost />
            <ForumPost />
            <ForumPost />
            <ForumPost />
            <ForumPost />
        </main>
    );
}
