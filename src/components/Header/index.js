import React, { useState } from "react";

function Header(props) {
    
    const [navItems] = useState([
        {
            name: 'Home'
        },
        {
            name: 'Entries'
        },
        {
            name: 'Contact Me'
        }
    ]);

    const {
        selectedPage,
        setSelectedPage
    } = props

    const [currentNavItem, setCurrentNavItem] = useState(navItems[0])

    return (
        <header>
            <h1>Hello World!</h1>
            <nav>
                <ul className='pointer'>
                    {navItems.map((category) => (
                        <li className={`${currentNavItem.name === category.name && 'active'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentNavItem(category)
                                setSelectedPage(category.name)
                            }}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;