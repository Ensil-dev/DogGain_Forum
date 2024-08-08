import React, { useEffect, useState } from 'react';
import PostHeader from './PostHeader';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';

export default function PostContentsBox() {
    const [postContent, setPostContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // http 주소를 이용할 경우
        // fetch('http://localhost:3000/data/recommendData.json');

        // public 폴더의 절대 경로를 이용할 경우
        // fetch('/data/recommendData.json');

        fetch('http://localhost:3000/mockData/post.json')
            .then((res) => res.json())
            .then((data) => {
                setPostContent((initialPost) => data.slice());
                setIsLoading((state) => !state);
            });

    }, []);

    useEffect(() => {
        console.log(postContent);
    }, [postContent]);

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    return (
        <main>
            <PostHeader />

            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />

            {/* {isLoading && postContent.map((post) => <ForumPost key={post.postId} />)} */}

            {/* {postContent.map((post) => (
                <ForumPost key={post.postId} />
            ))} */}
        </main>
    );
}
