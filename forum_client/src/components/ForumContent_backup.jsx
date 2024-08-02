import React from 'react';
import styled from 'styled-components';

const TableRow = styled.tr`
    &.unseen-topic {
        /* Add any specific styles for unseen-topic if necessary */
    }
    &.last-visit {
        /* Add any specific styles for last-visit if necessary */
    }
`;

const MainLinkTd = styled.td`
    &.main-link {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1em;
    }
`;

const LinkTopLine = styled.span`
    display: flex;
    align-items: center;
`;

const TitleLink = styled.a`
    font-size: 1.2em;
    font-weight: bold;
    color: #000;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const BadgeNotification = styled.a`
    margin-left: 5px;
`;

const LinkBottomLine = styled.div`
    display: flex;
    align-items: center;
`;

const CategoryLink = styled.a`
    display: inline-block;
    padding: 0.2em 0.4em;
    background-color: var(--category-badge-color, #0e76bd);
    color: var(--category-badge-text-color, #ffffff);
    border-radius: 3px;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
`;

// const PostersTd = styled.td`
//     display: flex;
//     align-items: center;
// `;

// const AvatarLink = styled.a`
//     margin-right: 5px;

//     &.latest {
//         /* Add any specific styles for the latest poster if necessary */
//     }
// `;

const PostCountTd = styled.td`
    text-align: center;
`;

const PostCountButton = styled.button`
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const ViewsTd = styled.td`
    text-align: center;
`;

const ActivityTd = styled.td`
    text-align: center;
`;

const RelativeDate = styled.span`
    color: #6c757d;
`;

export default function ForumContent({ topic }) {
    return (
        <TableRow data-topic-id={topic.id} id={topic.rowId} className={`topic-list-item category-${topic.category} ${topic.additionalClasses} ember-view`}>
            <MainLinkTd className='main-link clearfix topic-list-data' colspan='1'>
                <LinkTopLine>
                    <TitleLink href={topic.topicLink} role='heading' aria-level='2' className='title raw-link raw-topic-link' data-topic-id={topic.id}>
                        {topic.title}
                    </TitleLink>
                    <BadgeNotification href={topic.topicLink} className='badge badge-notification new-topic' title='새 주제' aria-label='새 주제'></BadgeNotification>
                </LinkTopLine>
                <LinkBottomLine>
                    <CategoryLink className='badge-category__wrapper' style={{ '--category-badge-color': topic.categoryColor, '--category-badge-text-color': topic.categoryTextColor }} href={topic.categoryLink}>
                        <span data-category-id={topic.categoryId} data-drop-close='true' className='badge-category' title={topic.categoryTitle}>
                            <span className='badge-category__name'>{topic.categoryName}</span>
                        </span>
                    </CategoryLink>
                </LinkBottomLine>
            </MainLinkTd>

            <PostCountTd className='num posts-map posts  topic-list-data' title={`This topic has ${topic.replyCount} replies`}>
                <PostCountButton className='btn-link posts-map badge-posts' aria-label={`This topic has ${topic.replyCount} replies`}>
                    <span className='number'>{topic.replyCount}</span>
                </PostCountButton>
            </PostCountTd>
            <ViewsTd className='num views heatmap-low topic-list-data'>
                <span className='number' title={`이 주제는 ${topic.views}번 조회되었습니다`}>
                    {topic.views}
                </span>
            </ViewsTd>
            <ActivityTd className='num topic-list-data age activity' title={`Created: ${topic.created} 최근: ${topic.lastActivity}`}>
                <a className='post-activity' href={topic.lastActivityLink}>
                    <RelativeDate className='relative-date' data-time={topic.lastActivityTime} data-format='tiny'>
                        {topic.relativeTime}
                    </RelativeDate>
                </a>
            </ActivityTd>
        </TableRow>
    );
}
