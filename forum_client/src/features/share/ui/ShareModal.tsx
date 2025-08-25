import React, { useState, useEffect, useRef, ReactElement } from 'react';
import styled, { useTheme } from 'styled-components';
import { SiKakaotalk } from 'react-icons/si';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { MdSms } from 'react-icons/md';
import UnifiedButton from '../../../shared/ui/UnifiedButton';
import useOnClickOutside from '../../../shared/lib/hooks/useOnClickOutside';
import { UI } from '../../../shared/config/constants/common';

const Backdrop = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1200;
`;

const View = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.containerText};
    border-radius: 16px;
    padding: 24px;
    width: 90%;
    max-width: 500px;
`;


const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
`;

const ShareButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
`;

const IconWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 4px;
    background-color: ${(props) => props.$bgColor || '#f1f1f1'};
`;

const Label = styled.span`
    font-size: 14px;
`;

const UrlInput = styled.input`
    margin-top: 20px;
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
`;

const Guide = styled.div`
    margin-top: 8px;
    font-size: 12px;
    color: ${UI.COLOR_PRIMARY_GRAY};
`;

const CopyMsg = styled.div`
    margin-top: 4px;
    font-size: 12px;
    color: green;
`;

const BottomBtn = styled.button`
    margin-top: 24px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;

const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;

interface ShareModalProps {
    title?: string;
    description?: string;
    url?: string;
    trigger?: ReactElement;
}

export default function ShareModal({ title, description, url, trigger }: ShareModalProps) {
    const [open, setOpen] = useState(false);
    const [kakaoReady, setKakaoReady] = useState(false);
    const [error, setError] = useState('');
    const [copyMsg, setCopyMsg] = useState('');
    const ref = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setOpen(false));

    const shareUrl = url || window.location.href;

    useEffect(() => {
        const init = () => {
            try {
                if (!window.Kakao.isInitialized()) {
                    window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
                }
                setKakaoReady(true);
            } catch (e) {
                setError('Kakao SDK 초기화 실패');
            }
        };

        if (window.Kakao) {
            init();
        } else {
            const script = document.createElement('script');
            script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
            script.onload = init;
            script.onerror = () => setError('Kakao SDK 로딩 실패');
            document.head.appendChild(script);
        }
    }, []);

    const shareKakao = () => {
        if (!kakaoReady) {
            setError('카카오톡을 사용할 수 없습니다');
            return;
        }
        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: title,
                description: description,
                imageUrl: `${window.location.origin}/logo192.png`,
                link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
                },
            ],
        });
    };

    const copyUrl = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopyMsg('복사되었습니다');
            setTimeout(() => setCopyMsg(''), UI.COPY_MSG_DURATION_MS);
        } catch (e) {
            setCopyMsg('복사 실패');
        }
    };

    useEffect(() => {
        if (!open) return;
        const focusable = ref.current.querySelectorAll('button, input, a');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const handleKey = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        first.focus();
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [open]);

    const theme = useTheme();

    const triggerElement = trigger
        ? React.cloneElement(trigger, { onClick: () => setOpen(true) })
        : (
              <UnifiedButton
                  text='공유하기'
                  $padding='4px 8px'
                  $backgroundColor={theme.buttonBackground}
                  $color={theme.buttonTextColor}
                  $radius='6px'
                  $fontSize='small'
                  $onClick={() => setOpen(true)}
              />
          );

    return (
        <div>
            {triggerElement}
            {open && (
                <Backdrop>
                    <View ref={ref}>
                        <Title>공유하기</Title>
                        <Buttons>
                            <ShareButton onClick={shareKakao} disabled={!kakaoReady} aria-label='kakao'>
                                <IconWrap $bgColor='#FFE812'>
                                    <SiKakaotalk size={28} color='#000000' />
                                </IconWrap>
                                <Label>카카오톡</Label>
                            </ShareButton>
                            <ShareButton as='a' href={`sms:?body=${encodeURIComponent(shareUrl)}`} aria-label='sms'>
                                <IconWrap $bgColor='#CCE5FF'>
                                    <MdSms size={28} color='#555555' />
                                </IconWrap>
                                <Label>메시지</Label>
                            </ShareButton>
                            <ShareButton as='a' href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target='_blank' rel='noopener noreferrer' aria-label='facebook'>
                                <IconWrap $bgColor='#3b5998'>
                                    <FaFacebookF size={28} color='#ffffff' />
                                </IconWrap>
                                <Label>페이스북</Label>
                            </ShareButton>
                            <ShareButton as='a' href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`} target='_blank' rel='noopener noreferrer' aria-label='twitter'>
                                <IconWrap $bgColor='#1da1f2'>
                                    <FaTwitter size={28} color='#ffffff' />
                                </IconWrap>
                                <Label>트위터</Label>
                            </ShareButton>
                        </Buttons>
                        <UrlInput value={shareUrl} onClick={copyUrl} readOnly />
                        <Guide>위 URL을 짧게 누르시면 복사하실 수 있습니다.</Guide>
                        {copyMsg && <CopyMsg>{copyMsg}</CopyMsg>}
                        {error && <CopyMsg style={{ color: 'red' }}>{error}</CopyMsg>}
                        <BottomBtn onClick={() => setOpen(false)}>닫기</BottomBtn>
                    </View>
                </Backdrop>
            )}
        </div>
    );
}
