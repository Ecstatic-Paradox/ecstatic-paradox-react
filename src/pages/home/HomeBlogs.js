import React, { Component } from 'react'

export default class HomeBlogs extends Component {
    render() {
        return (
            <section id="wrapper">
                <h1 className="title text-center mb-5">Must-Reads From Us</h1>
                <div className="blog-wrap container-fluid">
                    <div className="blog-card">
                        <div className="blog-img">
                            <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                            <span className="badge bg-primary">Primary</span>
                        </div>
                        <div className="card-body">
                            <div className="blog-views mb-2">
                                <svg viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="64" />
                                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                </svg>
                                <span>500 views</span>
                            </div>
                            <h4>The Complete AI Course</h4>
                            <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    {/* <!-- ends --> */}

                    <div className="blog-card">
                        <div className="blog-img">
                            <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                            <span className="badge bg-primary">Primary</span>
                        </div>
                        <div className="card-body">
                            <div className="blog-views mb-2">
                                <svg viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="64" />
                                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                </svg>
                                <span>500 views</span>
                            </div>
                            <h4>The Complete AI Course</h4>
                            <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    {/* <!-- ends --> */}

                    <div className="blog-card">
                        <div className="blog-img">
                            <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                            <span className="badge bg-primary">Primary</span>
                        </div>
                        <div className="card-body">
                            <div className="blog-views mb-2">
                                <svg viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="64" />
                                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                </svg>
                                <span>500 views</span>
                            </div>
                            <h4>The Complete AI Course</h4>
                            <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    {/* <!-- ends --> */}

                </div>
            </section>
        )
    }
}
