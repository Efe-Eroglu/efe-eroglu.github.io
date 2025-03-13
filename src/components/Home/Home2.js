import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My passion for technology led me to the fascinating world of
              <b className="purple">
                {" "}
                Artificial Intelligence and Data Science.
              </b>
              I am always eager to explore new innovations in these fields and
              continuously expand my knowledge. 🚀
              <br />
              <br />I have experience working with
              <i>
                <b className="purple"> Python and SQL, </b>
              </i>
              which I use to develop intelligent solutions.
              <br />
              <br />
              My main areas of interest include
              <i>
                <b className="purple">
                  Machine Learning, Deep Learning, and Large Language Models
                  (LLMs).
                </b>
              </i>
              I am particularly fascinated by Natural Language Processing (NLP)
              and how AI can understand and generate human-like text.
              <br />
              <br />
              Whenever possible, I work on projects that involve
              <b className="purple">
                {" "}
                AI-powered analytics, model fine-tuning,
              </b>{" "}
              and
              <i>
                <b className="purple"> building scalable data pipelines.</b>
              </i>
              <br />
              <br />I am also excited about researching
              <b className="purple">
                {" "}
                Responsible AI, Explainable AI (XAI),
              </b>{" "}
              and exploring
              <i>
                <b className="purple">the ethical implications of LLMs.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Efe-Eroglu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/efeeroglu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/eferogglu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
