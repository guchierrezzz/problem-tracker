import { useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import {
  ProjectFormSchema,
  TProjectFormSchema,
} from "../../../schemas/ProjectSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormTextareaInput } from "../../general/FormTextareaInput";
import { MainContext } from "../../../providers/MainContext";
import { FormTextInput } from "../../general/FormTextInput";

export const AddProjectForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProjectFormSchema>({
    resolver: zodResolver(ProjectFormSchema),
  });

  const { addProject } = useContext(MainContext);

  const submit = (formData: TProjectFormSchema) => {
    addProject(formData);
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
      />
      <FormTextareaInput
        errors={errors}
        register={register}
        inputName="description"
        inputPlaceholder="Descrição"
      />
      <FormTextInput
        errors={errors}
        register={register}
        inputName="image_url"
        inputPlaceholder="URL da imagem (opcional)"
        inputType="text"
      />
      <button className="self-end h-10 px-8 tracking-widest uppercase rounded-none btn btn-sm btn-primary w-fit">
        <BsPlusCircle className="text-lg" />
        Adicionar
      </button>
    </form>
  );
};
