import { useContext } from "react";
import { MainContext } from "../../../providers/MainContext";
import { AddProjectForm } from "./AddProjectForm";

export const AddProjectModal = () => {
  const { addProjectModalRef } = useContext(MainContext);

  return (
    <dialog ref={addProjectModalRef} className="modal">
      <div className="shadow-none modal-box bg-base-200">
        <h1 className="pb-4 text-2xl select-none">Adicionar projeto</h1>
        <button
          type="button"
          className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
          onClick={() => addProjectModalRef.current?.close()}
        >
          ✕
        </button>
        <AddProjectForm />
      </div>
    </dialog>
  );
};
