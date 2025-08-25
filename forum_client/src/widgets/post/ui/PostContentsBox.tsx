import React, { useLayoutEffect, useRef, useEffect } from 'react';
import PostHeader from '../../../entities/post/ui/PostHeader';
import UnifiedDivider from '../../../shared/ui/UnifiedDivider';
import ForumPost from '../../../entities/post/ui/ForumPost';
import { filteringPostOption, filterPostsByKeyword } from '../../../shared/lib/utils/util';
import { useSelector, useDispatch } from 'react-redux';
import { resetScrollLocation } from '../../../app/model/post/clickInfo';
import PostLoadingIndicator from '../../../shared/ui/PostLoadingIndicator';
import { useInfinitePosts } from '../../../shared/lib/hooks/usePosts';
import useSearchPosts from '../../../shared/lib/hooks/useSearchPosts';
import SearchBar from '../../../features/search/ui/SearchBar';
import type { RootState, AppDispatch } from '../../../app/model/store';

export default function PostContentsBox() {
  const clickInfoStore = useSelector((state: RootState) => state.clickInfo);
  const optionStore = useSelector((store: RootState) => store.filteringOption);
  const searchStore = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePosts(10);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const postsData = data ? data.pages.flatMap((p) => p.posts) : [];
  const { data: searchResults } = useSearchPosts(searchStore.keyword, searchStore.type);

  const displayPosts =
    searchStore.keyword.length >= 2
      ? searchResults || []
      : filterPostsByKeyword(
          filteringPostOption(postsData, optionStore.filteringOption),
          '',
          searchStore.type
        );

  useLayoutEffect(() => {
    if (clickInfoStore.touchedPostScrollY !== 0 && postsData.length > 0) {
      const rootEl = document.getElementById('topLayout');
      rootEl.scrollTo(0, clickInfoStore.touchedPostScrollY);
      dispatch(resetScrollLocation());
    }
  }, [clickInfoStore.touchedPostScrollY, postsData]);

  useEffect(() => {
    const target = observerRef.current;
    if (!target) return;
    const rootEl = document.getElementById('topLayout');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: rootEl, threshold: 1.0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // console.log(postInfoStore.latestPostData)

  return (
    <main>
      {/* <SearchBar /> */}
      <PostHeader />
      <UnifiedDivider $padding="0px 10px" $border="2px solid gray" $opacity="0.15" />
      {isLoading && postsData.length === 0 ? (
        <PostLoadingIndicator />
      ) : (
        <>
          {displayPosts.map((post) => (
            <ForumPost key={post.postId} post={post} />
          ))}
          <div ref={observerRef} />
          {isFetchingNextPage && <PostLoadingIndicator />}
        </>
      )}
    </main>
  );
}
