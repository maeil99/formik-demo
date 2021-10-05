import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../components/useFormik/Input";
import Button, { Type } from "../components/Button";
import { useState } from "react";

interface IRegisterProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const register = () => {
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
    setData(values);
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik<IRegisterProps>({
    initialValues: intialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <h1 className="text-center font-bold uppercase py-4">
        Registration Form
      </h1>
      <div className="flex justify-center">
        <form onSubmit={formik.handleSubmit} className="card">
          {/* <div className="space-x-28 py-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className=" registerField"
            />
          </div>
          <div className="text-red-600 py-4">
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null}
          </div> */}
          <div className="space-x-28 py-4">
            <Input
              label="Name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="text-red-600 ml-40">
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null}
          </div>
          <div className="space-x-28 py-4">
            <Input
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="text-red-600 ml-40">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null}
          </div>
          <div className="space-x-20 py-4">
            <Input
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="text-red-600 ml-40">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null}
          </div>
          <div className="space-x-7 py-4">
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="text-red-600 ml-40">
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </div>
          <div className="space-x-4 justify-center px-40 pt-8">
            <Button type={Type.SUBMIT}>Submit</Button>
            <Button type={Type.RESET}>Reset</Button>
          </div>
        </form>
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

export default register;

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
