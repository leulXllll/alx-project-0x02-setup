// pages/home.tsx
import React, { useState } from 'react';
import Header from '@/components/layout/Header'
import PostModal from '@/components/common/PostModal';
import Card from '@/components/common/Card';
import { CardProps } from '@/interfaces';



const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
        title: "Featured Article",
        content: "Discover the latest trends in technology and how they're shaping our future."
    },
    {
        title: "Quick Tips",
        content: "Learn essential shortcuts to boost your productivity in daily tasks."
    },
    {
        title: "Community News",
        content: "Stay updated with the latest events and announcements from our community."
    }
]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
            <Header />
        <h1 className="text-3xl font-bold">Welcome </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Post
        </button>
      </div>
      <div className="flex flex-wrap">
        {posts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;