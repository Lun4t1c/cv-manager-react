export type IntRange1To10 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface CVModel {
  personalInfo: PersonalInfoModel;

  links: LinkModel[];
  skills: SkillModel[];
  workExperiences: WorkExperienceModel[];
  educations: EducationModel[];
}

export interface PersonalInfoModel {
  name: string;
  surname: string;
  location: string;
  email: string;
  phoneNumber: string;
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
  degree: string;
  start: Date;
  end: Date | undefined;
}

export interface LinkModel {
  url: string;
  icon: string;
}
