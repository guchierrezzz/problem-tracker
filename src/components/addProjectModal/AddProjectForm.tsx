import { SubmitHandler, useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import {
  ProjectFormSchema,
  TProjectFormSchema,
} from "../../schemas/ProjectSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormTextareaInput } from "../general/FormTextareaInput";
import { MainContext } from "../../providers/MainContext";
import { FormTextInput } from "../general/FormTextInput";

export const AddProjectForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TProjectFormSchema>({
    resolver: zodResolver(ProjectFormSchema),
  });

  const { addProjectModalRef } = useContext(MainContext);

  const submit: SubmitHandler<TProjectFormSchema> = (formData) => {
    // addTodo(formData);
    addProjectModalRef.current?.close();
    reset();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(submit)}>
      <FormTextInput
        errors={errors}
        inputName="name"
        inputPlaceholder="Título"
        register={register}
        inputType="text"
      />
      <FormTextareaInput
        errors={errors}
        inputName="description"
        inputPlaceholder="Descrição"
        register={register}
      />
      <FormTextInput
        errors={errors}
        inputName="image"
        inputPlaceholder="URL da imagem (opcional)"
        register={register}
        inputType="text"
      />
      <button className="self-end h-10 px-8 tracking-widest uppercase rounded-none btn btn-sm btn-primary w-fit">
        <BsPlusCircle className="text-lg" />
        Adicionar
      </button>
    </form>
  );
};
