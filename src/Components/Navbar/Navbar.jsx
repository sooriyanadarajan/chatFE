import React from 'react';
// import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3>Document Master</h3>
            <h3>SalesDrive</h3>
            {/* <h3>Notification</h3> */}
            <ul>
                {/* <Link> */}
                    <li>Notification</li>
                {/* </Link> */}
            </ul>
        </nav>
    )
}

export default Navbar
