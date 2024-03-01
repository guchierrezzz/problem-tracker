import { IProblem, IProblemSectionProps } from "../../../interfaces";
import { ProblemCard } from "../ProblemCard";

export const ProblemSection = ({ problems, project }: IProblemSectionProps) => {
  return (
    <>
      {problems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center w-full gap-10">
          {problems.map((problem: IProblem) => (
            <ProblemCard key={problem.id} problem={problem} project={project} />
          ))}
        </div>
      ) : (
        <>
          <p className="py-10 text-lg font-thin text-center md:text-2xl text-error">
            Não há problemas registrados para este projeto.
          </p>
        </>
      )}
    </>
  );
};
