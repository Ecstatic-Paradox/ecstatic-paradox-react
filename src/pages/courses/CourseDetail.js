import React, { Component } from 'react'
import Loader from '../reusable/Loader';
import { baseURL } from '../reusable/server';

export default class CourseDetail extends Component {
    state = {
        course: null
    }

    componentDidMount() {
        this.fetchCourse();
    }

    fetchCourse = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/courses/${this.props.match.params.id}`
            )
            const item = await data.json()
            this.setState({ course: item })
        } catch (err) {
            console.log('some error occured')
        }
    }
    render() {
        var item = this.state.course ? this.state.course : ''
        const content = item ? <section id="wrapper">
            <div className="container-fluid webinar-detail">
                <h4 className="project-heading my-5">Course</h4>
                <div className="webinar-overview">
                    <div className="row">
                        <div className="col-md-12 col-xl-6">
                            <img src={`${baseURL}${item.thumbnail.meta.download_url}`} alt="Project" />
                        </div>

                        <div className="col-md-12 col-xl-6 mb-5">
                            <h1 className="webinar-title mt-4 mb-3">{item.meta.title}</h1>
                            <h5 className="webinar-points mb-3"><span>Published on :</span> {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</h5>
                        </div>

                    </div>
                </div>

                <div className="webinar-indetails">
                    <h1>Description</h1>
                    <div className="row">
                        <div className="col-md-12"> //col-xl-6
                            <h6>
                                {item.description}
                            </h6>

                        </div>

                        {/* <div className="col-md-12 col-xl-6">
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
                                    <a href={`${item.registration_form}`} target="_blank" rel="noopener noreferrer">
                                        <button className="btn filled-btn" type="submit">
                                            Join Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div> */}

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
