// MacBookAirM1
// export const POST_URL = 'http://192.168.0.13:3000/mockData/post.json'

import { postsSortedByLatest } from '../utils/util';

// MacBookM1Pro14
export const POST_URL = 'http://192.168.0.40:3000/mockData/post.json';

export const fetchPosts = async () => {
    const response = await fetch(POST_URL);
    const data = await response.json();
    return postsSortedByLatest(data);
};
