import React, { Component } from 'react'
import Loader from '../reusable/Loader';
import { baseURL } from '../reusable/server'

function Content(item) {
    let item_tag
    switch (item.type) {
        case 'heading':
            item_tag = <h1>{item.value}</h1>;
            break;
        default:
            var cor = item.value
            item_tag = <div dangerouslySetInnerHTML={{ __html: cor.replaceAll('src="/media', `src="${baseURL}/media`) }}></div>;
            break;
    }
    return item_tag
}


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
                `${baseURL}/api/researchpapers/${this.props.match.params.slug}/`
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
                <React.Fragment key={index}>{Content(con)}<br /></React.Fragment>
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
                            <img className='mb-5' src={`${baseURL}${item.thumbnail.meta.download_url}`} alt="blog" />
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
                                        <img src={`${baseURL}${author.avatar}`} alt="author" />
                                        <h2>{author.first_name} {author.last_name}</h2>
                                        <div className="core-member-icon justify-content-center">
                                            <a href="linked.com">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path stroke="#000" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                                                </svg>
                                            </a>
                                            <a href="website.com">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" />
                                                </svg>
                                            </a>
                                            <a href="mail.com">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                                                    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112" />
                                                </svg>
                                            </a>
                                        </div>
                                        {/* {author.fb_profile_link ? <p>facebook: {author.fb_profile_link}</p> : ''} */}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </div>
        </section > : <Loader />

        return (
            <>
                {content}

            </>
        )
    }
}
