import React from 'react';
import styled from 'styled-components';
import Bi from './components/Bi';
import ForumMain from './components/ForumMain';
import { HamburgerMenuModal } from './components/HamburgerMenuModal';

const ForumContainer = styled.div`
    max-width: 550px;
    min-width: 330px;
    height: 100vh;

    margin: 0 auto;
    overflow: scroll;

    /* border: 1px solid lightgray; */
    /* border-bottom: 1px solid lightgray; */
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
`;
function App() {
    // const [isHide, setIsHide] = useState(false);

    return (
        <>
            <ForumContainer className='forum'>
                <Bi />
                <ForumMain />
            </ForumContainer>
            <HamburgerMenuModal />
        </>
    );
}

export default App;
