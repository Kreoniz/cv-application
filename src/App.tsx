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
    <div className="w-screen h-screen bg-lime-100 ">
      <div className="m-auto max-w-[1200px] p-4 gap-4 flex justify-between max-lg:flex-col max-lg:items-center">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="title">CV Title:</label>
            <input
              id="title"
              className="rounded border-2 py-1 px-2"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <GeneralInfoForm data={generalInfo} setData={setGeneralInfo} />

          <ExperienceForm data={experience} setData={setExperience} />

          <EducationForm data={education} setData={setEducation} />
        </div>

        <div>
          <Resume
            title={title}
            generalInfo={generalInfo}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    </div>
  );
}
