"use client";

import FormFieldsGroup from "@/components/formFieldsGroup";
import FormSection from "@/components/formSection";
import FormSideBar from "@/components/formSideBar";
import FormTextField from "@/components/formTextField";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("IndexPage");

  function handleChange(event: any) {
    console.log(event.target.value);
  }

  return (
    <main className="p-6 bg-gray-100  items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <form>
          <h2 className="font-semibold text-xl text-gray-600">
            {t("form.title")}
          </h2>
          <p className="text-gray-500 mb-6">{t("form.description")}</p>
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
              <FormTextField
                IdAndName="entitled"
                label={t("form.section.eligibility.questions.entitled")}
                required={true}
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
            <FormFieldsGroup></FormFieldsGroup>
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
