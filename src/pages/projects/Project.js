import React, { Component } from 'react'
import ProjectList from './ProjectList'
import projectcover from"../../assests/projects-cover.jpg";



export default class Project extends Component {

    render() {

        return (
            <>
                <section id="wrapper">
                    <div className="about-hero hero-section" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${projectcover})`, backgroundPosition: "center" }}>
                        <h1 className="big-text">Projects</h1>
                        <p className="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
                        </p>
                    </div>
                </section>


                <section id="wrapper">
                    <div className="snippet-head">
                        <h1 className="title mb-4">Our Developmental Works</h1>
                        <h5 className="snippet-head-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum
                        </h5>
                    </div>

                    <ProjectList />

                </section>

            </>
        )
    }
}
