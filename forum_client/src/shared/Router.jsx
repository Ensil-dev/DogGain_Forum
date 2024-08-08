import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Layout from './Layout';

export default function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/post' element={<Post />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
