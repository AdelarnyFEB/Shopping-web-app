import { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import {Link}  from 'react-router-dom'

const Navbar = () => {

      const [menu, setMenu] = useState("shop");


  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOP HERE</p>
        </div>
        <ul className="nav-menu">
            <li ><Link to='/' onClick={()=>{setMenu("shop")}}>Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
            <li ><Link to='/men' onClick={()=>{setMenu("men")}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li ><Link to='/women' onClick={()=>{setMenu("women")}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li ><Link to='/kids' onClick={()=>{setMenu("kids")}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link> 
        <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
           <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
