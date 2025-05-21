import type { EducationModel, LinkModel, SkillModel, WorkExperienceModel } from "../../../utils/types";
import './Editor.css';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../cvStore";
import { updateLinks, updatePersonalInfo, updateSkills } from "../cvSlice";
import React from "react";

function Editor() {
    const personalInfo = useSelector((state: RootState) => state.cv.personalInfo)
    const links = useSelector((state: RootState) => state.cv.links);
    const skills = useSelector((state: RootState) => state.cv.skills);
    const educations = useSelector((state: RootState) => state.cv.educations);
    const workExperiences = useSelector((state: RootState) => state.cv.workExperiences);
    const dispatch = useDispatch();

    const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(updatePersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value
        }))
    };

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        if (name.includes("SkillName")) {
            dispatch(updateSkills(
                skills.map((skill, i) =>
                    i === parseInt(name.replace('SkillName', '')) ? { ...skill, name: value } : skill
                )
            ));
        } else if (name.includes("SkillLevel")) {
            dispatch(updateSkills(
                skills.map((skill, i) =>
                    i === parseInt(name.replace('SkillLevel', '')) ? { ...skill, level: value } : skill
                )
            ));
        }
    }

    const addEntry = (entryType: 'Skill' | 'WorkExperience' | 'Education' | 'Link'): void => {
        switch (entryType) {
            case "Skill":
                dispatch(updateSkills([
                    ...skills,
                    {
                        name: "",
                        level: ""
                    }
                ]));
                break;

            case "WorkExperience":
                break;

            case "Education":
                break;

            case "Link":
                break;
        }
    }

    return (<>
        <form className="form-container">
            <div className="form-group">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail address"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
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
                    onChange={handlePersonalInfoChange}
                />
            </div>

            <div>
                <div className="separator"></div>
                {skills.map((skill: SkillModel, index) => {
                    return (<React.Fragment key={index}>
                        <input
                            type="text"
                            name={'SkillName' + index.toString()}
                            placeholder="Skill name"
                            value={skill.name}
                            onChange={handleSkillChange} />

                        <input
                            type="number"
                            min={1}
                            max={10}
                            name={'SkillLevel' + index.toString()}
                            placeholder="Skill level"
                            value={skill.level}
                            onChange={handleSkillChange} />
                    </React.Fragment>);
                })}

                <button type="button" onClick={() => addEntry('Skill')}>Add skill</button>
            </div>
        </form>
    </>);
}

export default Editor;