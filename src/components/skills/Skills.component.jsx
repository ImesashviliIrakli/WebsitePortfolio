import allLogos from '../images/Logos.js';
import SkillsForm from '../skills-form/skills-form.component';
import './Skills.styles.scss';
function Skills() {
  return (
    <div className="container skills-container">
      <div className="row">
        <SkillsForm
          source={allLogos.codingLogo}
          cardTitle="Programming languages"
          cardText={['C#,', 'C++,', 'Javascript', 'Typescript']}
        />

        <SkillsForm
          source={allLogos.frameworkLogo}
          cardTitle="FrameWorks"
          cardText={['Asp.Net,', 'React,', 'Angular']}
        />

        <SkillsForm
          source={allLogos.markupLogo}
          cardTitle="MarkUp"
          cardText={['HTML/CSS,', 'XML']}
        />

        <SkillsForm
          source={allLogos.libraryLogo}
          cardTitle="Libraries"
          cardText={['Bootstrap,', 'Jquery']}
        />

        <SkillsForm
          source={allLogos.dataAccessLogo}
          cardTitle="ORM's"
          cardText={['ADO.NET,', 'EF Core,', 'Dapper']}
        />

        <SkillsForm
          source={allLogos.databasesLogo}
          cardTitle="Databases"
          cardText={['SQL,', 'T-SQL,', 'MSSQL']}
        />

        <SkillsForm
          source={allLogos.scLogo}
          cardTitle="Source Control"
          cardText={['Git,', 'Github']}
        />

        <SkillsForm
          source={allLogos.officeLogo}
          cardTitle="Microsoft Office"
          cardText={['Excel,', 'Access,', 'Word,', 'Powerpoint']}
        />
      </div>
    </div>
  );
}

export default Skills;
