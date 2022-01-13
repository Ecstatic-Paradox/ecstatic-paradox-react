import React, { Component } from 'react'
import Collaborators from '../reusable/Collaborators';
import { baseURL } from '../reusable/server';
import FoundingMembers from './FoundingMembers';
import GeneralMembers from './GeneralMembers';
import mission from "../../assests/mission.jpg";
import aboutus from "../../assests/aboutus.png";
import aboutcover from "../../assests/about-cover.jpg";
import brochure from "../../assests/brochure.pdf"





export default class About extends Component {

    state = {
        coremembers: [],
        members: []
    }

    componentDidMount() {
        this.fetchProjects();
    }

    fetchProjects = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/about/coremembers`
            )
            const items = await data.json()
            this.setState({ coremembers: items.filter(i => i.is_core_member) })
            this.setState({ members: items.filter(i => !i.is_core_member) })
        } catch (err) {
            console.log('some error occured')
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <!-- HERO --> */}
                <section id="wrapper">
                    <div className="about-hero hero-section" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${aboutcover})`, backgroundPosition: "center" }}>
                        <h1 className="big-text w-100">HOW WE REACHED HERE</h1>
                        <p className="small-text w-100">
                            We started with a team of 20 STEM enthusiasts, and through consistent efforts in our scientific adventures, our team upgraded.
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
                                        Ecstatic Paradox intends to make strides in Physics and Tech and amend the way of independent actions by science
                                        activists as team research and a group collaboration activity. We visualize assembling a multi-national research
                                        team that can invigorate spectrums of science making scientific activities more effective and efficient. It is
                                        also a self-learning platform where members gain proper exposure to scientific methodologies. We intend to
                                        rejuvenate science as group research and make impactful contributions through team efforts.
                                    </h6>

                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-12 col-lg-6">
                                <div className="about-img">
                                    <img src={mission} alt="Mission" />
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- MISSION --> */}


                {/* <!-- ABOUT --> */}
                <section id="wrapper">
                    <div className="about-cta container-fluid">
                        <h1 className="title text-center mb-5">Know About Us</h1>
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="about-img">
                                    <img src={aboutus} alt="Mission" />
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-12 col-lg-6">
                                <div className="about-details pe-5">
                                    <h6>
                                        This organizational initiative is based on teamwork. A team with brilliant, innovative, and curious minds has received
                                        a platform to make a change and learn as well. We are responsible and abide by the rules of this team. We work
                                        proactively, collectively, diligently, and flexibly. People who pursue Theoretical and Mathematical Physics,
                                        Astrophysics, Data Science, Web Development, Machine Learning, and AI work together with intellectual liberty
                                        and professional collaborations. The best thing is that everyone works voluntarily with intense passion. We are
                                        working together to create global change, invigorating the tangible scientific spectrums of our world.
                                    </h6>
                                    <a href={brochure}><button type="button" class="btn filled-btn">Read Annual Report</button></a>
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
        )
    }
}
