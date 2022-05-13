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
  FormWrapper,
  FormSuccessMessage,
} from "../../lib/style/generalStyles";
import * as Yup from "yup";
import { getAllUsers, loginUser } from "../../api/users";

const SignIn = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  return (
    <>
      <Header isSecondary={true} />
      <Main>
        <Section title={"Sign In"} isMainSection={true} isCentered={true}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required!"),

              password: Yup.string()
                .min(8, "Password must be at least 8 characters long!")
                .required("Password is required!"),
            })}
            onSubmit={async (values, actions) => {
              try {
                const res = await loginUser(values);
                const users = await getAllUsers(res.access_token);
                const user = users.find((user) => user.email === values.email);

                localStorage.setItem("accessToken", res.access_token);

                actions.setSubmitting(false);
                actions.resetForm({
                  email: "",
                  password: "",
                });

                setSuccessMessage({
                  error: false,
                  message: `Hi ${
                    user.first_name + " " + user.last_name
                  }, login was successful!`,
                });

                setTimeout(() => {
                  setSuccessMessage(null);
                }, 3000);
              } catch (error) {
                setSuccessMessage({
                  error: true,
                  message: "Error occured, try again or contact us!",
                });
                actions.setSubmitting(false);
              }
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
                    <Button
                      type="submit"
                      isOutline
                      isForm
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "Processing..." : "Sign In"}
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

export default SignIn;
