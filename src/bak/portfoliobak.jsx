/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/snickerscodes.jpg";

const imageAltText = "desktop with books and laptop and puppy";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TedxPerth: Where Have All the Girls Gone?",
    description:
      "Working in Tech is the best career in the world, but that isn't the story we are telling. We need to change the narrative and tell the world that Tech is for everyone.",
    url: "https://youtu.be/R6UODmQXzIs",
  },
  {
    title: "Rise of the Tech Influencer",
    description:
      "Keeping your head down and working hard is not enough anymore. If you want to move onwards and upwards in this world you have to make sure the world knows your name.",
    url: "https://youtu.be/W0Lui4HlHkk",
  },
  {
    title: "The Modern Trolley Problem: Responsible AI Principles",
    description:
      "We live in an age where self-driving cars are no-longer just an interesting philosophical thought experiment, but a reality. When things go wrong, there is an immediate and heated debate around where the blame lies (Programmer, Manufacturer, Owner, Driver), but the more interesting discussion always starts further back than that.",
    url: "https://youtu.be/nla1LGT83FE",
  },
  {
    title: "Has Your Puppy Joined the Dark Side?",
    description:
      "How to Build a PWA/Azure Static Web App with Custom Vision AI. This conference session is a live demo and contains images of Ewoks and Shihtzus.",
    url: "https://www.youtube.com/live/ZaV6tGFNL8g?feature=share&t=3637",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
