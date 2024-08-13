import React from 'react';
import styled from 'styled-components';
import SelectedComponent from './SelectedComponent';
import UnifiedButton from './UnifiedButton';
import { getNavigationBoxFontSize } from '../utils/util';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/constants/constant';

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
    const addPostDispatch = useDispatch();

    const exampleObj = {
        postId: '22222',
        profile: {
            nickname: '춤추는 벨루가',
        },
        title: '잠실구장에서 처음 야구보는데 꿀팁이나 준비물 있을까요?',
        category: {
            id: '5',
            name: '🟠 자유포럼🗽',
        },
        content:
            '잠실구장에서 처음 야구보는데 8월이라 날도 덥고 걱정이 많이 되네요..! 많은 꿀팁 공유 부탁드려요!',
        comments: 6,
        created: '24/08/13/18:35',
    };

    const options = [
        { value: '최신', label: '최신' },
        { value: '자유포럼', label: '자유포럼' },
        { value: '지름후기', label: '지름후기' },
        { value: '핫딜공유', label: '핫딜공유' },
        { value: '꿀팁공유', label: '꿀팁공유' },
        { value: '공지사항', label: '공지사항' },
    ];

    return (
        <FilteringContainer>
            <SelectedComponent options={options} />
            <SelectFilteringContainer fontSize={getNavigationBoxFontSize('writeBox')}>
                <UnifiedButton
                    $onClick={() => addPostDispatch(addPost(exampleObj))}
                    text='✚ 글쓰기'
                    $backgroundColor='#E9E9E9'
                    $padding='6px 12px'
                    $radius='6px'
                    $fontSize='18px'
                    $fontWeight='larger'
                    $color='orange'
                ></UnifiedButton>
            </SelectFilteringContainer>
        </FilteringContainer>
    );
}
