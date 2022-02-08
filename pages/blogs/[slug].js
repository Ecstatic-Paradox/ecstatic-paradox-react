import React, { Component, useEffect, useState } from "react";
import Loader from "../../reusable/Loader";
import { baseURL } from "../../reusable/server";
import paradoxlogo from "../../assests/aboutus.png";
import { useRouter } from "next/router";
import Head from "next/head";

function Content(item) {
  let item_tag;
  switch (item.type) {
    case "heading":
      item_tag = <h1>{item.value}</h1>;
      break;
    default:
      var cor = item.value;
      item_tag = (
        <div
          dangerouslySetInnerHTML={{
            __html: cor.replaceAll('src="/media', `src="${baseURL}/media`),
          }}
        ></div>
      );
      break;
  }
  return item_tag;
}

function BlogDetail() {
  const router = useRouter();
  const slug = router.query["slug"];
  const [blog, setBlog] = useState(null);
  const fetchBlog = async () => {
    try {
      const data = await fetch(
        `${baseURL || "https://app.ecstaticparadox.com"}/api/blogs/${slug}`
      );
      const item = await data.json();
      if (item) {
        setBlog(item);
      }
    } catch (err) {
      console.log(err);
      console.log("some error occured");
      //   router.push("/404");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const contents = blog
    ? blog.content.map((con, index) => {
        return (
          <React.Fragment key={index}>
            {Content(con)}
            <br />
          </React.Fragment>
        );
      })
    : "";

  const content = blog ? (
    <section id="wrapper">
      <div className="container">
        <h4 className="project-heading my-5">Blog</h4>
        <div className="blog-detail-head w-100 d-flex align-items-center my-4">
          <div className="avatar d-flex align-items-center">
            {blog.meta.owner.avatar ? (
              <img src={`${baseURL}${blog.meta.owner.avatar}`} alt="Avatar" />
            ) : (
              <img src={paradoxlogo} alt="Avatar" />
            )}
            <h5 className="ms-3">
              {blog.meta.owner.first_name} {blog.meta.owner.last_name}
            </h5>
          </div>
          <div className="d-flex align-items-center ms-5">
            <span className="me-2">
              <svg width="25" viewBox="0 0 512 512">
                <rect
                  x="48"
                  y="80"
                  width="416"
                  height="384"
                  rx="48"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="30"
                ></rect>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="30"
                  d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"
                ></path>
              </svg>
            </span>
            <span>
              {new Date(blog.meta.date_created).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="d-flex align-items-center ms-5">
            <span className="me-2">
              <svg width="25" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="64"></circle>
                <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z"></path>
              </svg>
            </span>
            <span>{blog.view_count} views</span>
          </div>
          {/* <div className="d-flex align-items-center ms-5">
                        <span className="me-2">
                            <svg width="25" viewBox="0 0 512 512">
                                <circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                <circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                <circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94" />
                            </svg>
                        </span>
                        <span>Share</span>
                    </div> */}
        </div>
        <h1 className="title">{blog.meta.title}</h1>

        <div className="blog-detail-content">
          <img
            className="mb-5"
            src={`${baseURL}${blog.thumbnail.meta.download_url}`}
            alt="blog"
          />
          <p>{blog.description ? blog.description : ""}</p>
          <br />
          {contents}
        </div>
      </div>
    </section>
  ) : (
    <Loader />
  );

  return <>{content}</>;
}

export default BlogDetail;
