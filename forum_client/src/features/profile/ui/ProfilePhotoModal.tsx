import React, { useRef } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../../shared/lib/hooks/useOnClickOutside';
import UnifiedButton from '../../../shared/ui/UnifiedButton';
import { createProfileImage } from '../../../shared/lib/utils/profileImage';
import { UI } from '../../../shared/config/constants/common';

const DEFAULT_LOGO_URL = 'https://ensil-dev.github.io/DogGain_Forum/logo192.png';

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
    z-index: ${UI.Z_INDEX_MENU};
`;

const View = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.containerText};
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 400px;

    @media (max-width: 550px) {
    gap: 2px;
    max-width: 250px;
  }
`;

const Input = styled.input`
    padding: 8px;
`;

const ImagePreview = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

interface ProfilePhotoModalProps {
    photoUrl: string;
    setPhotoUrl: (v: string) => void;
    defaultChar: string;
    setDefaultChar: (v: string) => void;
    bgColor: string;
    setBgColor: (v: string) => void;
    onPhotoUpdate: () => void;
    onDefaultPhoto: () => void;
    onLogoPhoto: () => void;
    onClose: () => void;
}

export default function ProfilePhotoModal({
    photoUrl,
    setPhotoUrl,
    defaultChar,
    setDefaultChar,
    bgColor,
    setBgColor,
    onPhotoUpdate,
    onDefaultPhoto,
    onLogoPhoto,
    onClose,
}: ProfilePhotoModalProps) {
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, onClose);

    return (
        <Backdrop>
            <View ref={ref}>
                <h3>프로필 사진 변경</h3>
                <ImagePreview
                    src={photoUrl || DEFAULT_LOGO_URL}
                    alt="profile preview"
                    referrerPolicy="no-referrer"
                />
                <Input
                    value={photoUrl}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhotoUrl(e.target.value)}
                    placeholder="사진 URL"
                />
                <UnifiedButton
                    text="URL 적용"
                    $backgroundColor={UI.COLOR_PRIMARY_GRAY}
                    $color="white"
                    $padding="8px"
                    $onClick={onPhotoUpdate}
                />

                <h3>1글자 프로필 사진 설정</h3>
                <ImagePreview
                    src={createProfileImage(defaultChar || ' ', bgColor)}
                    alt="letter preview"
                />
                <Input
                    value={defaultChar}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDefaultChar(e.target.value.slice(0, 1))}
                    placeholder="한 글자"
                />
                <input
                    type="color"
                    value={bgColor}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBgColor(e.target.value)}
                    style={{ width: '60px', height: '34px', padding: 0 }}
                />
                <UnifiedButton
                    text="기본 이미지 적용"
                    $backgroundColor={UI.COLOR_PRIMARY_GRAY}
                    $color="white"
                    $padding="8px"
                    $onClick={onDefaultPhoto}
                />

                <h3>기본 로고로 변경</h3>
                <ImagePreview src={DEFAULT_LOGO_URL} alt="logo preview" />
                <UnifiedButton
                    text="기본 로고 적용"
                    $backgroundColor={UI.COLOR_PRIMARY_GRAY}
                    $color="white"
                    $padding="8px"
                    $onClick={onLogoPhoto}
                />
            </View>
        </Backdrop>
    );
}
