import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    base: '/DogGain_Forum/',
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id: string) {
                    if (id.includes('node_modules')) {
                        return id.split('node_modules/')[1].split('/')[0];
                    }
                },
            },
        },
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
    },
});
