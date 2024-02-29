import { useContext, useEffect } from "react";
import { ProblemCard } from "../components/projectPage/ProblemCard";
import { IProjectPageProps } from "../interfaces";
import { MainContext } from "../providers/MainContext";
import { AddProblemModal } from "../components/addProblemModal/AddProblemModal";

export const ProjectPage = ({ project }: IProjectPageProps) => {
  const {
    loadProblems,
    problems,
    addProblemModalRef,
    setSelectedProject,
    projects,
  } = useContext(MainContext);

  useEffect(() => {
    const location = window.location.href;
    const projectId = Number(location[location.length - 1]);
    loadProblems(projectId);
    setSelectedProject(
      projects.filter((project) => project.id === projectId)[0]
    );
  }, []);

  return (
    <>
      <AddProblemModal />
      <div className="relative flex flex-col w-5/6 gap-10 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="w-1/2 text-3xl tracking-widest uppercase xl:text-6xl font-marlinge ">
            {project.title}
          </h1>
          <button
            onClick={() => {
              addProblemModalRef.current?.showModal();
            }}
            className="tracking-widest uppercase btn btn-primary"
          >
            Adicionar problema
          </button>
        </div>

        {problems.length > 0 ? (
          <div className="flex flex-wrap justify-center w-full gap-10 py-10">
            {problems.map(
              ({ description, finished, id, started_at, title }) => (
                <ProblemCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  finished={finished}
                  started_at={started_at}
                  project={project}
                />
              )
            )}
          </div>
        ) : (
          <>
            <p className="py-10 text-lg font-thin text-center md:text-2xl text-error">
              Não há problemas registrados para este projeto.
            </p>
          </>
        )}
      </div>
    </>
  );
};
