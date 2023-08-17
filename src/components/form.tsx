import FormFieldsGroup from "./formFieldsGroup";
import FormSection from "./formSection";
import FormSideBar from "./formSideBar";
import FormTextField from "./formTextField";

const Form = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <form>
          <h2 className="font-semibold text-xl text-gray-600">
            Application Form
          </h2>
          <p className="text-gray-500 mb-6">
            This is an example form for WJEC.
          </p>
          <FormSection>
            <FormSideBar
              title="Role"
              paragraph="Details on the position you are applying for."
            />
            <FormFieldsGroup>
              <FormTextField
                IdAndName={"Position"}
                label={"Details of the position you are applying for."}
                required={true}
              />
              <FormTextField
                IdAndName={"Position"}
                label={"Details of the position you are applying for."}
                required={true}
              />
            </FormFieldsGroup>
          </FormSection>
          <div className="md:col-span-5 text-right">
            <div className="inline-flex items-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
