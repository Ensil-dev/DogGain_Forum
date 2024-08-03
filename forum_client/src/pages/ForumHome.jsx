import React from 'react';
import styled from 'styled-components';
import Bi from '../components/Bi';
import ForumMain from '../components/ForumMain';

const ForumContainer = styled.div`
    max-width: 550px;
    min-width: 330px;
    height: 100vh;

    margin: 0 auto;
    overflow: scroll;

    border: 1px solid lightgray;
`;

export default function ForumHome() {
    return (
        <ForumContainer>
            <Bi />
            <ForumMain />
        </ForumContainer>
    );
}
