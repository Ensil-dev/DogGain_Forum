import React from 'react';
import styled from 'styled-components';
import Bi from '../components/Bi';
import ForumMain from '../components/ForumMain';
import { HamburgerMenuModal } from '../components/HamburgerMenuModal';
import { getBrowserValue } from '../utils/util';

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
    const browserValue = getBrowserValue(window.navigator.userAgent);
    console.log(`at Home, browserValue: ${browserValue}`);

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
