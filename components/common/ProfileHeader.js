import { MainContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "../../styles/common/ProfileHeader.module.scss";

const Navbar = ({ dark, setDark, rtl, setRtl }) => {
  const {
    user: { data },
  } = useContext(MainContext);

  // Destructure the necessary user data (first name, last name, and avatar)
  const { displayName: firstName, lastName, photoURL: avatar } = data || {};
  const router = useRouter();

  const handleMode = () => {
    // Toggle dark mode and store the preference in localStorage
    setDark((prev) => !prev);
    localStorage.setItem("dark", !dark);
  };

  const handleProfile = () => {
    // Navigate to the profile page when the avatar is clicked
    router.push("/profile");
  };

  return (
    <div className={styles.profileHeader}>
      <div className={styles.insidebox}>
        <div id={styles.dp}>
          <img
            onClick={handleProfile}
            src={avatar ?? "/user-Image/p1.png"}
            alt={firstName ? `${firstName} ${lastName}` : "משתמש"}
          />
        </div>
        <div id={styles.intro}>
          <p className={styles.username}>
            {firstName && lastName ? `${firstName} ${lastName}` : "נועם פן (פנתר)"}
          </p>
          <p className={styles.moreinfo}>שחקן טניס</p>
        </div>
        {/* <div
          className={`theme-toggle-item ${light ? "dark" : "dark"}`}
          onClick={handleMode}
        >
          <svg
            className="sun-and-moon"
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <mask className="moon" id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle cx="0" cy="10" r="6" fill="white" />
            </mask>
            <circle
              className="sun"
              cx="12"
              cy="12"
              r="6"
              mask="url(#moon-mask)"
              fill="white"
            />
            <g className="sun-beams" stroke="white">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
