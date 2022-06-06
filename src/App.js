import './App.css';
import NavigationBar from './routes/navigation/NavigationBar.component';
import MainPage from './routes/main-page/main-page.component';
import SkillsPage from './routes/skills-page/skills-page.component';
import ExperiencePage from './routes/experience-page/experience-page.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>

            <Route path="/skills">
              <SkillsPage />
            </Route>

            <Route path="/experience">
              <ExperiencePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
