import { IEducationItem } from "../types";

export function EducationForm({
  data,
  setData,
}: {
  data: IEducationItem[];
  setData: (value: IEducationItem[]) => void;
}) {
  return (
    <div>
      EducationForm:
      <div>
        {data.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
}
