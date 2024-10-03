import { IExperienceItem } from "../types";

export function ExperienceForm({
  data,
  setData,
}: {
  data: IExperienceItem[];
  setData: (value: IExperienceItem[]) => void;
}) {
  function updateField(id: number, field: string, text: string): void {
    const itemIndex = data.findIndex((item) => id === item.id);

    const updatedItem = {
      ...data.find((item) => id === item.id),
      [field]: text,
    } as IExperienceItem;

    const filteredData = data.filter((item) => id !== item.id);

    const updatedData = filteredData.slice();
    updatedData.splice(itemIndex, 0, updatedItem);

    setData(updatedData);
  }

  return (
    <div className="bg-white rounded-md shadow-lg p-4">
      <div className="font-bold text-xl mb-2">Experience:</div>

      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-md border-2 p-2 flex flex-col gap-2"
          >
            <div>
              <label className="font-bold text-lg" htmlFor="name">
                Company Name:
              </label>

              <input
                placeholder="Arthur Dent"
                type="text"
                id="name"
                className="rounded border-2 py-1 px-2"
                value={item.companyName}
                onChange={(e) =>
                  updateField(item.id, "companyName", e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
