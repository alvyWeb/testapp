"use client";
import SocialLogin from "@/components/common/SocialLogin";
import { MainContext } from "@/context";
import { loginWithEmailAndPassword } from "@/firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import "./login.scss";

const Login = ({ standings, setStandings }) => {
  const { onLogin } = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // manual login
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   Api.post("/auth/login", {
  //     email: email,
  //     password: password,
  //   })
  //     .then((response) => {
  //       if (response?.data?.statusCode === 200) {
  //         const token = response.data?.data?.token;
  //         Cookies.set("token", token, { expires: 1 });
  //         onLogin();
  //         router.push("/questionnaire");
  //         toast.success(response?.data?.message);
  //       }
  //     })
  //     .catch((error) => {
  //       toast.warn(error?.response?.data?.message);
  //     });
  // };

  // firebase login
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await loginWithEmailAndPassword(email, password);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login_container">
        <div className="head">
          {/* <img src="./Stock/register/scar.svg" alt="" /> */}
          <p>התחברות</p>
        </div>
        <div className="body">
          <div className="label_input ">
            <label htmlFor="">כתובת אימייל:</label>
            <input
              type="email"
              id="email"
              className="input_area _email"
              placeholder="Tal.ashkenazi1@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="label_input">
            <label htmlFor="">סיסמה:</label>
            <input
              type="password"
              className="input_area"
              placeholder="************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="btn_fpass">
            <Link href="/registerTab">
              <p>שכחת את הסיסמה?</p>
            </Link>

            <button type="submit" className="submit_button">
            התחבר
            </button>
          </div>
          <Link href="/registerTab" className="registerPage">
            <p>עדיין אין לך חשבון? <b>הרשם</b></p>
          </Link>
        </div>

        <div className="footer">
          <p>או התחבר עם</p>
          <SocialLogin />
        </div>
      </div>
    </form>
  );
};

export default Login;
