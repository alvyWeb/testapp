import ProtectedRoute from "@/components/common/ProtectedRoute";
import Link from "next/link";
import "./register.scss";
const Register = ({ standings, setStanding }) => {
  const registerpage = {
    bBody: [
      {
        head: "Crazy about tennis?",
        text: "Join ATPenn now, the number 1 tennis club in Israel",
      },
    ],
  };
  return (
    <ProtectedRoute>
      <main>
        <div className="reg_log_container">
          <img className="reg-img" src="./register/bg_sign.png" alt="" />
          <div className="reg-container">
            <div className="reg_body">
              <span className="body_logo">
                <img src="./register/login_ATP_Peen_logo.svg" alt="" />
              </span>
              {registerpage.bBody.map((item) => (
                <div className="b_body">
                  <div className="b_body_text">
                    <p className="lg_head">{item.head}</p>
                    <p className="sm_text">{item.text}</p>
                  </div>
                  <Link href="/login">
                    <button>Log In</button>
                  </Link>
                  <Link href="/registerTab">
                    <button className="register-btn">Register</button>
                  </Link>
                </div>
              ))}
              ;
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
};
export default Register;
