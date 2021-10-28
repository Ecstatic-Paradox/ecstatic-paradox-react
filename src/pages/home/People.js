import React, { Component } from 'react'

export default class People extends Component {
    render() {
        return (

            < section id="wrapper" >
                <div className="calltoaction container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-7 pe-md-5">
                            <div className="cta-details">
                                <h1 className="title">From John Doe</h1>
                                <p className="small-text">
                                    “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum. Massa vulputate
                                    malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas viverra mi, nec morbi ac. Vehicula
                                    malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas viverra mi, nec morbi ac. Vehicula
                                    tortor nibh nunc, aliquam tincidunt in egestas sit nibh. Bibendum nisl.vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non
                                    lectus consequat. “
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
