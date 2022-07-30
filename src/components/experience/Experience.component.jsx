import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.styles.scss";
import "animate.css/animate.css";

function Experience() {
  return (
    <div className="container animate__animated animate__fadeInLeft">
      <div className="info">
        <div className="experience-container">
          <h1>Experience</h1>

          <div className="timeline">
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Software Engineer</div>
                <h6 className="text-muted">at Epam systems</h6>
                <div className="text-muted text-small mb-2">
                  JUL/2022 - Present
                </div>
                <ul></ul>
              </div>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-card timeline-card-success card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Junior Software Developer</div>
                <h6 className="text-muted">at Betsolutions</h6>
                <div className="text-muted text-small mb-2">
                  FEB/2021 - JUL/2022
                </div>
                <ul>
                  <li>
                    Learned software engineering process improvements and best
                    practices.
                  </li>
                  <li>
                    Worked with mentor to learn best practices in software
                    design.
                  </li>
                  <li>
                    Improved C#/.NET, Javascript, markup and SQL skills through
                    consistent hard work and dedication.
                  </li>
                  <li>
                    Collaborated with other developers to identify and alleviate
                    number of bugs and errors in software.
                  </li>
                  <li>
                    Testes programs and databases to identify issues and make
                    necessary modifications.
                  </li>
                  <li>
                    Performed integration testing before launching applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
