import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page" >
      <h1>Welcome!</h1>
      <h2>Let's get a shopping list started!</h2>
      <div className="links">
        <Link to="/loginform">Log In</Link>
        <Link to="/onboarding" >Register</Link>
      </div>
    </div>
  )
}

export default LandingPage;