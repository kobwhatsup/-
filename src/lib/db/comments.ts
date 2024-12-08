import type { Comment } from '../types/db';

const comments: Comment[] = [];

export function getCommentsByPostId(postId: string): Comment[] {
  return comments
    .filter(comment => comment.post_id === postId)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export function createComment(data: {
  content: string;
  authorId: string;
  postId: string;
}): string {
  const id = crypto.randomUUID();
  const comment: Comment = {
    id,
    content: data.content,
    author_id: data.authorId,
    post_id: data.postId,
    created_at: new Date().toISOString()
  };
  comments.push(comment);
  return id;
}