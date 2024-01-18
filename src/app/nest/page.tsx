import React from 'react';
import Link from 'next/link';
const Nest = () => (
  <div>
    <ul className="hidden sm:flex">
      <li className="p-4">
        <Link href="/nest/first">first</Link>
      </li>
      <li className="p-4">
        <Link href="/nest/second">second</Link>
      </li>
    </ul>
  </div>
);

export default Nest;
