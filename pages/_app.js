import "../styles/globals.css";
import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Ecstatic Paradox is a organization based on aspects related to Physics and Tech"
        />
        <meta name="title" property="og:title" content="Ecstatic Paradox" />
        <meta
          name="description"
          property="og:description"
          content="Ecstatic Paradox is an organization based on aspects related to Physics and Tech"
        />
        <meta
          name="image"
          property="og:image"
          content="%PUBLIC_URL%/thumbnail.jpg"
        />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-3.5.1.js"
        ></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
          integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
          crossOrigin="anonymous"
        ></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
          crossOrigin="anonymous"
        ></script>
        <title>Ecstatic Paradox</title>
      </Head>
      <layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </layout>
    </>
  );
}

export default MyApp;
