import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className='flex between'>
            <h1>Code Handbook</h1>
            <nav>
                <div className='flex around'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/entries'>Entries</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;