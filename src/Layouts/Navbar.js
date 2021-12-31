import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Paradox-Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Publications
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/research-papers">
                      Research Papers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/articles">
                      Articles
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/webinars">
                      Webinars
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/symposiums">
                      Symposium
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
