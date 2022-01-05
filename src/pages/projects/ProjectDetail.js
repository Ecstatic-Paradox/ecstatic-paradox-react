import React, { Component } from 'react'
import Loader from '../reusable/Loader';
import { baseURL } from '../reusable/server';

function Content(item) {
    let item_tag
    switch (item.type) {
        case 'heading':
            item_tag = <h1>{item.value}</h1>;
            break;
        default:
            var cor = item.value
            item_tag = <div dangerouslySetInnerHTML={{ __html: cor.replaceAll('src="/media', `src="${baseURL}/media`) }}></div>;
            break;
    }
    return item_tag
}

export default class ProjectDetail extends Component {

    state = {
        project: null,
    }

    componentDidMount() {
        this.fetchProject();
    }

    fetchProject = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/projects/${this.props.match.params.slug}`
            )
            const item = await data.json()
            this.setState({ project: item })
        } catch (err) {
            console.log(err)
        }
    }


    render() {

        const project = this.state.project ? this.state.project : ''
        const team = project ? project.meta.sections[0] : ''

        const contents = project ? project.content.map((con, index) => {
            return (
                <React.Fragment key={index}>{Content(con)}<br /></React.Fragment>
            )
        }) : ''


        const body = project ? <section id="wrapper">
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
                        </div>
                        {/* <!-- ends --> */}
                        <div className="col-md-12 col-xl-6">
                            <img className="project-image" src={`${baseURL}${project.thumbnail.meta.download_url}`} alt="Project" />
                        </div>
                        {/* <!-- ends --> */}
                    </div>
                </div>
                {/* <!-- ends --> */}
                <div className="project-indetails container">
                    {contents}
                </div>
            </div>
        </section> : <Loader />

        return (
            <React.Fragment>
                {body}
            </React.Fragment >
        )
    }
}
