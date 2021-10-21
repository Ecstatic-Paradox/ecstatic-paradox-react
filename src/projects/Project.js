import React, { Component } from 'react'
import logo from '../assests/logo.png'
import OwlCarousel from 'react-owl-carousel';

export default class Project extends Component {
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
                    <div className="about-hero hero-section">
                        <h1 className="big-text">Projects</h1>
                        <p className="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
                        </p>
                    </div>
                </section>
                {/* <!-- HERO --> */}

                {/* <!-- QUANTUM PHYSICS --> */}
                <section id="wrapper">
                    <div className="snippet-head">
                        <h1 className="title mb-4">Our Developmental Works</h1>
                        <h5 className="snippet-head-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum
                        </h5>
                    </div>

                    <div className="projects container-fluid">
                        <h2>Quantum Physics</h2>
                        <OwlCarousel className='owl-carousel project-slide' margin={15} loop nav navText={["Prev", "Next"]}
                            responsive={{
                                0: {
                                    items: 1,
                                    nav: true,
                                    navText: ["Next", "Prev"]
                                },
                                600: {
                                    items: 2,
                                    nav: true,
                                    navText: ["Next", "Prev"]
                                },
                                1000: {
                                    items: 3,
                                    nav: true,
                                    navText: ["Next", "Prev"]

                                }
                            }}>
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </OwlCarousel>
                    </div>

                </section>
                {/* <!-- QUANTUM PHYSICS -->


                <!-- DATA SCIENCE --> */}
                <section id="wrapper">
                    <div className="projects container-fluid">
                        <h2>Data Science</h2>
                        <OwlCarousel className='owl-carousel project-slide' margin={15} loop nav navText={["Prev", "Next"]}
                            responsive={{
                                0: {
                                    items: 1,
                                    nav: true,
                                    navText: ["Next", "Prev"]
                                },
                                600: {
                                    items: 2,
                                    nav: true,
                                    navText: ["Next", "Prev"]
                                },
                                1000: {
                                    items: 3,
                                    nav: true,
                                    navText: ["Next", "Prev"]

                                }
                            }}>
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </OwlCarousel>
                    </div>
                </section>
                {/* <!-- DATA SCIENCE -->


                <!-- GRAPHICS DESIGN --> */}
                <section id="wrapper">
                    <div className="projects container-fluid">
                        <h2>Graphics Design</h2>
                        <OwlCarousel className='owl-carousel project-slide' margin={15} loop nav navText={["Prev", "Next"]}
                            responsive={{
                                0: {
                                    items: 1,
                                    nav: true,
                                    navText: ["Next", "Prev"]
                                },
                                600: {
                                    items: 2,
                                    nav: true,
                                    navText: ["Next", "Prev"]
                                },
                                1000: {
                                    items: 3,
                                    nav: true,
                                    navText: ["Next", "Prev"]

                                }
                            }}>
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="item">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </OwlCarousel>
                    </div>
                </section>
                {/* <!-- GRAPHICS DESIGN --> */}


                <section id="wrapper">
                    <div className="snippet-head">
                        <h1 className="title mb-4">Proposals</h1>
                        <h5 className="snippet-head-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum
                        </h5>
                    </div>

                    <div className="proposal container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-4">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-4">
                                <div className="project-card">
                                    <div className="blog-img">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                                    </div>
                                    <div className="card-body">
                                        <h4>The Complete AI Course</h4>
                                        <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </section>







                {/* <!-- FOOTER --> */}
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
