import { IExperienceItem } from "../types";
import { CrossIcon } from "../icons/cross";
import { PlusIcon } from "../icons/plus";

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

  function deleteItem(id: number): void {
    const updatedData = data.filter((item) => id !== item.id);

    setData(updatedData);
  }

  function addItem(): void {
    setData([
      ...data,
      {
        id: Date.now(),
        companyName: "",
        position: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  return (
    <div className="bg-white rounded-md shadow-lg p-4">
      <div className="font-bold text-xl mb-2">Experience:</div>

      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-md border-2 p-2 flex flex-col gap-2 relative"
          >
            <div>
              <label className="font-bold text-lg" htmlFor="name">
                Company Name:
              </label>

              <input
                placeholder="Arthur Dent"
                type="text"
                id="name"
                className="w-full rounded border-2 py-1 px-2"
                value={item.companyName}
                onChange={(e) =>
                  updateField(item.id, "companyName", e.target.value)
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
              <label className="font-bold text-lg" htmlFor="position">
                Position:
              </label>

              <input
                placeholder="Software Engineer"
                type="text"
                id="position"
                className="w-full rounded border-2 py-1 px-2"
                value={item.position}
                onChange={(e) =>
                  updateField(item.id, "position", e.target.value)
                }
              />
            </div>

            <div>
              <label className="font-bold text-lg" htmlFor="description">
                Description:
              </label>

              <textarea
                placeholder="Highly adaptable and resourceful software engineer with experience in developing innovative solutions under extreme pressure. Skilled in navigating complex systems, collaborating with diverse teams, and finding creative workarounds to seemingly insurmountable problems. Key Skills:"
                id="name"
                className="text-sm w-full min-h-20 rounded border-2 py-1 px-2"
                value={item.description}
                onChange={(e) =>
                  updateField(item.id, "description", e.target.value)
                }
              ></textarea>
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
