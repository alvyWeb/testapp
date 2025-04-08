"use client";
import { useState, useEffect } from "react";
import { auth, db } from "../../utils/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import styles from "../../styles/common/ProfileHeader.module.scss";

const Navbar = ({ dark, setDark, rtl, setRtl }) => {
  const router = useRouter();
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch user data from Firestore (assuming user has a document in Firestore)
        const userRef = doc(db, "users", user.uid); // Change "users" to the actual collection name
        getDoc(userRef).then((docSnap) => {
          if (docSnap.exists()) {
            const { fullName, profileImage } = docSnap.data();
            setUserData({
              fullName: fullName || null,
              profileImage: profileImage || null,
            });
          } else {
            setUserData(null);
          }
        });
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleProfile = () => {
    // Navigate to the profile page when the avatar is clicked
    router.push("/createprofile");
  };

  // Default values in case Firebase user data is not available
  const defaultName = "נועם פן (פנתר)";
  const defaultAvatar = "/user-Image/p1.png";

  return (
    <div className={styles.profileHeader}>
      <div className={styles.insidebox}>
        <div id={styles.dp}>
          <img
            onClick={handleProfile}
            src={userData?.profileImage || defaultAvatar}
            alt={userData?.fullName || defaultName}
          />
        </div>
        <div id={styles.intro}>
          <p className={styles.username}>
            {userData?.fullName || defaultName}
          </p>
          <p className={styles.moreinfo}>שחקן טניס</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
