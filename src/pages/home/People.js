import React, { Component } from 'react'

export default class People extends Component {
    render() {
        return (

            < section id="wrapper" >
                <div className="calltoaction container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-7 pe-md-5">
                            <div className="cta-details">
                                <h1 className="title">From The General Manger</h1>
                                <p className="small-text">
                                    Ecstatic Paradox is a sublime manifestation of diverse yet dedicated collaboration. Our team focuses on impacting 
                                    the mainstream sciences through scientific projects. We are a part of the change we wish for, and in these rigorous 
                                    efforts towards generating ripples in the realm of science, we have recognized the need for being actual research 
                                    practitioners. With this, we are in this relentless thrive to serve for nothing but one goal: the amalgamation of 
                                    Physics and Tech. Only shared actions and minds can make us achieve the best of what we can.
                                </p>
                            </div>
                        </div>
                        {/* <!-- ends --> */}
                        <div className="col-md-5">
                            <div className="cta-img p-md-5">
                                <img src="https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Call to action" />
                            </div>
                        </div>
                        {/* <!-- ends --> */}
                    </div>
                </div>
            </section >

        )
    }
}
