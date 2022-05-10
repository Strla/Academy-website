import { Formik } from "formik";
import React from "react";
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
} from "../../lib/style/generalStyles";
import * as Yup from "yup";

const SignIn = () => {
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
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                actions.resetForm({
                  email: "",
                  password: "",
                });
              }, 1000);
            }}
          >
            {(formik) => (
              <FormWrapper>
                <Form>
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
