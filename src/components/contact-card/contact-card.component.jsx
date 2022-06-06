import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './contact-card.styles.scss';

const ContactCard = ({ cardText, cardImg }) => {
  return (
    <Card className="mt-4 contact-card">
      <div className="row">
        <Card.Img
          variant="top"
          className="iconSize my-2 col"
          src={cardImg}
          style={{ marginLeft: '10px' }}
        />
        <p className="col mt-4 card-text">{cardText}</p>
      </div>
    </Card>
  );
};

export default ContactCard;
