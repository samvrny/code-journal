import React, { useState } from "react";
import { Link } from 'react-router-dom';
import WebFont from "webfontloader";

function Header() {

    const loadWebFont = async () => {
        WebFont.load({
            google: {
                families: ['Bungee Inline']
            }
        });
    }

    loadWebFont()

    return (
        <header className='flex between'>
            <h1 style={{fontFamily: 'Bungee Inline'}}>Code Handbook</h1>
            <nav>
                <div className='flex around' style={{fontFamily: 'Bungee Inline'}}>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/entries'>Entries</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;