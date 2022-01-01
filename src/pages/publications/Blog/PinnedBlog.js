import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PinnedBlog extends Component {
    render() {
        var items = this.props.popular ? this.props.popular : ''
        var content = items.filter(item => item.is_pinned).map(item => {
            // var desc = item ? item.content.map(con => {
            //     return (
            //         con.type === 'paragraph' ? con.value : ''
            //     )
            // }) : ''
            return (

                <div key={item.meta.slug} className="big-post-wrap">

                    <div className="blog-img">
                        <img src={`http://localhost:8000${item.thumbnail.meta.download_url}`} className="card-img-top" alt="Blog" />
                        {item.tags.map((i, index) => <span key={index} className="badge bg-primary">{i}</span>)}
                    </div>

                    <div className="bigpost-details">
                        <Link to={`/blogs/${item.meta.slug}`}>
                            <div className="card-body text-center">
                                <h4>{item.meta.title}</h4>
                                <div className="w-100 d-flex justify-content-around  align-items-center my-4">
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">
                                            <svg width="25" viewBox="0 0 512 512">
                                                <rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="30"></rect>
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"></path>
                                            </svg>
                                        </span>
                                        <span>{new Date(item.meta.date_created).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">
                                            <svg width="25" viewBox="0 0 512 512">
                                                <circle cx="256" cy="256" r="64"></circle>
                                                <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path>
                                            </svg>
                                        </span>
                                        <span>{item.view_count} views</span>
                                    </div>
                                </div>
                                {/* <p dangerouslySetInnerHTML={{ __html: desc[1].length <= 20 ? desc[1].split(" ").splice(0, 20).join(" ") : desc[1] }}></p> */}
                            </div>
                        </Link>

                    </div>

                </div>

            )
        })
        return (
            <>
                {content}
            </>
        )
    }
}
