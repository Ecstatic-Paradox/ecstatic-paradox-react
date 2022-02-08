/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Collaborators from "../reusable/Collaborators";
import { baseURL } from "../reusable/server";
import FoundingMembers from "../components/about/FoundingMembers";
import GeneralMembers from "../components/about/GeneralMembers";
import mission from "../assests/mission.jpg";
import aboutus from "../assests/aboutus.png";
import aboutcover from "../assests/about-cover.jpg";
import Head from "next/head";
// import brochure from "../assests/brochure.pdf";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default class About extends Component {
  state = {
    coremembers: [],
    members: [],
  };

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    try {
      const data = await fetch(`${baseURL}/api/about/coremembers`);
      const items = await data.json();
      this.setState({ coremembers: items.filter((i) => i.is_core_member) });
      this.setState({ members: items.filter((i) => !i.is_core_member) });
    } catch (err) {
      console.log("some error occured");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Head></Head>

        {/* <!-- HERO --> */}
        <section id="wrapper">
          <div
            className="about-hero hero-section"
            style={{
              backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${aboutcover.src})`,
              backgroundPosition: "center",
            }}
          >
            <h1 className="big-text w-100">HOW WE REACHED HERE</h1>
            <p className="small-text w-100">
              We started with a team of 20 STEM enthusiasts, and through
              consistent efforts in our scientific adventures, our team
              upgraded.
            </p>
          </div>
        </section>
        {/* <!-- HERO --> */}

        {/* <!-- MISSION --> */}
        <section id="wrapper">
          <div className="about-cta container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="about-details">
                  <h1 className="title mb-5">Our Mission</h1>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus morbi accumsan, pulvinar sit nulla pellentesque
                    tellus, elementum. Massa vulputate malesuada in sit commodo
                    velit dictum. Urna, proin lorem non lectus consequat. Amet
                    at lacus, maecenas egestas viverra mi, nec morbi ac.
                    Vehicula tortor nibh nunc, aliquam tincidunt in egestas sit
                    nibh. Bibendum nisl.vulputate malesuada in sit commodo velit
                    dictum. Urna, proin lorem non lectus consequat.“ Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lacus morbi
                    accumsan, pulvinar sit nulla pellentesque tellus, elementum.
                    Massa vulputate malesuada in sit commodo velit dictum. Urna,
                    proin lorem non lectus consequat. Amet at lacus, maecenas
                    egestas viverra mi, nec morbi ac. Vehicula tortor nibh nunc,
                    aliquam tincidunt in egestas sit nibh. Bibendum
                    nisl.vulputate malesuada in sit commodo velit dictum. Urna,
                    proin lorem non lectus consequat.“
                  </h6>
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-12 col-lg-6">
                <div className="about-img">
                  <img
                    src="https://images.pexels.com/photos/325135/pexels-photo-325135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Mission"
                  />
                </div>
              </div>
              {/* <!-- ends --> */}
            </div>
          </div>
        </section>
        {/* <!-- MISSION --> */}

        {/* <!-- MISSION --> */}
        <section id="wrapper">
          <div className="about-cta container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="about-details">
                  <h1 className="title mb-5">Our Mission</h1>
                  <h6>
                    Ecstatic Paradox intends to make strides in Physics and Tech
                    and amend the way of independent actions by science
                    activists as team research and a group collaboration
                    activity. We visualize assembling a multi-national research
                    team that can invigorate spectrums of science making
                    scientific activities more effective and efficient. It is
                    also a self-learning platform where members gain proper
                    exposure to scientific methodologies. We intend to
                    rejuvenate science as group research and make impactful
                    contributions through team efforts.
                  </h6>
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-12 col-lg-6">
                <div className="about-img">
                  <img src={mission.src} alt="Mission" />
                </div>
              </div>
              {/* <!-- ends --> */}
            </div>
          </div>
        </section>
        {/* <!-- MISSION --> */}

        {/* <!-- SPONSOR --> */}
        {/* <section id="wrapper">
          <div className="container-fluid sponsors">
            <h1 className="title text-center">Our Collaborators</h1>
            <div className="sponsor-wrap row justify-content-center">
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- SPONSOR --> */}

        {/* <!-- ABOUT --> */}
        <section id="wrapper">
          <div className="about-cta container-fluid">
            <h1 className="title text-center mb-5">Know About Us</h1>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="about-img">
                  <img src={aboutus.src} alt="Mission" />
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-12 col-lg-6">
                <div className="about-details pe-5">
                  <h6>
                    This organizational initiative is based on teamwork. A team
                    with brilliant, innovative, and curious minds has received a
                    platform to make a change and learn as well. We are
                    responsible and abide by the rules of this team. We work
                    proactively, collectively, diligently, and flexibly. People
                    who pursue Theoretical and Mathematical Physics,
                    Astrophysics, Data Science, Web Development, Machine
                    Learning, and AI work together with intellectual liberty and
                    professional collaborations. The best thing is that everyone
                    works voluntarily with intense passion. We are working
                    together to create global change, invigorating the tangible
                    scientific spectrums of our world.
                  </h6>
                  <a>
                    <button type="button" className="btn filled-btn">
                      Read Annual Report
                    </button>
                  </a>
                </div>
              </div>
              {/* <!-- ends --> */}
            </div>
          </div>
        </section>
        {/* <!-- ABOUT --> */}

        {/* <!-- members --> */}
        <section id="wrapper">
          <div className="about-cta container-fluid">
            <h1 className="title text-center exception">MEET THE CREW</h1>
            <h3 className="medium-text mb-5">Founding Members</h3>
            <FoundingMembers members={this.state.coremembers} />

            <h3 className="medium-text mb-5">General Members</h3>
            <GeneralMembers members={this.state.members} />
          </div>
        </section>

        {/* <Collaborators /> */}
      </React.Fragment>
    );
  }
}
