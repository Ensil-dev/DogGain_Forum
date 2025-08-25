export interface PostProfile {
  nickname: string;
  uid: string;
}

export interface PostCategory {
  name: string;
}

export interface Post {
  id?: string;
  postId: number;
  profile: PostProfile;
  title: string;
  keywords: string[];
  category: PostCategory;
  content: string;
  comments: number;
  views: number;
  likesCount: number;
  created: string | number;
  updated?: string | number;
}
