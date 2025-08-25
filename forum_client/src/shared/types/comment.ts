export interface CommentProfile {
    uid: string;
    nickname: string;
}

export interface Comment {
    id: string;
    postId: string;
    postDocId?: string;
    content: string;
    created: string;
    profile: CommentProfile;
}
