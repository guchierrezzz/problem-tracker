import { z } from "zod";

export const ProjectFormSchema = z.object({
  title: z
    .string()
    .min(1, "Insira um título para o projeto.")
    .max(30, "Titulo deve ter menos de 30 caractéres."),
  description: z
    .string()
    .min(1, "Insira uma descrição.")
    .max(150, "Descrição deve ter menos que 150 caractéres."),
  image: z.string().optional(),
});

export type TProjectFormSchema = z.infer<typeof ProjectFormSchema>;
