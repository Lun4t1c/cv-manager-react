import { useState, type CSSProperties } from 'react';
import './CVCreatorPage.css';
import './SplitPane.css';
import { SplitPane } from '@rexxars/react-split-pane';
import type { CVModel, EducationModel, SkillModel, WorkExperienceModel } from '../../utils/types';

function CVCreatorPage() {
  const [personalInfo, setPersonalInfo] = useState<
    Pick<CVModel, 'name' | 'surname' | 'email' | 'phoneNumber'>
  >({
    name: '',
    surname: '',
    phoneNumber: '',
    email: ''
  });

  const [skills, setSkills] = useState<SkillModel[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceModel[]>([]);
  const [educations, setEducations] = useState<EducationModel[]>([]);

  const updatePersonalInfo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const updateSkill = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name.includes('skillName')) {
      skills[parseInt(name.replace('skillName', ''))].name = value;
      setSkills([...skills]);
    } else if (name.includes('skillLevel')) {
      skills[parseInt(name.replace('skillLevel', ''))].level = value;
      setSkills([...skills]);
    } else {
      console.warn(`Inproper key in skill input: ${name}`);
    }
  };

  const updateEducation = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name.includes('educationName')) {
      educations[parseInt(name.replace('educationName', ''))].schoolName = value;
      setEducations([...educations]);
    } else {
      console.warn(`Inproper key in skill input: ${name}`);
    }
  };

  const updateWorkExperience = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name.includes('workExperienceCompany')) {
      workExperiences[parseInt(name.replace('workExperienceCompany', ''))].company = value;
      setWorkExperiences([...workExperiences]);
    } else {
      console.warn(`Inproper key in skill input: ${name}`);
    }
  };

  const addCvEntry = (entryType: 'Skill' | 'WorkExperience' | 'Education'): void => {
    switch (entryType) {
      case 'Skill':
        setSkills([
          ...skills,
          {
            name: '',
            level: 1
          }
        ]);
        return;

      case 'WorkExperience':
        setWorkExperiences([
          ...workExperiences,
          {
            jobTitle: '',
            company: '',
            start: new Date(),
            end: undefined
          }
        ]);
        return;

      case 'Education':
        setEducations([
          ...educations,
          {
            schoolName: '',
            start: new Date(),
            end: undefined
          }
        ]);
        return;
    }
  };

  //https://www.npmjs.com/package/@rexxars/react-split-pane
  const cssProps: CSSProperties = {
    height: '88%'
  };

  return (
    <>
      <SplitPane split="vertical" minSize={150} maxSize={-150} defaultSize={500} style={cssProps}>
        <form className="form-container">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail address"
              value={personalInfo.email}
              onChange={updatePersonalInfo}
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number"
              pattern="[0-9\-]+"
              value={personalInfo.phoneNumber}
              onChange={updatePersonalInfo}
            />
          </div>

          <div className="form-group">
            <input type="url" id="url" name="url" placeholder="LinkedIn profile" />
          </div>

          {skills.map((skill: SkillModel, i: number) => {
            return (
              <div key={i} className="cv-entry-input">
                <input
                  name={'skillName' + i.toString()}
                  type="text"
                  placeholder="skill name"
                  value={skill.name}
                  onChange={updateSkill}
                />
                <input
                  name={'skillLevel' + i.toString()}
                  type="text"
                  placeholder="skill level"
                  value={skill.level}
                  onChange={updateSkill}
                />
              </div>
            );
          })}
          <button onClick={() => addCvEntry('Skill')}>Add skill</button>

          {educations.map((education: EducationModel, i: number) => {
            return (
              <div key={i}>
                <input
                  name={'educationName' + i.toString()}
                  type="text"
                  placeholder="college name"
                  value={education.schoolName}
                  onChange={updateEducation}
                />
              </div>
            );
          })}
          <button onClick={() => addCvEntry('Education')}>Add education</button>

          {workExperiences.map((workExperience: WorkExperienceModel, i: number) => {
            return (
              <div key={i}>
                <input
                  name={'workExperienceCompany' + i.toString()}
                  type="text"
                  placeholder="Company"
                  value={workExperience.company}
                  onChange={updateWorkExperience}
                />
              </div>
            );
          })}
          <button onClick={() => addCvEntry('WorkExperience')}>Add work experience</button>
        </form>

        <div className="preview-container">
          <div> {personalInfo.email} </div>
          <div> {personalInfo.phoneNumber} </div>

          {skills.map((skill: SkillModel) => {
            return (
              <>
                <div>
                  <span>skill: {skill.name},</span>
                  <span>level: {skill.level}</span>
                </div>
              </>
            );
          })}

          {educations.map((education: EducationModel) => {
            return (
              <>
                <div>
                  <span>College: {education.schoolName},</span>
                </div>
              </>
            );
          })}

          {workExperiences.map((workExperience: WorkExperienceModel) => {
            return (
              <>
                <div>
                  <span>Company: {workExperience.company},</span>
                </div>
              </>
            );
          })}
        </div>
      </SplitPane>
    </>
  );
}

export default CVCreatorPage;
