import { useState, type CSSProperties } from 'react';
import './CVCreatorPage.css';
import './SplitPane.css';
import { SplitPane } from '@rexxars/react-split-pane';
import { createCvModelInstance } from '../../utils/helpers';
import type { SkillModel } from '../../utils/types';

function CVCreatorPage() {
  const [cv, setCv] = useState(createCvModelInstance());

  const updateCv = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCv((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addSkill = () => {
    const newCv = { ...cv };
    newCv.skills.push({
      name: '',
      level: ''
    });
    setCv({ ...newCv });
  };

  const updateSkill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    cv.skills[parseInt(name)].name = value;
    setCv({ ...cv });
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
              value={cv.email}
              onChange={updateCv}
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number"
              pattern="[0-9\-]+"
              value={cv.phoneNumber}
              onChange={updateCv}
            />
          </div>

          <div className="form-group">
            <input type="url" id="url" name="url" placeholder="LinkedIn profile" />
          </div>

          {cv.skills.map((skill: SkillModel, i: number) => {
            return (
              <div key={i}>
                <input
                  name={i.toString()}
                  type="text"
                  placeholder="skill name"
                  onChange={updateSkill}
                />
              </div>
            );
          })}
          <button onClick={addSkill}>Add skill</button>
        </form>

        <div className="preview-container">
          <div> {cv.email} </div>
          <div> {cv.phoneNumber} </div>

          {cv.skills.map((skill: SkillModel) => {
            return <div>skill: {skill.name}</div>;
          })}
        </div>
      </SplitPane>
    </>
  );
}

export default CVCreatorPage;
