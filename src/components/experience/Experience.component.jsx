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
            <div className="timeline-card timeline-card-success card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Software Engineer</div>
                <h6 className="text-muted">at 2G</h6>
                <div className="text-muted text-small mb-2">
                  DEC/2022 - Present
                </div>
                <ul>
                  <li>
                    Experienced in writing complex logic for SQL procedures,
                    with a keen eye for detail.
                  </li>

                  <li>
                    Fixing bugs in SQL procedures, ensuring high-quality and
                    reliable code.
                  </li>

                  <li>
                    Adept at making changes to existing procedures to improve
                    functionality and performance.
                  </li>

                  <li>
                    Utilized a deep understanding of SQL and .NET to deliver
                    effective solutions to meet business needs.
                  </li>

                  <li>Worked closely with cross-functional teams.</li>

                  <li>
                    Collaborating on projects to deliver results in a timely
                    manner.
                  </li>

                  <li>Demonstrated expertise in problem-solving.</li>

                  <li>
                    Ability to troubleshoot issues and implement efficient
                    solutions.
                  </li>

                  <li>
                    Maintained a focus on best practices and industry standards,
                    ensuring the quality of code.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-card timeline-card-primary card shadow-sm">
              <div className="card-body">
                <div className="h5 mb-1">Software Engineer</div>
                <h6 className="text-muted">at Epam systems</h6>
                <div className="text-muted text-small mb-2">
                  JUL/2022 - NOV/2022
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
