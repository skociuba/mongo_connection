'use client';

import {useState} from 'react';

export default function CreatePost() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Full name: ', fullname);
    console.log('Email: ', email);
    console.log('Message: ', message);

    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const {msg} = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-5 border-t py-4">
        <div>
          <label htmlFor="fullname">Full Name</label>
          <p>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              className="h-12 w-full rounded border-r"
              type="text"
              id="fullname"
              placeholder="John Doe"
            />
          </p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <p>
            {' '}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="h-12 w-full rounded border-r"
              type="text"
              id="email"
              placeholder="john@gmail.com"
            />
          </p>
        </div>

        <div>
          <label htmlFor="message">Your Post</label>
          <p>
            {' '}
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="h-32 w-full rounded border-r"
              id="message"
              placeholder="Type your message here..."
            />
          </p>
        </div>

        <button className="bg-green-700 p-3 font-bold text-white" type="submit">
          Send
        </button>
      </form>

      <div className="flex flex-col bg-slate-100">
        {error &&
          error.map((e) => (
            <div
              key={e}
              className={`${
                success ? 'text-green-800' : 'text-red-600'
              } px-5 py-2`}>
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
