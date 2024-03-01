import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/general/Navbar";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MainContext } from "../providers/MainContext";
import { ProblemsPage } from "../pages/ProblemsPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ProblemOverview } from "../pages/ProblemOverview";

export const RoutesMain = () => {
  const { NavbarDrawerRef, projects, selectedProject, problems } =
    useContext(MainContext);
  const location = useLocation();

  useEffect(() => {
    if (NavbarDrawerRef.current) {
      NavbarDrawerRef.current.checked = false;
    }
  }, [location]);

  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<ProjectsPage />} />

        {projects.map((project) => (
          <Route
            key={project.id}
            path={`project/${project.id}`}
            element={<ProblemsPage project={project} />}
          />
        ))}

        {problems.map((problem) => (
          <Route
            key={problem.id}
            path={`project/${selectedProject?.id}/problem/${problem.id}`}
            element={<ProblemOverview problem={problem} />}
          />
        ))}
      </Routes>
    </Navbar>
  );
};
