import { RadioGroup } from "../components/general/RadioGroup";
import { DashboardList } from "../components/overview/DashboardList";
import { OverviewStatistics } from "../components/overview/OverviewStatistics";
import { IProblemOverviewProps } from "../interfaces";

export const ProblemOverview = ({ problem }: IProblemOverviewProps) => {
  return (
    <div className="w-5/6 mx-auto py-10 flex flex-col gap-5">
      <div className="flex flex-col">
        <h1 className="w-1/2 text-3xl tracking-widest uppercase xl:text-6xl font-marlinge ">
          {problem.title}
        </h1>
        <p className="text-gray-500">{problem.description}</p>
      </div>
      <RadioGroup />
      <OverviewStatistics />
      <DashboardList />
    </div>
  );
};
