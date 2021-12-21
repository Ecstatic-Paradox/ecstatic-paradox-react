import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default class HomeProjects extends Component {
    state = {
        projects: [],
    }

    componentDidMount() {
        this.fetchProjects();
    }



    fetchProjects = async () => {
        try {
            const data = await fetch(
                'http://localhost:8000/api/pojects/'
            )
            const items = await data.json()
            this.setState({ projects: items.items })
        } catch (error) {
            console.log("error occured")
        };

    }
    render() {


        const projects = this.state.projects.map(proj => {
            return (
                <SwiperSlide key={proj.id} >
                    <div className="slide-card" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 30%), rgb(20 20 40 / 30%)), url(${proj.thumbnail})` }}>
                        <div className="slide-card-body">
                            <Link to={`/projects/${proj.slug}`}><button type="button" className="btn filled-btn">See More</button></Link>
                            <h3 className="medium-text">{proj.title}</h3>
                        </div>
                    </div>
                </SwiperSlide>
            )
        }

        )


        return (
            <section id="wrapper">
                <div className="container-fluid">
                    <h1 className="title text-center mb-5">Projects</h1>

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1300: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        {projects}
                    </Swiper>
                </div>

            </section>
        )
    }
}
