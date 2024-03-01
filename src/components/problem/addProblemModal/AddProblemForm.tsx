import { useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import { ProjectFormSchema } from "../../../schemas/ProjectSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormTextareaInput } from "../../general/FormTextareaInput";
import { MainContext } from "../../../providers/MainContext";
import { FormTextInput } from "../../general/FormTextInput";
import { TProblemFormSchema } from "../../../schemas/ProblemSchema";

export const AddProblemForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProblemFormSchema>({
    resolver: zodResolver(ProjectFormSchema),
  });

  const { addProblem } = useContext(MainContext);

  const submit = (formData: TProblemFormSchema) => {
    addProblem(formData);
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
      <button className="self-end h-10 px-8 tracking-widest uppercase rounded-none btn btn-sm btn-primary w-fit">
        <BsPlusCircle className="text-lg" />
        Adicionar
      </button>
    </form>
  );
};
