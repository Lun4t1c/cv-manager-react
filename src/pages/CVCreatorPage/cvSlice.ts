import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createCvModelInstance } from "../../utils/helpers";
import type { CVModel } from "../../utils/types";

const initialState: CVModel = createCvModelInstance();

const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
        setCV(_, action: PayloadAction<CVModel>) {
            return action.payload;
        },
        updatePersonalInfo(state, action: PayloadAction<CVModel['personalInfo']>) {
            state.personalInfo = action.payload;
        },
        updateSkills(state, action: PayloadAction<CVModel['skills']>) {
            state.skills = action.payload;
        },
        updateEducation(state, action: PayloadAction<CVModel['educations']>) {
            state.educations = action.payload;
        },
        updateLinks(state, action: PayloadAction<CVModel['links']>) {
            state.links = action.payload;
        },
        updateWorkExperiences(state, action: PayloadAction<CVModel['workExperiences']>) {
            state.workExperiences = action.payload;
        }
    }
});

export const { setCV, updateSkills, updateEducation, updateLinks, updatePersonalInfo, updateWorkExperiences } = cvSlice.actions;
export default cvSlice.reducer;