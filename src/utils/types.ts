export type IntRange1To10 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface CVModel {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;

  skills: SkillModel[];
  workExperiences: WorkExperienceModel[];
  educations: EducationModel[];
}

export interface SkillModel {
  name: string;
  level: IntRange1To10 | string;
}

export interface WorkExperienceModel {
  jobTitle: string;
  company: string;
  start: Date;
  end: Date | undefined;
}

export interface EducationModel {
  schoolName: string;
  start: Date;
  end: Date | undefined;
}
