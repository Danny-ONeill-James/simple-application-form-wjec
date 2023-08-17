import { PropsWithChildren, ReactNode } from "react";

const FormSection = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
