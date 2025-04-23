import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';



function Signup() {

   const [username, setusername] = useState('');
   console.log(username);
  return (
    <div>
      <Header />
      Welcome to the signup page!
      <br></br>
         USERNAME
         <input type="text" value={username}
         onChange={(e) => {
            setusername(e.target.value);
         }}  />
         <br></br>
         PASSWORD
         <input type="password" />
            <br></br>
            <button> SIGNUP </button>
          <Link to="/login"> LOGIN </Link>

    </div>
  );
}

export default Signup;