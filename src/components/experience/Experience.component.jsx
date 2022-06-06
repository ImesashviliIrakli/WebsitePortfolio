import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.styles.scss';
import 'animate.css/animate.css';

function Experience() {
  return (
    <div className="container animate__animated animate__fadeInLeft">
      <div className="info">
        <div className="experience-container">
          <h1>Experience</h1>
          <div class="timeline">
            <div class="timeline-card timeline-card-success shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">Junior Software Developer</div>
                <h6 class="text-muted">at Betsolutions</h6>
                <div class="text-muted text-small mb-2">Feb, 2021 - Present</div>
                <ul>
                  <li>Learned software engineering process improvements and best practices.</li>
                  <li>Worked with mentor to learn best practices in software design.</li>
                  <li>
                    Improved C#/.NET, Javascript, markup and SQL skills through consistent hard work
                    and dedication.
                  </li>
                  <li>
                    Collaborated with other developers to identify and alleviate number of bugs and
                    errors in software.
                  </li>
                  <li>
                    Testes programs and databases to identify issues and make necessary
                    modifications.
                  </li>
                  <li>Performed integration testing before launching applications.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="timeline ">
            <div class="timeline-card timeline-card-primary shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">.Net development training</div>
                <h6 class="text-muted">at Epam systems</h6>
                <div class="text-muted text-small mb-2">Nov, 2021 - Apr, 2022</div>
                <ul>
                  <li>Learned basic, intermediate and advanced topics in C# and ASP.Net Core.</li>
                  <li>Created several Web Apis and console applications.</li>
                  <li>Had to write many pracite tasks and basic algorithms like sorting.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="education-container">
          <h2 class="mt-3">Education</h2>
          <div class="timeline ">
            <div class="timeline-card timeline-card-success card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">Bachelors Degree in informatics and management systems</div>
                <h6 class="text-muted">Georgian Technical University</h6>
                <div class="text-muted text-small mb-2">SEP/2019 - JUL/2023</div>
              </div>
            </div>
            <div class="timeline-card timeline-card-primary card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">High school diploma </div>
                <h6 class="text-muted">L.T.T Erudity</h6>
                <div class="text-muted text-small mb-2">SEP/2016 - MAY/2019</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
