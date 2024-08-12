import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Bi from '../components/Bi';
import { HamburgerMenuModal } from '../components/HamburgerMenuModal';
import { useDispatch, useSelector } from 'react-redux';
import { scrollElementSave } from '../redux/constants/constant';

export const LayoutContainer = styled.div`
    position: relative;

    max-width: 550px;
    min-width: 330px;
    height: 100%;
    overflow-y: scroll;

    margin: 0 auto;

    border-right: 1px solid rgb(222, 226, 230);
    border-left: 1px solid rgb(222, 226, 230);
`;

export default function Layout({ children }) {
    const layoutRef = useRef(null);

    const dispatch = useDispatch();
    const clickInfoStore = useSelector(state => state.clickInfo)

    useEffect(() => {
        // console.log(layoutRef.current);
        dispatch(scrollElementSave(layoutRef.current));

    
    }, [dispatch]);

    return (
        <>
            <LayoutContainer id='topLayout' ref={layoutRef}>
                <Bi />
                {children}
            </LayoutContainer>
            <HamburgerMenuModal />
        </>
    );
}
