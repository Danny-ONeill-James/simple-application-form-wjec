import { useState } from "react";

interface FormToggleField {
  IdAndName: string;
  label: string;
}

const FormToggleField = (props: FormToggleField) => {
  const [value, setValue] = useState("");

  return (
    <div className="md:col-span-5">
      <label>{props.label}</label>
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <input
            type="radio"
            id={props.IdAndName + "1"}
            name={props.IdAndName}
            className="h-5 w-5"
            value={value}
          />
          <label
            htmlFor={props.IdAndName + "1"}
            className="pl-3 text-base font-medium text-[#07074D]"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name={props.IdAndName}
            id={props.IdAndName + "2"}
            className="h-5 w-5"
            value={value}
          />
          <label
            htmlFor={props.IdAndName + "2"}
            className="pl-3 text-base font-medium text-[#07074D]"
          >
            No
          </label>
        </div>
      </div>
      {/*
      <div className="md:col-span-5">
        <label>{props.label}</label>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              id={props.IdAndName + "1"}
              name={props.IdAndName + "1"}
              type="radio"
              className="h-5 w-5"
            />
            <label
              htmlFor={props.IdAndName + "1"}
              className="pl-3 text-base font-medium text-[#07074D]"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id={props.IdAndName + "2"}
              name={props.IdAndName + "2"}
              type="radio"
              className="h-5 w-5"
            />
            <label
              htmlFor={props.IdAndName + "2"}
              className="pl-3 text-base font-medium text-[#07074D]"
            >
              No
            </label>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FormToggleField;
