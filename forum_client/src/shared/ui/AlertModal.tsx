import { useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnClickOutside from '../lib/hooks/useOnClickOutside';
import UnifiedButton from './UnifiedButton';
import { UI } from '../config/constants/common';

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
    z-index: ${UI.Z_INDEX_MODAL};
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
    max-width: ${UI.MODAL_MAX_WIDTH};
    text-align: center;
`;

interface AlertModalProps {
    message: string;
    onClose: () => void;
    buttonText?: string;
}

export default function AlertModal({ message, onClose, buttonText = '확인' }: AlertModalProps) {
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, onClose);
    const theme = useTheme();

    return (
        <Backdrop>
            <View ref={ref}>
                <div>{message}</div>
                <UnifiedButton
                    text={buttonText}
                    $backgroundColor={theme.primaryButtonBackground}
                    $color={theme.primaryButtonTextColor}
                    $padding="8px"
                    $onClick={onClose}
                />
            </View>
        </Backdrop>
    );
}
