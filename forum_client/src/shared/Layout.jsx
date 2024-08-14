import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Bi from '../components/Bi';
import { HamburgerMenuModal } from '../components/HamburgerMenuModal';
import { useDispatch } from 'react-redux';
import { scrollElementSave } from '../redux/constants/constant';
import { PostWritingModal } from '../components/PostWritingModal';

export const LayoutContainer = styled.div`
    position: relative;

    max-width: 550px;

    @media screen and (min-width: 550px) {
        // 너비가 550px보다 클 때 적용할 CSS
        /* background-color: black; */
    }

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
    // const clickInfoStore = useSelector(state => state.clickInfo)

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
            <PostWritingModal />
        </>
    );
}
