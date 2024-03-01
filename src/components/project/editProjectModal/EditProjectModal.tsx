import { useContext } from "react";
import { MainContext } from "../../../providers/MainContext";
import { EditProjectForm } from "./EditProjectForm";

export const EditProjectModal = () => {
  const { editProjectModalRef } = useContext(MainContext);

  return (
    <dialog ref={editProjectModalRef} className="modal">
      <div className="modal-box bg-base-200">
        <h1 className="pb-4 text-2xl select-none">Editar projeto</h1>
        <button
          type="button"
          className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
          onClick={() => editProjectModalRef.current?.close()}
        >
          ✕
        </button>
        <EditProjectForm />
      </div>
    </dialog>
  );
};
