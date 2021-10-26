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
            `http://localhost:8000/api/projects/${this.props.match.params.slug}`
        )
        const item = await data.json()
        this.setState({ project: item })
        console.log(this.state.project)
    }

    render() {
        const project = this.state.project ? this.state.project : ''
        const team = project ? project.meta.sections[0] : ''
        const contents = project ? project.content.map(con => {
            return (
                con.type === 'heading' ? <React.Fragment key={con.id}><h1 >{con.value}</h1><br /> </React.Fragment> : <React.Fragment key={con.id}><div dangerouslySetInnerHTML={{ __html: con.value }}></div><br /></React.Fragment>
            )
        }) : ''

        console.log(contents)

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
                            {contents}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
