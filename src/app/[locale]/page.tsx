"use client";
import FormFieldsGroup from "@/components/form/formFieldsGroup";
import FormSection from "@/components/form/formSection";
import FormSideBar from "@/components/form/formSideBar";
import FormTextField from "@/components/form/formTextField";
import FormTextareaField from "@/components/form/formTextareaField";
import FormToggleField from "@/components/form/formToggleField";
import LocaleSwitcher from "@/components/localeSwitcher";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const t = useTranslations("IndexPage");

  const formSchema = z.object({
    position: z.string().nonempty({ message: "validation.nonEmpty" }),
  });

  type FormSchema = z.infer<typeof formSchema>;

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormSchema>();

  const onSubmit: SubmitHandler<FormSchema> = async (data: FormSchema) => {
    console.log("Submitted Data: ", data);
  };

  console.log(watch("position")); // watch input value by passing the name of it

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
          <input defaultValue="test" {...register("position")} />

          <input type="submit" />
        </form>

        <form>
          <FormSection>
            <FormSideBar
              title={t("form.section.role.title")}
              paragraph={t("form.section.role.description")}
            />
            <FormFieldsGroup>
              <FormTextField
                IdAndName="position"
                label={t("form.section.role.questions.position")}
                required={true}
              />
            </FormFieldsGroup>
          </FormSection>
          <FormSection>
            <FormSideBar
              title={t("form.section.eligibility.title")}
              paragraph={t("form.section.eligibility.description")}
            />
            <FormFieldsGroup>
              <FormToggleField
                IdAndName="entitled"
                label={t("form.section.eligibility.questions.entitled")}
              />
              <FormTextField
                IdAndName="detail"
                label={t("form.section.eligibility.questions.detail")}
                required={true}
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
                IdAndName="title"
                label={t("form.section.personalDetails.questions.title")}
                required={true}
              />
              <FormTextField
                IdAndName="forenames"
                label={t("form.section.personalDetails.questions.forenames")}
                required={true}
              />
              <FormTextField
                IdAndName="surname"
                label={t("form.section.personalDetails.questions.surname")}
                required={true}
              />
              <FormTextareaField
                IdAndName="address"
                label={t("form.section.personalDetails.questions.address")}
                required={true}
              />
              <FormTextField
                IdAndName="postCode"
                label={t("form.section.personalDetails.questions.postCode")}
                required={true}
              />
              <FormTextField
                IdAndName="mobile"
                label={t("form.section.personalDetails.questions.mobile")}
                required={true}
              />
              <FormTextField
                IdAndName="home"
                label={t("form.section.personalDetails.questions.home")}
                required={false}
              />
              <FormTextField
                IdAndName="work"
                label={t("form.section.personalDetails.questions.work")}
                required={false}
              />
              <FormTextField
                IdAndName="email"
                label={t("form.section.personalDetails.questions.email")}
                required={true}
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
