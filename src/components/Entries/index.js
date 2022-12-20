import React from "react";
import { Link } from "react-router-dom";

function Entries() {
    const jspicture = require('../../assets/images/javascript.png');
    const htmlpicture = require('../../assets/images/html.png');
    const csspicture = require('../../assets/images/css.png');
    const algopicture = require('../../assets/images/algorithm.jpeg');
    const miscpicture = require('../../assets/images/misc.jpg');
    const apipicture = require('../../assets/images/api.jpg');

    return (
        <section className='entries-body'>
            <section>
                <h1>Entries content page!</h1>
                <p>So many things to put in here! Javascript, CSS, HTML, NodeJS,
                    REST APIs, Fetch, MongoDB, MySQL, Express, so on and so forth!
                    Algorithms, and more. hello I just need more words to fill this out
                    so I can see what my flexbox is actually doing. Ok it appears to be working!!
                </p>
            </section>
            <section className='flex around wrap entry-links'>
                <div className='link-a javascript'>
                    {/* <img src={jspicture} /> */}
                    <Link className='explore-button flex center' to='/javascript'>Javascript</Link>
                </div>
                <div className='link-b css'>
                    {/* <img src={csspicture} /> */}
                    <Link className='explore-button flex center' to='/css'>CSS</Link>
                </div>
                <div className='link-a html'>
                    {/* <img src={htmlpicture} /> */}
                    <Link className='explore-button flex center' to='/html'>HTML</Link>
                </div>
                <div className='link-b algorithm'>
                    {/* <img src={algopicture} /> */}
                    <Link className='explore-button flex center' to='/algorithms'>Algorithms</Link>
                </div>
                <div className='link-a misc'>
                    {/* <img src={miscpicture} /> */}
                    <Link className='explore-button flex center' to='/misc'>Misc</Link>
                </div>
                <div className='link-b api'>
                    {/* <img src={apipicture} /> */}
                    <Link className='explore-button flex center' to='/apis'>APIs</Link>
                </div>
            </section>
        </section>
    )
}

export default Entries;