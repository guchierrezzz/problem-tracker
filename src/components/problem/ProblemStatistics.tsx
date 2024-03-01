import { IProblemStatisticsProps } from "../../interfaces";

export const ProblemStatistics = ({ problems }: IProblemStatisticsProps) => {
  const solvedProblems = problems.filter(
    (problem) => problem.finished === true
  );
  const unsolvedProblems = problems.filter(
    (problem) => problem.finished === false
  );
  const totalProblems = problems.length;

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title">Problemas</div>
        <div className="stat-value">{totalProblems}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Resolvidos</div>
        <div className="stat-value">{solvedProblems.length}</div>
        <div className="stat-desc">
          {((solvedProblems.length / totalProblems) * 100).toFixed(2)}%
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Em andamento</div>
        <div className="stat-value">{unsolvedProblems.length}</div>
        <div className="stat-desc">
          {((unsolvedProblems.length / totalProblems) * 100).toFixed(2)}%
        </div>
      </div>
    </div>
  );
};
