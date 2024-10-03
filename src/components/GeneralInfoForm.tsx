import { IGeneralInfo } from "../types";

export function GeneralInfoForm({
  data,
  setData,
}: {
  data: IGeneralInfo;
  setData: (value: IGeneralInfo) => void;
}) {
  return (
    <div className="bg-white rounded-md shadow-lg p-4">
      <div className="font-bold text-xl mb-2">General Information:</div>

      <div className="flex flex-col gap-2">
        <div>
          <label className="font-bold text-lg" htmlFor="name">
            Name:
          </label>

          <input
            placeholder="Arthur Dent"
            type="text"
            id="name"
            className="rounded border-2 py-1 px-2"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label className="font-bold text-lg" htmlFor="email">
            Email:
          </label>

          <input
            placeholder="arthur_dent@universe.com"
            type="email"
            id="email"
            className="rounded border-2 py-1 px-2"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label className="font-bold text-lg" htmlFor="phone">
            Phone:
          </label>

          <input
            placeholder="contact me via a babel fish"
            type="tel"
            id="name"
            className="rounded border-2 py-1 px-2"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
