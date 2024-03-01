import { IProblemsPageHeaderProps } from "../../../interfaces";

export const ProblemsPageHeader = ({
  addProblemModalRef,
  project,
}: IProblemsPageHeaderProps) => {
  return (
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
  );
};
