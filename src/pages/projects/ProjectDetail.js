import React, { Component } from 'react'

export default class ProjectDetail extends Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}
