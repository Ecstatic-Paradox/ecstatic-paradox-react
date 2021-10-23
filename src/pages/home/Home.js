import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default class Home extends Component {

  state = {
    projects: [],
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    const data = await fetch(
      'http://localhost:8000/api/projects/'
    )
    const items = await data.json()
    this.setState({ projects: items.items })
    console.log(this.state.projects)
  }

  render() {

    const projects = this.state.projects.map(proj => {
      return (
        <SwiperSlide key={proj.id} >
          <div className="slide-card" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 30%), rgb(20 20 40 / 30%)), url(${proj.thumbnail})` }}>
            <div className="slide-card-body">
              <Link to={`/projects/${proj.id}`}><button type="button" className="btn filled-btn">See More</button></Link>
              <h3 className="medium-text">{proj.title}</h3>
            </div>
          </div>
        </SwiperSlide>
      )
    }

    )

    return (
      <React.Fragment>
        {/* <!-- HERO --> */}
        <section id="wrapper">
          <div className="hero-section">
            <div>
              <h1 className="big-text">Lorem Ipsum Dolor Sit<br /> Amet, Consectetur Adipiscing</h1>
              <h6 className="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</h6>
              <button type="button" className="btn outline-btn">Explore site</button>
            </div>
          </div>
        </section>
        {/* <!-- HERO --> */}


        {/* <!-- SLIDER --> */}
        <section id="wrapper">
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


        </section>
        {/* <!-- SLIDER --> */}


        {/* <!-- COVER --> */}
        <section id="wrapper">
          <div className="cover" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")' }} >
            <div>
              <h1 className="big-text">Our Journey</h1>
              <h6 className="small-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Vitae cumque error consectetur!Veniam,<br /> minus eius Laboriosam.</h6>
              <button type="button" className="btn filled-btn">Learn About Us</button>
            </div>
          </div>
        </section>
        {/* <!-- COVER --> */}


        {/* <!-- CTA --> */}
        <section id="wrapper">
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
        </section>
        {/* <!-- CTA --> */}


        {/* <!-- COVER --> */}
        <section id="wrapper">
          <div className="cover text-center justify-content-center" style={{ backgroundImage: 'linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url("https://images.pexels.com/photos/8761540/pexels-photo-8761540.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")', backgroundAttachment: 'unset' }}>
            <div className="w-100">
              <h1 className="big-text mb-4">Our latest Events</h1>
              <button type="button" className="btn filled-btn">See all programs</button>
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
        </section>
        {/* <!-- COVER --> */}


        {/* <!-- BLOGS --> */}
        <section id="wrapper">
          <h1 className="title text-center mb-5">Must-Reads From Us</h1>
          <div className="blog-wrap container-fluid">
            <div className="blog-card">
              <div className="blog-img">
                <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                <span className="badge bg-primary">Primary</span>
              </div>
              <div className="card-body">
                <div className="blog-views mb-2">
                  <svg viewBox="0 0 512 512">
                    <circle cx="256" cy="256" r="64" />
                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                  </svg>
                  <span>500 views</span>
                </div>
                <h4>The Complete AI Course</h4>
                <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            {/* <!-- ends --> */}

            <div className="blog-card">
              <div className="blog-img">
                <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog" />
                <span className="badge bg-primary">Primary</span>
              </div>
              <div className="card-body">
                <div className="blog-views mb-2">
                  <svg viewBox="0 0 512 512">
                    <circle cx="256" cy="256" r="64" />
                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                  </svg>
                  <span>500 views</span>
                </div>
                <h4>The Complete AI Course</h4>
                <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            {/* <!-- ends --> */}

            <div className="blog-card">
              <div className="blog-img">
                <img src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Blog " />
                <span className="badge bg-primary">Primary</span>
              </div>
              <div className="card-body">
                <div className="blog-views mb-2">
                  <svg viewBox="0 0 512 512">
                    <circle cx="256" cy="256" r="64" />
                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                  </svg>
                  <span>500 views</span>
                </div>
                <h4>The Complete AI Course</h4>
                <p className="small-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            {/* <!-- ends --> */}

          </div>
        </section>
        {/* <!-- BLOGS --> */}


        {/* <!-- GALLERY --> */}
        <section id="wrapper">
          <h1 className="title text-center mb-5">Shots From Special Moments </h1>
          <div className="container-fluid">
            <div className="gallery-wrap">
              <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop" alt="sunset behind San Francisco city skyline" />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" />
              </div>

            </div>
          </div>
        </section>
        {/* <!-- GALLERY -->


                <!-- SPONSOR --> */}
        <section id="wrapper">
          <div className="container-fluid sponsors">
            <h1 className="title text-center">Our Collaborators</h1>
            <div className="sponsor-wrap row justify-content-center">
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              {/* <!-- ends --> */}
              <div className="col-md-3">
                <div className="sponsor-img">
                  <h1 className="title">Sponsor</h1>
                </div>
              </div>
              {/* <!-- ends --> */}
            </div>
          </div>
        </section>
        {/* <!-- SPONSOR -->*/}


      </React.Fragment>
    );
  }
}
