import React, { Component } from 'react'

export default class WebinarDetail extends Component {
    render() {
        return (
            <>
                <section id="wrapper">
                    <div class="container-fluid webinar-detail">
                        <h4 class="project-heading my-5">Webinar</h4>
                        <div class="webinar-overview">
                            <div class="row">
                                <div class="col-md-12 col-xl-6">
                                    <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Project" />
                                </div>

                                <div class="col-md-12 col-xl-6 mb-5">
                                    <h1 class="webinar-title mb-3">HOW TO MAKE WORLD BETTER ?</h1>
                                    <h5 class="webinar-points mb-3"><span>Date:</span> May 5</h5>
                                    <h5 class="webinar-points mb-3"><span>Time:</span> 2pm</h5>
                                </div>

                            </div>
                        </div>

                        <div class="webinar-indetails">
                            <h1>Description</h1>
                            <div class="row">
                                <div class="col-md-12 col-xl-6">
                                    <h6>
                                        Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing. ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                                    </h6>
                                    <h6>
                                        Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing. ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                                    </h6>
                                    <h6>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                                    </h6>
                                    <h6 class="conclusion">
                                        <span>Conclusion:</span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                                    </h6>
                                </div>

                                <div class="col-md-12 col-xl-6">
                                    <div class="webinar-form">
                                        <h2>Join Webinar</h2>
                                        <div class="form mt-5">
                                            <input type="text" class="form-control" placeholder="Your Name" aria-label="Your Name" required />
                                            <input type="text" class="form-control" placeholder="Your Address" aria-label="Your Address" required />
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Mail" required />
                                            <button class="btn filled-btn" type="submit">
                                                <span>
                                                    <svg width="25" viewBox="0 0 512 512" fill="#fff">
                                                        <path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z" />
                                                    </svg>
                                                </span>
                                                Send
                                            </button>
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
