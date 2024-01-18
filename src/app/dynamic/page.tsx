import React from 'react';
import Link from 'next/link';
const Dynamic = () => (
  <div>
    <ul>
      <li className="p-4">
        <Link href="/dynamic/1">first</Link>
      </li>
      <li className="p-4">
        <Link href="/dynamic/2">second</Link>
      </li>
    </ul>
  </div>
);

export default Dynamic;
