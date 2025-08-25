import React from 'react';
import Router from '../../shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { STALE_TIME } from '../../shared/config/constants/staleTime';
import useInAppBrowserRedirect from '../../shared/lib/hooks/useInAppBrowserRedirect';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import type { RootState } from '../model/store';
import themes from '../../shared/ui/styles/themes';
import { GlobalStyle } from '../../shared/ui/styles/style';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: STALE_TIME.DEFAULT, // 기본 10초 간 데이터 신선도 유지
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        },
    },
});

function App() {
    useInAppBrowserRedirect();
    const isDarkMode = useSelector((state: RootState) => state.mode.isDarkMode);
    const theme = isDarkMode ? themes.dark : themes.light;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
