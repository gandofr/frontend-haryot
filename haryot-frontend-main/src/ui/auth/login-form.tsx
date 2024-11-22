import { Link } from "react-router-dom";
import HaryotInput from "../../components/form/input/input-field";
import HaryotButton from "../../components/button/haryot-button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInSchema,
  SignInSchemaType,
} from "../../types/schema/sign-in.schema";

export default function LoginForm() {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: SignInSchemaType) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form className="text-sm " onSubmit={form.handleSubmit(onSubmit)}>
        <div className="relative my-5">
          <HaryotInput
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
            required
          />
        </div>

        <div className="relative my-5">
          <HaryotInput
            type="password"
            name="password"
            placeholder="Mot de passe"
            label="Mot de passe"
          />
        </div>
        <div className="relative my-8 font-semibold text-primary text-sm space-y-5 text-center">
          <Link to="/forgot-password">J'ai oublié mon mot de passe?</Link>
        </div>
        <div className="relative my-8 font-semibold text-primary text-sm space-y-5 text-center">
          <Link to="/sign-up">Vous n'avez pas encore de compte Gando?</Link>
        </div>
        <div className="relative my-8 font-semibold text-primary text-center">
          <HaryotButton
            className="bg-primary text-white md:w-[400px] w-[300px] hover:bg-container"
            type="submit"
          >
            Connexion
          </HaryotButton>
        </div>
      </form>
    </FormProvider>
  );
}
