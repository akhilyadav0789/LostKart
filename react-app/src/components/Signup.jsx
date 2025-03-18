import { Link } from 'react-router-dom';
import Header from './Header';



function Signup() {
  return (
    <div>
      <Header />
      Welcome to the signup page!
      <br></br>
         USERNAME
         <input type="text" />
         <br></br>
         PASSWORD
         <input type="password" />
            <br></br>
            <button>SIGNUP</button>
          <Link to="/login"> LOGIN </Link>

    </div>
  );
}

export default Signup;