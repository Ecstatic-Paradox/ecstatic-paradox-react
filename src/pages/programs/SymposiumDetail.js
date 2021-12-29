import React, { Component } from 'react'

export default class SymposiumDetail extends Component {
    state = {
        symposium: null
    }

    componentDidMount() {
        this.fetchSymposium();
    }

    fetchSymposium = async () => {
        try {
            const data = await fetch(
                `http://localhost:8000/api/symposiums/${this.props.match.params.id}`
            )
            const item = await data.json()
            this.setState({ symposium: item })
        } catch (err) {
            console.log('some error occured')
        }
    }

    render() {
        var item = this.state.symposium ? this.state.symposium : ''
        const content = item ? <section id="wrapper">
            <div className="container-fluid webinar-detail">
                <h4 className="project-heading my-5">Talk Show</h4>
                <div className="webinar-overview">
                    <div className="row">
                        <div className="col-md-12 col-xl-6">
                            <img src={`http://localhost:8000${item.thumbnail.meta.download_url}`} alt="Project" />
                        </div>
                        <div className="col-md-12 col-xl-6 mb-5">
                            <h1 className="webinar-title mt-4 mb-3">{item.meta.title}</h1>
                            <h5 className="webinar-points mb-3"><span>Date:</span> {item.date}</h5>
                            <h5 className="webinar-points mb-3"><span>Time:</span> 2pm</h5>
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
                                <h2>Link</h2>
                                <div className="form mt-5 text-center">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control mb-0" value={`${item.youtube_link}`} aria-describedby="button-addon2" readOnly />
                                        <button className="btn filled-btn" type="button" id="button-addon2">
                                            <svg width="25" viewBox="0 0 512 512">
                                                <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" />
                                                <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h3 className="my-5">Or</h3>
                                    <a href={`${item.youtube_link}`} target="_blank" rel="noopener noreferrer">
                                        <button className="btn filled-btn" type="submit">

                                            Listen Now
                                            <span>
                                                <svg width="25" viewBox="0 0 512 512">
                                                    <path d="M157.65 192H88a8 8 0 00-8 8v112a8 8 0 008 8h69.65a16 16 0 0110.14 3.63l91.47 75a8 8 0 0012.74-6.46V119.83a8 8 0 00-12.74-6.44l-91.47 75a16 16 0 01-10.14 3.61zM352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                                </svg>
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> : ''
        return (
            <>
                {content}
            </>
        )
    }
}
