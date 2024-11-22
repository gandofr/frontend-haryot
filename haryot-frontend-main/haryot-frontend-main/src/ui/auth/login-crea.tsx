import bgauth from "../../assets/images/auth/bg-auth.png";
import bgcube from "../../assets/images/auth/soon-cubes.png";

export function LoginCrea() {
  return (
    <div
      data-aos="fade-down"
      className="relative lg:flex hidden flex-col justify-center items-center w-full lg:w-1/2 h-screen"
    >
      <div className="absolute inset-0">
        <img src={bgauth} alt="Background" className="object-cover w-full" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={bgcube} alt="Foreground cube" className="w-1/2 h-auto" />
      </div>
    </div>
  );
}
