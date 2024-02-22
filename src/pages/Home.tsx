import { useContext } from "react";
import { ProjectCard } from "../components/project/ProjectCard";
import { MainContext } from "../providers/MainContext";

export const Home = () => {
  const { addProjectModalRef } = useContext(MainContext);
  return (
    <div className="w-5/6 py-10 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl tracking-widest uppercase xl:text-6xl font-marlinge ">
          Projetos
        </h1>
        <button
          onClick={() => {
            addProjectModalRef.current?.showModal();
          }}
          className="tracking-widest uppercase btn btn-primary"
        >
          Adicionar
        </button>
      </div>

      <div className="grid w-full gap-10 py-10 lg:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
