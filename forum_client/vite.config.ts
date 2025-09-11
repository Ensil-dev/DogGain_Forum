import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => ({
    // 환경변수로 base path 결정: Docker용은 /, GitHub Pages용은 /DogGain_Forum/
    base: command === 'build' && process.env.BUILD_TARGET !== 'docker' ? '/DogGain_Forum/' : '/',
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
}));
