import React from "react";
import logo_white from "../assests/logo-white.svg";
import { Link } from "react-router-dom"
function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footer-intro">
                    <div>
                        <Link to="/">
                            <img src={logo_white} alt="Paradox-Logo" />
                        </Link>
                        <h6>
                            A venture towards amalgamating rigorous Physics-based research with Tech-based applications.
                        </h6>
                    </div>
                </div>
                <div className="footer-links">
                    <div>
                        <h2>Ouick Link</h2>
                        <div className="footer-link-list">
                            <Link to="/about">About Us</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/about">Research Papers</Link>
                            <Link to="/about">Articles</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <div>
                        <div>
                            <h2>Follow Us</h2>
                            <div className="footer-social-icons">
                                <a href="https://www.facebook.com/ecstaticparadox">
                                    <svg fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
                                    </svg>
                                </a>
                                {/* <a href="#">
                                    <svg fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                        <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                        <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                        <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                                    </svg>
                                </a> */}
                                <a href="https://www.linkedin.com/company/ecstatic-paradox">
                                    <svg fill="#C4C4C4" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="footer-email">
                            <h2>Contact Us</h2>
                            <a href="mailto:contact@ecstaticparadox.com">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon me-2" viewBox="0 0 512 512" width="30">
                                    <rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112" />
                                </svg>
                                contact@ecstaticparadox.com
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-copyright">
                Copyright 2021 - All Rights Reserved
            </div>
        </>
    );
}

export default Footer;