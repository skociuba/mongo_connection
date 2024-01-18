import React from 'react';

import Hero from '../components/Hero';
import CreatePost from '../components/CreatePost';

const page: React.FC = () => (
  <>
    <Hero />
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="text-3xl font-bold">Write a post</h1>
      <p>Please fill in the form below</p>

      <CreatePost />
    </div>
  </>
);

export default page;
