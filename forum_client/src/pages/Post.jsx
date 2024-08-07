import React from 'react';
import Bi from '../components/Bi';
import PostMain from '../components/PostMain';
import { HomeContainer } from './Home';
import { HamburgerMenuModal } from '../components/HamburgerMenuModal';

export default function Post() {
    return (
        <>
            <HomeContainer>
                <Bi />
                <PostMain />
            </HomeContainer>
            <HamburgerMenuModal />
        </>
    );
}
