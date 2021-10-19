import React, { Component } from 'react'
import logo from '../assests/logo.png'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">
                            <img src={logo} alt="Paradox-Logo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="project.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Projects
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="project.html">Action</a></li>
                                        <li><a class="dropdown-item" href="project.html">Another action</a></li>
                                        <li><a class="dropdown-item" href="project.html">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="publication.html">Publications</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="programs.html">Programs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="program.html">Courses</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- NAVBAR --> */}


                {/* <!-- HERO --> */}
                <section id="wrapper">
                    <div class="hero-section">
                        <div>
                            <h1 class="big-text">Lorem Ipsum Dolor Sit Amet, <br />Consectetur Adipiscing</h1>
                            <h6 class="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</h6>
                            <button type="button" class="btn outline-btn">Explore site</button>
                        </div>
                    </div>
                </section>
                {/* <!-- HERO --> */}


                {/* <!-- SLIDER --> */}
                <section id="wrapper">
                    <h1 class="title text-center mb-5">Projects</h1>

                    <Swiper
                        // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
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
                        <SwiperSlide>
                            <div className="slide-card" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 30%), rgb(20 20 40 / 30%)), url("https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")' }}>
                                <div className="slide-card-body">
                                    <button type="button" class="btn filled-btn">See More</button>
                                    <h3 class="medium-text">Lorem Ipsum Dolor</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-card" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 30%), rgb(20 20 40 / 30%)), url("https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")' }}>
                                <div className="slide-card-body">
                                    <button type="button" class="btn filled-btn">See More</button>
                                    <h3 class="medium-text">Lorem Ipsum Dolor</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-card" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 30%), rgb(20 20 40 / 30%)), url("https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")' }}>
                                <div className="slide-card-body">
                                    <button type="button" class="btn filled-btn">See More</button>
                                    <h3 class="medium-text">Lorem Ipsum Dolor</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-card" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 30%), rgb(20 20 40 / 30%)), url("https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")' }}>
                                <div className="slide-card-body">
                                    <button type="button" class="btn filled-btn">See More</button>
                                    <h3 class="medium-text">Lorem Ipsum Dolor</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide-card" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 30%), rgb(20 20 40 / 30%)), url("https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")' }}>
                                <div className="slide-card-body">
                                    <button type="button" class="btn filled-btn">See More</button>
                                    <h3 class="medium-text">Lorem Ipsum Dolor</h3>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>


                </section>
                {/* <!-- SLIDER --> */}


                {/* <!-- COVER --> */}
                <section id="wrapper">
                    <div class="cover" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")' }} >
                        <div>
                            <h1 class="big-text">Our Journey</h1>
                            <h6 class="small-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Vitae cumque error consectetur!Veniam,<br /> minus eius Laboriosam.</h6>
                            <button type="button" class="btn filled-btn">Learn About Us</button>
                        </div>
                    </div>
                </section>
                {/* <!-- COVER --> */}


                {/* <!-- CTA --> */}
                <section id="wrapper">
                    <div class="calltoaction container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-7 pe-md-5">
                                <div class="cta-details">
                                    <h1 class="title">From John Doe</h1>
                                    <p class="small-text">
                                        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus morbi accumsan, pulvinar sit nulla pellentesque tellus, elementum. Massa vulputate
                                        malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas viverra mi, nec morbi ac. Vehicula
                                        malesuada in sit commodo velit dictum. Urna, proin lorem non lectus consequat. Amet at lacus, maecenas egestas viverra mi, nec morbi ac. Vehicula
                                        tortor nibh nunc, aliquam tincidunt in egestas sit nibh. Bibendum nisl.vulputate malesuada in sit commodo velit dictum. Urna, proin lorem non
                                        lectus consequat. “
                                    </p>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div class="col-md-5">
                                <div class="cta-img p-md-5">
                                    <img src="https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Call to action" />
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- CTA --> */}


                {/* <!-- COVER --> */}
                <section id="wrapper">
                    <div class="cover text-center justify-content-center" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url("https://images.pexels.com/photos/8761540/pexels-photo-8761540.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")', backgroundAttachment: 'unset' }}>
                        <div class="w-100">
                            <h1 class="big-text mb-4">Our latest Events</h1>
                            <button type="button" class="btn filled-btn">See all programs</button>
                            <div class="row event-wrap">
                                <div class="col-md-6">
                                    <div class="event-card">
                                        <h2>Lorem Ipsum</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                                {/* <!-- ends --> */}
                                <div class="col-md-6">
                                    <div class="event-card">
                                        <h2>Lorem Ipsum</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                </div>
                                {/* <!-- ends --> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- COVER --> */}


                {/* <!-- BLOGS --> */}
                <section id="wrapper">
                    <h1 class="title text-center mb-5">Must-Reads From Us</h1>
                    <div class="blog-wrap container-fluid">
                        <div class="blog-card">
                            <div class="blog-img">
                                <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="Blog" />
                                <span class="badge bg-primary">Primary</span>
                            </div>
                            <div class="card-body">
                                <div class="blog-views mb-2">
                                    <svg viewBox="0 0 512 512">
                                        <circle cx="256" cy="256" r="64" />
                                        <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                    </svg>
                                    <span>500 views</span>
                                </div>
                                <h4>The Complete AI Course</h4>
                                <p class="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        {/* <!-- ends --> */}

                        <div class="blog-card">
                            <div class="blog-img">
                                <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="Blog" />
                                <span class="badge bg-primary">Primary</span>
                            </div>
                            <div class="card-body">
                                <div class="blog-views mb-2">
                                    <svg viewBox="0 0 512 512">
                                        <circle cx="256" cy="256" r="64" />
                                        <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                    </svg>
                                    <span>500 views</span>
                                </div>
                                <h4>The Complete AI Course</h4>
                                <p class="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        {/* <!-- ends --> */}

                        <div class="blog-card">
                            <div class="blog-img">
                                <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="Blog " />
                                <span class="badge bg-primary">Primary</span>
                            </div>
                            <div class="card-body">
                                <div class="blog-views mb-2">
                                    <svg viewBox="0 0 512 512">
                                        <circle cx="256" cy="256" r="64" />
                                        <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                    </svg>
                                    <span>500 views</span>
                                </div>
                                <h4>The Complete AI Course</h4>
                                <p class="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        {/* <!-- ends --> */}

                    </div>
                </section>
                {/* <!-- BLOGS --> */}


                {/* <!-- GALLERY --> */}
                <section id="wrapper">
                    <h1 class="title text-center mb-5">Shots From Special Moments </h1>
                    <div class="container-fluid">
                        <div class="gallery-wrap">
                            <div class="gallery-item">
                                <img class="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                            </div>

                            <div class="gallery-item">
                                <img class="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
                            </div>

                            <div class="gallery-item">
                                <img class="gallery-image" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                            </div>

                            <div class="gallery-item">
                                <img class="gallery-image" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop" alt="sunset behind San Francisco city skyline" />
                            </div>

                            <div class="gallery-item">
                                <img class="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
                            </div>

                            <div class="gallery-item">
                                <img class="gallery-image" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
                            </div>

                            <div class="gallery-item">
                                <img class="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                            </div>

                            <div class="gallery-item">
                                <img class="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" />
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- GALLERY -->


                <!-- SPONSOR --> */}
                <section id="wrapper">
                    <div class="container-fluid sponsors">
                        <h1 class="title text-center">Our Collaborators</h1>
                        <div class="sponsor-wrap row justify-content-center">
                            <div class="col-md-3">
                                <div class="sponsor-img">
                                    <h1 class="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div class="col-md-3">
                                <div class="sponsor-img">
                                    <h1 class="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div class="col-md-3">
                                <div class="sponsor-img">
                                    <h1 class="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div class="col-md-3">
                                <div class="sponsor-img">
                                    <h1 class="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div class="col-md-3">
                                <div class="sponsor-img">
                                    <h1 class="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div class="col-md-3">
                                <div class="sponsor-img">
                                    <h1 class="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div class="col-md-3">
                                <div class="sponsor-img">
                                    <h1 class="title">Sponsor</h1>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- SPONSOR -->


                <!-- FOOTER --> */}
                <footer id="footer">
                    <div class="container-fluid">
                        <div class="footer-wrap">
                            <div class="footer-row">
                                <img src={logo} alt="paradox-Logo" />
                            </div>
                            {/* <!-- ends --> */}
                            <div class="footer-row">
                                <h3 class="mb-3">Subscribe to Newletter</h3>
                                <div class="row g-2">
                                    <input type="email" id="email-input" placeholder="Email" aria-describedby="emailHelp" />
                                    <button type="button" class="btn filled-btn">Subscribe</button>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                            <div class="footer-row">
                                <div class="social-icon">
                                    <a href="facebook.com">
                                        <svg viewBox="0 0 16 16">
                                            <path d="M13.3375 2H2.6625C2.29687 2 2 2.29687 2 2.6625V13.3375C2 13.7031 2.29687 14 2.6625 14H8V9.25H6.56563V7.5H8V6.20625C8 4.65625 9.075 3.8125 10.4594 3.8125C11.1219 3.8125 11.8344 3.8625 12 3.88438V5.50313H10.8969C10.1438 5.50313 10 5.85938 10 6.38438V7.5H11.7937L11.5594 9.25H10V14H13.3375C13.7031 14 14 13.7031 14 13.3375V2.6625C14 2.29687 13.7031 2 13.3375 2Z"></path>
                                        </svg>
                                    </a>
                                    <a href="instagram.com">
                                        <svg viewBox="0 0 512 512">
                                            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                                        </svg>
                                    </a>
                                    <a href="twitter.com">
                                        <svg viewBox="0 0 512 512">
                                            <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- ends --> */}
                        </div>
                        <hr />
                        <div class="copyright text-center pt-4">
                            <h6>Copyright 2021 - All Rights Reserved</h6>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
