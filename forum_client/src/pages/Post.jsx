import React from 'react';
import { ForumContainer } from './Home';
import Bi from '../components/Bi';
import PostMain from '../components/PostMain';

export default function Post() {
    return (
        <ForumContainer>
            <Bi />
            <PostMain />
        </ForumContainer>
    );
}
