import "./toggleSwitch.scss";

function ToggleSwitch({ checked, onChange }) {
  return (
    <>
      <div class="toggle">
        <input type="checkbox" class="check" />
        <b class="b switch"></b>
        <b class="b track"></b>
      </div>
    </>
  );
}

export default ToggleSwitch;
