import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { baseURL } from '../reusable/server';
import { truncate } from '../reusable/truncate';
import coursescover from "../../assests/graduation.png"

export default class Courses extends Component {

    state = {
        courses: []
    }

    componentDidMount() {
        this.fetchCourses();
    }

    fetchCourses = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/courses/`
            )
            const item = await data.json()
            this.setState({ courses: item.items })
        } catch (err) {
            console.log('some error occured')
        }
    }


    render() {
        var items = this.state.courses ? this.state.courses : ''
        const content = items.map(item => {
            return (
                <div key={item.meta.id} className="col">
                    <Link to={`/courses/${item.meta.id}`}>
                        <div className="blog-card">
                            <div className="blog-img">
                                <img src={`${baseURL}${item.thumbnail.meta.download_url}`} className="card-img-top" alt="Blog" />
                            </div>
                            <div className="card-body">
                                <h4>{item.meta.title}</h4>
                                <p className="small-text">{truncate(item.description, 20)}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
        return (
            <>

                <section id="wrapper">
                    <div className="about-hero hero-section" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${coursescover})`, backgroundPosition: "center" }}>
                        <h1 className="big-text">Courses</h1>
                        <p className="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
                        </p>
                    </div>
                </section>


                <section id="wrapper">
                    <div className="container-fluid">
                        <div className="snippet-head">
                            <h1 className="title mb-4">Learn From Us</h1>
                            <h5 className="snippet-head-paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum
                            </h5>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {content}
                        </div>
                        {/* <div className="text-center">
                            <button type="button" className="btn filled-btn my-5">Load More</button>
                        </div> */}
                    </div>
                </section>
            </>
        )
    }
}
