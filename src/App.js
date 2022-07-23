import "./App.css";
import NavigationBar from "./routes/navigation/NavigationBar.component";
import MainPage from "./routes/main-page/main-page.component";
import SkillsPage from "./routes/skills-page/skills-page.component";
import ExperiencePage from "./routes/experience-page/experience-page.component";
import EducationCertificationsPage from "./routes/education-certifications-page/education-certifications-page.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />

        <div className="content">
          <Routes>
            <Route exact path="/" element={<MainPage />} />

            <Route path="/skills" element={<SkillsPage />} />

            <Route path="/experience" element={<ExperiencePage />} />

            <Route
              path="/education-certifications"
              element={<EducationCertificationsPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
