import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../app/model/store';
import { updateProfile } from 'firebase/auth';
import { auth, db } from '../shared/api/firebase';
import { collection, doc, setDoc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { updateNicknameEverywhere } from '../shared/api/updateNickname';
import { saveLoginUser } from '../app/model/user/userInfo';
import UnifiedButton from '../shared/ui/UnifiedButton';
import AlertModal from '../shared/ui/AlertModal';
import { UI } from '../shared/config/constants/common';
import { createProfileImage } from '../shared/lib/utils/profileImage';
import ProfilePhotoModal from '../features/profile/ui/ProfilePhotoModal';
import { FcGoogle } from 'react-icons/fc';

const DEFAULT_LOGO_URL =
    'https://ensil-dev.github.io/DogGain_Forum/logo192.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 20px;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Input = styled.input`
    padding: 8px;
`;

const ImagePreview = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

const InfoRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export default function ProfileSetting() {
    const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState<string>(
        loginUser ? loginUser.displayName.split(' ')[0] : ''
    );
    const [photoUrl, setPhotoUrl] = useState<string>(loginUser?.photoURL || '');
    const [modalMessage, setModalMessage] = useState<string>('');
    const [defaultChar, setDefaultChar] = useState<string>(
        loginUser ? loginUser.displayName.charAt(0) : ''
    );
    const [bgColor, setBgColor] = useState<string>('#888888');
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
    const theme = useTheme();


    const showModal = (msg: string) => {
        setModalMessage(msg);
    };

    const handleNameUpdate = async () => {
        const trimmed = name.trim();
        if (trimmed.length < 2 || trimmed.length > 10) {
            showModal('프로필 이름은 2글자 이상 10글자 이하여야 합니다.');
            return;
        }
        try {
            if (auth.currentUser) {
                const uid = auth.currentUser.uid;
                const profiles = collection(db, 'userProfiles');
                const q = query(profiles, where('nickname', '==', trimmed));
                const snap = await getDocs(q);
                if (!snap.empty && snap.docs[0].id !== uid) {
                    showModal('이미 사용 중인 닉네임입니다.');
                    return;
                }
                const oldNickname = loginUser.displayName.split(' ')[0];
                await updateProfile(auth.currentUser, { displayName: trimmed });
                await updateNicknameEverywhere(uid, trimmed);
                await setDoc(doc(db, 'userProfiles', uid), { nickname: trimmed }, { merge: true });
                dispatch(saveLoginUser(auth.currentUser));
                showModal('프로필 이름이 변경되었습니다.');
            }
        } catch (err) {
            console.error(err);
            showModal('프로필 이름 변경에 실패했습니다.');
        }
    };

    const handlePhotoUpdate = async () => {
        const trimmed = photoUrl.trim();
        if (!trimmed) {
            showModal('사진 URL을 입력해주세요.');
            return;
        }
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { photoURL: trimmed });
                dispatch(saveLoginUser(auth.currentUser));
                showModal('프로필 사진이 변경되었습니다.');
            }
        } catch (err) {
            console.error(err);
            showModal(err?.message || '프로필 사진 변경에 실패했습니다.');
        }
    };

    const handleSetDefaultPhoto = async () => {
        const char = defaultChar.trim();
        if (!char) {
            showModal('한 글자를 입력해주세요.');
            return;
        }
        const dataUrl = createProfileImage(char[0], bgColor);
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { photoURL: dataUrl });
                dispatch(saveLoginUser(auth.currentUser));
                setPhotoUrl(dataUrl);
                showModal('기본 프로필 사진이 설정되었습니다.');
            }
        } catch (err) {
            console.error(err);
            showModal(err?.message || '기본 프로필 사진 설정에 실패했습니다.');
        }
    };

    const handleSetLogoPhoto = async () => {
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { photoURL: DEFAULT_LOGO_URL });
                dispatch(saveLoginUser(auth.currentUser));
                setPhotoUrl(DEFAULT_LOGO_URL);
                showModal('기본 로고로 변경되었습니다.');
            }
        } catch (err) {
            console.error(err);
            showModal(err?.message || '기본 로고 변경에 실패했습니다.');
        }
    };

    if (!loginUser) return <div style={{ padding: '20px' }}>로그인이 필요합니다.</div>;

    return (
        <main>
            <Container>
                <h2>프로필 설정</h2>

                <Section>
                    <h3>구글 계정</h3>
                    <InfoRow>
                        <FcGoogle size={20} />
                        <span>{loginUser.email}</span>
                    </InfoRow>
                </Section>

                <Section>
                    <UnifiedButton
                        text='프로필 사진 변경'
                        $backgroundColor={theme.primaryButtonBackground}
                        $color={theme.primaryButtonTextColor}
                        $padding='8px'
                        $onClick={() => setIsPhotoModalOpen(true)}
                    />
                </Section>

                <Section>
                    <h3>닉네임 변경</h3>
                    <p>현재 닉네임: {loginUser.displayName.split(' ')[0]}</p>
                    <Input
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                        placeholder='새 프로필 이름 (2~10자)'
                    />
                    <UnifiedButton
                        text='변경'
                        $backgroundColor={theme.primaryButtonBackground}
                        $color={theme.primaryButtonTextColor}
                        $padding='8px'
                        $onClick={handleNameUpdate}
                    />
                </Section>
            </Container>
            {modalMessage && (
                <AlertModal
                    message={modalMessage}
                    onClose={() => setModalMessage('')}
                />
            )}
            {isPhotoModalOpen && (
                <ProfilePhotoModal
                    photoUrl={photoUrl}
                    setPhotoUrl={setPhotoUrl}
                    defaultChar={defaultChar}
                    setDefaultChar={setDefaultChar}
                    bgColor={bgColor}
                    setBgColor={setBgColor}
                    onPhotoUpdate={handlePhotoUpdate}
                    onDefaultPhoto={handleSetDefaultPhoto}
                    onLogoPhoto={handleSetLogoPhoto}
                    onClose={() => setIsPhotoModalOpen(false)}
                />
            )}
        </main>
    );
}
