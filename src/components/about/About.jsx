import React from "react";
import "./about.css";
import DP from "../../assets/dp.jpg";
import { FaAward } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 style={{ marginTop: "15rem" }}>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={DP} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 Years + </small>
            </article>

            <article className="about_card">
              <FaFileContract className="about_icon" />
              <h5>Contribution</h5>
              <small>20+ Contribution </small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>

          <p>
            A seasoned Full Stack Developer proficient in crafting robust web/android
            applications utilizing a diverse skill set encompassing
            TypeScript. With expertise in both front-end and
            back-end development, I specialize in creating seamless user
            experiences while ensuring scalable, efficient systems. Notably, I
            actively contribute to open-source projects,
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
