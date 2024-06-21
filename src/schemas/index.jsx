import { BsPass } from "react-icons/bs";
import * as Yup from "yup";

export const sighUpSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Plelase enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
