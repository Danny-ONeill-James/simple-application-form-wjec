"use client";
import FormFieldsGroup from "@/components/form/formFieldsGroup";
import FormSection from "@/components/form/formSection";
import FormSideBar from "@/components/form/formSideBar";
import FormTextField from "@/components/form/formTextField";
import FormTextareaField from "@/components/form/formTextareaField";
import LocaleSwitcher from "@/components/localeSwitcher";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const t = useTranslations("IndexPage");

  const formSchema = z.object({
    rolePosition: z.string().nonempty({ message: "validation.nonEmpty" }),
    eligibilityDetails: z.string().nonempty({ message: "validation.nonEmpty" }),
    personalDetailsTitle: z
      .string()
      .nonempty({ message: "validation.nonEmpty" }),
    personalDetailsForenames: z
      .string()
      .nonempty({ message: "validation.nonEmpty" }),
    personalDetailsSurname: z
      .string()
      .nonempty({ message: "validation.nonEmpty" }),
    personalDetailsAddress: z
      .string()
      .nonempty({ message: "validation.nonEmpty" }),
    personalDetailsPostCode: z
      .string()
      .nonempty({ message: "validation.nonEmpty" }),
    personalDetailsMobile: z
      .string()
      .nonempty({ message: "validation.nonEmpty" }),
    personalDetailsHome: z
      .string()
      .nonempty({ message: "validation.nonEmpty" }),
    personalDetailsWork: z
      .string()
      .nonempty({ message: "validation.nonEmpty" }),
    personalDetailsEmail: z
      .string()
      .nonempty({ message: "validation.nonEmpty" })
      .email({ message: "validation.invalidEmail" }),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchema>();
  //TODO: Place Zod Val;idation here

  const onSubmit: SubmitHandler<FormSchema> = async (data: FormSchema) => {
    console.log("Submitted Data: ", data);
  };

  return (
    <main className="p-6 bg-gray-100  items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="flow-root">
          <div className="float-left">
            <h2 className="font-semibold text-xl text-gray-600">
              {t("form.title")}
            </h2>
            <p className="text-gray-500 mb-6">{t("form.description")}</p>
          </div>
          <div className="float-right">
            <LocaleSwitcher />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormSection>
            <FormSideBar
              title={t("form.section.role.title")}
              paragraph={t("form.section.role.description")}
            />
            <FormFieldsGroup>
              <FormTextField
                error={"Please enter a position"}
                {...register("rolePosition", { required: true })}
                label={t("form.section.role.questions.position")}
              />
            </FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.eligibility.title")}
              paragraph={t("form.section.eligibility.description")}
            />
            <FormFieldsGroup>
              {/*TODO: Complete for toggle field 
							 <FormToggleField
                IdAndName="entitled"
                label={t("form.section.eligibility.questions.entitled")}
              /> */}
              <FormTextField
                error={"Please enter a position"}
                {...register("eligibilityDetails", { required: true })}
                label={t("form.section.eligibility.questions.detail")}
              />
            </FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.personalDetails.title")}
              paragraph={t("form.section.personalDetails.description")}
            />
            <FormFieldsGroup>
              <FormTextField
                error={"Please enter a position"}
                {...register("personalDetailsTitle", { required: true })}
                label={t("form.section.personalDetails.questions.title")}
              />
              <FormTextField
                error={"Please enter a position"}
                {...register("personalDetailsForenames", { required: true })}
                label={t("form.section.personalDetails.questions.forenames")}
              />

              <FormTextField
                error={"Please enter a position"}
                {...register("personalDetailsSurname", { required: true })}
                label={t("form.section.personalDetails.questions.surname")}
              />
              <FormTextareaField
                error={"Please enter a position"}
                {...register("personalDetailsAddress", { required: true })}
                label={t("form.section.personalDetails.questions.address")}
              />
              <FormTextField
                error={"Please enter a position"}
                {...register("personalDetailsPostCode", { required: true })}
                label={t("form.section.personalDetails.questions.postCode")}
              />
              <FormTextField
                error={"Please enter a position"}
                {...register("personalDetailsMobile", { required: true })}
                label={t("form.section.personalDetails.questions.mobile")}
              />
              <FormTextField
                error={"Please enter a position"}
                {...register("personalDetailsHome", { required: false })}
                label={t("form.section.personalDetails.questions.home")}
              />
              <FormTextField
                error={"Please enter a position"}
                {...register("personalDetailsWork", { required: false })}
                label={t("form.section.personalDetails.questions.work")}
              />
              <FormTextField
                error={"Please enter a position"}
                {...register("personalDetailsEmail", { required: true })}
                label={t("form.section.personalDetails.questions.email")}
              />
            </FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.employment.title")}
              paragraph={t("form.section.employment.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.education.title")}
              paragraph={t("form.section.education.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.practicalSkills.title")}
              paragraph={t("form.section.practicalSkills.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.statement.title")}
              paragraph={t("form.section.statement.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.interests.title")}
              paragraph={t("form.section.interests.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.references.title")}
              paragraph={t("form.section.references.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.other.title")}
              paragraph={t("form.section.other.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.conflict.title")}
              paragraph={t("form.section.conflict.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.convictions.title")}
              paragraph={t("form.section.convictions.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.dataProtection.title")}
              paragraph={t("form.section.dataProtection.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.declaration.title")}
              paragraph={t("form.section.declaration.description")}
            />
            <FormFieldsGroup></FormFieldsGroup>
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
    </main>
  );
}
