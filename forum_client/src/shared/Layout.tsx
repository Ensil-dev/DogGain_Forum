import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bi from '../widgets/navigation/ui/Bi';
import { HamburgerMenuModal } from '../widgets/navigation/ui/HamburgerMenuModal';
import SearchModal from '../features/search/ui/SearchModal';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/model/store';
import { scrollElementSave } from '../app/model/post/clickInfo';
import { PostWritingModal } from '../features/post/ui/PostWritingModal';

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
    width: 100%;

    margin: 0 auto;

    background-color: ${(props) => props.theme.containerBackground};
    color: ${(props) => props.theme.containerText};
    border-right: 1px solid ${(props) => props.theme.borderColor};
    border-left: 1px solid ${(props) => props.theme.borderColor};
`;

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const layoutRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useDispatch<AppDispatch>();
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
            <SearchModal />
            <ToastContainer position='bottom-center' autoClose={1200} />
        </>
    );
}
