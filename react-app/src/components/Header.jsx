import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <div>
        
        <div className="header">
        <Link to="/"> HOME </Link>
           <span className='mt-3'> LOST PRODUCT IN YOUR CITY ...in your city </span>
        
        <Link to="/login">Login</Link>
        
        
        </div>

    </div>
  )
}

export default Header;