import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  FormSuccessMessage,
  FormWrapper,
  Main,
  Option,
  Select,
} from "../../lib/style/generalStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../api/users";

const Register = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  return (
    <>
      <Header isSecondary={true} />
      <Main>
        <Section title={"Register"} isMainSection={true} isCentered={true}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmed: "",
              githubUserName: "",
              zeplinUserName: "",
              activeFacultyYear: "",
              isAdmin: false,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required!"),
              lastName: Yup.string().required("Last name is required!"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required!"),

              password: Yup.string()
                .min(8, "Password must be at least 8 characters long!")
                .required("Password is required!"),
              passwordConfirmed: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
              ),
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
              const user = {
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                password: values.password,
                github_username: values.githubUserName,
                zeplin_username: values.zeplinUserName,
                active_faculty_year:
                  +values.activeFacultyYear === 0
                    ? null
                    : +values.activeFacultyYear,
                is_admin: false,
              };

              registerUser(user)
                .then((res) => {
                  actions.setSubmitting(false);
                  actions.resetForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    passwordConfirmed: "",
                    githubUserName: "",
                    zeplinUserName: "",
                    activeFacultyYear: "",
                    isAdmin: false,
                  });

                  setSuccessMessage({
                    error: false,
                    message: "User registration was successful!",
                  });

                  setTimeout(() => {
                    setSuccessMessage(null);
                  }, 3000);
                })
                .catch((err) => {
                  actions.setSubmitting(false);
                  setSuccessMessage({
                    error: true,
                    message: "Error occured, try again or contact us!",
                  });
                });
            }}
          >
            {(formik) => (
              <FormWrapper>
                <Form>
                  {successMessage && (
                    <FormRow>
                      <FormSuccessMessage isError={successMessage.error}>
                        {successMessage.message}
                      </FormSuccessMessage>
                    </FormRow>
                  )}
                  <FormRow>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="firstName" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="lastName" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="email" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="password" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="password"
                      name="passwordConfirmed"
                      placeholder="Confirm password"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="passwordConfirmed" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="githubUserName"
                      placeholder="Enter Github username"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="githubUserName" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="text"
                      name="zeplinUserName"
                      placeholder="Enter Zeplin username"
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component={"div"} name="zeplinUserName" />
                  </FormRow>
                  <FormRow>
                    <Select
                      id="activeFacultyYear"
                      {...formik.getFieldProps("activeFacultyYear")}
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
                  <FormRow>
                    <Button
                      type="submit"
                      isOutline
                      isForm
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "Processing..." : "Register"}
                    </Button>
                  </FormRow>
                </Form>
              </FormWrapper>
            )}
          </Formik>
        </Section>
      </Main>
    </>
  );
};

export default Register;
