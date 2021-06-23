import React from 'react';
import '../styles/footer.css';
import Nav from './footer-sections/nav';
import Contact from './footer-sections/contact';
import Social from './footer-sections/social'

function footer() {
    return (
        <footer>
            <div className="contact">
                <Nav />
                <Contact />
            </div>
            <div className="social">
                <Social />
            </div>
        </footer>
    )
}

export default footer
