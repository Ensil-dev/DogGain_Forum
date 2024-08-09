import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Layout from './Layout';
// import ScrollToInitialRender from '../components/ScrollToInitialRender';

export default function Router() {
    return (
        <BrowserRouter>
            {/* <ScrollToInitialRender /> */}
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/post' element={<Post />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
