import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Events extends Component {
    render() {
        return (

            < section id="wrapper" >
                <div className="cover text-center justify-content-center" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url("https://images.pexels.com/photos/8761540/pexels-photo-8761540.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")', backgroundAttachment: 'unset' }}>
                    <div className="w-100">
                        <h1 className="big-text mb-4">Our Research Papers</h1>
                        <Link to="/research-papers">
                            <button type="button" className="btn filled-btn">View Researches</button>
                        </Link>
                        <div className="row event-wrap">
                            <div className="col-md-6">
                                <div className="event-card">
                                    <h2>Lorem Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div className="col-md-6">
                                <div className="event-card">
                                    <h2>Lorem Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </div>
            </section >

        )
    }
}
