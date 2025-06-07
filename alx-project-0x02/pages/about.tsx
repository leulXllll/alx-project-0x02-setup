import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const AboutPage = () => {
  return (
    <div className="p-8">
        <Header/>
      <h1 className="text-2xl font-bold mb-6">About Page</h1>
      <div className="flex gap-4 flex-wrap">
        <Button size="small" shape="rounded-sm" />
        <Button size="medium" shape="rounded-md" />
        <Button size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;