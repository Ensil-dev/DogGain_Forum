import React, { useEffect, useState } from 'react';
import Comments from '../../../features/comment/ui/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import {
  FaRegBookmark,
  FaBookmark,
  FaEye,
  FaRegComment,
  FaShareAlt,
} from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import ShareModal from '../../../features/share/ui/ShareModal';
import styled, { keyframes, css } from 'styled-components';
import { createProfileImage } from '../../../shared/lib/utils/profileImage';
import { postWritingModalChange } from '../../../app/model/ui/modal';
import { saveDetailPost } from '../../../app/model/post/detailPostInfo';
import { saveEditingPost } from '../../../app/model/post/postInfo';
import usePreventRefresh from '../../../shared/lib/hooks/usePreventRefresh';
import PostLoadingIndicator from '../../../shared/ui/PostLoadingIndicator';
import {
  usePostById,
  useDeletePost,
  useIncreaseView,
  useLikePost,
  useUnlikePost,
  useIsPostLiked,
} from '../../../shared/lib/hooks/usePosts';
import {
  useAddBookmark,
  useDeleteBookmark,
  useIsBookmarked,
} from '../../../shared/lib/hooks/useBookmarks';
import { VIEW } from '../../../shared/config/constants/common';
import AlertModal from '../../../shared/ui/AlertModal';
import ConfirmModal from '../../../shared/ui/ConfirmModal';
import { useRealtimePost } from '../../../shared/lib/hooks/useRealtimePost';
import { isAdminUser } from '../../../shared/lib/utils/admin';
import type { RootState, AppDispatch } from '../../../app/model/store';
import { triggerVibration } from 'src/shared/lib/utils/util';

const PostDetailContainer = styled.main`
  max-width: 680px;
  margin: 0 auto;
  padding: 0px 10px;
`;

const PostHeader = styled.header`
  padding-top: 10px;
`;

const Title = styled.h1`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.containerText};
  overflow-wrap: break-word;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background: #f2f2f2;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 6px;
  margin-right: 8px;
`;

const SubInfo = styled.div`
  font-size: 13px;
  color: #888;
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

const ControlButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #777;
  font-size: 15px;
`;

const PostBody = styled.article`
  padding: 30px 0;
  line-height: 1.7;
  font-family: 'Apple SD Gothic Neo', sans-serif;
  white-space: pre-wrap;
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
`;

