import React from 'react';

const posts = [
  { title: 'Blog Post One', slug: 'post-one' },
  { title: 'Blog Post Two', slug: 'post-two' }
];

export default function Blog() {
  return (
    <div>
      <h1 className="text-xl mb-4">Blog</h1>
      <ul className="list-disc ml-6 space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}