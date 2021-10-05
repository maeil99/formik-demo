import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import InputField, { InputType } from "../components/Formik/InputField";
import Button, { Type } from "../components/Button";

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerNew = () => {
  //initial values

  const intialValues: IRegisterProps = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //onSubmit

  const onSubmit = (values: IRegisterProps) => {
    console.log(values);
    setData(values)
  };

  //validationSchema
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<IRegisterProps>(intialValues);
  return (
    <>
      <h1 className="text-center font-bold uppercase py-4">
        Registration Form
      </h1>
      <div className="flex justify-center">
        <Formik
          initialValues={intialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="card">
              {/* <div className="space-x-28 py-4">
                <label htmlFor="name">Name</label>
                <Field
                  label="Name"
                  name="name"
                  type="text"
                  className="registerField"
                />
              </div>
              <div className="text-red-600 px-16">
                <ErrorMessage name="name" />
              </div> */}
              <div className="space-x-28 py-4">
                <InputField
                  label="Name"
                  name="name"
                  className="registerField"
                  type={InputType.TEXT}
                />
              </div>
              <div className="space-x-28 py-4">
                <InputField
                  label="email"
                  name="email"
                  className="registerField"
                  type={InputType.EMAIL}
                />
              </div>
              <div className="space-x-20 py-4">
                <InputField
                  label="Pasword"
                  name="password"
                  className="registerField"
                  type={InputType.PASSWORD}
                />
              </div>
              <div className="space-x-7 py-4">
                <InputField
                  label="Confirm Password"
                  name="confirmPassword"
                  className="registerField"
                  type={InputType.PASSWORD}
                  errorMessageClassname="px-36"
                />
              </div>
              <div className="space-x-4 justify-center px-40 pt-8">
                <Button type={Type.SUBMIT}>Submit</Button>
                <Button type={Type.RESET}>Reset</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <br />
      <div className="flex justify-center">
        {data.name.length > 0 && (
          <div className="card">
            <h1 className="font-extrabold text-2xl">Your Response</h1>
            <DisplayData {...data} className="pt-3 font-mono" />
          </div>
        )}
      </div>
    </>
  );
};

export default registerNew;

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  className?: string;
}

const DisplayData = (props: IRegisterProps) => {
  return (
    <div className={`${props.className}`}>
      <p>Name : {props.name}</p>
      <p>Email : {props.email}</p>
      <p>Password : {props.password}</p>
    </div>
  );
};
