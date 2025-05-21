import { useSelector } from "react-redux";
import type { RootState } from "../cvStore";
import React from "react";

function Preview() {
    const cv = useSelector((state: RootState) => state.cv);

    return (<>
        <div className="preview-container">
            <div> {cv.personalInfo.email} </div>
            <div> {cv.personalInfo.phoneNumber} </div>

            {cv.skills.map((skill, i) => {
            return <React.Fragment key={i}>
                <div>{skill.name} - {skill.level}</div>
            </React.Fragment>
        }
        )}
        </div>
    </>);
}

export default Preview;