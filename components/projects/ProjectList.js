import React, { Component } from "react";
import Link from "next/link";
import { baseURL } from "../../reusable/server";
import Slider from "react-slick";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default class ProjectList extends Component {
  state = {
    section: [],
  };

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    try {
      const data = await fetch(`${baseURL}/api/projects/`);
      const items = await data.json();
      this.setState({ section: items.meta.sections });
    } catch (err) {
      console.log("some error occured");
    }
  };

  render() {
    const projects = this.state.section.map((project) => {
      return (
        <div className="projects container-fluid mb-5" key={project.id}>
          <h2>{project.name}</h2>
          <Carousel
            className="owl-carousel project-slide"
            margin={15}
            nav
            navText={["Prev", "Next"]}
            responsive={{
              0: {
                items: 1,
                nav: true,
                navText: ["Next", "Prev"],
              },
              600: {
                items: 2,
                nav: true,
                navText: ["Next", "Prev"],
              },
              1000: {
                items: 3,
                nav: true,
                navText: ["Next", "Prev"],
              },
            }}
          >
            {project.project_set.map((proj) => {
              var truncateDesc = proj.description;

              return (
                <div className="item" key={proj.slug}>
                  <Link href={`/projects/${proj.slug}`} passHref>
                    <a>
                      <div className="project-card">
                        <div className="blog-img">
                          <img
                            src={`${baseURL}${proj.thumbnail.meta.download_url}`}
                            className="card-img-top"
                            alt="Blog"
                          />
                        </div>
                        <div className="card-body">
                          <h4>{proj.title}</h4>
                          <p className="small-text">{truncateDesc}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      );
    });
    return <>{projects}</>;
  }
}
