import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Header(props) {

    return (
        <header>
            <h1>Hello World!</h1>
            <nav>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/entries'>Entries</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;