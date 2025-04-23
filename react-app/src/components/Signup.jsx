import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';



function Signup() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
   

    const handleApi = () => {
      console.log({username, password});
      const url = 'http://localhost:4000/signup';
      const data = { username, password };
      axios.post(url, data)
       .then((res) => {
          console.log(res)
       })
        .catch((err) => {
            console.log(err)
        })
    }


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
         <input type="password" value={password}
          onChange={(e) => {
              setpassword(e.target.value);
          }}  />
         
            <br></br>
            <button onClick={handleApi}> SIGNUP </button>
          <Link to="/login"> LOGIN </Link>

    </div>
  );
}

export default Signup;