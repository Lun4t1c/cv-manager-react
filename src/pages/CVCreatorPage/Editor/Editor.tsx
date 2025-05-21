import type { EducationModel, LinkModel, SkillModel, WorkExperienceModel } from "../../../utils/types";
import './Editor.css';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../cvStore";
import { updateLinks, updatePersonalInfo, updateSkills } from "../cvSlice";

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

            
        </form>
    </>);
}

export default Editor;