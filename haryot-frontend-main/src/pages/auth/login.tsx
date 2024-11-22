import { LogoHaryot } from "../../ui/logo";
import LoginForm from "../../ui/auth/login-form";
import { LoginCrea } from "../../ui/auth/login-crea";

export default function Login() {
  return (
    <section className="flex justify-center items-center md:min-h-screen overflow-hidden">
      <div className="mx-auto w-full h-full ">
        <div className="flex flex-col lg:flex-row justify-center items-start h-full gap-0">
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center w-full lg:w-1/2"
          >
            <div className="space-y-8">
              <LogoHaryot className="mt-12" />
              <h2 className="md:text-2xl text-center text-lg font-semibold">
                Connectez-vous
              </h2>
            </div>
            <div className="flex mt-6">
              <LoginForm />
            </div>
          </div>
          <LoginCrea />
        </div>
      </div>
    </section>
  );
}
