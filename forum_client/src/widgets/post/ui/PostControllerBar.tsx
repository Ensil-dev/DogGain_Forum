import React from 'react';
import styled, { useTheme } from 'styled-components';
import SelectedComponent from '../../../features/post/ui/SelectedComponent';
import UnifiedButton from '../../../shared/ui/UnifiedButton';
import { categoryOptions, getNavigationBoxFontSize } from '../../../shared/lib/utils/util';
import { useDispatch, useSelector } from 'react-redux';
import { postWritingModalChange } from '../../../app/model/ui/modal';
import type { RootState, AppDispatch } from '../../../app/model/store';

const FilteringContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;

    height: 100%;
    margin-top: 10px;
`;

const SelectFilteringContainer = styled.div`
    font-size: ${(props) => props.fontSize};
    text-align: end;
    margin-right: 10px;
    background-color: ${(props) => props.theme.writeContainerBackground};
    color: ${(props) => props.theme.writeContainerText};
`;

export default function PostControllerBar() {
    const loginStore = useSelector((state: RootState) => state.userInfo);
    const dispatch = useDispatch<AppDispatch>();
    const theme = useTheme();

    const handlePostWritingTouched = () => {
        dispatch(postWritingModalChange());
    };

    return (
        <FilteringContainer>
            <SelectedComponent options={categoryOptions} />
            <SelectFilteringContainer fontSize={getNavigationBoxFontSize('writeBox')}>
                {loginStore.loginUser && (
                    <UnifiedButton
                        $onClick={handlePostWritingTouched}
                        text='✚ 글쓰기'
                        $padding='6px 12px'
                        $radius='6px'
                        $fontSize='18px'
                        $fontWeight='larger'
                        $backgroundColor={theme.writeButtonBgColor}
                        $color={theme.writeButtonTextColor}
                    ></UnifiedButton>
                )}
            </SelectFilteringContainer>
        </FilteringContainer>
    );
}
