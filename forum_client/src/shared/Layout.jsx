import React from 'react';
import styled from 'styled-components';
import Bi from '../components/Bi';
import { HamburgerMenuModal } from '../components/HamburgerMenuModal';

export const LayoutContainer = styled.div`
    max-width: 550px;
    min-width: 330px;
    height: 100vh;

    margin: 0 auto;
    /* overflow: scroll; */

    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
`;

export default function Layout({ children }) {
    return (
        <>
            <LayoutContainer>
                <Bi />
                {children}
            </LayoutContainer>
            <HamburgerMenuModal />
        </>
    );
}
