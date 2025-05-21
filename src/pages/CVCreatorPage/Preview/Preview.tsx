import { useSelector } from "react-redux";
import type { RootState } from "../cvStore";
import { Page, Document, PDFViewer } from "@react-pdf/renderer";
import './Preview.css';
import Html from "react-pdf-html";
import type { CVModel } from "../../../utils/types";

const getHtmlFromCv = (cv: CVModel) => {
    const personal = `
    <div>Email: ${cv.personalInfo.email}</div>
    <div>Phone: ${cv.personalInfo.phoneNumber}</div>
  `;

    const skills = cv.skills.map(
        (s) => `<div>${s.name} - ${s.level}</div>`
    ).join('');

    return `<div>${personal}${skills}</div>`;
};

function Preview() {
    const cv = useSelector((state: RootState) => state.cv);

    const html = getHtmlFromCv(cv);

    return (<>
        <PDFViewer showToolbar={false} className="preview-container">
            <Document >
                <Page size="A4">
                    <Html>{html}</Html>
                </Page>
            </Document>
        </PDFViewer>

    </>);
}

export default Preview;