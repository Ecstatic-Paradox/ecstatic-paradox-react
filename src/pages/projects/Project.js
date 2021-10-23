import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

export default class Project extends Component {

    state = {
        section: [],
    }

    componentDidMount() {
        this.fetchProjects();
    }

    fetchProjects = async () => {
        const data = await fetch(
            'http://localhost:8000/api/projects/'
        )
        const items = await data.json()
        this.setState({ section: items.meta.sections })
        console.log(this.state.section)
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

                        {project.projects.map(proj => {
                            return (
                                <div className="item" key={proj.id}>
                                    <Link to={`/projects/${proj.id}`}>
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

                    {projects}

                </section>
                {/* <!-- QUANTUM PHYSICS -->*/}

            </React.Fragment >
        )
    }
}
