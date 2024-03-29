import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { baseURL } from '../../reusable/server';

export default class ArticleList extends Component {
    state = {
        articles: [],
    }

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = async () => {
        try {
            const data = await fetch(
                `${baseURL}/api/articles/`
            )
            const items = await data.json()
            this.setState({ articles: items.items })
        } catch (err) {
            console.log('some error occured')
        }
    }
    render() {

        const articles = this.state.articles.map(article => {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const articleDate = new Date(article.date_published).toLocaleDateString('en-US', options)
            return (
                <div className="col" key={article.id}>
                    <Link to={`/articles/${article.slug}`}>
                        <div className="article-card">
                            <div className="article-img">
                                <img src={`${baseURL}${article.thumbnail.meta.download_url}`} className="card-img-top article-image" alt="Blog" />
                            </div>
                            <div className="card-body">
                                <div className="article-stats w-100 d-flex justify-content-between align-items-center mb-4">
                                    <div className="d-flex align-items-center" style={{ color: 'black' }}>
                                        <span className="me-2">
                                            <svg width="25" viewBox="0 0 512 512">
                                                <rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="30" />
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48" />
                                            </svg>
                                        </span>
                                        <span>{articleDate}</span>
                                    </div>
                                    {/* <div className="d-flex align-items-center">
                                    <span className="me-2">
                                    <svg width="25" viewBox="0 0 512 512">
                                        <circle cx="256" cy="256" r="64" />
                                        <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" />
                                    </svg>
                                    </span>
                                    <span>500 views</span>
                                </div> */}
                                </div>
                                <h4>{article.meta.title}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
        return (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {articles}
            </div>
        )
    }
}
