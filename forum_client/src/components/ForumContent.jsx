import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    padding: 12px 10px;
`;

const GridContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: 1fr 6fr;
`;

const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    padding: 0px 10px
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px; /* 추가된 스타일로 행 간의 간격을 둠 */
`;

export default function ForumContent({ topic }) {
    return (
        <Container>
            <GridContainer>
                <Profile>Profile</Profile>
                <Content>
                    <Row>
                        <span>Title</span>
                        <span>Comment count</span>
                    </Row>
                    <Row>
                        <span>Category</span>
                        <span>Time</span>
                    </Row>
                </Content>
            </GridContainer>
        </Container>
    );
}
