import React, { Component } from "react";
import ProjectList from "../../components/projects/ProjectList.js";
import projectcover from "../../assests/projects-cover.jpg";
import Head from "next/head";

export default class Project extends Component {
  render() {
    return (
      <>
        <Head></Head>
        <section id="wrapper">
          <div
            className="about-hero hero-section"
            style={{
              backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${projectcover.src})`,
              backgroundPosition: "center",
            }}
          >
            <h1 className="big-text">Projects</h1>
            <p className="small-text">
              A place to create real-world applications through teamwork and
              research culture.
            </p>
          </div>
        </section>

        <section id="wrapper">
          <div className="snippet-head">
            <h1 className="title mb-4">Our Developmental Works</h1>
            <h5 className="snippet-head-paragraph">
              We indicate our absolute interest in developing tangible
              applications in the fields of Physics and Tech.
            </h5>
          </div>

          <ProjectList />
        </section>
      </>
    );
  }
}
