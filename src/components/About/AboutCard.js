import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Efe Eroğlu </span>  
            from <span className="purple">Turkey.</span>
            <br />
            I specialize in <b className="purple">Big Data, Cloud Technologies, and Artificial Intelligence.</b>
            <br />
            My focus is on <b className="purple">building scalable data solutions</b> and leveraging AI to extract insights from massive datasets.
            <br />
            I am passionate about exploring <b className="purple">LLMs, Machine Learning, and Cloud Infrastructure</b> to create innovative solutions.
            <br />
            <br />
            Apart from my technical interests, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Research Papers
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing About AI & Data Science
            </li>
            <li className="about-activity">
              <ImPointRight /> Attending Tech Conferences
            </li>
          </ul>

          <footer className="blockquote-footer">Efe Eroğlu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
