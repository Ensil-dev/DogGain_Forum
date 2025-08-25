import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import ProfileSetting from '../pages/ProfileSetting';
import History from '../pages/History';
import Bookmarks from '../pages/Bookmarks';
import AdminDashboard from '../pages/AdminDashboard';
import Layout from './Layout';
import SplashScreen from '../pages/SplashScreen';

export default function Router() {
    return (
        <HashRouter>
            <Suspense fallback={<SplashScreen />}>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/post' element={<Post />} />
                        <Route path='/post/:id' element={<Post />} />
                        <Route path='/profile' element={<ProfileSetting />} />
                        <Route path='/history' element={<History />} />
                        <Route path='/bookmarks' element={<Bookmarks />} />
                        <Route path='/admin' element={<AdminDashboard />} />
                    </Routes>
                </Layout>
            </Suspense>
        </HashRouter>
    );
}
