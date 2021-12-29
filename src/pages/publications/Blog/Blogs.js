import React, { Component } from 'react'
import LatestBlog from './LatestBlog'
import MostPopular from './MostPopular'
import PinnedBlog from './PinnedBlog'
import PopularBlog from './PopularBlog'

export default class Blogs extends Component {

    state = {
        popular: [],
        latest: [],
    }

    componentDidMount() {
        this.fetchLatestBlogs()
        this.fetchPopularBlogs();
    }

    fetchLatestBlogs = async () => {
        try {
            const data = await fetch(
                `http://localhost:8000/api/blogs/`
            )
            const item = await data.json()
            this.setState({ latest: item.items })
        } catch (err) {
            console.log('some error occured')
        }
    }

    fetchPopularBlogs = async () => {
        try {
            const data = await fetch(
                `http://localhost:8000/api/blogs/popular/`
            )
            const item = await data.json()
            this.setState({ popular: item })
        } catch (err) {
            console.log('some error occured')
        }
    }


    render() {
        return (
            <>
                <section id="wrapper">
                    <div className="about-hero hero-section">
                        <h1 className="big-text">Blogs</h1>
                        <p className="small-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
                            Cupiditate minus placeat sapiente repellat in iure quas iusto.
                        </p>
                    </div>
                </section>

                <section id="wrapper mb-5">
                    <div className="container">
                        <PinnedBlog popular={this.state.popular} />
                    </div>
                </section>

                <section id="wrapper">
                    <div className="container-fluid">
                        <h2 className="mb-5 fw-bold">Popular Posts</h2>
                        <div className="row">
                            <MostPopular item={this.state.popular[0]} />
                            <PopularBlog item={this.state.popular} />
                        </div>
                    </div>
                </section>

                <section id="wrapper">
                    <div className="container-fluid">
                        <h2 className="mb-5 fw-bold">Latest Posts</h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <LatestBlog item={this.state.latest} />
                        </div>
                    </div>
                </section>


            </>
        )
    }
}
