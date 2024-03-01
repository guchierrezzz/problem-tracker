import { useContext } from "react";
import { MainContext } from "../../providers/MainContext";
import { IDropdownMenuProps } from "../../interfaces";

export const DropdownMenu = ({ finished }: IDropdownMenuProps) => {
  const { getSelectedProblem, deleteProblem, toggleProblemStatus } =
    useContext(MainContext);

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="tracking-widest uppercase btn btn-sm btn-primary"
        onClick={(e: any) => {
          getSelectedProblem(e);
        }}
      >
        Ações
      </div>
      <ul
        tabIndex={0}
        className="z-10 p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
      >
        <li onClick={handleClick}>
          <button onClick={toggleProblemStatus}>
            {finished ? "Marcar como não resolvido" : "Marcar como resolvido"}
          </button>
        </li>
        <li onClick={handleClick}>
          <button onClick={deleteProblem}>Excluir</button>
        </li>
      </ul>
    </div>
  );
};
