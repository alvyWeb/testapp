"use client";

import SocialLogin from "@/components/common/SocialLogin";
import { registerWithEmailAndPassword } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./register.scss";

const Register = ({ standins, setStandings }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // manual register
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   Api.post("/auth/register", {
  //     email: email,
  //     password: password,
  //   })
  //     .then((response) => {
  //       if (response?.data?.statusCode === 200) {
  //         router.push("/login");
  //         toast.success(response?.data?.message);
  //       }
  //     })
  //     .catch((error) => {
  //       toast.warn(error?.response?.data?.message);
  //     });
  // };

  // firebase register

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("Password should be same!");
      } else {
        const user = await registerWithEmailAndPassword(email, password);
        router.push("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="register_container">
        <div className="head_container">
          {/* <img src="./Stock/register/scar.svg" alt="" /> */}
          <p>Register</p>
        </div>
        <div className="input_body">
          <div className="label_input ">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              id="email"
              className="input_area _email"
              placeholder="Tal.ashkenazi1@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="label_input">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="input_area"
              placeholder="************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="label_input">
            <label htmlFor="">Verify password:</label>
            <input
              type="password"
              className="input_area"
              placeholder="************"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          <button type="submit" className="submit_button">
            Register
          </button>
        </div>
        <div className="footer">
          <p>or register with</p>
          <SocialLogin />
        </div>
      </div>
    </form>
  );
};

export default Register;
