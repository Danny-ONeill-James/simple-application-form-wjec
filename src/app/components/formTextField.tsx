interface FormTextField {
  IdAndName: string;
  label: string;
  required: boolean;
}

const FormTextField = (props: FormTextField) => {
  return (
    <div className="md:col-span-4">
      <label htmlFor={props.IdAndName}>{props.label}</label>
      <input
        id={props.IdAndName}
        name={props.IdAndName}
        type="text"
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        //TODO: require on change event value=""
        required={props.required}
      />
    </div>
  );
};

export default FormTextField;
