import React, { Component } from 'react'

export default class ProjectDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            project: null
        }
    }

    componentDidMount() {
        this.fetchProject();
    }

    fetchProject = async () => {
        const data = await fetch(
            `http://localhost:8000/api/projects/${this.props.match.params.id}`
        )
        const item = await data.json()
        this.setState({ project: item })
        console.log(this.state.project)
    }

    render() {
        const project = this.state.project ? this.state.project : ''
        const team = project ? project.meta.sections[0] : ''
        return (
            <React.Fragment>
                <section id="wrapper">
                    <div className="container-fluid project-case-study">
                        <h4 className="project-heading">Case Study</h4>
                        <div className="project-overview">
                            <div className="row">
                                <div className="col-md-12 col-xl-6 mb-5">
                                    <h1 className="project-title mb-3">{project.title}</h1>
                                    <h6 className="project-description mb-5">{project.description}</h6>
                                    <h5 className="project-points mb-3"><span>Project team: </span>{team}</h5>
                                    <h5 className="project-points mb-3"><span>Project Started: </span>{project.start_date} </h5>
                                    <h5 className="project-points mb-5"><span>Project Ends: </span> {project.end_date}</h5>
                                    {/* <button type="button" className="btn filled-btn">View Details (.pdf)</button> */}
                                </div>
                                {/* <!-- ends --> */}
                                <div className="col-md-12 col-xl-6">
                                    <img className="project-image" src={project.thumbnail} alt="Project" />
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
