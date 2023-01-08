import React from "react";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import loadWebFont from "../../utils/webfontloader";

function Entries() {
    const jspicture = require('../../assets/images/javascript.png');
    const htmlpicture = require('../../assets/images/html.png');
    const csspicture = require('../../assets/images/css.png');
    const algopicture = require('../../assets/images/algorithm.jpeg');
    const miscpicture = require('../../assets/images/misc.jpg');
    const apipicture = require('../../assets/images/api.jpg');

    loadWebFont(['Bungee Shade', 'Luckiest Guy'])

    return (
        <section className='entries-body flex column'>
            <section className='entries-opening'>
                <h1 style={{ fontFamily: 'Bungee Shade' }}>Entries content page!</h1>
                <p>So many things to put in here! Javascript, CSS, HTML, NodeJS,
                    REST APIs, Fetch, MongoDB, MySQL, Express, so on and so forth!
                    Algorithms, and more. hello I just need more words to fill this out
                    so I can see what my flexbox is actually doing. Ok it appears to be working!!
                </p>
            </section>
            <section className='flex around wrap entry-links'>
                <div className='link-a around javascript'>
                    {/* <img src={jspicture} /> */}
                    <Link className='explore-button flex center' to='/javascript'>Explore</Link>
                    <div className='section-about'>
                        <h4>Javascript</h4>
                        <p>Hello World</p>
                    </div>
                </div>
                <div className='link-b around css'>
                    {/* <img src={csspicture} /> */}
                    <div className='section-about'>
                        <h4>CSS</h4>
                        <p>Hello World</p>
                    </div>
                    <Link className='explore-button flex center' to='/css'>Explore</Link>
                </div>
                <div className='link-a around html'>
                    {/* <img src={htmlpicture} /> */}
                    <Link className='explore-button flex center' to='/html'>Explore</Link>
                    <div className='section-about'>
                        <h4>HTML</h4>
                        <p>Hello World!</p>
                    </div>
                </div>
                <div className='link-b around algorithm'>
                    {/* <img src={algopicture} /> */}
                    <div className='section-about'>
                        <h4>Algorithms</h4>
                        <p>Hello World</p>
                    </div>
                    <Link className='explore-button flex center' to='/algorithms'>Explore</Link>
                </div>
                <div className='link-a around misc'>
                    {/* <img src={miscpicture} /> */}
                    <Link className='explore-button flex center' to='/misc'>Explore</Link>
                    <div className='section-about'>
                        <h4>Misc</h4>
                        <p>Hello World</p>
                    </div>
                </div>
                <div className='link-b around api'>
                    {/* <img src={apipicture} /> */}
                    <div className='section-about'>
                        <h4>Apis</h4>
                        <p>Hello World</p>
                    </div>
                    <Link className='explore-button flex center' to='/apis'>Explore</Link>
                </div>
            </section>
        </section>
    )
}

export default Entries;