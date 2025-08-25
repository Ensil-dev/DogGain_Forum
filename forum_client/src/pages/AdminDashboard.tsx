import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/model/store';
import type { Post, Comment, PostProfile } from '../shared/types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  getAdminEmails,
  setAdminEmails,
  getCachedAdminEmails,
} from '../shared/lib/utils/admin';
import { usePosts, useDeletePost } from '../shared/lib/hooks/usePosts';
import { useAllComments, useDeleteComment } from '../shared/lib/hooks/useComments';
import UnifiedButton from '../shared/ui/UnifiedButton';
import { UI } from '../shared/config/constants/common';
import UserInfoModal from '../features/profile/ui/UserInfoModal';
import { parseCompactDate } from '../shared/lib/utils/util';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  flex: 1;
  min-width: 100px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
  background: ${(props) => props.theme.statCard};
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  padding: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 4px;
    font-size: small;
  }
  th {
    background: #f5f5f5;
  }
`;

export default function AdminDashboard() {
  const loginUser = useSelector((state: RootState) => state.userInfo.loginUser);
  const navigate = useNavigate();
  const [emails, setEmails] = useState<string[]>(() => getCachedAdminEmails());
  const [newEmail, setNewEmail] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<PostProfile | null>(null);
  const [search, setSearch] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const { data: postsData } = usePosts();
  const posts = postsData as unknown as Post[] | undefined;
  const { data: commentsData } = useAllComments();
  const comments = commentsData as unknown as Comment[] | undefined;
  const deletePost = useDeletePost();
  const deleteComment = useDeleteComment();

  useEffect(() => {
    // 로그인 정보가 없으면 권한이 없으므로 메인 페이지로 이동합니다.
    if (!loginUser) {
      navigate("/", { replace: true });
      return;
    }

    async function load() {
      const data = await getAdminEmails();
      setEmails(data);
      if (!data.includes(loginUser.email)) {
        navigate("/", { replace: true });
      }
    }

    load();
  }, [loginUser, navigate]);

  useEffect(() => {
    if (newEmail === '') {
      setIsEmailValid(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail.trim()));
  }, [newEmail]);

  const handleAdd = async () => {
    if (!loginUser) return;
    const trimmed = newEmail.trim();

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      toast.error('올바른 이메일 형식이 아닙니다.');
      return;
    }

    if (emails.includes(trimmed)) {
      toast.error('이미 등록된 이메일입니다.');
      return;
    }

    if (trimmed) {
      const updated = [...emails, trimmed];
      setEmails(updated);
      setNewEmail("");
      await setAdminEmails(updated);
      toast.success('추가되었습니다');
    }
  };

  const handleRemove = async (email: string) => {
    if (!loginUser) return;
    if (window.confirm("삭제하시겠습니까?")) {
      const updated = emails.filter((e) => e !== email);
      setEmails(updated);
      await setAdminEmails(updated);
      toast.info('삭제되었습니다');
    }
  };

  const handleDeletePost = (post: Post) => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      deletePost.mutate({ id: post.id });
    }
  };

  const handleDeleteComment = (comment: Comment) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      deleteComment.mutate({
        id: comment.id,
        postId: comment.postId,
        postDocId: comment.postDocId,
      });
    }
  };

  const handleUserClick = (profile: PostProfile) => {
    setSelectedUser(profile);
  };


  const filteredPosts = posts?.filter((p) => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
    if (author && p.profile.nickname !== author) return false;
    if (startDate && parseCompactDate(p.created) < new Date(startDate)) return false;
    if (endDate && parseCompactDate(p.created) > new Date(endDate)) return false;
    return true;
  });

  const filteredComments = comments?.filter((c) => {
    if (search && !c.content.toLowerCase().includes(search.toLowerCase())) return false;
    if (author && c.profile?.nickname !== author) return false;
    if (startDate && parseCompactDate(c.created) < new Date(startDate)) return false;
    if (endDate && parseCompactDate(c.created) > new Date(endDate)) return false;
    return true;
  });

  const dailyPostData = React.useMemo(() => {
    const map = {};
    (posts || []).forEach((p) => {
      const d = parseCompactDate(p.created).toLocaleDateString();
      map[d] = (map[d] || 0) + 1;
    });
    const labels = Object.keys(map).sort();
    return {
      labels,
      datasets: [
        { label: '게시글 수', data: labels.map((l) => map[l]), backgroundColor: '#4e79a7' },
      ],
    };
  }, [posts]);

  const dailyCommentData = React.useMemo(() => {
    const map = {};
    (comments || []).forEach((c) => {
      const d = parseCompactDate(c.created).toLocaleDateString();
      map[d] = (map[d] || 0) + 1;
    });
    const labels = Object.keys(map).sort();
    return {
      labels,
      datasets: [
        { label: '댓글 수', data: labels.map((l) => map[l]), backgroundColor: '#f28e2b' },
      ],
    };
  }, [comments]);

  const userActivityData = React.useMemo(() => {
    const map = {};
    (posts || []).forEach((p) => {
      map[p.profile.nickname] = (map[p.profile.nickname] || 0) + 1;
    });
    (comments || []).forEach((c) => {
      if (c.profile)
        map[c.profile.nickname] = (map[c.profile.nickname] || 0) + 1;
    });
    const labels = Object.keys(map);
    return {
      labels,
      datasets: [
        { label: '활동량', data: labels.map((l) => map[l]), backgroundColor: '#76b7b2' },
      ],
    };
  }, [posts, comments]);

  return (
    <main>
      <Container>
        <h2>관리자 대시보드</h2>

        <StatsContainer>
          <StatCard>
            <div>게시글 수</div>
            <strong>{posts ? posts.length : 0}</strong>
          </StatCard>
          <StatCard>
            <div>댓글 수</div>
            <strong>{comments ? comments.length : 0}</strong>
          </StatCard>
          <StatCard>
            <div>관리자 수</div>
            <strong>{emails.length}</strong>
          </StatCard>
        </StatsContainer>

        <Section>
          <h3>통계</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: 1, minWidth: 300 }}>
              <Bar data={dailyPostData} />
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              <Bar data={dailyCommentData} />
            </div>
            <div style={{ flex: 1, minWidth: 300 }}>
              <Bar data={userActivityData} />
            </div>
          </div>
        </Section>

        <Section>
          <h3>관리자 이메일</h3>
          <List>
            {emails.map((e) => (
              <li key={e}>
                {e}{' '}
                <UnifiedButton
                  text='삭제'
                  $fontSize='small'
                  $padding='2px 4px'
                  $backgroundColor='lightgray'
                  $onClick={() => handleRemove(e)}
                />
              </li>
            ))}
          </List>
          <Input
            value={newEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewEmail(e.target.value)
            }
            placeholder='이메일 추가'
            style={{ border: isEmailValid ? '1px solid #ccc' : '1px solid red' }}
          />
          <UnifiedButton
            text='추가'
            $padding='4px 8px'
            $backgroundColor={UI.COLOR_PRIMARY_GRAY}
            $color='white'
            $fontSize='small'
            $onClick={handleAdd}
          />
        </Section>

        <Section>
          <h3>게시글 관리</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Input
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              placeholder='키워드'
            />
            <Input
              value={author}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAuthor(e.target.value)
              }
              placeholder='작성자'
            />
            <Input
              type='date'
              value={startDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStartDate(e.target.value)
              }
            />
            <Input
              type='date'
              value={endDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEndDate(e.target.value)
              }
            />
          </div>
          <Table>
            <thead>
              <tr>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts &&
                filteredPosts.map((p) => (
                  <tr
                    key={p.id}
                    onClick={() => navigate(`/post/${p.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>{p.title}</td>
                    <td
                      style={{ color: 'blue', cursor: 'pointer' }}
                      onClick={(e: React.MouseEvent<HTMLTableCellElement>) => {
                        e.stopPropagation();
                        handleUserClick(p.profile);
                      }}
                    >
                      {p.profile.nickname}
                    </td>
                    <td>{p.created}</td>
                    <td>
                      <UnifiedButton
                        text='삭제'
                        $fontSize='small'
                        $padding='2px 4px'
                        $backgroundColor='lightgray'
                        $onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.stopPropagation();
                          handleDeletePost(p);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Section>

        <Section>
          <h3>댓글 관리</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Input
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              placeholder='키워드'
            />
            <Input
              value={author}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAuthor(e.target.value)
              }
              placeholder='작성자'
            />
            <Input
              type='date'
              value={startDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStartDate(e.target.value)
              }
            />
            <Input
              type='date'
              value={endDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEndDate(e.target.value)
              }
            />
          </div>
          <Table>
            <thead>
              <tr>
                <th>내용</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments &&
                filteredComments.map((c) => (
                  <tr
                    key={c.id}
                    onClick={() => navigate(`/post/${c.postDocId ?? c.postId}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td style={{ whiteSpace: 'pre-wrap' }}>{c.content}</td>
                    <td
                      style={{ color: 'blue', cursor: 'pointer' }}
                      onClick={(e: React.MouseEvent<HTMLTableCellElement>) => {
                        e.stopPropagation();
                        if (c.profile) handleUserClick(c.profile);
                      }}
                    >
                      {c.profile?.nickname}
                    </td>
                    <td>{c.created}</td>
                    <td>
                      <UnifiedButton
                        text='삭제'
                        $fontSize='small'
                        $padding='2px 4px'
                        $backgroundColor='lightgray'
                        $onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.stopPropagation();
                          handleDeleteComment(c);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Section>
        <Section>
          <h3>신고/차단 관리</h3>
          <p>준비 중입니다.</p>
        </Section>
        {selectedUser && (
          <UserInfoModal
            user={selectedUser}
            posts={posts || []}
            comments={comments || []}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </Container>
    </main>
  );
}
