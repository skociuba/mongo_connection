'use client';
import {useState, useEffect} from 'react';

interface Post {
  _id: string;
  fullname: string;
  email: string;
  message: string;
}

export default function GetPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('api/contact');
      const data = await res.json();
      setPosts(data?.data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="mx-20 flex flex-col">
        {posts.map((post) => (
          <div
            key={post._id}
            className="opacity-8 my-3 flex flex-col  items-center justify-center bg-black p-8 text-white">
            <p>
              {post.fullname} - {post.email}
            </p>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
    </>
  );
}
