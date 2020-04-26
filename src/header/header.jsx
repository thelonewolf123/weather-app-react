import React from 'react';
import '../css/bootstrap.min.css';
import './header.css'

function Header() {
    return (
        <div className='navbar navbar-dark bg-dark' id='navbar'>
            <a href='#foo' className="navbar navbar-brand">Weather App</a>
            <div className=''>
                <form className='form inline-from'>

                    <button className='btn btn-primary' id='login'>
                        Login
                        </button>
                    <button className='btn btn-primary' id='signup'>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Header;