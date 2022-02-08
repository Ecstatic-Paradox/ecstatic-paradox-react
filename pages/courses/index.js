import React, { Component } from "react";
import Link from "next/link";
import { baseURL } from "../../reusable/server";
import { truncate } from "../../reusable/truncate";
import coursescover from "../../assests/courses.jpg";
import Head from "next/head";

export default class Courses extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses = async () => {
    try {
      const data = await fetch(`${baseURL}/api/courses/`);
      const item = await data.json();
      this.setState({ courses: item.items });
    } catch (err) {
      console.log("some error occured");
    }
  };

  render() {
    var items = this.state.courses ? this.state.courses : "";
    const content = items.map((item) => {
      return (
        <div key={item.meta.id} className="col">
          <Link href={`/courses/${item.meta.id}`}>
            <a>
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={`${baseURL}${item.thumbnail.meta.download_url}`}
                    className="card-img-top"
                    alt="Blog"
                  />
                </div>
                <div className="card-body">
                  <h4>{item.meta.title}</h4>
                  <p className="small-text">{truncate(item.description, 20)}</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      );
    });
    return (
      <>
        <Head></Head>
        <section id="wrapper">
          <div
            className="about-hero hero-section"
            style={{
              backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${coursescover.src})`,
              backgroundPosition: "center",
            }}
          >
            <h1 className="big-text">Courses</h1>
            <p className="small-text">
              We create opportunities for students to learn various concepts in
              Physics and Tech.
            </p>
          </div>
        </section>

        <section id="wrapper">
          <div className="container-fluid">
            <div className="snippet-head">
              <h1 className="title mb-4">Learn From Us</h1>
              <h5 className="snippet-head-paragraph">
                Our courses are devised after substantial discussion. We bring
                easily comprehensible yet highly rigorous content to pave path
                towards academic excellence.
              </h5>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {content}
            </div>
            {/* <div className="text-center">
                            <button type="button" className="btn filled-btn my-5">Load More</button>
                        </div> */}
          </div>
        </section>
      </>
    );
  }
}
