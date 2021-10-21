import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';

export default class Project extends Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}
