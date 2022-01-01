import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ResearchPapers extends Component {
    state = {
        papers: []
    }

    componentDidMount() {
        this.fetchPapers();
    }

    fetchPapers = async () => {
        try {
            const data = await fetch(
                'http://localhost:8000/api/researchpapers/'
            )
            const items = await data.json()
            this.setState({ papers: items.items })
        } catch (err) {
            console.log('some error occured')
        }
    }


    render() {

        var items = this.state.papers
        const content = items.map((item, index) => {
            if (index % 2 === 0) {
                return (<div key={item.meta.id} className="research-highlight-detail">
                    <div className="research-overview">
                        <div className="row">
                            <div className="col-md-12 col-xl-7">
                                <img src={`http://localhost:8000${item.thumbnail.meta.download_url}`} alt="Project" />
                            </div>

                            <div className="col-md-12 col-xl-5 mb-5">
                                <h1 className="research-title mb-3">{item.meta.title}</h1>
                                <div className="w-100 d-flex justify-content-between align-items-center my-4">
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">
                                            <svg width="25" viewBox="0 0 512 512">
                                                <rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="30"></rect>
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"></path>
                                            </svg>
                                        </span>
                                        <span>{item.date_published}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">
                                            <svg width="25" viewBox="0 0 512 512">
                                                <circle cx="256" cy="256" r="64"></circle>
                                                <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path>
                                            </svg>
                                        </span>
                                        <span>{item.view}</span>
                                    </div>
                                </div>
                                <p className="research-description">{item.description.split(" ").splice(0, 20).join(" ") + "..."}</p>
                                <div className="writtenby d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="27" viewBox="0 0 17 27" fill="none">
                                        <path d="M1.64367 0.821337C1.64367 0.603505 1.55713 0.394595 1.4031 0.240564C1.24907 0.0865336 1.04016 0 0.822329 0C0.604497 0 0.395587 0.0865336 0.241557 0.240564C0.0875261 0.394595 0.000992436 0.603505 0.000992436 0.821337V4.10669C0.000992436 4.76018 0.260593 5.38691 0.722684 5.849C1.18478 6.3111 1.81151 6.5707 2.465 6.5707H2.79354L0.395234 11.6301C0.108812 12.2349 -0.0254981 12.9005 0.00399008 13.5689C0.0334782 14.2374 0.225871 14.8886 0.56443 15.4658L6.25301 25.1691C6.51584 25.6175 6.92158 25.9543 7.39303 26.1349V14.5639C7.07986 14.3831 6.83511 14.1041 6.69673 13.77C6.55835 13.4359 6.53407 13.0655 6.62766 12.7162C6.72125 12.3669 6.92748 12.0583 7.21437 11.8381C7.50125 11.618 7.85275 11.4987 8.21436 11.4987C8.57597 11.4987 8.92748 11.618 9.21436 11.8381C9.50124 12.0583 9.70747 12.3669 9.80106 12.7162C9.89466 13.0655 9.87038 13.4359 9.732 13.77C9.59361 14.1041 9.34886 14.3831 9.0357 14.5639V26.1218C9.49236 25.9378 9.8866 25.6076 10.1429 25.1691L15.8314 15.4658C16.1697 14.8885 16.3618 14.2372 16.3911 13.5687C16.4203 12.9002 16.2857 12.2347 15.999 11.6301L13.6023 6.5707H13.9637C14.6172 6.5707 15.244 6.3111 15.706 5.849C16.1681 5.38691 16.4277 4.76018 16.4277 4.10669V0.821337C16.4277 0.603505 16.3412 0.394595 16.1872 0.240564C16.0331 0.0865336 15.8242 0 15.6064 0C15.3886 0 15.1797 0.0865336 15.0256 0.240564C14.8716 0.394595 14.7851 0.603505 14.7851 0.821337V4.10669C14.7851 4.32452 14.6985 4.53343 14.5445 4.68746C14.3905 4.84149 14.1816 4.92802 13.9637 4.92802H2.465C2.24717 4.92802 2.03826 4.84149 1.88423 4.68746C1.7302 4.53343 1.64367 4.32452 1.64367 4.10669V0.821337Z" fill="#7C7C7C" />
                                    </svg>
                                    {item.author.map((author, i) => {
                                        return (
                                            <h4 key={i} className="mb-0 ms-3"> {author.first_name} {author.last_name} </h4>
                                        )
                                    })}
                                </div>
                                <Link to={`research-papers/${item.slug}`}><button type="button" className="btn filled-btn">Read Abstract</button></Link>
                            </div>

                        </div>
                    </div>
                </div>)
            } else {
                return (
                    <div key={item.meta.id} className="research-marked">
                        <div className="research-overview">
                            <div className="row">
                                <div className="col-md-12 col-xl-5 mb-5">
                                    <h1 className="research-title mb-3">{item.meta.title}</h1>
                                    <div className="w-100 d-flex justify-content-between align-items-center my-4">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2">
                                                <svg width="25" viewBox="0 0 512 512">
                                                    <rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="30"></rect>
                                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"></path>
                                                </svg>
                                            </span>
                                            <span>{item.meta.title}</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2">
                                                <svg width="25" viewBox="0 0 512 512">
                                                    <circle cx="256" cy="256" r="64"></circle>
                                                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path>
                                                </svg>
                                            </span>
                                            <span>{item.view}</span>
                                        </div>
                                    </div>
                                    <p className="research-description">{item.description.split(" ").splice(0, 20).join(" ") + "..."}</p>
                                    <div className="writtenby d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="27" viewBox="0 0 17 27" fill="none">
                                            <path d="M1.64367 0.821337C1.64367 0.603505 1.55713 0.394595 1.4031 0.240564C1.24907 0.0865336 1.04016 0 0.822329 0C0.604497 0 0.395587 0.0865336 0.241557 0.240564C0.0875261 0.394595 0.000992436 0.603505 0.000992436 0.821337V4.10669C0.000992436 4.76018 0.260593 5.38691 0.722684 5.849C1.18478 6.3111 1.81151 6.5707 2.465 6.5707H2.79354L0.395234 11.6301C0.108812 12.2349 -0.0254981 12.9005 0.00399008 13.5689C0.0334782 14.2374 0.225871 14.8886 0.56443 15.4658L6.25301 25.1691C6.51584 25.6175 6.92158 25.9543 7.39303 26.1349V14.5639C7.07986 14.3831 6.83511 14.1041 6.69673 13.77C6.55835 13.4359 6.53407 13.0655 6.62766 12.7162C6.72125 12.3669 6.92748 12.0583 7.21437 11.8381C7.50125 11.618 7.85275 11.4987 8.21436 11.4987C8.57597 11.4987 8.92748 11.618 9.21436 11.8381C9.50124 12.0583 9.70747 12.3669 9.80106 12.7162C9.89466 13.0655 9.87038 13.4359 9.732 13.77C9.59361 14.1041 9.34886 14.3831 9.0357 14.5639V26.1218C9.49236 25.9378 9.8866 25.6076 10.1429 25.1691L15.8314 15.4658C16.1697 14.8885 16.3618 14.2372 16.3911 13.5687C16.4203 12.9002 16.2857 12.2347 15.999 11.6301L13.6023 6.5707H13.9637C14.6172 6.5707 15.244 6.3111 15.706 5.849C16.1681 5.38691 16.4277 4.76018 16.4277 4.10669V0.821337C16.4277 0.603505 16.3412 0.394595 16.1872 0.240564C16.0331 0.0865336 15.8242 0 15.6064 0C15.3886 0 15.1797 0.0865336 15.0256 0.240564C14.8716 0.394595 14.7851 0.603505 14.7851 0.821337V4.10669C14.7851 4.32452 14.6985 4.53343 14.5445 4.68746C14.3905 4.84149 14.1816 4.92802 13.9637 4.92802H2.465C2.24717 4.92802 2.03826 4.84149 1.88423 4.68746C1.7302 4.53343 1.64367 4.32452 1.64367 4.10669V0.821337Z" fill="#7C7C7C" />
                                        </svg>
                                        {item.author.map((author, i) => {
                                            return (
                                                <h4 key={i} className="mb-0 ms-3"> {author.first_name} {author.last_name} </h4>
                                            )
                                        })}
                                    </div>
                                    <Link to={`research-papers/${item.slug}`}><button type="button" className="btn filled-btn">Read Abstract</button></Link>
                                </div>

                                <div className="col-md-12 col-xl-7">
                                    <img src={`http://localhost:8000${item.thumbnail.meta.download_url}`} alt="Project" />
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        })

        return (
            <>

                <section id="wrapper">
                    <div className="about-hero hero-section">
                        <h1 className="big-text">Research Paper</h1>
                        <p className="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
                        </p>
                    </div>
                </section>


                <section id="wrapper">
                    {/* <div className="container-fluid research-highlight-detail">
                        <h4 className="project-heading my-5">Highlights</h4>
                        <div className="research-overview">
                            <div className="row">
                                <div className="col-md-12 col-xl-7">
                                    <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Project" />
                                </div>

                                <div className="col-md-12 col-xl-5 mb-5">
                                    <h1 className="research-title mb-3">The Complete Digital Marketing Course</h1>
                                    <div className="w-100 d-flex justify-content-between align-items-center my-4">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2">
                                                <svg width="25" viewBox="0 0 512 512">
                                                    <rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="30"></rect>
                                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"></path>
                                                </svg>
                                            </span>
                                            <span>11 November 2021</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2">
                                                <svg width="25" viewBox="0 0 512 512">
                                                    <circle cx="256" cy="256" r="64"></circle>
                                                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path>
                                                </svg>
                                            </span>
                                            <span>500 views</span>
                                        </div>
                                    </div>
                                    <p className="research-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a, cupiditate ratione eveniet quos repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a, cupiditate ratione eveniet quos repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti delectus hic a, cupiditate ratione eveniet quos repellat.</p>
                                    <div className="writtenby d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="27" viewBox="0 0 17 27" fill="none">
                                            <path d="M1.64367 0.821337C1.64367 0.603505 1.55713 0.394595 1.4031 0.240564C1.24907 0.0865336 1.04016 0 0.822329 0C0.604497 0 0.395587 0.0865336 0.241557 0.240564C0.0875261 0.394595 0.000992436 0.603505 0.000992436 0.821337V4.10669C0.000992436 4.76018 0.260593 5.38691 0.722684 5.849C1.18478 6.3111 1.81151 6.5707 2.465 6.5707H2.79354L0.395234 11.6301C0.108812 12.2349 -0.0254981 12.9005 0.00399008 13.5689C0.0334782 14.2374 0.225871 14.8886 0.56443 15.4658L6.25301 25.1691C6.51584 25.6175 6.92158 25.9543 7.39303 26.1349V14.5639C7.07986 14.3831 6.83511 14.1041 6.69673 13.77C6.55835 13.4359 6.53407 13.0655 6.62766 12.7162C6.72125 12.3669 6.92748 12.0583 7.21437 11.8381C7.50125 11.618 7.85275 11.4987 8.21436 11.4987C8.57597 11.4987 8.92748 11.618 9.21436 11.8381C9.50124 12.0583 9.70747 12.3669 9.80106 12.7162C9.89466 13.0655 9.87038 13.4359 9.732 13.77C9.59361 14.1041 9.34886 14.3831 9.0357 14.5639V26.1218C9.49236 25.9378 9.8866 25.6076 10.1429 25.1691L15.8314 15.4658C16.1697 14.8885 16.3618 14.2372 16.3911 13.5687C16.4203 12.9002 16.2857 12.2347 15.999 11.6301L13.6023 6.5707H13.9637C14.6172 6.5707 15.244 6.3111 15.706 5.849C16.1681 5.38691 16.4277 4.76018 16.4277 4.10669V0.821337C16.4277 0.603505 16.3412 0.394595 16.1872 0.240564C16.0331 0.0865336 15.8242 0 15.6064 0C15.3886 0 15.1797 0.0865336 15.0256 0.240564C14.8716 0.394595 14.7851 0.603505 14.7851 0.821337V4.10669C14.7851 4.32452 14.6985 4.53343 14.5445 4.68746C14.3905 4.84149 14.1816 4.92802 13.9637 4.92802H2.465C2.24717 4.92802 2.03826 4.84149 1.88423 4.68746C1.7302 4.53343 1.64367 4.32452 1.64367 4.10669V0.821337Z" fill="#7C7C7C" />
                                        </svg>
                                        <h4 className="mb-0 ms-3">John Doe & Jhonny Khalifa</h4>
                                    </div>
                                    <Link to="research-papers/detail"><button type="button" className="btn filled-btn">Read Abstract</button></Link>
                                </div>

                            </div>
                        </div>
                    </div> */}

                    <div className='container-fluid'>
                        <h4 className="project-heading my-5">Latest</h4>
                        {content}

                    </div>

                </section>

            </>
        )
    }
}




