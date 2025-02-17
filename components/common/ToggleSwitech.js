import "./toggleSwitch.scss";

function ToggleSwitch({ checked, onChange }) {
  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={onChange}
        className="toggle-checkbox"
      />
      <label htmlFor="toggle" className="toggle-switch"></label>
    </>
  );
}

export default ToggleSwitch;
