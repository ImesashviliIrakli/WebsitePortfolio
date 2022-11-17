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
                <ul>
                  <li>
                    Gained experience in Azure cloud and was able to pass the
                    az-900 exam.
                  </li>

                  <li>
                    Grew my skills and gained knowledge in C# programming and
                    .Net Framework.
                  </li>

                  <li>
                    Created a project using the microservices architecture and
                    several small MVC applications, which I then deployed to
                    Azure.
                  </li>

                  <li>
                    Gained knowledge and experience in No-SQL databases
                    (MongoDb).
                  </li>
                </ul>
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
                    Collaborated with other developers to identify and alleviate
                    number of bugs and errors in software.
                  </li>
                  <li>
                    Tested programs and databases to identify issues and make
                    necessary modifications.
                  </li>
                  <li>
                    Created Front-End forms and Back-End logic for clients.
                  </li>
                  <li>
                    Created stored procedures to insert transactions in the
                    database using SQL.
                  </li>
                  <li>
                    Worked together with client API's in order to successfully
                    complete tasks.
                  </li>
                  <li>Created reports for clients using T-SQL. </li>
                  <li>
                    Learned software engineering best practices and process
                    improvements.
                  </li>
                  <li>
                    Worked with mentor to learn best practices in software
                    design.
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
