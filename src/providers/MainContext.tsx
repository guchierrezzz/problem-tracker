/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import { IMainContext, IMainContextProps, IProject } from "../interfaces";
import { api } from "../services/api";
import toast from "react-hot-toast";

export const MainContext = createContext({} as IMainContext);

export const MainContextProvider = ({ children }: IMainContextProps) => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const loadProjects = async () => {
    try {
      const { data } = await api.get("/projects");
      await setProjects(data);
    } catch {
      toast.error("There was an internal server error.");
    } finally {
      //if any cosmetics loading is needed
    }
  };
  useEffect(() => {
    loadProjects();
  }, [projects]);

  const NavbarDrawerRef = useRef<HTMLInputElement>(null);
  const NavbarElementRef = useRef<HTMLDivElement>(null);

  const addProjectModalRef = useRef<HTMLDialogElement>(null);

  const toggleDrawer = () => {
    if (NavbarDrawerRef.current !== null)
      NavbarDrawerRef.current.checked = !NavbarDrawerRef.current.checked;
  };

  return (
    <>
      <MainContext.Provider
        value={{
          NavbarDrawerRef,
          NavbarElementRef,
          toggleDrawer,
          addProjectModalRef,
          projects,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
};
