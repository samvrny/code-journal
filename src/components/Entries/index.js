import React from "react";
import { Link } from "react-router-dom";

function Entries() {
    return (
        <section className='entries-body'>
            <h1>Entries content page!</h1>
            <p>So many things to put in here! Javascript, CSS, HTML, NodeJS,
                REST APIs, Fetch, MongoDB, MySQL, Express, so on and so forth!
                Algorithms, and more. hello I just need more words to fill this out
                so I can see what my flexbox is actually doing. Ok it appears to be working!!
            </p>
            <section className='flex around wrap entry-links'>
                <Link to='/javascript'>Javascript</Link>
                <Link to='/css'>CSS</Link>
                <Link to='/html'>HTML</Link>
                <Link to='/algorithms'>Algorithms</Link>
                <Link to='/misc'>Misc</Link>
                <Link to='/apis'>APIs</Link>
            </section>
        </section>
    )
}

export default Entries;