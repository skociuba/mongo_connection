import React from 'react';

import GetPosts from '../components/GetPosts';
const LastComponent: React.FC = () => (
  <section
    id="lastComponent"
    className={`relative mb-5 min-h-[100vh] flex-col bg-black bg-opacity-80 pt-[10vh]`}>
    <GetPosts />
  </section>
);

export default LastComponent;
