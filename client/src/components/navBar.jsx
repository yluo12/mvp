import React from 'react';

function NavBar () {
  return (
    <nav>
      <div>logo</div>
      <div>
        <button className="btn btn-signUp">Sign Up</button>
        <button className="btn btn-logIn">Log In</button>
      </div>
    </nav>
  );
}

export default NavBar;