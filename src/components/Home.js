import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Welcome to My Greeting App!</h1>
      <Link to="/greeting">
        <button type="button">Get Random Greeting</button>
      </Link>
    </section>
  );
}

export default Home;
