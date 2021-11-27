import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <h1><i className="fas fa-book"></i>CLASSIC BLOG</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                    <li><Link to='register'>Sign Up</Link></li>
                    <li><Link to='/'>Log Out</Link></li>
                </ul>
            </footer>
        )
    }
}

export default Footer
