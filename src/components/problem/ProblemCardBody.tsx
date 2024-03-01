import { Link } from "react-router-dom";
import { DropdownMenu } from "./ProblemCardDropdownMenu";
import { IProblemCardBodyProps } from "../../interfaces";
import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";

export const ProblemCardBody = ({
  project,
  problem,
}: IProblemCardBodyProps) => {
  const { getSelectedProblem } = useContext(MainContext);

  const formatDate = (dateString: string): string =>
    new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

  return (
    <div className="shadow-xl card w-full lg:w-96 bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{problem.title}</h2>
        <p className="pb-10">{problem.description}</p>
        <div className="flex items-center justify-end gap-5">
          <p className="text-sm italic text-gray-500">
            Criado em {formatDate(problem.started_at)}
          </p>

          <DropdownMenu finished={problem.finished} />
          <Link
            className="tracking-widest uppercase btn btn-sm btn-primary"
            onClick={(e: any) => {
              getSelectedProblem(e);
            }}
            to={`/project/${project.id}/problem/${problem.id}`}
          >
            Acessar
          </Link>
        </div>
      </div>
    </div>
  );
};
