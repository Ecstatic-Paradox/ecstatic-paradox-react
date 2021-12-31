import React, { Component } from 'react'

export default class ResearchDetail extends Component {

    state = {
        paper: null
    }

    componentDidMount() {
        this.fetchPaper();
    }

    fetchPaper = async () => {
        try {
            const data = await fetch(
                `http://localhost:8000/api/researchpapers/${this.props.match.params.slug}/`
            )
            const item = await data.json()
            console.log(item)
            this.setState({ paper: item })
        } catch (err) {
            console.log('some error occured')
        }
    }

    render() {
        var item = this.state.paper ? this.state.paper : ''
        const body = item ? item.content.map((con, index) => {
            return (
                con.type === 'heading' ? <React.Fragment key={index} ><h1 >{con.value}</h1><br /> </React.Fragment> : <React.Fragment key={index} ><div className='mt-5' dangerouslySetInnerHTML={{ __html: con.value }}></div><br /></React.Fragment>
            )
        }) : ''

        const content = item ? <section id="wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-8">
                        <h4 className="project-heading my-5">Research Paper</h4>
                        <div className="blog-detail-head w-100 d-flex align-items-center my-4">
                            {/* <div className="d-flex align-items-center ">
                                {item.author.map((author, i) => {
                                    return (
                                        <span key={i} className="mb-0 ms-3"> {author.first_name} {author.last_name} </span>
                                    )
                                })}
                            </div> */}
                            <div className="d-flex align-items-center ">
                                <span className="me-2">
                                    <svg width="25" viewBox="0 0 512 512">
                                        <rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="30"></rect>
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"></path>
                                    </svg>
                                </span>
                                <span>{item.date_published}</span>
                            </div>
                            <div className="d-flex align-items-center ms-5">
                                <span className="me-2">
                                    <svg width="25" viewBox="0 0 512 512">
                                        <circle cx="256" cy="256" r="64"></circle>
                                        <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path>
                                    </svg>
                                </span>
                                <span>{item.view}</span>
                            </div>
                            <div className="d-flex align-items-center ms-5">
                                <span className="me-2">
                                    <svg width="25" viewBox="0 0 512 512">
                                        <circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                        <circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                        <circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94" />
                                    </svg>
                                </span>
                                <span>Share</span>
                            </div>
                        </div>
                        <h1>{item.meta.title}</h1>


                        <div className="blog-detail-content">
                            <img className='mb-5' src={`http://localhost:8000${item.thumbnail.meta.download_url}`} alt="blog" />
                            {body}
                        </div>

                    </div>


                    <div className="col-xl-4">
                        <div className="tab-navigation">
                            {/* <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-topic-tab" data-bs-toggle="tab" data-bs-target="#nav-topic" type="button" role="tab" aria-controls="nav-topic" aria-selected="true">Topic</button>
                                    <button className="nav-link" id="nav-images-tab" data-bs-toggle="tab" data-bs-target="#nav-images" type="button" role="tab" aria-controls="nav-images" aria-selected="false">Images</button>
                                    <button className="nav-link" id="nav-reference-tab" data-bs-toggle="tab" data-bs-target="#nav-reference" type="button" role="tab" aria-controls="nav-reference" aria-selected="false">Refrences</button>
                                </div>
                            </nav>
                            <div className="tab-content p-2" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-topic" role="tabpanel" aria-labelledby="nav-topic-tab">
                                    TOPIC Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla.
                                    Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit
                                    sed mattis imperdiet tortor orci adipiscing. Quis accumsan eu, adipiscing nunc diam donec id nulla.
                                </div>
                                <div className="tab-pane fade" id="nav-images" role="tabpanel" aria-labelledby="nav-images-tab">
                                    IMAGES Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla.
                                    Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit
                                    sed mattis imperdiet tortor orci adipiscing. Quis accumsan eu, adipiscing nunc diam donec id nulla.
                                </div>
                                <div className="tab-pane fade" id="nav-reference" role="tabpanel" aria-labelledby="nav-reference-tab">
                                    REFERENCE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis accumsan eu, adipiscing nunc diam donec id nulla.
                                    Vulputate pharetra pretium elit aliquam tellus sed. Orci augue tellus quam nunc in ut nibh in. Elit tincidunt blandit
                                    sed mattis imperdiet tortor orci adipiscing. Quis accumsan eu, adipiscing nunc diam donec id nulla.
                                </div>
                            </div> */}
                        </div>
                        <div className="research-author text-center">
                            <h2>Authors info</h2>

                            {item.author.map((author, i) => {
                                return (
                                    <div key={i} className="author-details">
                                        <img src={`http://localhost:8000${author.avatar}`} alt="author" />
                                        <h2>{author.first_name} {author.last_name}</h2>
                                        {author.fb_profile_link ? <p>facebook: {author.fb_profile_link}</p> : ''}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </div>
        </section> : 'loading'

        return (
            <>
                {content}

            </>
        )
    }
}
