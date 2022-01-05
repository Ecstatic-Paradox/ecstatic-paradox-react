import React, { Component } from 'react'
import Loader from '../reusable/Loader';
import { baseURL } from '../reusable/server';

export default class WebinarDetail extends Component {
    state = {
        webinar: null
    }

    componentDidMount() {
        this.fetchWebinar();
    }

    fetchWebinar = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/webinars/${this.props.match.params.id}`
            )
            const item = await data.json()
            this.setState({ webinar: item })
        } catch (err) {
            console.log('some error occured')
        }
    }

    render() {
        var item = this.state.webinar ? this.state.webinar : ''
        const content = item ? <section id="wrapper">
            <div className="container-fluid webinar-detail">
                <h4 className="project-heading my-5">Webinar</h4>
                <div className="webinar-overview">
                    <div className="row">
                        <div className="col-md-12 col-xl-6">
                            <img src={`${baseURL}${item.thumbnail.meta.download_url}`} alt="Project" />
                        </div>

                        <div className="col-md-12 col-xl-6 mb-5">
                            <h4 className="webinar-title mt-4 mb-3">{item.meta.title}</h4>
                            <h6 className="webinar-points mb-3"><span>Time:</span> {new Date(item.program_date).toLocaleTimeString('np-NP', { year: 'numeric', month: 'short', day: 'numeric' })}</h6>

                        </div>

                    </div>
                </div>

                <div className="webinar-indetails">
                    <h1>Description</h1>
                    <div className="row">
                        <div className="col-md-12 col-xl-6">
                            <h6>
                                {item.description}
                            </h6>

                        </div>

                        <div className="col-md-12 col-xl-6">
                            <div className="webinar-form">
                                <h2>Join Webinar</h2>
                                <div className="form mt-5">
                                    <input type="text" className="form-control" placeholder="Your Name" aria-label="Your Name" required />
                                    <input type="text" className="form-control" placeholder="Your Address" aria-label="Your Address" required />
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Mail" required />
                                    <button className="btn filled-btn" type="submit">
                                        <span>
                                            <svg width="25" viewBox="0 0 512 512" fill="#fff">
                                                <path d="M473 39.05a24 24 0 00-25.5-5.46L47.47 185h-.08a24 24 0 001 45.16l.41.13 137.3 58.63a16 16 0 0015.54-3.59L422 80a7.07 7.07 0 0110 10L226.66 310.26a16 16 0 00-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0023-15.46L478.39 64.62A24 24 0 00473 39.05z" />
                                            </svg>
                                        </span>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section> : <Loader />
        return (
            <>
                {content}
            </>
        )
    }
}
