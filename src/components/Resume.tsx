import { IEducationItem, IExperienceItem, IGeneralInfo } from "../types";

export function Resume({
  title,
  generalInfo,
  experience,
  education,
}: {
  title: string;
  generalInfo: IGeneralInfo;
  experience: IExperienceItem[];
  education: IEducationItem[];
}) {
  return (
    <div>
      Resume:
      <h1>{title}</h1>
      <div>
        {generalInfo.name} {generalInfo.email} {generalInfo.phone}
      </div>
      <div>{experience.map((item) => item.companyName)}</div>
      <div>{education.map((item) => item.schoolName)}</div>
    </div>
  );
}
