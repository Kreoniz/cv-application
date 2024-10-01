import { IGeneralInfo } from "../types";

export function GeneralInfoForm({
  data,
  setData,
}: {
  data: IGeneralInfo;
  setData: (value: IGeneralInfo) => void;
}) {
  return (
    <div>
      GeneralInfoForm:
      <div>
        {data.name} {data.email} {data.phone}
      </div>
    </div>
  );
}
