import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/model/store';
import { hamburgerModalChange } from '../app/model/ui/modal';
import { setContainerContentBox } from '../shared/lib/utils/util';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;

    /* border: 3px solid gray; */
`;

const ContainerBox = styled.div`
    // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.

    height: 40px;
`;

const mainContainerBox = ['Navigation', 'PostDetail'];

export default function Post() {

    const dispatch = useDispatch<AppDispatch>();

    const handleHamburgerMenuModal = () => {
        dispatch(hamburgerModalChange());
    };

    return (
        <MainContainer>
            {mainContainerBox.map((container) => {
                return (
                    <ContainerBox key={container}>
                        {setContainerContentBox(container, handleHamburgerMenuModal)}
                    </ContainerBox>
                );
            })}
        </MainContainer>
    );
}
