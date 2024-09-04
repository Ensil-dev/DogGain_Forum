import React from 'react';
import styled from 'styled-components';
import UnifiedButton from './UnifiedButton';
import { useNavigate } from 'react-router-dom';

const BiContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;
`;

const LoginMessage = styled.div`
    font-size: small;
    padding-right: 24px;
`;

export default function Bi() {



    const navigate = useNavigate();
    const handleBiButtonTouched = () => {
        navigate('/', { replace: true });
        window.location.reload();
    };

    return (
        <BiContainer>
            <UnifiedButton text='DogGain' $onClick={handleBiButtonTouched}></UnifiedButton>
            {/* <LoginMessage>안녕하세요 xxx님!</LoginMessage> */}
            {/* <div style={{paddingRight: '24px'}}>
                <img src={'https://ensil-dev.github.io/DogGain_Forum/logo512.png'} alt='🐬' style={{ width: '40px', height: '40px', borderRadius: '10px' }} />{' '}
            </div> */}
        </BiContainer>
    );
}
