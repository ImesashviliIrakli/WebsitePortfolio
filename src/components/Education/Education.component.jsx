import "./Education.styles.scss";
import "animate.css/animate.css";
import allLogos from "../images/Logos.js";


const Education = () => {
  return (
    <div className="container animate__animated animate__fadeInLeft info">
      <div className="education-container">
        <h2 className="mt-3">Education</h2>
        <div className="timeline ">

          <div className="timeline-card timeline-card-success card shadow-sm">
            <div className="card-body row">
              
              <div className="col">

                <div className="h5 mb-1">
                  DevOps Engineer
                </div>
                <h6 className="">Masters Degree</h6>
                <h6 className="text-muted">Business Technology University | SEP/2023 - JUL/2025</h6>

              </div>

              <div className="col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center">
                  <img
                    className="btuLogo"
                    src={allLogos.btuLogo}
                    alt="AZ-900"
                  />
                </div>
              
            </div>
          </div>

          <div className="timeline-card timeline-card-primary card shadow-sm">
            <div className="card-body row d-flex justify-content-center">
              
              <div className="col">
                <div className="h5 mb-1">
                  Informatics And Management Systems
                </div>
                <h6 className="">Bachelors Degree</h6>
                <h6 className="text-muted">Georgian Technical University | SEP/2019 - JUL/2023</h6>

                <div>
                  <ul>
                    <li>Fundamental concepts in computer science, algorithms, data structures, and programming languages.</li>
                    <li>Fundamentals of Information Technology (IT), including computer hardware, software, and networking.</li>
                    <li>Object-oriented programming, including design patterns and software architecture.</li>
                    <li>Database systems and data management, including SQL and NoSQL databases.</li>
                    <li>Human-computer interaction, including user experience design and interaction design.</li>
                  </ul>
                </div>
              </div>
              

              <div className="col-sm-12 col-md-3 col-lg-3 d-flex justify-content-center">
                  <img
                    className="microsoft-cert"
                    src={allLogos.gtuLogo}
                    alt="AZ-900"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
