import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Collaborators from "../reusable/Collaborators";
import Events from "../components/home/Events";
import Gallery from "../components/home/Gallery";
import HomeBlogs from "../components/home/HomeBlogs";
import HomeProjects from "../components/home/HomeProjects";
import People from "../components/home/People";
import cover from "../assests/cover.gif";
import journey from "../assests/journey.jpg";
import "../styles/Home.module.css";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div>
      <Head></Head>
      <div
        style={{ display: loaded ? "none" : "block" }}
        className={styles.divLoader}
      >
        <svg
          className={styles.svgLoader}
          viewBox="0 0 100 100"
          width="10em"
          height="10em"
        >
          <g
            transform="rotate(0 50 50)"
            style={{
              transform: "matrix(1, 0, 0, 1, 0, 0)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.083334"
              style={{ opacity: "0.083334", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(30 50 50)"
            style={{
              transform:
                "matrix(0.866025, 0.5, -0.5, 0.866025, 31.6987, -18.3013)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.166667"
              style={{ opacity: "0.166667", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(60 50 50)"
            style={{
              transform:
                "matrix(0.5, 0.866025, -0.866025, 0.5, 68.3013, -18.3013)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.25"
              style={{ opacity: "0.25", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(90 50 50)"
            style={{
              transform: "matrix(6.12323e-17, 1, -1, 6.12323e-17, 100, 0)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.333334"
              style={{ opacity: "0.333334", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(120 50 50)"
            style={{
              transform:
                "matrix(-0.5, 0.866025, -0.866025, -0.5, 118.301, 31.6987)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.416667"
              style={{ opacity: "0.416667", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(150 50 50)"
            style={{
              transform:
                "matrix(-0.866025, 0.5, -0.5, -0.866025, 118.301, 68.3013)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.5"
              style={{ opacity: "0.5", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(180 50 50)"
            style={{
              transform: "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 100, 100)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.583334"
              style={{ opacity: "0.583334", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(210 50 50)"
            style={{
              transform:
                "matrix(-0.866025, -0.5, 0.5, -0.866025, 68.3013, 118.301)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.666667"
              style={{ opacity: "0.666667", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(240 50 50)"
            style={{
              transform:
                "matrix(-0.5, -0.866025, 0.866025, -0.5, 31.6987, 118.301)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.75"
              style={{ opacity: "0.75", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(270 50 50)"
            style={{
              transform:
                "matrix(-1.83697e-16, -1, 1, -1.83697e-16, 7.10543e-15, 100)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.833334"
              style={{ opacity: "0.833334", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(300 50 50)"
            style={{
              transform:
                "matrix(0.5, -0.866025, 0.866025, 0.5, -18.3013, 68.3013)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity="0.916667"
              style={{ opacity: "0.916667", animationPlayState: "paused" }}
            />
          </g>
          <g
            transform="rotate(330 50 50)"
            style={{
              transform:
                "matrix(0.866025, -0.5, 0.5, 0.866025, -18.3013, 31.6987)",
              animationPlayState: "paused",
            }}
          >
            <rect
              x={47}
              y={24}
              rx={3}
              ry={6}
              width={6}
              height={12}
              fill="lightblue"
              opacity={1}
              style={{ animationPlayState: "paused" }}
            />
          </g>
        </svg>
      </div>
      <div style={{ display: loaded ? "block" : "none" }}>
        <section id="wrapper">
          <div
            className="hero-section"
            style={{
              backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${cover.src})`,
              backgroundPosition: "center",
            }}
          >
            <div>
              <h1 className="big-text">Where Physics Meets Tech</h1>
              <h6 className="small-text">
                A venture towards amalgamating rigorous Physics-based research
                with Tech-based applications
              </h6>
            </div>
          </div>
        </section>
        {/* <HomeProjects /> */}

        <section id="wrapper">
          <div
            className="cover"
            style={{
              backgroundImage: `linear-gradient(rgb(20 20 40 / 60%), rgb(20 20 40 / 60%)), url(${journey.src})`,
            }}
          >
            <div>
              <h1 className="big-text">Our Journey</h1>
              <h6 className="small-text">
                We started with a few passion-driven humans leading to create
                first-of-its-kind collaboration in the domain of Physics and
                Tech
              </h6>
              <Link href="/about" passHref>
                <button type="button" className="btn filled-btn">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
        <People />
        <Events />
        <HomeBlogs />
        <Gallery />
        <Collaborators />
      </div>
    </div>
  );
}
