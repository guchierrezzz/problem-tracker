import { ReactNode, useContext } from "react";
import { MainContext } from "../../providers/MainContext";
import { Link } from "react-router-dom";
import logo from "../../assets/112h-logo.png";
import { AddProjectModal } from "../addProjectModal/AddProjectModal";
import { EditProjectModal } from "../editProjectModal/EditProjectModal";

interface INavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: INavbarProps) => {
  const {} = useContext(MainContext);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content bg-base-200">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <img className="w-32" src={logo} />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        <AddProjectModal />
        <EditProjectModal />
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full p-4 menu w-80 bg-base-200">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
