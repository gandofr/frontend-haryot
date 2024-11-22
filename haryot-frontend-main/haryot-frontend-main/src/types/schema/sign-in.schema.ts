import { z } from "zod";
import { PasswordSchema } from "./password-schema";

export const SignInSchema = z.object({
  email: z.string().email({ message: "Adresse email invalide" }),
  password: PasswordSchema,
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
