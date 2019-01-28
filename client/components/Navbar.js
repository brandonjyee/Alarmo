import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <h1>Welcome to ALARMO!!!!!1111!!</h1>
      <nav>
        <div>
          <Link to="/home">Home</Link>
        </div>
      </nav>
      <hr />
    </div>
  );
}
