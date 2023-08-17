import { PropsWithChildren } from "react";

const FormFieldsGroup = ({ children }: PropsWithChildren) => {
  return (
    <div className="lg:col-span-2">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        {children}
      </div>
    </div>
  );
};

export default FormFieldsGroup;
