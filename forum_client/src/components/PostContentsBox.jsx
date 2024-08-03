import React from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import Post from './Post';

export default function PostContentsBox() {
    return (
        <main>
            <PostHeader />

            <UnifiedDivider $padding='5px 10px' $border='2px solid gray' $opacity='0.15' />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </main>
    );
}
