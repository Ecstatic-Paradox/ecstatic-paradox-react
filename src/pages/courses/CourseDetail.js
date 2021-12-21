import React, { Component } from 'react'

export default class CourseDetail extends Component {
    render() {
        return (
            <>
                <section id="wrapper">
                    <div class="container-fluid webinar-detail">
                        <h4 class="project-heading my-5">Course</h4>
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
                                        Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing. ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing.
                                    </h6>
                                    <h6>
                                        Quis accumsan eu, adipiscing nunc diam donec id nulla. Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit sed mattis imperdiet tortor orci adipiscing. ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla.
                                    </h6>
                                </div>

                                <div class="col-md-12 col-xl-6">
                                    <div class="webinar-form">
                                        <h2>Link</h2>
                                        <div class="form mt-5 text-center">
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control mb-0" placeholder="https://link" aria-label="https://link" aria-describedby="button-addon2" />
                                                <button class="btn filled-btn" type="button" id="button-addon2">
                                                    <svg width="25" viewBox="0 0 512 512">
                                                        <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                                                        <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <h3 class="my-5">Or</h3>
                                            <button class="btn filled-btn" type="submit">
                                                Join Now
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
