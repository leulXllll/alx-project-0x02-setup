import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <span className="text-sm text-gray-400">Posted by user {userId}</span>
    </div>
  );
};

export default PostCard;