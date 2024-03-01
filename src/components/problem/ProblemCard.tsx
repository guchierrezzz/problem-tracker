import { IProblemCardProps } from "../../interfaces";
import { ProblemCardBody } from "./ProblemCardBody";

export const ProblemCard = ({ problem, project }: IProblemCardProps) => {
  return (
    <div
      className="indicator lg:w-fit w-full parent-selector animate-fade-translate"
      id={String(problem.id)}
    >
      <span
        className={`indicator-item badge ${
          problem.finished ? "badge-success" : "badge-error"
        }`}
      ></span>
      <ProblemCardBody problem={problem} project={project} />
    </div>
  );
};
