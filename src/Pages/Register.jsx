// 📁 components/SignupForm.jsx
import React from "react"; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSignUpForm } from "../Hooks/UsingsignUp";
import { useNavigate } from "react-router";




const SignupForm = () => {
  const navigate = useNavigate();
  const { initialValues, validationSchema, handleSubmit } = useSignUpForm();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
        validateOnChange={true}   // يتحقق أثناء الكتابة
  validateOnBlur={true} 
    >
    
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-3 bg-blue-100 border-2 border-amber-300 p-5 items-center rounded-md w-100 mx-auto mt-6">
     <div>
           <Field
            name="name"
            placeholder="Name"
           className={`w-full border p-2 rounded ${
                errors.name && touched.name ? "border-red-500" : "border-gray-300"
              }`}
          />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

     </div>
     <div>
           <Field
            name="email"
            placeholder=" Email"
         className={`w-full border p-2 rounded ${
                errors.email && touched.email ? "border-red-500" : "border-gray-300"
              }`}
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

     </div>
    <div>
            <Field
            name="password"
            type="password"
            placeholder="كلمة المرور"
          className={`w-full border p-2 rounded ${
                errors.password && touched.password ? "border-red-500" : "border-gray-300"
              }`}
          />
                <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
        
    </div>

          <button
            type="submit"
     
            className="bg-blue-200 w-60 text-black rounded-md py-2 mt-2"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
