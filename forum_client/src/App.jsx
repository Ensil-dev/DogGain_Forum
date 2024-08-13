import React, { StrictMode } from 'react';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        // <StrictMode>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        // </StrictMode>
    );
}

export default App;
