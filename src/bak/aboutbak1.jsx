/*/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background2.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Tedx Speaker, Microsoft DevRel and STEM Mentor. I live at the heart of the developer community and help drive awareness and engagement as an AI influencer";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Developer Relations",
  "Community Engagement",
  "STEM Mentoring",
  "Technology Industy Advisory",
  "Generative and Responsible AI Lecturer",
  "International Conference Speaker",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I help emerging developers enter the industry by providing education, coaching, mentorship and guidance to pathways.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          /* Adjust width of section for smaller screens */
          section#about {
            width: 100%;
          }

          /* Adjust font sizes for smaller screens */
          h2 {
            font-size: 2rem;
          }

          p.large {
            font-size: 1rem;
          }

          ul {
            font-size: 1rem;
            margin: 2rem 1rem;
            columns: 1;
          }

          /* Adjust padding and margin for smaller screens */
          div {
            padding: 2rem;
            margin: 1rem auto;
            width: 90%;
          }
        }

        @media only screen and (min-width: 769px) and (max-width: 1024px) {
          /* Adjust font sizes for medium screens */
          h2 {
            font-size: 3rem;
          }

          p.large {
            font-size: 1.5rem;
          }

          ul {
            font-size: 1.5rem;
            margin: 2rem 3rem;
            columns: 2;
          }

          /* Adjust padding and margin for medium screens */
          div {
            padding: 4rem;
            margin: 3rem auto;
            width: 70%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;