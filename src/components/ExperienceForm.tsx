import { IExperienceItem } from "../types";

export function ExperienceForm({
  data,
  setData,
}: {
  data: IExperienceItem[];
  setData: (value: IExperienceItem[]) => void;
}) {
  return (
    <div>
      ExperienceForm:
      <div>
        {data.map((item) => (
          <div>{item.companyName}</div>
        ))}
      </div>
    </div>
  );
}
