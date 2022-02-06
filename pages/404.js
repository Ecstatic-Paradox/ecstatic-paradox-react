import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="error-message">
      <div>
        <h1>404</h1>
        <h1>Page Not Found!</h1>
        <p>Sorry, requested page is not found. Please double check the link.</p>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          style={{ background: "var(--primary)", color: "#fff" }}
          className="btn btn-primary btn-lg"
          href="/"
        >
          Take Me Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
