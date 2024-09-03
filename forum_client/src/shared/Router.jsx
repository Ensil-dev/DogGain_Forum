import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Layout from './Layout';
import SplashScreen from '../pages/SplashScreen';

export default function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<SplashScreen />}>
                <Layout>
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
