export interface Comment {
  id: string;
  content: string;
  author_id: string;
  post_id: string;
  created_at: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  author_id: string;
  created_at: string;
  updated_at: string;
}

export interface Law {
  id: string;
  title: string;
  content: string;
  summary?: string;
  effectiveAt: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Case {
  id: string;
  title: string;
  description: string;
  solution: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  startDate: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}