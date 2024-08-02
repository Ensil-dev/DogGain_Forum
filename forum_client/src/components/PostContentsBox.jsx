import React from 'react';
import PostHeader from './PostHeader';
import UnifyedDivider from './UnifyedDivider';
import Post from './Post';

export default function PostContentsBox() {
    return (
        <main>
            <PostHeader />

            <UnifyedDivider $padding='5px 10px' $border='2px solid gray' $opacity='0.15' />

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
