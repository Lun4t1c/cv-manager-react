import { useState, type CSSProperties } from 'react';
import './CVCreatorPage.css';
import './SplitPane.css';
import { SplitPane } from '@rexxars/react-split-pane';
import type {
  EducationModel,
  LinkModel,
  PersonalInfoModel,
  SkillModel,
  WorkExperienceModel
} from '../../utils/types';

function CVCreatorPage() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoModel>({
    name: '',
    surname: '',
    location: '',
    phoneNumber: '',
    email: ''
  });

  const [skills, setSkills] = useState<SkillModel[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceModel[]>([]);
  const [educations, setEducations] = useState<EducationModel[]>([]);
  const [links, setLinks] = useState<LinkModel[]>([]);

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
      console.warn(`Inproper key in education input: ${name}`);
    }
  };

  const updateWorkExperience = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name.includes('workExperienceCompany')) {
      workExperiences[parseInt(name.replace('workExperienceCompany', ''))].company = value;
      setWorkExperiences([...workExperiences]);
    } else {
      console.warn(`Inproper key in work experience input: ${name}`);
    }
  };

  const updateLink = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name.includes('linkUrl')) {
      links[parseInt(name.replace('linkUrl', ''))].url = value;
      setLinks([...links]);
    } else if (name.includes('linkIcon')) {
      links[parseInt(name.replace('linkIcon', ''))].icon = value;
      setLinks([...links]);
    } else {
      console.warn(`Inproper key in link input: ${name}`);
    }
  };

  const addCvEntry = (entryType: 'Skill' | 'WorkExperience' | 'Education' | 'Link'): void => {
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
            degree: '',
            start: new Date(),
            end: undefined
          }
        ]);
        return;

      case 'Link':
        setLinks([
          ...links,
          {
            url: '',
            icon: ''
          }
        ]);
        break;
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

          <div className="form-group-container">
            {links.length > 0 && <div className="separator"></div>}
            {links.map((link: LinkModel, i: number) => {
              return (
                <div key={i} className="cv-link-input">
                  <input
                    name={'linkUrl' + i.toString()}
                    type="text"
                    placeholder="link"
                    value={link.url}
                    onChange={updateLink}
                  />
                  <input
                    name={'linkIcon' + i.toString()}
                    type="text"
                    placeholder="link icon"
                    value={link.icon}
                    onChange={updateLink}
                  />
                </div>
              );
            })}
            <button type="button" onClick={() => addCvEntry('Link')}>
              Add link
            </button>
          </div>

          <div className="form-group-container">
            {skills.length > 0 && <div className="separator"></div>}
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
            <button type="button" onClick={() => addCvEntry('Skill')}>
              Add skill
            </button>
          </div>

          <div className="form-group-container">
            {educations.length > 0 && <div className="separator"></div>}
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
            <button type="button" onClick={() => addCvEntry('Education')}>
              Add education
            </button>
          </div>

          <div className="form-group-container">
            {workExperiences.length > 0 && <div className="separator"></div>}
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
            <button type="button" onClick={() => addCvEntry('WorkExperience')}>
              Add work experience
            </button>
          </div>
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
