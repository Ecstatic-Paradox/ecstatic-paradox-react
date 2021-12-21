import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Webinar extends Component {
    render() {
        return (
            <>
                <section id="wrapper">
                    <div class="about-hero hero-section">
                        <h1 class="big-text">Talk Shows</h1>
                        <p class="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
                        </p>
                    </div>
                </section>


                <section id="wrapper">
                    <h1 class="title text-center mb-5">On Live</h1>
                    <div class="container">
                        <div class="webinar-live-card">
                            <div class="row">
                                <div class="col-md-5">
                                    <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="card-img-top" alt="Blog" />
                                </div>

                                <div class="col p-1">
                                    <h3>The Complete AI Course</h3>
                                    <h5 class="webinar-points mt-4 mb-3"><span>Date:</span> May 5</h5>
                                    <h5 class="webinar-points mb-3"><span>Time:</span> 2pm</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a, cupiditate ratione eveniet quos repellat...</p>
                                    <div class="webinar-card-btn d-flex align-items-center mt-5">
                                        <Link to="/talk-shows/detail"><button type="button" class="btn filled-btn me-4">View Details</button></Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="webinar-live-card">
                            <div class="row">
                                <div class="col-md-5">
                                    <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="card-img-top" alt="Blog" />
                                </div>

                                <div class="col p-1">
                                    <h3>The Complete AI Course</h3>
                                    <h5 class="webinar-points mt-4 mb-3"><span>Date:</span> May 5</h5>
                                    <h5 class="webinar-points mb-3"><span>Time:</span> 2pm</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a, cupiditate ratione eveniet quos repellat...</p>
                                    <div class="webinar-card-btn d-flex align-items-center mt-5">
                                        <Link to="/talk-shows/detail"><button type="button" class="btn filled-btn me-4">View Details</button></Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                <section id="wrapper">
                    <h1 class="title text-center mb-5">History</h1>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12 col-xl-6 webinar-live-card">
                                <div class="row">
                                    <div class="col-md-5">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="card-img-top" alt="Blog" />
                                    </div>

                                    <div class="col p-1">
                                        <h3>The Complete AI Course</h3>
                                        <h5 class="webinar-points my-3"><span>Held on:</span> May 5</h5>
                                        <p class="webinar-history-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a...</p>
                                        <div class="webinar-card-btn d-flex align-items-center mt-3">
                                            <Link to="/talk-shows/detail"><button type="button" class="btn filled-btn me-4">View Details</button></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-12 col-xl-6 webinar-live-card">
                                <div class="row">
                                    <div class="col-md-5">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="card-img-top" alt="Blog" />
                                    </div>

                                    <div class="col p-1">
                                        <h3>The Complete AI Course</h3>
                                        <h5 class="webinar-points my-3"><span>Held on:</span> May 5</h5>
                                        <p class="webinar-history-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a...</p>
                                        <div class="webinar-card-btn d-flex align-items-center mt-3">
                                            <Link to="/talk-shows/detail"><button type="button" class="btn filled-btn me-4">View Details</button></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}
