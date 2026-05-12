import React from 'react'

import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="cta">
            <p className="cta-text">
                Interested in working together? <br className="sm:block-hidden"/>
                Feel free to reach out!
            </p>
            <Link to="/contact"  className="btn">Contact</Link>
        </section>
    )
}

export default CTA