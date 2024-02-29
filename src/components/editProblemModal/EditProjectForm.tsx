import { useForm } from "react-hook-form";
import {
  ProjectFormSchema,
  TProjectFormSchema,
} from "../../schemas/ProjectSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormTextareaInput } from "../general/FormTextareaInput";
import { MainContext } from "../../providers/MainContext";
import { FormTextInput } from "../general/FormTextInput";

export const EditProjectForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProjectFormSchema>({
    resolver: zodResolver(ProjectFormSchema),
  });

  const { editProject, selectedProject } = useContext(MainContext);

  const submit = (formData: TProjectFormSchema) => {
    editProject(formData);
    reset();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(submit)}>
      <FormTextInput
        errors={errors}
        register={register}
        inputName="title"
        inputPlaceholder="Título"
        inputType="text"
        value={selectedProject?.title}
      />
      <FormTextareaInput
        errors={errors}
        register={register}
        inputName="description"
        inputPlaceholder="Descrição"
        value={selectedProject?.description}
      />
      <FormTextInput
        errors={errors}
        register={register}
        inputName="image_url"
        inputPlaceholder="URL da imagem (opcional)"
        inputType="text"
        value={selectedProject?.image_url}
      />
      <button className="self-end h-10 px-8 tracking-widest uppercase rounded-none btn btn-sm btn-primary w-fit">
        Editar
      </button>
    </form>
  );
};
