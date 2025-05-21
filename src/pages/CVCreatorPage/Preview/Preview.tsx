import { useSelector } from "react-redux";
import type { RootState } from "../cvStore";
import React from "react";
import { Page, Document, PDFViewer } from "@react-pdf/renderer";
import './Preview.css';
//import Html from "react-pdf-html";

function Preview() {
    const cv = useSelector((state: RootState) => state.cv);

    return (<>
            <PDFViewer showToolbar={false} className="preview-container">
                <Document >
                    <Page size="A4">
                        {/* <Html>
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
                </Html> */}
                    </Page>
                </Document>
            </PDFViewer>

    </>);
}

export default Preview;