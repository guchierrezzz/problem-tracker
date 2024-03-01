import { ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TProjectFormSchema } from "../schemas/ProjectSchema";
import { TProblemFormSchema } from "../schemas/ProblemSchema";

export interface IMainContext {
  NavbarDrawerRef: React.RefObject<HTMLInputElement>;
  NavbarElementRef: React.RefObject<HTMLDivElement>;
  toggleDrawer: () => void;
  addProjectModalRef: React.RefObject<HTMLDialogElement>;
  editProjectModalRef: React.RefObject<HTMLDialogElement>;
  projects: IProject[];
  addProject: (formData: TProjectFormSchema) => Promise<void>;
  editProject: (formData: TProjectFormSchema) => Promise<void>;
  selectedProject: IProject | undefined;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<IProject | undefined>
  >;
  getSelectedProject: (e: any) => Promise<void>;
  loadProblems: (id: Number) => Promise<void>;
  problems: IProblem[];
  setProblems: React.Dispatch<React.SetStateAction<IProblem[]>>;
  addProblemModalRef: React.RefObject<HTMLDialogElement>;
  addProblem: (formData: TProblemFormSchema) => Promise<void>;
  selectedProblem: IProblem | undefined;
  setSelectedProblem: React.Dispatch<
    React.SetStateAction<IProblem | undefined>
  >;
  getSelectedProblem: (e: any) => Promise<void>;
  loadProjects: () => Promise<void>;
  deleteProblem: () => Promise<void>;
  toggleProblemStatus: () => Promise<void>;
  deleteProject: () => Promise<void>;
}

export interface IMainContextProps {
  children: ReactNode;
}

export interface IProjectContext {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

export interface IProjectContextProps {
  children: ReactNode;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

export interface IProblem {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  started_at: string;
}

export interface IProblemCardProps {
  problem: IProblem;
  project: IProject;
}

export interface IProjectCardProps {
  id: number;
  title: string;
  description: string;
  image_url?: string;
}

type InputName = "title" | "description" | "image_url";

export interface IFormTextInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputName: InputName;
  inputType: string;
  inputPlaceholder: string;
  value?: string;
}

export interface IProjectPageProps {
  project: IProject;
}

export interface IDropdownMenuProps {
  finished: boolean;
}

export interface IProblemCardBodyProps {
  problem: IProblem;
  project: IProject;
}

export interface IProblemsPageHeaderProps {
  project: IProject;
  addProblemModalRef: React.RefObject<HTMLDialogElement>;
}

export interface IProblemSectionProps {
  problems: IProblem[];
  project: IProject;
}

export interface IProblemStatisticsProps {
  problems: IProblem[];
}

export interface IProblemOverviewProps {
  problem: IProblem;
}
