/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { baseURL } from "../../reusable/server";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import Loader from "../../reusable/Loader";
const PDFViewer = dynamic(() => import("../../components/articles/PDFViewer"), {
  ssr: false,
});

export default function ArticalDetail() {
  const router = useRouter();
  const slug = router.query["slug"];
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      const data = await fetch(
        `${baseURL || "https://app.ecstaticparadox.com"}/api/articles/${slug}`
      );
      const item = await data.json();
      setArticle(item);
    } catch (err) {
      console.log("some error occured");
    }
  };

  const options = { year: "numeric", month: "short", day: "numeric" };
  const articleDate = new Date(article.date_published).toLocaleDateString(
    "en-US",
    options
  );
  return (
    <React.Fragment>
      {article.pdf_file ? (
        <section id="wrapper">
          <div className="container-fluid project-case-study">
            <h4 className="project-heading">Article</h4>
            <div className="project-overview">
              <div className="container">
                <h5 className="project-points mb-5">
                  Article Published on {articleDate}{" "}
                  {article.author ? `by ${article.author}` : ""}{" "}
                </h5>

                <PDFViewer url={article.pdf_file} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
}
