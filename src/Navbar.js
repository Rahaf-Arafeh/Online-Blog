import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <h1><i className="fas fa-book"></i>ClASSIC BLOG</h1>
                {/* <h1><i class="fas fa-book"></i></h1> */}
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                    <li><Link to='register'>Sign Up</Link></li>
                    <li><Link to='/'>Log Out</Link></li>
                </ul>
            </nav >
        )
    }
}

export default Navbar
