import React from "react";
import { Link } from "react-router-dom";

function Entries() {
    return (
        <section>
            <h2>Entries content page!</h2>
            <p>So many things to put in here! Javascript, CSS, HTML, NodeJS,
                REST APIs, Fetch, MongoDB, MySQL, Express, so on and so forth!
                Algorithms, and more
            </p>
            <section>
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