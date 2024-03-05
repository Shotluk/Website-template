import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="cd-flex flex-column min-vh-100 mt-4 mb-5 ms-5 text-center">
      <h1 className="display-1">404</h1>
      <h2 className="display-4">Error: Page Not Found</h2>
      <p className="lead">The page you are looking for might be in another dimension.</p>
      <img src='https://t3.ftcdn.net/jpg/02/97/73/42/360_F_297734214_IbEci8CMShXg0L71F9YRYhJclm7E7LFG.jpg' alt="404img" style={{ maxWidth: '200px', width: '100%', height: 'auto' }}/>
      <p>Go back to <Link to="/">Home</Link>.</p>
    </div>
  );
};

export default NotFound;
