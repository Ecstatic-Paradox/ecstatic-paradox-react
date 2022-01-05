import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { baseURL } from '../reusable/server';
import { truncate } from '../reusable/truncate';

export default class Symposium extends Component {
    state = {
        symposium: []
    }

    componentDidMount() {
        this.fetchSymposiums();
    }

    fetchSymposiums = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/symposiums/`
            )
            const item = await data.json()
            this.setState({ symposium: item.items })
        } catch (err) {
            console.log('some error occured')
        }
    }
    render() {
        var items = this.state.symposium ? this.state.symposium : ''
        const content = items.map(item => {
            return (
                <div key={item.meta.id} className="webinar-live-card">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={`${baseURL}${item.thumbnail.meta.download_url}`} className="card-img-top" alt="Blog" />
                        </div>

                        <div className="col p-1">
                            <h3>{item.meta.title}</h3>
                            <h5 className="webinar-points mt-4 mb-3"><span>Date:</span> {item.date}</h5>
                            <h5 className="webinar-points mb-3"><span>Time:</span> 2pm</h5>
                            <p>{truncate(item.description, 20)}</p>
                            <div className="webinar-card-btn d-flex align-items-center mt-5">
                                <Link to={`/symposiums/${item.meta.id}`}><button type="button" className="btn filled-btn me-4">View Details</button></Link>
                                <a href={item.youtube_link} target="_blank" rel="noopener noreferrer">
                                    Go to link
                                    <svg width="25" viewBox="0 0 512 512">
                                        <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"></rect>
                                        <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })
        return (
            <>
                <section id="wrapper">
                    <div className="about-hero hero-section">
                        <h1 className="big-text">Symposium</h1>
                        <p className="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
                        </p>
                    </div>
                </section>


                <section id="wrapper">
                    <h1 className="title text-center mb-5">On Live</h1>
                    <div className="container">
                        {content}

                    </div>
                </section>


                {/* <section id="wrapper">
                    <h1 className="title text-center mb-5">History</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-xl-6 webinar-live-card">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="card-img-top" alt="Blog" />
                                    </div>

                                    <div className="col p-1">
                                        <h3>The Complete AI Course</h3>
                                        <h5 className="webinar-points my-3"><span>Held on:</span> May 5</h5>
                                        <p className="webinar-history-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a...</p>
                                        <div className="webinar-card-btn d-flex align-items-center mt-3">
                                            <Link to="/talk-shows/detail"><button type="button" className="btn filled-btn me-4">View Details</button></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-12 col-xl-6 webinar-live-card">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="card-img-top" alt="Blog" />
                                    </div>

                                    <div className="col p-1">
                                        <h3>The Complete AI Course</h3>
                                        <h5 className="webinar-points my-3"><span>Held on:</span> May 5</h5>
                                        <p className="webinar-history-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a...</p>
                                        <div className="webinar-card-btn d-flex align-items-center mt-3">
                                            <Link to="/talk-shows/detail"><button type="button" className="btn filled-btn me-4">View Details</button></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}
            </>
        )
    }
}
