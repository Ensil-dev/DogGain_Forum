import React from 'react';
import styled from 'styled-components';

const TableHeader = styled.thead`
    /* grid-template-columns: '1fr 1fr 1fr 1fr'; */
    background-color: #f8f9fa; /* 헤더의 배경색을 설정 */
`;

const HeaderRow = styled.tr`
    display: flex;
    flex-grow: 3;

`;

const HeaderCell = styled.th`
    padding: 10px;
    text-align: left;
    font-weight: bold;
    &.sortable {
        cursor: pointer;
    }
    &[aria-pressed='true'] {
        background-color: #e9ecef;
    }
`;

export default function TopicListHeader() {
    return (
        <TableHeader className='topic-list-header'>
            <HeaderRow>
                <HeaderCell data-sort-order='default' className='default topic-list-data' scope='col'>
                    <span>글</span>
                </HeaderCell>
                <HeaderCell data-sort-order='posters' className='posters topic-list-data' scope='col' aria-label='게시자'>
                    <span></span>
                </HeaderCell>
                <HeaderCell data-sort-order='posts' className='posts sortable num topic-list-data' scope='col' aria-label='댓글별 정렬' tabIndex='0' role='button' aria-pressed='false'>
                    <span>댓글</span>
                </HeaderCell>
                <HeaderCell data-sort-order='views' className='views sortable num topic-list-data' scope='col' aria-label='조회수별 정렬' tabIndex='0' role='button' aria-pressed='false'>
                    <span>조회수</span>
                </HeaderCell>
                <HeaderCell data-sort-order='activity' className='activity sortable num topic-list-data' scope='col' aria-label='활동별 정렬' tabIndex='0' role='button' aria-pressed='false'>
                    <span>활동</span>
                </HeaderCell>
            </HeaderRow>
        </TableHeader>
    );
}