const ActionButton = styled.div<{ $animate?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${shake} 0.3s;
    `};
`;

const ReactionCount = styled.span`
  font-size: 13px;
  color: #777;
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`;

const Divider = styled.hr`
  border: 1px solid #eee;
  margin: 0px 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
`;

const UserIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  color: #888;
`;

const MetaLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 12px;
`;

const IconButtons = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 12px;
`;

const LikeWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

const LikeCircle = styled.div<{ $animate?: boolean }>`
  width: 80px;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${shake} 0.3s;
    `};
`;

const LikeText = styled.span`
  font-size: 13px;
  color: ${({ $liked }) => ($liked ? 'blue' : 'inherit')};
`;

export default function PostDetail() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const detailPostStore = useSelector((state: RootState) => state.detailPostInfo);
  const loginStore = useSelector((state: RootState) => state.userInfo);

  const isAdmin = isAdminUser(loginStore.loginUser);

  usePreventRefresh();

  const { id: postId } = useParams<{ id: string }>();

  // console.log(postId);

  const {
    data: initialPost,
    isLoading,
    error,
  } = usePostById(postId);
  const realtimePost = useRealtimePost(postId, initialPost);
  const postDetailInfo = realtimePost || initialPost;

  const deleteMutation = useDeletePost();
  const increaseView = useIncreaseView();

  // 페이지 진입 시 최상단으로 스크롤 이동
  useEffect(() => {
    const el = document.getElementById('topLayout');
    if (el) {
      el.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (!postDetailInfo) return;
    const key = `view_${postDetailInfo.id}`;
    const last = localStorage.getItem(key);
    const now = Date.now();
    if (!last || now - Number(last) > VIEW.DUPLICATE_INTERVAL_12HOUR) {
      increaseView.mutate({ id: postDetailInfo.id });
      localStorage.setItem(key, String(now));
    }
  }, [postDetailInfo, increaseView]);

  const loginUserUid = loginStore.loginUser && loginStore.loginUser.uid;

  const likeMutation = useLikePost();
  const unlikeMutation = useUnlikePost();
  const { data: isLiked } = useIsPostLiked(postId, loginUserUid);
  const addBookmark = useAddBookmark();
  const deleteBookmark = useDeleteBookmark();
  const { data: isBookmarked } = useIsBookmarked(postId, loginUserUid);
  const [modalMessage, setModalMessage] = useState('');
  interface ConfirmConfig {
    action: 'delete' | 'edit';
    message: string;
  }
  const [confirmConfig, setConfirmConfig] = useState<ConfirmConfig | null>(null);
  const [bookmarkAnimate, setBookmarkAnimate] = useState(false);
  const [likeAnimate, setLikeAnimate] = useState(false);

  useEffect(() => {
    dispatch(saveDetailPost(postDetailInfo));
  }, [dispatch, postDetailInfo]);

  useEffect(() => {
    if (postDetailInfo) {
      const el = document.getElementById('topLayout');
      if (el) {
        el.scrollTo(0, 0);
      }
    }
  }, [postId]);

  const canControl =
    loginStore.loginUser &&
    (isAdmin || loginUserUid === postDetailInfo?.profile.uid);

  // console.log(postDetailInfo);

  const handleClickDeleteButton = () => {
    if (!canControl) return;
    setConfirmConfig({
      action: 'delete',
      message: '정말로 이 게시글을 삭제하시겠습니까?',
    });
  };

  const handleClickLikeButton = () => {
    if (!loginUserUid) {
      setModalMessage('로그인이 필요합니다.');
      return;
    }
    if (postDetailInfo) {
      setLikeAnimate(true);
      triggerVibration();
      if (isLiked) {
        unlikeMutation.mutate({ postId: postDetailInfo.id, uid: loginUserUid });
      } else {
        likeMutation.mutate({ postId: postDetailInfo.id, uid: loginUserUid });
      }
    }
  };

  const handleBookmarkClick = () => {
    if (!loginUserUid) {
      setModalMessage('로그인이 필요합니다.');
      triggerVibration();
      return;
    }
    if (postDetailInfo) {
      setBookmarkAnimate(true);
      if (isBookmarked) {
        deleteBookmark.mutate({ postId: postDetailInfo.id, uid: loginUserUid });
      } else {
        addBookmark.mutate({ postId: postDetailInfo.id, uid: loginUserUid });
      }
    }
  };

  const handleClickEditButton = () => {
    if (!canControl) return;
    setConfirmConfig({
      action: 'edit',
      message: '이 게시글을 수정하시겠습니까?',
    });
  };

  const handleConfirm = () => {
    if (!confirmConfig) return;
    if (confirmConfig.action === 'delete' && postDetailInfo) {
      deleteMutation.mutate(
        { id: postDetailInfo.id },
        {
          onSuccess: () => {
            navigate('/', { replace: true });
            setConfirmConfig(null);
            setModalMessage('삭제 완료했습니다!');
          },
        }
      );
    } else if (confirmConfig.action === 'edit') {
      dispatch(saveEditingPost(postDetailInfo));
      dispatch(postWritingModalChange());
      setConfirmConfig(null);
    }
  };

  const handleCancel = () => setConfirmConfig(null);

  if (isLoading) {
    return (
      <PostDetailContainer>
        <PostLoadingIndicator />
      </PostDetailContainer>
    );
  }

  if (error) {
    return (
      <PostDetailContainer>
        <p style={{ padding: '20px' }}>
          게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
        </p>
      </PostDetailContainer>
    );
  }

  if (!postDetailInfo) {
    return (
      <PostDetailContainer>
        <p style={{ padding: '20px' }}>게시글을 찾을 수 없습니다.</p>
      </PostDetailContainer>
    );
  }

  return (
    <PostDetailContainer>
      <>
        <PostHeader>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <Title>{postDetailInfo.title}</Title>
            <ControlButtons>
              {canControl && (
                <ControlButton onClick={handleClickEditButton}>
                  <FaEdit /> 수정
                </ControlButton>
              )}
              {canControl && (
                <ControlButton onClick={handleClickDeleteButton}>
                  <MdDeleteForever /> 삭제
                </ControlButton>
              )}
            </ControlButtons>
          </div>
        </PostHeader>

        <UserInfo>
          <UserIcon
            src={createProfileImage(
              postDetailInfo.profile.nickname?.charAt(0) || 'A',
              '#888888'
            )}
            alt=""
          />
          <span>{postDetailInfo.profile.nickname}</span>
        </UserInfo>

        <MetaRow>
          <MetaLeft>
            <span>{postDetailInfo.created}</span>
            <span>
              <FaEye /> {postDetailInfo.views ?? 0}
            </span>
            <span>
              <FaRegComment /> {postDetailInfo.comments}
            </span>
            <span>
              <AiOutlineLike /> {postDetailInfo.likesCount ?? 0}
            </span>
          </MetaLeft>
          <IconButtons>
            <ActionButton
              onClick={handleBookmarkClick}
              style={{ opacity: isBookmarked ? 0.5 : 1 }}
              $animate={bookmarkAnimate}
              onAnimationEnd={() => setBookmarkAnimate(false)}
            >
              {isBookmarked ? (
                <FaBookmark color="orange" />
              ) : (
                <FaRegBookmark />
              )}
            </ActionButton>
            <ShareModal
              title={postDetailInfo.title}
              description={postDetailInfo.content}
              trigger={
                <ActionButton>
                  <FaShareAlt />
                </ActionButton>
              }
            />
          </IconButtons>
        </MetaRow>

        <Divider />

        <PostBody>{postDetailInfo.content}</PostBody>

        <LikeWrapper>
          <LikeCircle
            onClick={handleClickLikeButton}
            style={{ opacity: isLiked ? 0.5 : 1 }}
            $animate={likeAnimate}
            onAnimationEnd={() => setLikeAnimate(false)}
          >
            {isLiked ? (
              <AiTwotoneLike color="blue" size={24} />
            ) : (
              <AiOutlineLike size={24} />
            )}
            <LikeText $liked={isLiked}>추천하기</LikeText>
          </LikeCircle>
        </LikeWrapper>

        <Divider />

        <Comments
          postId={postDetailInfo.postId}
          postDocId={postDetailInfo.id}
        />

        {confirmConfig && (
          <ConfirmModal
            message={confirmConfig.message}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            confirmText={confirmConfig.action === 'delete' ? '삭제' : '수정'}
            cancelText="취소"
          />
        )}

        {modalMessage && (
          <AlertModal
            message={modalMessage}
            onClose={() => setModalMessage('')}
          />
        )}
      </>
    </PostDetailContainer>
  );
}
