import React, { Component } from 'react'
import ArticleList from './ArticleList';
import articlecover from"../../../assests/article-cover.jpg";



export default class Articals extends Component {

  render() {

    return (
      <>
        <section id="wrapper">
          <div className="about-hero hero-section" style={{ backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${articlecover})`, backgroundPosition: "center" }} >
            <h1 className="big-text">Articles</h1>
            <p className="small-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit,<br />
              Cupiditate minus placeat sapiente repellat in iure quas iusto.
            </p>
          </div>
        </section>
        {/* <!-- HERO --> */}


        {/* <!-- ARTICLES --> */}
        <section id="wrapper">
          <div className="container-fluid">
            <h2 className="mb-4 fw-bold">Recent Articles</h2>
            <ArticleList />
          </div>
        </section>
      </>
    )
  }
}
