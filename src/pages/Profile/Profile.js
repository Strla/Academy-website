import { Formik } from "formik";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Form,
  FormRow,
  Main,
  Field,
  ErrorMessage,
  Button,
  Select,
  Option,
  PasswordFormWrapper,
  PasswordTitle,
  PasswordMessage,
  Wrapper,
} from "../../lib/style/generalStyles";
import * as Yup from "yup";

const Profile = () => {
  const [initialValues, setInitialValues] = useState({
    firstName: "Ivan",
    lastName: "Starčević",
    email: "ivan.starcevic15@gmail.com",
    githubUserName: "Strla",
    zeplinUserName: "Strla5",
    activeFacultyYear: "3",
  });
  const [isDisabled, setDisabled] = useState(true);
  const toggleEdit = () => {
    setDisabled(!isDisabled);
  };
  return (
    <>
      <Header isSecondary={true} />
      <Main>
        <Section
          title={"My profile"}
          buttonText={"Edit"}
          isMainSection={true}
          toggleEdit={toggleEdit}
          isDisabled={isDisabled}
        >
          <Wrapper>
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                firstName: Yup.string().required("First name is required!"),
                lastName: Yup.string().required("Last name is required!"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required!"),
                githubUserName: Yup.string().required(
                  "Github username is required!"
                ),
                zeplinUserName: Yup.string().required(
                  "Zeplin username is required!"
                ),
                activeFacultyYear: Yup.string().required(
                  "Active faculty year is required!"
                ),
              })}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  const data = {
                    ...values,
                    activeFacultyYear:
                      Number(values.activeFacultyYear) === 0
                        ? null
                        : Number(values.activeFacultyYear),
                  };
                  alert(JSON.stringify(data, null, 2));
                  setInitialValues(data);
                  setDisabled(true);
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(formik) => (
                <Form>
                  <FormRow>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      disabled={isDisabled || formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      disabled={isDisabled || formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="lastName" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      disabled={isDisabled || formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="email" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="githubUserName"
                      placeholder="Enter Github username"
                      disabled={isDisabled || formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="githubUserName" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="zeplinUserName"
                      placeholder="Enter Zeplin username"
                      disabled={isDisabled || formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="zeplinUserName" />
                  </FormRow>
                  <FormRow>
                    <Select
                      id="activeFacultyYear"
                      {...formik.getFieldProps("activeFacultyYear")}
                      disabled={isDisabled || formik.isSubmitting}
                    >
                      <Option value="" disabled hidden>
                        Choose an Active faculty year
                      </Option>
                      <Option value="0">Not a student</Option>
                      <Option value="1">1st faculty year</Option>
                      <Option value="2">2nd faculty year</Option>
                      <Option value="3">3rd faculty year</Option>
                      <Option value="4">4th faculty year</Option>
                      <Option value="5">5th faculty year</Option>
                    </Select>
                    <ErrorMessage component={"div"} name="activeFacultyYear" />
                  </FormRow>
                  <FormRow isVisible={isDisabled}>
                    <Button
                      type="submit"
                      isOutline
                      isForm
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "Processing..." : "Update"}
                    </Button>
                  </FormRow>
                </Form>
              )}
            </Formik>
            {isDisabled ? (
              <PasswordFormWrapper isForm={isDisabled}>
                <PasswordTitle>Password reset</PasswordTitle>
                <PasswordMessage>
                  In order to reset password, click on Edit button
                </PasswordMessage>
              </PasswordFormWrapper>
            ) : (
              <PasswordFormWrapper>
                <PasswordTitle>Password reset</PasswordTitle>
                <Formik
                  initialValues={{
                    oldPassword: "",
                    newPassword: "",
                    newPasswordConfirmed: "",
                  }}
                  validationSchema={Yup.object({
                    oldPassword: Yup.string().required(
                      "Old password is required!"
                    ),
                    newPassword: Yup.string()
                      .required("New password is required!")
                      .min(
                        8,
                        "New password must be at least 8 characters long!"
                      ),

                    newPasswordConfirmed: Yup.string()
                      .required("Confirmation password is required!")
                      .oneOf(
                        [Yup.ref("newPassword"), null],
                        "Passwords must match"
                      ),
                  })}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert("Passwords are changed successfully!");
                      actions.setSubmitting(false);
                      actions.resetForm({
                        oldPassword: "",
                        newPassword: "",
                        newPasswordConfirmed: "",
                      });
                      setDisabled(true);
                    }, 1000);
                  }}
                >
                  {(formik) => (
                    <Form>
                      <FormRow>
                        <Field
                          type="password"
                          name="oldPassword"
                          placeholder="Enter old password"
                          disabled={formik.isSubmitting}
                        />
                        <ErrorMessage component={"div"} name="oldPassword" />
                      </FormRow>
                      <FormRow>
                        <Field
                          type="password"
                          name="newPassword"
                          placeholder="Enter new password"
                          disabled={formik.isSubmitting}
                        />
                        <ErrorMessage component={"div"} name="newPassword" />
                      </FormRow>
                      <FormRow>
                        <Field
                          type="password"
                          name="newPasswordConfirmed"
                          placeholder="Confirm new password"
                          disabled={formik.isSubmitting}
                        />
                        <ErrorMessage
                          component={"div"}
                          name="newPasswordConfirmed"
                        />
                      </FormRow>
                      <FormRow>
                        <Button
                          type="submit"
                          isOutline
                          isForm
                          disabled={formik.isSubmitting}
                        >
                          {formik.isSubmitting
                            ? "Processing..."
                            : "Update password"}
                        </Button>
                      </FormRow>
                    </Form>
                  )}
                </Formik>
              </PasswordFormWrapper>
            )}
          </Wrapper>
        </Section>
      </Main>
    </>
  );
};

export default Profile;
