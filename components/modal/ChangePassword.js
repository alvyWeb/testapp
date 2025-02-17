import "./password.scss";

const ChangePassword = () => {
  return (
    <div className="pass_container">
      <div className="container">
        <p>Change Password</p>
        <span>
          <input type="text" placeholder="Current Password" />
          <input type="text" placeholder="new password" />
          <input type="text" placeholder="New password again" />
          <a>
            <button className="btn btn1">Current Password</button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ChangePassword;
