import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Layout from './Layout';
import ScrollToInitialRender from '../components/ScrollToInitialRender';
import SplashScreen from '../pages/SplashScreen';

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<SplashScreen />}>
                <Layout>
                    <ScrollToInitialRender />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/post' element={<Post />} />
                        <Route path='/post/:id' element={<Post />} />
                    </Routes>
                </Layout>
            </Suspense>
        </BrowserRouter>
    );
}
