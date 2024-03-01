import { useContext } from "react";
import { IProjectCardProps } from "../../interfaces";
import { MainContext } from "../../providers/MainContext";
import { Link } from "react-router-dom";
import { ProjectCardDropdownMenu } from "./ProjectCardDropdownMenu";

export const ProjectCard = ({
  description,
  id,
  title,
  image_url,
}: IProjectCardProps) => {
  const { getSelectedProject } = useContext(MainContext);
  return (
    <div
      id={String(id)}
      className="shadow-xl parent-selector card bg-base-100 animate-fade-translate"
    >
      <figure>
        <img
          className="object-cover w-full h-52"
          src={
            image_url == ""
              ? "https://www.invoicera.com/wp-content/uploads/2023/11/default-image.jpg"
              : image_url
          }
          alt="Project Image"
        />
      </figure>
      <div className="flex flex-col gap-3 p-5">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-end gap-3">
          <ProjectCardDropdownMenu />
          <Link
            onClick={(e: any) => {
              getSelectedProject(e);
            }}
            to={`/project/${id}`}
            className="tracking-widest uppercase btn btn-sm btn-primary"
          >
            Acessar
          </Link>
        </div>
      </div>
    </div>
  );
};
