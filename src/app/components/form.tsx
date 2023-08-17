const Form = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Responsive Form
          </h2>
          <p className="text-gray-500 mb-6">
            Form is mobile responsive. Give it a try.
          </p>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>
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
              </div>
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
