import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share';

const Container = styled.div`
    display: flex;
    gap: 8px;
`;

interface ShareProps {
    url?: string;
    title?: string;
    description?: string;
}

function KakaoShareButton({ url, title, description }: ShareProps) {
    useEffect(() => {
        const kakaoInit = () => {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
            }
        };
        if (window.Kakao) {
            kakaoInit();
        } else {
            const script = document.createElement('script');
            script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
            script.onload = kakaoInit;
            document.head.appendChild(script);
        }
    }, []);

    const shareKakao = () => {
        if (!window.Kakao) return;
        const shareUrl = url || window.location.href;
        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: title,
                description: description,
                imageUrl: `${window.location.origin}/logo192.png`,
                link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                },
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl,
                    },
                },
            ],
        });
    };

    return (
        <button onClick={shareKakao}>카카오톡</button>
    );
}

export default function ShareButtons({ url, title, description }: ShareProps) {
    const shareUrl = url || window.location.href;

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl);
    };

    return (
        <Container>
            <KakaoShareButton url={shareUrl} title={title} description={description} />
            <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <button onClick={copyLink}>링크 복사</button>
        </Container>
    );
}
