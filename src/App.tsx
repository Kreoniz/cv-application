import { useState } from "react";

import { GeneralInfoForm } from "./components/GeneralInfoForm";
import { ExperienceForm } from "./components/ExperienceForm";
import { EducationForm } from "./components/EducationForm";
import { Resume } from "./components/Resume";
import { IEducationItem, IExperienceItem, IGeneralInfo } from "./types";
import { ResumeMockData } from "./mocks";

export function App() {
  const [title, setTitle] = useState(ResumeMockData.title);

  const [generalInfo, setGeneralInfo] = useState<IGeneralInfo>(
    ResumeMockData.generalInfo
  );

  const [experience, setExperience] = useState<IExperienceItem[]>(
    ResumeMockData.jobList
  );

  const [education, setEducation] = useState<IEducationItem[]>(
    ResumeMockData.educationList
  );

  return (
    <div className="w-screen h-screen bg-lime-100 flex flex-col gap-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <GeneralInfoForm data={generalInfo} setData={setGeneralInfo} />

      <ExperienceForm data={experience} setData={setExperience} />

      <EducationForm data={education} setData={setEducation} />

      <Resume
        title={title}
        generalInfo={generalInfo}
        experience={experience}
        education={education}
      />
    </div>
  );
}
