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
      {/* <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <FormSideBar
                  title="Role"
                  paragraph="Details on the position you are applying for."
                />
                <div className="lg:col-span-2">
                  <FormTextField
                    IdAndName="position"
                    label="Position Applied For"
                    required={true}
                  />
                </div>
              </div>
              <FormLineBreak />
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <FormSideBar
                  title="Eligigibility"
                  paragraph="Questions on your eligigibility to work for WJEC."
                />
                <FormTextField
                  IdAndName="restrictions"
                  label="If applicable, please detail any restrictions - length of work visa, type of work etc."
                  required={false}
                />
              </div>
              <FormLineBreak />
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <FormSideBar
                  title="Personal Details"
                  paragraph="Your personal Details."
                />
                <div className="lg:col-span-2">
                  <div className="md:col-span-4">
                    <label htmlFor="title">Title</label>
                    <input
                      name="title"
                      type="text"
                      id="title"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      //TODO: require on change event value=""
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label htmlFor="forenames">Forename(s)</label>
                    <input
                      name="forenames"
                      type="text"
                      id="forenames"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      //TODO: require on change event value=""
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      id="lastName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      //TODO: require on change event value=""
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label htmlFor="address">Address</label>
                    <textarea
                      rows={4}
                      name="address"
                      id="address"
                      className=" border mt-1 rounded px-4 w-full bg-gray-50"
                      //TODO: require on change event value=""
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label htmlFor="postCode">Post Code</label>
                    <input
                      name="postCode"
                      type="text"
                      id="postCode"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      //TODO: require on change event value=""
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label htmlFor="mobilePhone">Mobile Phone Number</label>
                    <input
                      name="mobilePhone"
                      type="text"
                      id="mobilePhone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      //TODO: require on change event value=""
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label htmlFor="homePhone">Home Phone Number</label>
                    <input
                      name="homePhone"
                      type="text"
                      id="homePhone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      //TODO: require on change event value=""
                    />
                  </div>
                  <div className="md:col-span-4">
                    <label htmlFor="workPhone">Work Phone Number</label>
                    <input
                      name="workPhone"
                      type="text"
                      id="workPhone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      //TODO: require on change event value=""
                    />
                  </div>
                </div>
              </div>
              <FormLineBreak />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Form;
