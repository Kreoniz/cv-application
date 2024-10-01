export interface IGeneralInfo {
  name: string;
  email: string;
  phone: string;
}

export interface IExperienceItem {
  id: number;
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface IEducationItem {
  id: number;
  schoolName: string;
  title: string;
  startDate: string;
  endDate: string;
}
