import { useQuery } from 'react-query';
import type { Post } from '../../types';
import {
  collection,
  query,
  getDocs,
  orderBy,
  where,
  startAt,
  endAt,
  limit as fsLimit,
} from 'firebase/firestore';
import { db } from '../../api/firebase';
import { STALE_TIME } from '../../config/constants/staleTime';
// 검색 결과 후처리를 위한 유틸이 필요할 경우 활용합니다.

export default function useSearchPosts(
  keyword: string | undefined,
  type: 'title' | 'nickname' = 'title',
  limitCount = 20,
) {
  const lower = keyword?.trim().toLowerCase() || '';
  const tokens = lower.split(/\s+/).filter((t) => t);
  return useQuery<Post[]>(
    ['searchPosts', tokens.join(' '), type, limitCount],
    async () => {
      if (tokens.length === 0) return [];
      const col = collection(db, 'posts');
      let q;
      if (type === 'nickname') {
        q = query(
          col,
          orderBy('profile.nickname'),
          startAt(tokens[0]),
          endAt(tokens[0] + '\uf8ff'),
          fsLimit(limitCount)
        );
      } else if (tokens.length === 1) {
        q = query(
          col,
          where('keywords', 'array-contains', tokens[0]),
          orderBy('created', 'desc'),
          fsLimit(limitCount)
        );
      } else {
        q = query(
          col,
          where('keywords', 'array-contains-any', tokens),
          orderBy('created', 'desc'),
          fsLimit(limitCount)
        );
      }

      const snap = await getDocs(q);
      let posts: Post[] = snap.docs.map((d) => ({ ...(d.data() as Post), id: d.id }));
      if (type === 'nickname') {
        posts = posts.filter((p) =>
          tokens.every((t) => p.profile.nickname.toLowerCase().includes(t))
        );
        posts.sort((a, b) => b.created - a.created);
      }
      return posts;
    },
    {
      enabled: tokens.length > 0,
      staleTime: STALE_TIME.NONE,
    }
  );
}
