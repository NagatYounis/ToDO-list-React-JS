// 📁 Hooks/UsingsignUp.jsx
import * as Yup from "yup";
import { useNote } from "../component/Todo/NoteContext";
import { useNavigate } from "react-router";

export function useSignUpForm() {
  const {setuser} = useNote();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    email: Yup.string().email("بريد غير صالح").required("البريد مطلوب"),
    password: Yup.string().min(6, "الحد الأدنى 6 أحرف").required("كلمة المرور مطلوبة"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setuser(values.name)

  
           navigate('/')
  };

  return { initialValues, validationSchema, handleSubmit };
}
