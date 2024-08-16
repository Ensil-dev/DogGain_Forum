// MacBookAirM1
// export const POST_URL = 'http://192.168.0.13:3000/mockData/post.json'

import { postsSortedByLatest } from '../utils/util';

// MacBookM1Pro14
export const DEV_POST_URL = 'http://192.168.0.40:3000/mockData/post.json';
// export const DEV_POST_URL = undefined
export const PRODUCTION_POST_URL = 'https://Ensil-dev.github.io/DogGain_Forum/forum_client/public/mockData/post.json'

export const fetchPosts = async () => {
    const response = await fetch(DEV_POST_URL || PRODUCTION_POST_URL);
    const data = await response.json();
    return postsSortedByLatest(data);
};

export const PUBLIC_URL = 'http://192.168.0.40:3000/'