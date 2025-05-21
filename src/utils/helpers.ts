import type { CVModel } from './types';

export function createCvModelInstance(): CVModel {
  return {
  personalInfo: {
    name: '',
    surname: '',
    location: '',
    email: '',
    phoneNumber: ''
  },
  links: [],
  skills: [],
  workExperiences: [],
  educations: []
};
}

export function generatePDF(cv: CVModel): void{

}