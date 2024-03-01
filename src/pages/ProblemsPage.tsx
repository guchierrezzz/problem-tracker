import { useContext, useEffect } from "react";
import { IProjectPageProps } from "../interfaces";
import { MainContext } from "../providers/MainContext";
import { AddProblemModal } from "../components/problem/addProblemModal/AddProblemModal";
import { ProblemSection } from "../components/problem/page/ProblemSection";
import { ProblemsPageHeader } from "../components/problem/page/ProblemsPageHeader";
import { ProblemStatistics } from "../components/problem/ProblemStatistics";

export const ProblemsPage = ({ project }: IProjectPageProps) => {
  const { loadProblems, problems, addProblemModalRef, setSelectedProject } =
    useContext(MainContext);

  useEffect(() => {
    loadProblems(project.id);
    setSelectedProject(project);
  }, []);

  return (
    <>
      <AddProblemModal />
      <div className="relative flex flex-col w-5/6 gap-10 py-10 mx-auto animate-fade-translate">
        <ProblemsPageHeader
          project={project}
          addProblemModalRef={addProblemModalRef}
        />
        <ProblemStatistics problems={problems} />
        <ProblemSection problems={problems} project={project} />
      </div>
    </>
  );
};
