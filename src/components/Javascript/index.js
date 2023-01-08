import React, { useState } from "react";
import { Link } from "react-router-dom";

function Javascript() {
    
    const [javascriptEntries] = useState([
        {
            name: 'Test Entry',
            description: 'Brief description',
            link: '/test-entry'
        }
    ])

    return (
        <section className='js-body flex column'>
            <div className='js-opening flex column'>
                <h2>Javascript</h2>
                <p>
                    Javascript, from ES6+ updates to datatypes to methods
                    to math, all can be told here in the Javascript handbook
                </p>
            </div>
            <div className='js-entry-holder flex justify-center'>
                {javascriptEntries.map((entry, i) => (
                    <Link className='js-entry flex column align-center' to={entry.link}>
                        <h3>{entry.name}</h3>
                        <p>{entry.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Javascript;