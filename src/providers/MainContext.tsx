/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import {
  IMainContext,
  IMainContextProps,
  IProblem,
  IProject,
} from "../interfaces";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { TProjectFormSchema } from "../schemas/ProjectSchema";
import { TProblemFormSchema } from "../schemas/ProblemSchema";

export const MainContext = createContext({} as IMainContext);

export const MainContextProvider = ({ children }: IMainContextProps) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [problems, setProblems] = useState<IProblem[]>([]);
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(
    undefined
  );
  const [selectedProblem, setSelectedProblem] = useState<IProblem | undefined>(
    undefined
  );
  const NavbarDrawerRef = useRef<HTMLInputElement>(null);
  const NavbarElementRef = useRef<HTMLDivElement>(null);
  const addProjectModalRef = useRef<HTMLDialogElement>(null);
  const addProblemModalRef = useRef<HTMLDialogElement>(null);
  const editProjectModalRef = useRef<HTMLDialogElement>(null);

  const toggleDrawer = () => {
    if (NavbarDrawerRef.current !== null)
      NavbarDrawerRef.current.checked = !NavbarDrawerRef.current.checked;
  };

  const loadProjects = async () => {
    try {
      const { data } = await api.get("/projects");
      await setProjects(data);
    } catch {
      toast.error("Houve um erro interno no servidor.");
    }
  };

  const addProject = async (formData: TProjectFormSchema) => {
    try {
      await api.post("/projects", formData, {});
      loadProjects();
      toast.success(`Projeto adicionado com sucesso.`);
      addProjectModalRef.current?.close();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const editProject = async (formData: TProjectFormSchema) => {
    try {
      await api.patch(`/projects/${selectedProject?.id}`, formData, {});
      loadProjects();
      toast.success(`Projeto editado com sucesso.`);
      editProjectModalRef.current?.close();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const loadProblems = async (projectId: Number) => {
    try {
      const { data } = await api.get(`/projects/${projectId}/problems`);
      await setProblems(data);
    } catch {
      toast.error("Houve um erro interno no servidor.");
    }
  };

  const addProblem = async (formData: TProblemFormSchema) => {
    try {
      if (selectedProject) {
        await api.post(
          `/projects/${selectedProject.id}/problems`,
          formData,
          {}
        );
        loadProblems(selectedProject.id);
        toast.success(`Problema adicionado com sucesso.`);
        addProblemModalRef.current?.close();
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const editProblem = async (formData: TProblemFormSchema) => {
    try {
      if (selectedProject) {
        await api.patch(
          `/projects/${selectedProject.id}/problems/${selectedProject.id}`,
          formData,
          {}
        );
        loadProblems(selectedProject.id);
        toast.success(`Problema editado com sucesso.`);
        editProjectModalRef.current?.close();
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const toggleProblemStatus = async () => {
    try {
      const problemData = {
        title: selectedProblem?.title,
        description: selectedProblem?.description,
        finished: !selectedProblem?.finished,
      };

      if (selectedProject) {
        await api.patch(
          `/projects/${selectedProject.id}/problems/${selectedProblem?.id}`,
          problemData,
          {}
        );
        loadProblems(selectedProject.id);
        toast.success(`Problema editado com sucesso.`);
        editProjectModalRef.current?.close();
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const deleteProblem = async () => {
    try {
      if (selectedProject) {
        await api.delete(
          `/projects/${selectedProject?.id}/problems/${selectedProblem?.id}`
        );
        toast.success("Problema deletado com sucesso.");
        loadProblems(selectedProject.id);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const getSelectedProject = async (e: any): Promise<void> => {
    const projectId = parseInt(e?.target?.closest(".parent-selector").id);
    const filteredProject = projects.filter(
      (project) => project.id === projectId
    );
    await setSelectedProject(filteredProject[0]);
  };

  const getSelectedProblem = async (e: any): Promise<void> => {
    const problemId = parseInt(e?.target?.closest(".parent-selector").id);
    const filteredProblem = problems.filter(
      (problem) => problem.id === problemId
    );
    await setSelectedProblem(filteredProblem[0]);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <>
      <MainContext.Provider
        value={{
          NavbarDrawerRef,
          NavbarElementRef,
          toggleDrawer,
          addProjectModalRef,
          projects,
          addProject,
          editProject,
          editProjectModalRef,
          getSelectedProject,
          selectedProject,
          setSelectedProject,
          loadProblems,
          problems,
          setProblems,
          addProblemModalRef,
          addProblem,
          selectedProblem,
          setSelectedProblem,
          getSelectedProblem,
          loadProjects,
          deleteProblem,
          editProblem,
          toggleProblemStatus,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
};
