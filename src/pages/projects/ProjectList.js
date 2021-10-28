import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

export default class ProjectList extends Component {

    state = {
        section: [],
    }

    componentDidMount() {
        this.fetchProjects();
    }

    fetchProjects = async () => {
        try {
            const data = await fetch(
                'http://localhost:8000/api/projects/'
            )
            const items = await data.json()
            this.setState({ section: items.meta.sections })
        } catch (err) {
            console.log('some error occured')
        }
    }

    render() {
        const projects = this.state.section.map(project => {
            return (
                <div className="projects container-fluid mb-5" key={project.id}>
                    <h2>{project.name}</h2>
                    <OwlCarousel className='owl-carousel project-slide' margin={15} nav navText={["Prev", "Next"]}
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

                        {project.project_set.map(proj => {
                            return (
                                <div className="item" key={proj.slug}>
                                    <Link to={`/projects/${proj.slug}`}>
                                        <div className="project-card">
                                            <div className="blog-img">
                                                <img src={proj.thumbnail} className="card-img-top" alt="Blog" />
                                            </div>
                                            <div className="card-body">
                                                <h4>{proj.title}</h4>
                                                <p className="small-text">{proj.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}

                    </OwlCarousel>
                </div >
            );
        })
        return (
            <>
                {projects}
            </>
        )
    }
}
