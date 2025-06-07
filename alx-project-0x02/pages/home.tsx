// pages/home.tsx
import Header from '@/components/layout/Header'

import React from 'react';
import Card from '../components/common/Card';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome</h1>
            <Header />
      <div className="flex flex-wrap">
        <Card
          title="Featured Article"
          content="Discover the latest trends in technology and how they're shaping our future."
        />
        <Card
          title="Quick Tips"
          content="Learn essential shortcuts to boost your productivity in daily tasks."
        />
        <Card
          title="Community News"
          content="Stay updated with the latest events and announcements from our community."
        />
      </div>
    </div>
  );
};

export default Home;
