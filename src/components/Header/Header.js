import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav id='navbar' className='navbar navbar-dark navbar-expand-lg fixed-top bg-black-transparent shadow'>
            <a className='navbar-brand' href='/'>
                Anam
        </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                       
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Header;
