import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { baseURL } from '../reusable/server';
import { truncate } from '../reusable/truncate';

export default class HomeBlogs extends Component {
    state = {
        popular: []
    }

    componentDidMount() {
        this.fetchPopularBlogs();
    }

    fetchPopularBlogs = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/blogs/popular/`
            )
            const item = await data.json()
            this.setState({ popular: item })
        } catch (err) {
            console.log('some error occured')
        }
    }

    render() {

        var items = this.state.popular ? this.state.popular : ''

        var content = items.slice(0, 3).map(item => {
            return (
                <div key={item.meta.slug} className="blog-card">
                    <Link to={`/blogs/${item.meta.slug}`}>
                        <div className="blog-img">
                            <img src={`${baseURL}${item.thumbnail.meta.download_url}`} className="card-img-top" alt="Blog" />
                            {item.tags.map((i, index) => <span key={index} className="badge bg-primary">{i}</span>)}
                        </div>
                        <div className="card-body">
                            <div className="blog-views mb-2">
                                <svg viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="64" />
                                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                </svg>&nbsp;&nbsp;
                                <span>{item.view_count} views</span>
                            </div>
                            <h4>{item.meta.title}</h4>
                            <p className="small-text">{truncate(item.description, 20)}</p>
                        </div>
                    </Link>
                </div>
            )
        })

        return (
            <section id="wrapper">
                <h1 className="title text-center mb-5">Must-Reads From Us</h1>
                <div className="blog-wrap container-fluid">
                    {content}
                </div>
            </section>
        )
    }
}
