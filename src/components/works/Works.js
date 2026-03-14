/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';
import Aiweb from '../../assets/recentprojects/ai web.png';
import pharmacy from '../../assets/recentprojects/pharmacy.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
      url: `https://portfolio-git-main-warisamirs-projects.vercel.app/`
    },
    { 
      id: 2,
      title: 'NearPharma - Spring Boot Backend API', 
      description: `Designed and developed a Spring Boot REST API to locate nearby pharmacies based on user location.
      Implemented distance-based filtering logic using latitude and longitude, integrated external APIs for routing
      and directions, and built CRUD operations for pharmacy management using Spring Data JPA.
      The application follows a layered architecture and is containerized using Docker for deployment.`,
      alter: 'NearPharma Backend API',
      image: `${pharmacy}`,
      url: `https://github.com/warisamir/NearPharmaViaSpringboot`
    },
    { 
      id: 3,
      title: 'Docs clone Project', 
      description: `An textor project website built using
       simple react to design and develop its frontend.`,
      alter: 'Google docs  Project',
      image: `${Veritru}`,
      url: `https://google-docs-clone-gray-two.vercel.app/#/`
    },
    { 
      id: 4,
      title: 'Fitness Management REST API', 
      description: `Built a Spring Boot based backend service exposing RESTful APIs to manage fitness-related data.
      Implemented business logic in service layers, handled database persistence using Spring Data JPA,
      and designed clean API contracts following REST principles.
      The project focuses on backend fundamentals and scalable application structure.`,
      alter: 'Fitness Backend API',
      image: `${Aiweb}`, 
      url: `https://github.com/warisamir/FitnessApiViaSpringboot`
    },
    { 
      id: 5,
      title: 'Web-Socket Chat and Meeting Application', 
      description: `It is a chat application project
       built using ReactJS and Express with Socket.io to 
        demonstrate the realtime chat capabilities and having a meeting of 4 member can easily setup for a quick discussion & everyone can share their screen. `,
      alter: 'CometChat Project',
      image: `${Lofo}`,
      url:`https://discord-ak-clone.netlify.app/`
    },
    { 
      id: 6,
      title: 'SpotifyRed Project', 
      description: `A simple react app that uses the Youtube
       API to listen and watch songs and videos online 
       from anywhere in the world without ads.`,
      alter: 'Youtube Project',
      image: `${Startup}`,
      url:`https://youtube-project-eight.vercel.app/`
    },
    { 
      id: 7,
      title: 'FoodApp Delivery Project', 
      description: `A website project for the Food Delivery service
       as the online food ordering and have monthly or 
       annual subsicrption according to the user need. but a needed a quick AWS server to setup docker environment to run.`,
      alter: 'Food Project',
      image: `${Lacalle}`,
      url:`https://github.com/warisamir/FoodApp`
    },
  ]);
      return (
        <section id="works">
          <Container component="main" className={classes.main} maxWidth="md">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <div className="__img_wrapper">
                  <img src={project.image} alt={project.alter} />
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="hidden-link">
                    <span className="hidden-text">Visit project</span>
                  </a>
                </div>
                <div className="__content_wrapper">
                  <h3 className="title">
                    <TextDecrypt text={project.id + '. ' + project.title} />
                  </h3>
                  <p className="description">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </Container>
        </section>
      );  
};
