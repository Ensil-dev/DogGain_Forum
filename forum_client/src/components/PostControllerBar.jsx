import React from 'react';
import styled from 'styled-components';
import SelectedComponent from './SelectedComponent';
import UnifiedButton from './UnifiedButton';
import { categoryOptions, getNavigationBoxFontSize } from '../utils/util';
import { useDispatch } from 'react-redux';
import { postWritingModalChange } from '../redux/constants/constant';

const FilteringContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 1fr;

    height: 100%;
    margin-top: 10px;
    /* padding-top: 10px; */
    /* border: 5px solid black; */
`;

const SelectFilteringContainer = styled.div`
    font-size: ${(props) => props.fontSize};
    text-align: end;
    margin-right: 10px;
`;

export default function PostControllerBar() {
    const dispatch = useDispatch();

    const handlePostWritingTouched = () => {
        dispatch(postWritingModalChange());
    };

    return (
        <FilteringContainer>
            <SelectedComponent options={categoryOptions} />
            <SelectFilteringContainer fontSize={getNavigationBoxFontSize('writeBox')}>
                <UnifiedButton $onClick={handlePostWritingTouched} text='✚ 글쓰기' $backgroundColor='#E9E9E9' $padding='6px 12px' $radius='6px' $fontSize='18px' $fontWeight='larger' $color='orange'></UnifiedButton>
            </SelectFilteringContainer>
        </FilteringContainer>
    );
}
