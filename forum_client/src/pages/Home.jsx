import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { darkmodeChange, hamburgerModalChange } from '../redux/constants/constant';
import { setContainerContentBox } from '../utils/util';
import { useEffect, useState } from 'react';

import { db } from '../../src/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

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

const mainContainerBox = ['Navigation', 'PostControllerBar', 'PostContentsBox'];

export default function Home() {
    const dispatch = useDispatch();

    const [test, setTest] = useState();

    // async - await로 데이터 fetch 대기
    async function getTest() {

        console.log('firebase: getTest!')

        // document에 대한 참조 생성
        const docRef = doc(db, 'posts', 'IAIK8aoKmZPNkndhxk4g');
        
        // 참조에 대한 Snapshot 쿼리
        const docSnap = await getDoc(docRef);

        console.log(docSnap.data())

        if (docSnap.exists()) {
            setTest(docSnap.data());
        }
    }

    // GET: 전체 posts 데이터
    async function fetchData() {  
        const data = await getDocs(collection(db, "posts")); // create라는 collection 안에 모든 document를 읽어올 때 사용한다.
        const newData = data.docs.map(doc => ({ ...doc.data()}));
        console.log(newData);
      }


    // 최초 마운트 시에 getTest import
    useEffect(() => {
        getTest();
        fetchData()
    }, []);

    // const clickInfoStore = useSelector((state) => state.clickInfo);
    // const Store = useSelector((state) => state);
    // console.log(Store)

    // useEffect(() => {
    //     console.log('Home.jsx is rendering');
    //     console.log(clickInfoStore);
    // }, [clickInfoStore]);

    // const ReduxStore = useSelector(state => state.module)
    const handleClickModeButton = () => {
        // dispatch의 인자로 Action creator 사용
        dispatch(darkmodeChange());
        // console.log(`modeStore.isDarkMode: ${modeStore.isDarkMode}`);
    };

    const handleHamburgerMenuModal = () => {
        dispatch(hamburgerModalChange());
    };

    return (
        <MainContainer>
            {mainContainerBox.map((container) => {
                return <ContainerBox key={container}>{setContainerContentBox(container, handleClickModeButton, handleHamburgerMenuModal)}</ContainerBox>;
            })}
        </MainContainer>
    );
}
