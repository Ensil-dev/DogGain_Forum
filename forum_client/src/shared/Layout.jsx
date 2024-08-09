import React from 'react';
import styled from 'styled-components';
import Bi from '../components/Bi';
import { HamburgerMenuModal } from '../components/HamburgerMenuModal';

export const LayoutContainer = styled.div`
    position: relative;

    max-width: 550px;
    min-width: 330px;
    height: 100%;
    overflow-y: scroll;

    border-right: 1px solid rgb(222, 226, 230);
    border-left: 1px solid rgb(222, 226, 230);
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
