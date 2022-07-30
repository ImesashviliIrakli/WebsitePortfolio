import "bootstrap/dist/css/bootstrap.min.css";
import "./Certifications.styles.scss";
import "animate.css/animate.css";
import {
  RenderEpamPdf,
  CSharpBasicPdf,
  SQLBasicPdf,
  SQLIntermediatePdf,
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
                  <div className="h5 mb-1">.Net Development training</div>
                  <h6 className="text-muted">Epam Systems</h6>
                  <div className="text-muted text-small mb-2">MAY/2022</div>
                  <div>
                    <ul>
                      <li>
                        Learned basic, intermediate and advanced topics in C#
                        and ASP.NET Core.
                      </li>
                      <li>
                        Created several Web Api's and console applications
                      </li>
                      <li>
                        Had to work on many practice tasks and basic algorithms
                        like sorting.
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

          <div className="timeline-card timeline-card-primary card shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="h5 mb-1">C# (Basic) </div>
                  <h6 className="text-muted">Hacker rank</h6>
                  <div className="text-muted text-small mb-2">JAN/2022</div>
                  <a
                    className="col-md-6 col-8 navigateButton"
                    href="https://www.hackerrank.com/certificates/1810861fea69"
                  >
                    Credential URL
                  </a>
                </div>

                <div className="col-6">
                  <CSharpBasicPdf />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-card timeline-card-success card shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="h5 mb-1">
                    SQL (Basic) and SQL (Intermediate)
                  </div>
                  <h6 className="text-muted">Hacker rank</h6>
                  <div className="text-muted text-small mb-2">DEC/2021</div>
                  <div>
                    <a
                      className="col-md-6 col-8 navigateButton"
                      href="https://www.hackerrank.com/certificates/104484e27a90"
                    >
                      SQL (Basic) Credential URL
                    </a>
                  </div>

                  <div>
                    <a
                      className="col-md-6 col-8 navigateButton"
                      href="https://www.hackerrank.com/certificates/a101071c1473"
                    >
                      SQL (Intermediate) Credential URL
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col">
                      <SQLBasicPdf />
                    </div>
                    <div className="col">
                      <SQLIntermediatePdf />
                    </div>
                  </div>
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
