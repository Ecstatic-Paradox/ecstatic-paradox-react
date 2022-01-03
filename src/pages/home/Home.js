import React, { Component } from "react";
import { Link } from "react-router-dom";
import Collaborators from "../reusable/Collaborators";
import Events from "./Events";
import Gallery from "./Gallery";
import HomeBlogs from "./HomeBlogs";
import HomeProjects from "./HomeProjects";
import People from "./People";

export default class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <section id="wrapper">
          <div className="hero-section">
            <div>
              <h1 className="big-text">Lorem Ipsum Dolor Sit<br /> Amet, Consectetur Adipiscing</h1>
              <h6 className="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</h6>
            </div>
          </div>
        </section>
        <HomeProjects />

        <section id="wrapper">
          <div className="cover" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")' }} >
            <div>
              <h1 className="big-text">Our Journey</h1>
              <h6 className="small-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Vitae cumque error consectetur!Veniam,<br /> minus eius Laboriosam.</h6>
              <Link to="/about"><button type="button" className="btn filled-btn">Learn About Us</button></Link>
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
