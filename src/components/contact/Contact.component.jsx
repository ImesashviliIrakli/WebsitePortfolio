import 'bootstrap/dist/css/bootstrap.min.css';
import allLogos from '../images/Logos.js';
import ContactCard from '../contact-card/contact-card.component.jsx';
import 'animate.css/animate.css';
import './Contact.styles.scss';

const Contact = () => {
  return (
    <div className="contact-card-container animate__animated animate__fadeInUp">
      <div className="contact-card-header">
        <h1>Contact</h1>
      </div>

      <div className="contact-card-holder">
        <div className="contactCards">
          <ContactCard cardText="+995 551 582 022" cardImg={allLogos.phoneLogo} />
          <ContactCard cardText="imesashviliirakli5@gmail.com" cardImg={allLogos.emailLogo} />
          <ContactCard cardText="(GMT+4) Tbilisi, Georgia" cardImg={allLogos.locationLogo} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
