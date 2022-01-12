import React, { Component } from "react";
import { Link } from "react-router-dom";
import Collaborators from "../reusable/Collaborators";
import Events from "./Events";
import Gallery from "./Gallery";
import HomeBlogs from "./HomeBlogs";
import HomeProjects from "./HomeProjects";
import People from "./People";
import cover from "../../assests/cover.gif";
import journey from "../../assests/journey.jpg";

export default class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <section id="wrapper">
          <div className="hero-section" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${cover})`, backgroundPosition: "center" }} >
            <div>
              <h1 className="big-text">Where Physics Meets Tech</h1>
              <h6 className="small-text">A venture towards amalgamating rigorous Physics-based research with Tech-based applications</h6>
            </div>
          </div>
        </section>
        {/* <HomeProjects /> */}

        <section id="wrapper">
          <div className="cover" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${journey})` }}>
            <div>
              <h1 className="big-text">Our Journey</h1>
              <h6 className="small-text">We started with a few passion-driven humans leading to create first-of-its-kind collaboration in the domain of Physics and Tech</h6>
              <Link to="/about"><button type="button" className="btn filled-btn">Learn More</button></Link>
            </div>
          </div>
        </section>
        <People />
        <Events />
        <HomeBlogs />
        <Gallery />
        <Collaborators />
      </React.Fragment>
    );
  }
}
