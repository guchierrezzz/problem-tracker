import { Link } from "react-router-dom";
import { IProblemCardProps } from "../../interfaces";
import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";

export const ProblemCard = ({
  id,
  description,
  finished,
  title,
  started_at,
  project,
}: IProblemCardProps) => {
  const { getSelectedProblem, deleteProblem, toggleProblemStatus } =
    useContext(MainContext);

  return (
    <div
      className="indicator parent-selector animate-fade-translate"
      id={String(id)}
    >
      <span
        className={`indicator-item badge ${
          finished ? "badge-success" : "badge-error"
        }`}
      ></span>
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="pb-10">{description}</p>
          <div className="flex items-center justify-end gap-5">
            <p className="text-sm italic">Criado em {started_at}</p>

            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="tracking-widest uppercase btn btn-sm btn-primary"
                onClick={(e: any) => {
                  getSelectedProblem(e);
                }}
              >
                Ações
              </div>
              <ul
                tabIndex={0}
                className="z-10 p-2 shadow dropdown-content menu bg-base-300 rounded-box w-52"
              >
                <li>
                  <button onClick={toggleProblemStatus}>
                    Marcar como resolvido
                  </button>
                </li>
                <li>
                  <button>Editar</button>
                </li>
                <li>
                  <button onClick={deleteProblem}>Excluir</button>
                </li>
              </ul>
            </div>
            <Link
              className="tracking-widest uppercase btn btn-sm btn-primary"
              onClick={(e: any) => {
                getSelectedProblem(e);
              }}
              to={`/projects/${project.id}/problems/${id}`}
            >
              Acessar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
