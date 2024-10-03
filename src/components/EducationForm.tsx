import { IEducationItem } from "../types";

import { CrossIcon } from "../icons/cross";
import { PlusIcon } from "../icons/plus";

export function EducationForm({
  data,
  setData,
}: {
  data: IEducationItem[];
  setData: (value: IEducationItem[]) => void;
}) {
  function updateField(id: number, field: string, text: string): void {
    const itemIndex = data.findIndex((item) => id === item.id);

    const updatedItem = {
      ...data.find((item) => id === item.id),
      [field]: text,
    } as IEducationItem;

    const filteredData = data.filter((item) => id !== item.id);

    const updatedData = filteredData.slice();
    updatedData.splice(itemIndex, 0, updatedItem);

    setData(updatedData);
  }

  function deleteItem(id: number): void {
    const updatedData = data.filter((item) => id !== item.id);

    setData(updatedData);
  }

  function addItem(): void {
    setData([
      ...data,
      {
        id: Date.now(),
        schoolName: "",
        title: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  return (
    <div className="bg-white rounded-md shadow-lg p-4">
      <div className="font-bold text-xl mb-2">Education:</div>

      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-md border-2 p-2 flex flex-col gap-2 relative"
          >
            <div>
              <label className="font-bold text-lg" htmlFor="schoolName">
                School Name:
              </label>

              <input
                placeholder="Intergalactic Uni"
                type="text"
                id="name"
                className="w-full rounded border-2 py-1 px-2"
                value={item.schoolName}
                onChange={(e) =>
                  updateField(item.id, "schoolName", e.target.value)
                }
              />
            </div>

            <div>
              <label className="font-bold text-lg" htmlFor="startDate">
                Start Date:
              </label>

              <input
                placeholder="01.03.1999"
                type="text"
                id="startDate"
                className="w-full rounded border-2 py-1 px-2"
                value={item.startDate}
                onChange={(e) =>
                  updateField(item.id, "startDate", e.target.value)
                }
              />
            </div>

            <div>
              <label className="font-bold text-lg" htmlFor="endDate">
                End Date:
              </label>

              <input
                placeholder="01.03.1999"
                type="text"
                id="endDate"
                className="w-full rounded border-2 py-1 px-2"
                value={item.endDate}
                onChange={(e) =>
                  updateField(item.id, "endDate", e.target.value)
                }
              />
            </div>

            <div>
              <label className="font-bold text-lg" htmlFor="title">
                Position:
              </label>

              <input
                placeholder="Computer Science"
                type="text"
                id="title"
                className="w-full rounded border-2 py-1 px-2"
                value={item.title}
                onChange={(e) => updateField(item.id, "title", e.target.value)}
              />
            </div>

            <button
              type="button"
              className="m-1 p-1 absolute top-0 right-0 rounded-md hover:bg-slate-200 transition-colors"
              onClick={() => deleteItem(item.id)}
            >
              <CrossIcon />
            </button>
          </div>
        ))}

        <button
          className="w-full rounded-md border-2 flex justify-center items-center gap-2 p-2 hover:bg-slate-200 transition-colors"
          onClick={() => addItem()}
        >
          <PlusIcon /> Create an Item
        </button>
      </div>
    </div>
  );
}
