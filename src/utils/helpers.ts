import type { CVModel } from './types';

export function createCvModelInstance(): CVModel {
  return {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    skills: [],
    workExperiences: [],
    educations: []
  };
}
