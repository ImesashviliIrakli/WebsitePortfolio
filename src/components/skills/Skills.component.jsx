import allLogos from "../images/Logos.js";
import SkillsForm from "../skills-form/skills-form.component";
import "./Skills.styles.scss";
import allLogos from "../images/Logos.js";
import SkillsForm from "../skills-form/skills-form.component";
import "./Skills.styles.scss";
function Skills() {
  return (
    <div className="container skills-container">
      <div className="row">
        <SkillsForm
          source={allLogos.codingLogo}
          cardTitle="Programming languages"
          cardText={["C#,", "C++,", "Javascript,", "Typescript."]}
        />

        <SkillsForm
          source={allLogos.frameworkLogo}
          cardTitle="FrameWorks"
          cardText={[".NET,", "React,", "Angular."]}
        />

        <SkillsForm
          source={allLogos.dataAccessLogo}
          cardTitle="ORM's"
          cardText={["ADO.NET,", "EF Core,", "Dapper."]}
        />

        <SkillsForm
          source={allLogos.databasesLogo}
          cardTitle="Databases"
          cardText={["SQL,", "T-SQL,", "MSSQL."]}
        />

        <SkillsForm
          source={allLogos.cloudLogo}
          cardTitle="Cloud"
          cardText={["Microsoft Azure."]}
        />

        <SkillsForm
          source={allLogos.libraryLogo}
          cardTitle="Libraries"
          cardText={["NPM,", "Yarn,", "Bootstrap,", "Jquery."]}
        />

        <SkillsForm
          source={allLogos.markupLogo}
          cardTitle="Markup"
          cardText={["HTML/CSS,", "XML."]}
        />

        <SkillsForm
          source={allLogos.scLogo}
          cardTitle="Source Control"
          cardText={["Git,", "Github."]}
        />
      </div>
    </div>
  );
}

export default Skills;
