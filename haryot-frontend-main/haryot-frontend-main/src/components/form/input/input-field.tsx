import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";
import "./style.css";

export type FormFieldProps = {
  type:
    | "email"
    | "password"
    | "text"
    | "number"
    | "tel"
    | "url"
    | "checkbox"
    | "radio"
    | "hidden"
    | "submit"
    | "reset";
  placeholder: string;
  className?: string;
  label: string;
  name: string;

  valueAsNumber?: boolean;
  required?: boolean;
};

const HaryotInput: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  valueAsNumber,
  label,
  className,
  required = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { ref, ...rest } = register(name, { valueAsNumber });
  const [showPassword, setShowPassword] = React.useState(false);
  const valueRef = useRef<HTMLInputElement | null>(null);

  const error = errors[name];

  return (
    <div>
      <div className={`relative ${className}`}>
        <input
          ref={(c) => {
            ref(c);
            valueRef.current = c;
          }}
          {...rest}
          type={showPassword ? "text" : type}
          className="basic-input mt-1 peer md:w-[400px] w-[300px] border rounded-xl bg-secondary px-4 leading-[1.6] outline-none  focus:border-2 focus:bg-transparent focus:border-primary focus:placeholder:opacity-100 placeholder:text-transparent autofill:shadow-autofill border-transparent font-semibold"
          placeholder={placeholder}
          required={required}
        />

        <label className="basic-label pointer-events-none absolute left-4 -top-[8px] mb-0 origin-[0_0] truncate pt-[0.37rem] leading-[4.5] text-black transition-all duration-200 ease-out peer-focus:text-xd peer-focus:-translate-y-[0.3rem] peer-focus:scale-[1] peer-focus:text-black-100">
          {label}
        </label>
        {type === "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute text-sm right-3 mt-0.5 top-1/2 transform -translate-y-1/2 text-black-100 cursor-pointer "
          >
            {showPassword ? (
              <EyeIcon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <EyeSlashIcon className="h-4 w-4" aria-hidden="true" />
            )}
          </div>
        )}
      </div>
      {error && (
        <span className="error-message text-info-danger">
          {error.message as any}
        </span>
      )}
    </div>
  );
};
export default HaryotInput;
