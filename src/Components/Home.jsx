/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/NDCOsloTOP.jpg";

const imageAltText = "Adult female on stage at a technical conference presenting to a full room of developers";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30vh", flexDirection: "column" }}>
        <h1 className="title" style={{ color: "white", fontSize: "5rem" }}>{name}</h1>
        <h2 style={{ color: "white", fontSize: "1rem" }}>{title}</h2>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          /* Adjust font sizes for smaller screens */
          h1.title {
            font-size: 3rem;
          }

          h2 {
            font-size: 0.8rem;
          }

          /* Adjust height of section for smaller screens */
          section#home {
            min-height: 50vh;
          }
        }

        @media only screen and (min-width: 769px) and (max-width: 1024px) {
          /* Adjust font sizes for medium screens */
          h1.title {
            font-size: 4rem;
          }

          h2 {
            font-size: 1rem;
          }

          /* Adjust height of section for medium screens */
          section#home {
            min-height: 70vh;
          }
        }
      `}</style>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;