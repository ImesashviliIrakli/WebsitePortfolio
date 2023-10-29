import "bootstrap/dist/css/bootstrap.min.css";
import "./Certifications.styles.scss";
import "animate.css/animate.css";
import {
  RenderEpamPdf,
  MicrosoftCert
} from "../render-pdfs/render-pdfs.component";

const Certificiations = () => {
  return (
    <div className="container animate__animated animate__fadeInLeft">
      <div className="certifications-container">
        <h2 className="mt-3">Certifications</h2>
        <div className="timeline ">
          <div className="timeline-card timeline-card-success card shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="h5 mb-1">
                    Microsoft Certified: Azure Fundamentals
                  </div>
                  <h6 className="text-muted">Microsoft</h6>
                  <div className="text-muted text-small mb-2">OCT/2022</div>
                  <a
                    className="col-6 navigateButton"
                    href="https://www.credly.com/badges/bc6fa5a3-5043-4534-9b80-f0e7555dd51d/public_url"
                  >
                    Credly profile
                  </a>
                </div>

                <div className="col-6 image-cont">
                  <img
                    className="microsoft-cert"
                    src={MicrosoftCert.AzureFUndamentals}
                    alt="AZ-900"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-card timeline-card-primary card shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="h5 mb-1">.Net Development training</div>
                  <h6 className="text-muted">Epam Systems</h6>
                  <div className="text-muted text-small mb-2">MAY/2022</div>
                  <div>
                    <ul>
                      <li>
                        Through challenging coursework, I learned the C# and
                        ASP.NET Core programming languages, enabling the
                        creation of sophisticated online apps.
                      </li>
                      <li>
                        Became proficient in using Entity Framework, LINQ,
                        dependency injection and unit testing frameworks
                      </li>
                      <li>
                        Developed strong problem-solving skills during the
                        course of the program, which has helped me in my career
                        since then.
                      </li>
                      <li>
                        Worked on practice tasks and algorithms, including
                        sorting.
                      </li>

                      <li>
                        Developed a number of console applications and Web APIs.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6">
                  <RenderEpamPdf />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificiations;
