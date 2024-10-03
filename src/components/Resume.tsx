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
    <div className="w-full h-full">
      <h1 className="font-bold text-2xl text-center mb-2">{title}</h1>

      <div className="rounded-md w-full h-full px-8 py-4 bg-white shadow-lg flex flex-col gap-2">
        <div className="text-lg flex justify-center gap-2">
          <div>{generalInfo.name}</div>
          <div>{generalInfo.email}</div>
          <div>{generalInfo.phone}</div>
        </div>

        <div className="border-b" />

        <div>
          <h2 className="text-xl font-bold mb-2">Experience:</h2>

          <div className="flex flex-col gap-2">
            {experience.map((item) => (
              <div>
                <div>
                  <div className="leading-4 font-bold text-lg">
                    {item.companyName}
                  </div>
                  <div className="text-sm font-light">
                    {item.startDate} - {item.endDate}
                  </div>
                </div>

                <div>{item.position}</div>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b" />

        <div>
          <h2 className="text-xl font-bold mb-2">Education:</h2>

          <div className="flex flex-col gap-2">
            {education.map((item) => (
              <div>
                <div>
                  <div className="leading-4 font-bold text-lg">
                    {item.schoolName}
                  </div>
                  <div className="text-sm font-light">
                    {item.startDate} - {item.endDate}
                  </div>
                </div>

                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
