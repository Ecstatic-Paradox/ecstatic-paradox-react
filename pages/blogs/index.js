import React, { Component } from "react";
import { baseURL } from "../../reusable/server";
import LatestBlog from "../../components/blogs/LatestBlog";
import MostPopular from "../../Components/blogs/MostPopular";
import PinnedBlog from "../../components/blogs/PinnedBlog";
import PopularBlog from "../../components/blogs/PopularBlog";
import blogcover from "../../assests/blog-cover.jpg";
import Head from "next/head";

export default class Blogs extends Component {
  state = {
    popular: [],
    latest: [],
  };

  componentDidMount() {
    this.fetchLatestBlogs();
    this.fetchPopularBlogs();
  }

  fetchLatestBlogs = async () => {
    try {
      const data = await fetch(`${baseURL}/api/blogs/`);
      const item = await data.json();
      this.setState({ latest: item.items });
    } catch (err) {
      console.log("some error occured");
    }
  };

  fetchPopularBlogs = async () => {
    try {
      const data = await fetch(`${baseURL}/api/blogs/popular/`);
      const item = await data.json();
      this.setState({ popular: item });
    } catch (err) {
      console.log("some error occured");
    }
  };

  render() {
    return (
      <>
        <Head></Head>
        <section id="wrapper">
          <div
            className="about-hero hero-section"
            style={{
              backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${blogcover.src})`,
              backgroundPosition: "center",
            }}
          >
            <h1 className="big-text">Blogs</h1>
            <p className="small-text">
              Indulge in our creatively written scientific blogs that make
              complex topics a cake-walk
            </p>
          </div>
        </section>

        <section className="blogs-wrapper">
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
        </section>
      </>
    );
  }
}
