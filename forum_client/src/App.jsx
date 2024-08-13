// eslint-disable-next-line no-unused-vars
import React, { StrictMode, useEffect, useState } from 'react';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import SplashScreen from './pages/SplashScreen';

const queryClient = new QueryClient();

function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Set a timeout to hide the splash screen after 2 seconds
        const timeout = setTimeout(() => {
            setShowSplash(false);
        }, 1500); // 1500ms = 1.5 seconds

        // Cleanup the timeout on component unmount
        return () => clearTimeout(timeout);
    }, []);

    return (
        // <StrictMode>
        <QueryClientProvider client={queryClient}>{showSplash ? <SplashScreen /> : <Router />}</QueryClientProvider>
        // </StrictMode>
    );
}

export default App;
