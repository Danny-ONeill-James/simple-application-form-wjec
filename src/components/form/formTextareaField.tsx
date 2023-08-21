import { InputHTMLAttributes, forwardRef, useState } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode | string;
  error: string;
}
export const FormTextField = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, error, className, ...props }, ref) => {
    const [value, setValue] = useState("");

    const handleChangeCapture = (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      if (props.type === "text") {
        setValue(event.target.value);
      }
    };

    return (
      <div className="md:col-span-5">
        {label && (
          <label htmlFor={props.name} className="font-normal">
            {label}
          </label>
        )}
        <input
          ref={ref}
          onChangeCapture={handleChangeCapture}
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 "
          {...props}
        />
      </div>
    );
  }
);

export default FormTextField;
