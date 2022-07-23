import "./Certifications.styles.scss";
import "animate.css/animate.css";

const Certificiations = () => {
  return (
    <div className="container animate__animated animate__fadeInLeft">
      <div className="certifications-container">
        <h2 className="mt-3">Certifications</h2>
        <div className="timeline ">
          <div className="timeline-card timeline-card-success card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">.Net Development training</div>
              <h6 className="text-muted">Epam Systems</h6>
              <div className="text-muted text-small mb-2">MAY/2022</div>
            </div>
          </div>

          <div className="timeline-card timeline-card-primary card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">C# (Basic) </div>
              <h6 className="text-muted">Hacker rank</h6>
              <div className="text-muted text-small mb-2">JAN/2022</div>
            </div>
          </div>

          <div className="timeline-card timeline-card-success card shadow-sm">
            <div className="card-body">
              <div className="h5 mb-1">SQL (Basic) and SQL (Intermediate) </div>
              <h6 className="text-muted">Hacker rank</h6>
              <div className="text-muted text-small mb-2">DEC/2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificiations;
