import React, { useState, useEffect } from "react";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export default function PDFViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages((pages) => numPages);
  }
  return (
    <div>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages
          ? Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page, index) => (
                <>
                  <Page
                    key={index * Math.random(1992)}
                    scale={2.1}
                    size="A4"
                    pageNumber={page}
                  />
                  <br />
                </>
              ))
          : ""}
      </Document>
    </div>
  );
}
