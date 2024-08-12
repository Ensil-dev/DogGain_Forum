import React, { useEffect, useState } from 'react';
import UnifiedDivider from './UnifiedDivider';
import ForumPost from './ForumPost';
import { postsSortedByLatest } from '../utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { POST_URL } from '../api/api';
import { useParams } from 'react-router-dom';
import PostDetailHeader from './PostDetailHeader';

export default function PostDetail() {
    const [postDetailContent, setPostContent] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);

    const param = useParams();
    const postId = param.id;
    console.log('postId: ', postId);

    useEffect(() => {
        console.log('컨텐츠박스 첫 로드 시작');
        // http 주소를 이용할 경우
        // fetch('http://localhost:3000/data/recommendData.json');

        // public 폴더의 절대 경로를 이용할 경우
        // fetch('/data/recommendData.json');

        // Network 주소 사용
        // fetch('http://192.168.0.13:3000/mockData/post.json')
        fetch(POST_URL + postId)
            .then((res) => res.json())
            .then((data) => {
                const sortedPost = postsSortedByLatest(data).slice();

                setPostContent((initialPost) => sortedPost);
                setIsPostLoading((state) => true);
            });
    }, [postId]);

    useEffect(() => {
        console.log(`isPostLoading: ${isPostLoading}`);
    }, [isPostLoading]);

    return (
        <main>
            <PostDetailHeader />

            <UnifiedDivider $padding='0px 10px' $border='2px solid gray' $opacity='0.15' />

            {isPostLoading && postDetailContent.map((post) => <ForumPost key={post.postId} post={post} />)}
        </main>
    );
}
