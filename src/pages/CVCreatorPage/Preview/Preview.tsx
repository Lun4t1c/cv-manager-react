import { useSelector } from "react-redux";
import type { RootState } from "../cvStore";

function Preview() {
    const cv = useSelector((state: RootState) => state.cv)

    return (<>
        <div className="preview-container">
            <div> {cv.personalInfo.email} </div>
            <div> {cv.personalInfo.phoneNumber} </div>
        </div>
    </>);
}

export default Preview;