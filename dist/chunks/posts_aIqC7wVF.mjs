import { readFileSync } from 'fs';
import { join } from 'path';

const postsData = JSON.parse(readFileSync(join(process.cwd(), 'src/lib/data/posts.json'), 'utf-8'));

function getAllPosts() {
  return postsData.posts.map(post => ({
    ...post,
    author: { name: post.author_name },
    _count: { comments: post.comment_count || 0 }
  }));
}

function getPostById(id) {
  const post = postsData.posts.find(p => p.id === id);
  if (!post) return null;
  
  return {
    ...post,
    author: { name: post.author_name }
  };
}

function createPost(data) {
  const id = crypto.randomUUID();
  const post = {
    id,
    ...data,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  postsData.posts.push(post);
  return id;
}

export { getAllPosts as a, createPost as c, getPostById as g };
