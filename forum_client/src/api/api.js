// MacBookAirM1
// export const POST_URL = 'http://192.168.0.13:3000/mockData/post.json'

import { collection, getDocs } from 'firebase/firestore';
import { postsSortedByLatest } from '../utils/util';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { latestPostDataSave } from '../redux/constants/constant';

// MacBookM1Pro14
export const DEV_POST_URL = 'http://192.168.0.49:3000/mockData/post.json';
// export const DEV_POST_URL = undefined
export const PRODUCTION_POST_URL = 'https://Ensil-dev.github.io/DogGain_Forum/forum_client/public/mockData/post.json';

export const PUBLIC_URL = 'http://192.168.0.49:3000/';

export const fetchPosts = async () => {
    const response = await fetch(DEV_POST_URL || PRODUCTION_POST_URL);
    const data = await response.json();
    return postsSortedByLatest(data);
};
// GET: 전체 posts 데이터
// export async function getPosts(dispatch) {
//     const data = await getDocs(collection(db, 'posts')); // create라는 collection 안에 모든 document를 읽어올 때 사용한다.
//     const newData = data.docs.map((doc) => ({ ...doc.data() }));
//     console.log(newData);
//     console.log(typeof newData);

//     dispatch(latestPostDataSave(newData));
// }
