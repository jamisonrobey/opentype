import { Chart } from "./Chart";

export const Results = () => {
  return (
    <div className="w-3/4 ">
      <div className=" grid grid-cols-6">
        <div className="col-span-1 space-y-4 row-span-4">
          <span className="text-4xl flex flex-col">
            wpm
            <span className={`text-[var(--accent-color)] text-6xl`}>58</span>
          </span>
          <span className="text-4xl flex flex-col">
            acc{" "}
            <span className={`text-[var(--accent-color)] text-6xl`}>85%</span>
          </span>
        </div>
        <div className="h-[200px] col-span-5">
          <Chart />
        </div>
      </div>
      <div className="grid grid-cols-3 space-y-4">
        <span className="flex flex-col text-xl">
          test type
          <span className="text-[var(--accent-color)] text-base">words 10</span>
          <span className="text-[var(--accent-color)] text-base">
            english-10k
          </span>
        </span>
        <span className="flex flex-col text-xl">
          characters
          <span className="text-4xl text-[var(--accent-color)]">60/10</span>
        </span>
        <span className="flex flex-col text-xl">
          time
          <span className="text-4xl text-[var(--accent-color)]">13s</span>
        </span>
        <span className="flex flex-col text-xl">
          raw
          <span className="text-4xl text-[var(--accent-color)]">69</span>
        </span>
        <span className="flex flex-col text-xl">
          consistency
          <span className="text-4xl text-[var(--accent-color)]">61%</span>
        </span>
      </div>
    </div>
  );
};
