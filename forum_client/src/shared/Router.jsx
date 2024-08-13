import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Layout from './Layout';
import ScrollToInitialRender from '../components/ScrollToInitialRender';
import { HamburgerMenuModal } from '../components/HamburgerMenuModal';
import { PostWritingModal } from '../components/PostWritingModal';

export default function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <ScrollToInitialRender />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/post' element={<Post />} />
                    <Route path='/post/:id' element={<Post />} />
                </Routes>
                <HamburgerMenuModal />
                <PostWritingModal />
            </Layout>
        </BrowserRouter>
    );
}
