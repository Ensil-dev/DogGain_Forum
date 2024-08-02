import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopicList = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TopicListHeader = styled.thead`
    background-color: #f9f9f9;
    th {
        padding: 10px;
        text-align: left;
    }
`;

const TopicListBody = styled.tbody``;

const TopicListRow = styled.tr`
    border-bottom: 1px solid #ddd;
`;

const TopicListData = styled.td`
    padding: 10px;
    &.main-link {
        width: 60%;
    }
    &.posters {
        display: flex;
        align-items: center;
    }
    &.num {
        text-align: center;
    }
`;

const LinkTopLine = styled.span`
    display: block;
`;

const Title = styled.a`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const BadgeCategoryWrapper = styled.a`
    display: inline-block;
    padding: 2px 5px;
    border-radius: 3px;
    color: ${(props) => props.textColor || '#fff'};
    background-color: ${(props) => props.color || '#333'};
`;

const BadgeCategoryName = styled.span`
    margin-left: 5px;
`;

const Posters = styled.div`
    display: flex;
    img {
        border-radius: 50%;
        margin-right: 5px;
    }
`;

const PostActivity = styled.a`
    color: #888;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const TopicListComponent = () => (
    <Container>
        <TopicList>
            <TopicListHeader>
                <tr>
                    <th className='default'>글</th>
                    <th className='posters'>게시자</th>
                    <th className='posts'>댓글</th>
                    <th className='views'>조회수</th>
                    <th className='activity'>활동</th>
                </tr>
            </TopicListHeader>
            <TopicListBody>
                <TopicListRow>
                    <TopicListData className='main-link'>
                        <LinkTopLine>
                            <Title href='#'>스타벅스 벤티 가격 6천 원 훌쩍…내달 2일부터 가격 인상</Title>
                        </LinkTopLine>
                        <BadgeCategoryWrapper href='#' color='#0E76BD' textColor='#FFFFFF'>
                            <BadgeCategoryName>자유포럼 💬</BadgeCategoryName>
                        </BadgeCategoryWrapper>
                    </TopicListData>
                    <TopicListData className='posters'>
                        <Posters>
                            <img src='/forum/user_avatar/1yp82.png' alt='user1' width='24' height='24' />
                            <img src='/forum/letter_avatar_proxy/2.png' alt='user2' width='24' height='24' />
                            <img src='/forum/letter_avatar_proxy/x.png' alt='user3' width='24' height='24' />
                        </Posters>
                    </TopicListData>
                    <TopicListData className='num posts'>16</TopicListData>
                    <TopicListData className='num views'>2.6천</TopicListData>
                    <TopicListData className='num activity'>
                        <PostActivity href='#'>14시간</PostActivity>
                    </TopicListData>
                </TopicListRow>
                {/* Add more rows as needed */}
            </TopicListBody>
        </TopicList>
    </Container>
);

export default TopicListComponent;
