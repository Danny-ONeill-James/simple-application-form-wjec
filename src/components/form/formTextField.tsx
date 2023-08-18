import { useState } from "react";

interface FormTextFieldProps {
  IdAndName: string;
  label: string;
  required: boolean;
}
const FormTextField = (props: FormTextFieldProps) => {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="md:col-span-5">
      <label htmlFor={props.IdAndName}>{props.label}</label>
      <input
        id={props.IdAndName}
        name={props.IdAndName}
        type="text"
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        required={props.required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextField;
