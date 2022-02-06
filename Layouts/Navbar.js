import React from "react";
import Link from "next/link";
import logo from "../assests/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/" passHref>
            <a>
              <Image src={logo} alt="Paradox-Logo" />
            </a>
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
                <Link aria-current="page" href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link"> About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/projects">
                  <a className="nav-link">Projects</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  href="/publications"
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
                    <Link href="/blogs">
                      <a className="dropdown-item">Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/researchpapers">
                      <a className="dropdown-item">Research Papers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/articles">
                      <a className="dropdown-item">Articles</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item dropdown">
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
              </li> */}
              <li className="nav-item">
                <Link href="/courses">
                  <a className="nav-link">Courses</a>
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
