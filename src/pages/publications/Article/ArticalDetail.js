import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { baseURL } from '../../reusable/server';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


export default function ArticalDetail({ match }) {
  const [numPages, setNumPages] = useState(null);
  const [article, setArticle] = useState({})

  useEffect(() => {
    fetchArticle();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const fetchArticle = async () => {
    try {
      const data = await fetch(
        `${baseURL}/api/articles/${match.params.slug}`
      )
      const item = await data.json()
      setArticle(item)
    } catch (err) {
      console.log('some error occured')
    }
  };



  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const articleDate = new Date(article.date_published).toLocaleDateString('en-US', options)

  return (

    <React.Fragment>
      <section id="wrapper">
        <div className="container-fluid project-case-study">
          <h4 className="project-heading">Article</h4>
          <div className="project-overview">
            <div className="container">
              <h5 className="project-points mb-5">Article Published on {articleDate} {article.author ? `by ${article.author}` : ''} </h5>
              <Document
                file={article.pdf_file}
                onLoadSuccess={onDocumentLoadSuccess}

              >
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page, index) => <><Page key={index} scale={2.1} size="A4" pageNumber={page} /><br /></>)}

              </Document>
              <div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
