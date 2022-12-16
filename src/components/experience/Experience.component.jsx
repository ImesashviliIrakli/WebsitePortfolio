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
                    Developed advanced skills in C# programming and .NET
                    Framework.
                  </li>

                  <li>
                    Demonstrated expertise in Azure cloud by passing the AZ-900
                    exam.
                  </li>

                  <li>
                    Grew my skills and knowledge in C# programming and .NET
                    Framework.
                  </li>

                  <li>
                    Implemented a project using microservices architecture and
                    several small MVC applications, deploying it in Azure.
                  </li>

                  <li>
                    Accrued knowledge and little experience in NoSQL databases
                    (MongoDB).
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
                    many bugs and errors in software.
                  </li>
                  <li>
                    Tested programs and databases to identify issues and make
                    necessary modifications.
                  </li>
                  <li>
                    Worked with a mentor to learn best practices in software
                    design.
                  </li>
                  <li>
                    Created Front-End forms and Back-End logic for clients.
                  </li>
                  <li>
                    Created many SQL stored procedures to insert transactions in
                    the database.
                  </li>
                  <li>
                    Worked together with clients using their APIs to complete
                    tasks.
                  </li>
                  <li>
                    Created countless reports for the providers using SQL.
                  </li>
                  <li>
                    Learned software engineering process improvements and best
                    practices.
                  </li>
                  <li>
                    Improved C#/.NET, JavaScript, markup, and SQL skills through
                    consistent hard work and dedication.
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
