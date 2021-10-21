import React, { Component } from 'react'
import logo from '../assests/logo.png'

export default class ProjectDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html">
                            <img src={logo} alt="Paradox-Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="about.html">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="project.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Projects
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="project.html">Webinar</a></li>
                                        <li><a className="dropdown-item" href="project.html">Symposium</a></li>
                                        <li><a className="dropdown-item" href="project.html">Talk Shows</a></li>
                                        <li><a className="dropdown-item" href="project.html">Conference</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="publication.html">Publications</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="programs.html">Programs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="program.html">Courses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section id="wrapper">
                    <div className="container-fluid project-case-study">
                        <h1 className=" exception title text-center my-5">Case Study</h1>
                        <div className="project-overview">
                            <div className="row">
                                <div className="col-md-12 col-xl-6 mb-5">
                                    <h1 className="project-title mb-3">How To Make World Better</h1>
                                    <h6 className="project-description mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quas commodi velit earum obcaecati modi rem amet voluptas nam quo ratione natus, tempora officia consectetur suscipit aliquam ad impedit repudiandae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quas commodi velit earum obcaecati modi rem amet voluptas nam quo ratione natus, tempora officia consectetur suscipit aliquam ad impedit repudiandae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quas commodi velit earum obcaecati modi rem amet voluptas nam quo ratione natus, tempora officia consectetur suscipit aliquam ad impedit repudiandae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quas commodi velit earum obcaecati modi rem amet voluptas nam quo ratione natus, tempora officia consectetur suscipit aliquam ad impedit repudiandae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quas commodi velit earum obcaecati modi rem amet voluptas nam quo ratione natus, tempora officia consectetur suscipit aliquam ad impedit repudiandae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quas commodi velit earum obcaecati modi rem amet voluptas nam quo ratione natus, tempora officia consectetur suscipit aliquam ad impedit repudiandae.</h6>
                                    <h5 className="project-points mb-3"><span>Project Assists:</span> John Doe, James Doe & Jack Doe</h5>
                                    <h5 className="project-points mb-3"><span>Project Started:</span> July 17, 2021</h5>
                                    <h5 className="project-points mb-5"><span>Project Ends:</span> July 10, 2021</h5>
                                    {/* <button type="button" className="btn filled-btn">View Details (.pdf)</button> */}
                                </div>
                                {/* <!-- ends --> */}
                                <div className="col-md-12 col-xl-6">
                                    <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Project" />
                                </div>
                                {/* <!-- ends --> */}
                            </div>
                        </div>
                        {/* <!-- ends --> */}
                        <div className="project-indetails container">

                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quis accumsan eu, adipiscing nunc diam donec id nulla.Vulputate pharetra pretium elit aliquam tellus sed.Orci augue tellus quam nunc in ut nibh in.Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                            </h6>
                            <h6>
                                Quis accumsan eu, adipiscing nunc diam donec id nulla.Vulputate pharetra pretium elit aliquam tellus sed.Orci augue tellus quam nunc in ut nibh in.Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.ipsum dolor sit amet, consectetur adipiscing elit.Quis accumsan eu, adipiscing nunc diam donec id nulla.Vulputate pharetra pretium elit aliquam tellus sed.Orci augue tellus quam nunc in ut nibh in.Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                            </h6>
                            <br />
                            <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="Project" />
                            <br />
                            <h6>
                                Quis accumsan eu, adipiscing nunc diam donec id nulla.Vulputate pharetra pretium elit aliquam tellus sed.Orci augue tellus quam nunc in ut nibh in.Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.ipsum dolor sit amet, consectetur adipiscing elit.Quis accumsan eu, adipiscing nunc diam donec id nulla.Vulputate pharetra pretium elit aliquam tellus sed.Orci augue tellus quam nunc in ut nibh in.Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                            </h6>
                            <h6>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quis accumsan eu, adipiscing nunc diam donec id nulla.Vulputate pharetra pretium elit aliquam tellus sed.Orci augue tellus quam nunc in ut nibh in.Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                            </h6>
                            <h6 className="conclusion">
                                <span>Conclusion: </span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quis accumsan eu, adipiscing nunc diam donec id nulla.Vulputate pharetra pretium elit aliquam tellus sed.Orci augue tellus quam nunc in ut nibh in.Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                            </h6>
                        </div>
                    </div>
                </section>
                <footer id="footer">
                    <div className="container-fluid">
                        <div className="footer-wrap">
                            <div className="footer-row">
                                <img src={logo} alt="Logo" />
                            </div>
                            {/* <!-- ends --> */}
                            <div className="footer-row">
                                <h3 className="mb-3">Subscribe to Newletter</h3>
                                <div className="row g-2">
                                    <input type="email" id="email-input" placeholder="Email" aria-describedby="emailHelp" />
                                    <button type="button" className="btn filled-btn">Subscribe</button>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="footer-row">
                                <div className="social-icon">
                                    <a href="project.html">
                                        <svg viewBox="0 0 16 16">
                                            <path d="M13.3375 2H2.6625C2.29687 2 2 2.29687 2 2.6625V13.3375C2 13.7031 2.29687 14 2.6625 14H8V9.25H6.56563V7.5H8V6.20625C8 4.65625 9.075 3.8125 10.4594 3.8125C11.1219 3.8125 11.8344 3.8625 12 3.88438V5.50313H10.8969C10.1438 5.50313 10 5.85938 10 6.38438V7.5H11.7937L11.5594 9.25H10V14H13.3375C13.7031 14 14 13.7031 14 13.3375V2.6625C14 2.29687 13.7031 2 13.3375 2Z"></path>
                                        </svg>
                                    </a>
                                    <a href="project.html">
                                        <svg viewBox="0 0 512 512">
                                            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                                        </svg>
                                    </a>
                                    <a href="project.html">
                                        <svg viewBox="0 0 512 512">
                                            <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                        <hr />
                        <div className="copyright text-center pt-4">
                            <h6>Copyright 2021 - All Rights Reserved</h6>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
