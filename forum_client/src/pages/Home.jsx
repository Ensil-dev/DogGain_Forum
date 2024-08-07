import React from 'react';
import styled from 'styled-components';
import Bi from '../components/Bi';
import ForumMain from '../components/ForumMain';
import { HamburgerMenuModal } from '../components/HamburgerMenuModal';

export const HomeContainer = styled.div`
    max-width: 550px;
    min-width: 330px;
    height: 100vh;

    margin: 0 auto;
    overflow: scroll;

    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
`;

export default function Home() {
    return (
        <>
            <HomeContainer>
                <Bi />
                <ForumMain />
            </HomeContainer>
            <HamburgerMenuModal />
        </>
    );
}
