import React, { Component } from 'react'
import Collaborators from '../reusable/Collaborators';
import FoundingMembers from './FoundingMembers';
import GeneralMembers from './GeneralMembers';


export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <!-- HERO --> */}
                <section id="wrapper">
                    <div className="about-hero hero-section">
                        <h1 className="big-text">HOW WE REACH HERE</h1>
                        <p className="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum.
                                        Massa vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas
                                        viverra mi, nec morbi ac. Vehicula tortor nibh nunc, aliquam tincidunt in egestas sit nibh. Bibendum nisl.vulputate malesuada in
                                        sit commodo velit dictum. Urna, proin lorem non lectus consequat.“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                                        morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum. Massa vulputate malesuada in sit commodo velit dictum. Urna, proin
                                        lorem non lectus consequat. Amet at lacus, maecenas egestas viverra mi, nec morbi ac. Vehicula tortor nibh nunc, aliquam tincidunt in
                                        egestas sit nibh. Bibendum nisl.vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat.“
                                    </h6>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-12 col-lg-6">
                                <div className="about-img">
                                    <img src="https://images.pexels.com/photos/325135/pexels-photo-325135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mission" />
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
                                    <img src="https://images.pexels.com/photos/325135/pexels-photo-325135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mission" />
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-12 col-lg-6">
                                <div className="about-details pe-5">
                                    <h6>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum.
                                        Massa vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas
                                        viverra mi, nec morbi ac. Vehicula tortor nibh nunc, aliquam tincidunt in egestas sit nibh. Bibendum nisl.vulputate malesuada in
                                        sit commodo velit dictum. Urna, proin lorem non lectus consequat.“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum.
                                        Massa vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas
                                        viverra mi, nec morbi ac. Vehicula tortor nibh nunc, aliquam tincidunt in egestas sit nibh. Bibendum nisl.vulputate malesuada in
                                        sit commodo velit dictum. Urna, proin lorem non lectus consequat.“
                                    </h6>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- ABOUT --> */}


                <Collaborators />

                {/* <!-- members --> */}
                <section id="wrapper">
                    <div className="about-cta container-fluid">
                        <h1 className="title text-center exception">MEET THE CREW</h1>
                        <h3 className="medium-text mb-5">Founding Members</h3>
                        <FoundingMembers />

                        <h3 className="medium-text mb-5">General Members</h3>
                        <GeneralMembers />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
