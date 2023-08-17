import { useState } from "react";

interface FormTextareaFieldProps {
  IdAndName: string;
  label: string;
  required: boolean;
}

const FormTextareaField = (props: FormTextareaFieldProps) => {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="md:col-span-5">
      <label htmlFor={props.IdAndName}>{props.label}</label>
      <textarea
        rows={4}
        id={props.IdAndName}
        name={props.IdAndName}
        className=" border mt-1 rounded px-4 w-full bg-gray-50"
        required={props.required}
        onChange={onChange}
      />
    </div>
  );
};

export default FormTextareaField;
