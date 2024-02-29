import { z } from "zod";

export const ProblemFormSchema = z.object({
  title: z.string().min(1, "Insira um título para o projeto."),
  description: z.string().min(1, "Insira uma descrição."),
});

export type TProblemFormSchema = z.infer<typeof ProblemFormSchema>;
