import "./Education.styles.scss";
import "animate.css/animate.css";

const Education = () => {
  return (
    <div className="container animate__animated animate__fadeInLeft info">
      <div className="education-container">
        <h2 className="mt-3">Education</h2>
        <div className="timeline ">
          <div className="timeline-card timeline-card-success card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">
                Bachelors Degree in informatics and management systems
              </div>
              <h6 className="text-muted">Georgian Technical University</h6>
              <div className="text-muted text-small mb-2">
                SEP/2019 - JUL/2023
              </div>
            </div>
          </div>
          <div className="timeline-card timeline-card-primary card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">High school diploma </div>
              <h6 className="text-muted">L.T.T Erudity</h6>
              <div className="text-muted text-small mb-2">
                SEP/2016 - MAY/2019
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
