import "./password.scss";

const ChangePassword = () => {
  return (
    <div className="pass_container">
      <div className="container">
        <h2>שינוי סיסמה</h2>
        <span>
          <input type="text" placeholder="סיסמה נוכחית" />
          <input type="text" placeholder="סיסמה חדשה" />
          <input type="text" placeholder="סיסמה חדשה בשנית" />
          <a>
            <button className="btn btn1">שנה סיסמה</button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ChangePassword;
