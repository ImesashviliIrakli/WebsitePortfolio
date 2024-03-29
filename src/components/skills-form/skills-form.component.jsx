import { Card } from "react-bootstrap";
import "animate.css/animate.css";
import "./skills-form.styles.css";

const SkillsForm = ({ source, cardTitle, cardText }) => {
  const cardTexts = cardText.map((text, index) => (
    <p key={index} className="me-2">
      {text}
    </p>
  ));
  return (
    <div className="mt-4 card-scale col d-flex justify-content-center animate__animated animate__fadeInDown">
      <Card style={{ width: "20rem" }} className="skills-card">
        <div className="cardImg display-card">
          <Card.Img variant="top" className="iconSize my-4" src={source} />
        </div>

        <Card.Body>
          <Card.Title className="display-card">{cardTitle}</Card.Title>
          <br />
          <div className="display-card">{cardTexts}</div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillsForm;
