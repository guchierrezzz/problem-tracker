import { ReactNode } from "react";

export interface IMainContext {
  NavbarDrawerRef: React.RefObject<HTMLInputElement>;
  NavbarElementRef: React.RefObject<HTMLDivElement>;
  toggleDrawer: () => void;
  addProjectModalRef: React.RefObject<HTMLDialogElement>;
  projects: IProject[];
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
  name: string;
  description: string;
  image: string;
}

export interface IProjectCardProps {
  title: string;
  description: string;
  image_url?: string;
}
