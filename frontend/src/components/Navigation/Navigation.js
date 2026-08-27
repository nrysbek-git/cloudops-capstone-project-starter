import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, route }) => {
  const go = destination => () => onRouteChange(destination);
  return <nav className="topbar">
    <button className="brand" onClick={go(isSignedIn ? 'home' : 'signin')}><span className="brand-mark">CO</span><span>CloudOps Academy</span></button>
    <div className="nav-links">{isSignedIn ? <>
      <button className={route === 'home' ? 'active' : ''} onClick={go('home')}>Dashboard</button>
      <button className={route === 'playQuiz' ? 'active' : ''} onClick={go('playQuiz')}>Assessment</button>
      <button className={route === 'main' ? 'active' : ''} onClick={go('main')}>Leaderboard</button>
      <button className={route === 'api' ? 'active' : ''} onClick={go('api')}>API</button>
      <button onClick={go('signout')}>Sign out</button>
    </> : <><button className={route === 'signin' ? 'active' : ''} onClick={go('signin')}>Sign in</button><button className="primary-small" onClick={go('register')}>Create account</button></>}</div>
  </nav>;
};
export default Navigation;
