import React, { Component, useEffect, useState } from "react";
import Loader from "../../reusable/Loader";
import { baseURL } from "../../reusable/server";
import { useRouter } from "next/router";
import App from "next/app";
import Head from "next/head";

function Content(item) {
  let item_tag;
  switch (item.type) {
    case "heading":
      item_tag = <h1>{item.value}</h1>;
      break;
    default:
      var cor = item.value;
      item_tag = (
        <div
          dangerouslySetInnerHTML={{
            __html: cor.replaceAll('src="/media', `src="${baseURL}/media`),
          }}
        ></div>
      );
      break;
  }
  return item_tag;
}

function ProjectDetail() {
  const [project, setProject] = useState({});
  const team = project.id ? project.meta.sections[0] : "";
  const router = useRouter();
  const slug = router.query["slug"];

  const fetchProject = async () => {
    try {
      const response = await fetch(
        `${baseURL || "https://app.ecstaticparadox.com"}/api/projects/${slug}`
      );
      const item = await response.json();
      if (item) {
        setProject(item);
      }
    } catch (err) {
      console.log(err);
      router.push("/404");
    }
  };
  const contents = project.id
    ? project.content.map((con, index) => {
        return (
          <React.Fragment key={index}>
            {Content(con)}
            <br />
          </React.Fragment>
        );
      })
    : "";
  const body = project.id ? (
    <section id="wrapper">
      <div className="container-fluid project-case-study">
        <h4 className="project-heading">Project</h4>
        <div className="project-overview">
          <div className="row">
            <div className="col-md-12 col-xl-6 mb-5">
              <h1 className="project-title mb-3">{project.title}</h1>
              <h6 className="project-description mb-5">
                {project.description}
              </h6>
              <h5 className="project-points mb-3">
                <span>Project team: </span>
                {team}
              </h5>
              <h5 className="project-points mb-3">
                <span>Project Started: </span>
                {project.start_date}{" "}
              </h5>
              <h5 className="project-points mb-5">
                <span>Project Ends: </span> {project.end_date}
              </h5>
            </div>
            {/* <!-- ends --> */}
            <div className="col-md-12 col-xl-6">
              <img
                className="project-image"
                src={`${baseURL}${project.thumbnail.meta.download_url}`}
                alt="Project"
              />
            </div>
            {/* <!-- ends --> */}
          </div>
        </div>
        {/* <!-- ends --> */}
        <div className="project-indetails container">{contents}</div>
      </div>
    </section>
  ) : (
    <Loader />
  );
  useEffect(() => {
    fetchProject();
  }, [slug]);
  return <React.Fragment>{body}</React.Fragment>;
}

export default ProjectDetail;
