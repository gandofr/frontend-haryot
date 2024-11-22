import { z } from "zod";

export const PasswordSchema = z
  .string()
  .min(8, { message: "Mot de passe doit contenir au moins 8 caractères" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Doit contenir une lettre majuscule",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Doit contenir une lettre miniscule",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Doit contenir un chiffre",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Doit contenir un caractère spécial",
  });
