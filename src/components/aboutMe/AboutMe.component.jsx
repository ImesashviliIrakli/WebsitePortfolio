import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "animate.css/animate.css";
import "./AboutMe.styles.scss";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="info justify-content-center">
        <div className="animate__animated animate__fadeInDown">
          <h1 className="aboutHeader d-flex justify-content-center">Hello,</h1>
          <h2 className="aboutHeader d-flex justify-content-center">
            I'm Irakli Imesashvili
          </h2>
          <h3 className="aboutHeader d-flex justify-content-center">
            Software Engineer
          </h3>

          <br />

          <div className="row d-flex justify-content-center">
            <p className="col-12 col-md-8 about">
              Enthusiastic Software Engineer, eager to contribute to team
              success through hard work and dedication, attention to detail and
              excellent organizational skills. Clear understanding of
              SQL,C#/.Net and React and training in SQl, .Net/C#. Motivated to
              learn and grow.
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-center socialMediaLinks animate__animated animate__fadeInUp">
          <a
            className="col-2 col-md-1 navigateButton"
            href="https://www.linkedin.com/in/irakli-imesashvili/"
          >
            <BsLinkedin size={42} />
          </a>
          <a
            className="col-2 col-md-1 navigateButton"
            href="https://github.com/ImesashviliIrakli"
          >
            <AiFillGithub size={42} />
          </a>
          <a
            className="col-2 col-md-1 navigateButton"
            href="https://www.instagram.com/imesashvili_irakli/"
          >
            <AiFillInstagram size={42} />
          </a>
          <a
            className="col-2 col-md-1 navigateButton"
            href="https://www.facebook.com/irakli.imesashvili"
          >
            <BsFacebook size={42} />
          </a>
          <a
            className="col-2 col-md-1 navigateButton"
            href="https://discordapp.com/users/800679340055461920"
          >
            <SiDiscord size={42} />
          </a>
        </div>

        <div className="row d-flex justify-content-center mt-4 animate__animated animate__fadeInUp">
          <Link
            to="/skills"
            className="col-2 d-flex justify-content-center navigateButton"
            role="button"
          >
            Skills
          </Link>

          <Link
            to="/experience"
            className="col-2 d-flex justify-content-center navigateButton"
            role="button"
          >
            Experience
          </Link>
          <Link
            to="/education-certifications"
            className="col-2 d-flex justify-content-center navigateButton"
            role="button"
          >
            Education
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
