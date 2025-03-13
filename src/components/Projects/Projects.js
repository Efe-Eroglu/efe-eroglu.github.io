import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import solarPanel from "../../Assets/Projects/solar.jpg";
import stockPrediction from "../../Assets/Projects/stock.png";
import financialDashboard from "../../Assets/Projects/finance.jpeg";
import movieRecommendation from "../../Assets/Projects/movie.png";
import foodOrdering from "../../Assets/Projects/mobile.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my recent projects that involve AI, data science, and full-stack development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solarPanel}
              isBlog={false}
              title="Solar Panel Fault Detection"
              description="An AI-powered fault detection system for solar panels using machine learning and computer vision. This project leverages VGG16-based deep learning models to detect cracks and dirt on solar panels. Flask is used to serve the model as an API, allowing users to upload images for fault analysis and maintenance optimization."
              ghLink="https://github.com/Efe-Eroglu/solar-panel-fault-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockPrediction}
              isBlog={false}
              title="Stock Price Prediction"
              description="A stock market prediction model based on financial indicators such as RSI, Ichimoku Cloud, SMA, Bollinger Bands, and MACD. Using Python and Pandas, it processes stock data and applies predictive analysis techniques to forecast price movements."
              ghLink="https://github.com/Efe-Eroglu/Hisse_Fiyat_Tahmini"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={financialDashboard}
              isBlog={false}
              title="Financial Dashboard Backend"
              description="A real-time financial dashboard backend that tracks cryptocurrency market trends, price changes, and trading volumes. Users can create watchlists and monitor assets efficiently. The backend is built with FastAPI and PostgreSQL, providing high-performance financial data processing."
              ghLink="https://github.com/Efe-Eroglu/financial-dashboard-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieRecommendation}
              isBlog={false}
              title="Movie Recommendation System"
              description="A personalized movie recommendation engine built using NLP techniques. The project employs the SBERT model to generate embeddings for movie descriptions, genres, and director names, calculating similarities between movies to offer user-specific recommendations."
              ghLink="https://github.com/Efe-Eroglu/movie-recommendation-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrdering}
              isBlog={false}
              title="Food Ordering App"
              description="A mobile application developed with React Native for seamless food ordering. Users can browse restaurants, add favorites, filter restaurants, and place orders. Firebase is used for authentication and database management, while Redux handles state management."
              ghLink="https://github.com/Efe-Eroglu/Food-Ordering-App"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
