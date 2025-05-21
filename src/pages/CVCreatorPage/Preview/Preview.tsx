import { useState } from "react";
import type { EducationModel, LinkModel, PersonalInfoModel, SkillModel, WorkExperienceModel } from "../../../utils/types";

function Preview() {
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

    return (<>
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
    </>);
}

export default Preview;