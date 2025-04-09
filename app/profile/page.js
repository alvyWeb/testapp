"use client";
import ModalDialog from "@/components/common/ModalDialog";
import ChangePassword from "@/components/modal/ChangePassword";
import MessageModal from "@/components/modal/MessageModal";
// import { MainContext } from "@/context";
// import { auth } from "@/firebase/firebase";
// import { signOut } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { useContext, useState } from "react";
import { useState, useEffect } from "react";
import { auth, db } from "../../utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import { toast } from "react-toastify";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import "./profile.scss";

const Profile = ({ standings, setStandings }) => {
  // const {
  //   user: { data },
  //   onLogin,
  // } = useContext(MainContext);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleModalOpen = (type) => {
    setIsOpenModal(true);
    setModalType(type);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setModalType("");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user data from Firestore (assuming user has a document in Firestore)
        const userRef = doc(db, "users", user.uid); // Change "users" to the actual collection name
        getDoc(userRef).then((docSnap) => {
          if (docSnap.exists()) {
            const { fullName, profileImage, coverImage } = docSnap.data();
            setUserData({
              fullName: fullName || null,
              profileImage: profileImage || null,
              coverImage: coverImage || null,
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
  
  const defaultName = "נועם פן";
  const defaultAvatar = "../user-Image/profileN.png";
  const defaultcover = "../profile/png/cover.png";


  // const { firstName, lastName, avatar, role } = data?.data || {};
  // const {
  //   displayName: firstName,
  //   lastName,
  //   photoURL: avatar,
  //   role,
  // } = data || {};
  const profileManager = [
    {
      message: "צור הודעת מערכת",
      link: "",
      icon: (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3449 20C16.248 20 16.1512 19.9751 16.0632 19.9267L11.0224 17.1468C10.3407 17.2986 9.66154 17.3771 9 17.3771C4.03717 17.3771 0 13.4782 0 8.68791C0 3.89765 4.03717 0 9 0C13.9628 0 18 3.89765 18 8.68791C18 11.0556 16.9825 13.3329 15.2016 14.9715C15.1174 16.4099 16.3185 18.4517 16.8102 19.144C16.9586 19.3548 16.9385 19.6361 16.7587 19.8246C16.6505 19.9385 16.4971 20 16.3449 20ZM11.1079 16.0173C11.2047 16.0173 11.3016 16.0435 11.3883 16.0906L14.8608 18.0054C14.3804 17.0015 13.944 15.7293 14.1012 14.6378C14.12 14.5108 14.1817 14.3943 14.281 14.308C15.9273 12.867 16.8706 10.8187 16.8706 8.68922C16.8706 4.50101 13.3403 1.09286 9.00126 1.09286C4.66224 1.09286 1.13192 4.50101 1.13192 8.68922C1.13192 12.8774 4.66098 16.2856 9 16.2856C9.64016 16.2856 10.3017 16.2031 10.9658 16.0369C11.0123 16.0238 11.0601 16.0173 11.1079 16.0173Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      message: "רישום ושיבוץ",
      link: "/registrationplacement",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7194 10.6468H10.6468V16.7194C10.6468 17.0416 10.5189 17.3505 10.2911 17.5782C10.0633 17.806 9.75443 17.934 9.43231 17.934C9.1102 17.934 8.80128 17.806 8.57352 17.5782C8.34575 17.3505 8.21779 17.0416 8.21779 16.7194V10.6468H2.14519C1.82307 10.6468 1.51416 10.5189 1.28639 10.2911C1.05862 10.0633 0.930664 9.75443 0.930664 9.43231C0.930664 9.1102 1.05862 8.80129 1.28639 8.57352C1.51416 8.34575 1.82307 8.21779 2.14519 8.21779H8.21779V2.14519C8.21779 1.82307 8.34575 1.51416 8.57352 1.28639C8.80128 1.05862 9.1102 0.930664 9.43231 0.930664C9.75443 0.930664 10.0633 1.05862 10.2911 1.28639C10.5189 1.51416 10.6468 1.82307 10.6468 2.14519V8.21779H16.7194C17.0416 8.21779 17.3505 8.34575 17.5782 8.57352C17.806 8.80129 17.934 9.1102 17.934 9.43231C17.934 9.75443 17.806 10.0633 17.5782 10.2911C17.3505 10.5189 17.0416 10.6468 16.7194 10.6468Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      message: "ניהול משתמשים",
      link: "/user-management",
      icon: (
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.67884 16.1552V16.3052H2.82884H10.0388C10.2687 17.0111 10.5913 17.6826 10.9926 18.2914H0.651465V15.4122C0.651465 14.2839 1.22017 13.2154 2.19429 12.6499L2.19476 12.6497C4.41846 11.3481 7.02235 10.5898 9.81096 10.5898C9.99962 10.5898 10.1823 10.5956 10.3632 10.6071C10.0871 11.223 9.88948 11.8864 9.77716 12.576C7.47 12.5819 5.21024 13.1945 3.23001 14.357L3.22979 14.3571C2.88459 14.5605 2.67884 14.9811 2.67884 15.4122V16.1552ZM22.1523 13.0358L22.0905 13.0895L22.1023 13.1705L22.1062 13.1972C22.14 13.4289 22.1706 13.6392 22.1706 13.869C22.1706 14.0989 22.14 14.3092 22.1062 14.5409L22.1023 14.5676L22.0905 14.6486L22.1523 14.7023L23.3849 15.775L22.3459 17.5407L20.7736 17.0188L20.6947 16.9925L20.6306 17.0456C20.2717 17.3431 19.8676 17.5748 19.4177 17.7405L19.3394 17.7694L19.3226 17.8511L18.9981 19.4344H16.9154L16.5909 17.8511L16.5742 17.7694L16.4958 17.7405C16.0459 17.5748 15.6419 17.3431 15.2829 17.0456L15.2189 16.9925L15.1399 17.0188L13.5676 17.5407L12.5286 15.775L13.7612 14.7023L13.823 14.6486L13.8112 14.5676L13.8073 14.5409C13.7736 14.3092 13.7429 14.0989 13.7429 13.869C13.7429 13.6392 13.7736 13.4289 13.8073 13.1972L13.8112 13.1705L13.823 13.0895L13.7612 13.0358L12.5286 11.9631L13.5676 10.1974L15.1399 10.7193L15.2189 10.7455L15.2829 10.6925C15.6419 10.395 16.0459 10.1633 16.4958 9.99759L16.5742 9.96874L16.5909 9.88696L16.9154 8.30365H18.9981L19.3226 9.88696L19.3394 9.96874L19.4177 9.99759C19.8676 10.1633 20.2717 10.395 20.6306 10.6925L20.6947 10.7455L20.7736 10.7193L22.3459 10.1974L23.3849 11.9631L22.1523 13.0358ZM14.3157 4.72442C14.3157 7.16526 12.3024 9.14673 9.81096 9.14673C7.31952 9.14673 5.30621 7.16526 5.30621 4.72442C5.30621 2.28357 7.31952 0.3021 9.81096 0.3021C12.3024 0.3021 14.3157 2.28357 14.3157 4.72442ZM12.2883 4.72442C12.2883 3.38167 11.1713 2.28826 9.81096 2.28826C8.4506 2.28826 7.33358 3.38167 7.33358 4.72442C7.33358 6.06716 8.4506 7.16057 9.81096 7.16057C11.1713 7.16057 12.2883 6.06716 12.2883 4.72442ZM15.4794 13.869C15.4794 15.2118 16.5964 16.3052 17.9568 16.3052C19.3171 16.3052 20.4341 15.2118 20.4341 13.869C20.4341 12.5263 19.3171 11.4329 17.9568 11.4329C16.5964 11.4329 15.4794 12.5263 15.4794 13.869Z"
            fill="white"
            stroke="#145E94"
            stroke-width="0.3"
          />
        </svg>
      ),
    },
    {
      message: "משחקים ויתרות",
      link: "/managementinterface/balances",
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5992 10.8352C12.083 10.7062 11.5668 10.4481 11.1797 10.061C10.7926 9.93195 10.6635 9.54482 10.6635 9.28673C10.6635 9.02865 10.7926 8.64152 11.0506 8.51248C11.4378 8.25439 11.8249 7.99631 12.212 8.12535C12.9863 8.12535 13.6315 8.51248 14.0186 9.02865L15.18 7.48013C14.7929 7.09301 14.4058 6.83492 14.0186 6.57683C13.6315 6.31875 13.1153 6.1897 12.5992 6.1897V4.3831H11.0506V6.1897C10.4054 6.31875 9.76021 6.70588 9.24404 7.22205C8.72787 7.86726 8.34074 8.64152 8.46978 9.41578C8.46978 10.19 8.72787 10.9643 9.24404 11.4805C9.88925 12.1257 10.7926 12.5128 11.5668 12.8999C11.9539 13.029 12.4701 13.2871 12.8572 13.5452C13.1153 13.8032 13.2444 14.1904 13.2444 14.5775C13.2444 14.9646 13.1153 15.3518 12.8572 15.7389C12.4701 16.126 11.9539 16.2551 11.5668 16.2551C11.0506 16.2551 10.4054 16.126 10.0183 15.7389C9.63117 15.4808 9.24404 15.0937 8.98595 14.7065L7.69552 16.126C8.08265 16.6422 8.46978 17.0293 8.98595 17.4164C9.63117 17.8036 10.4054 18.1907 11.1797 18.1907V19.8683H12.5992V17.9326C13.3734 17.8036 14.0186 17.4164 14.5348 16.9003C15.18 16.2551 15.5671 15.2227 15.5671 14.3194C15.5671 13.5451 15.3091 12.6418 14.6638 12.1257C14.0186 11.4805 13.3734 11.0933 12.5992 10.8352ZM11.8249 1.80225C6.14701 1.80225 1.50146 6.44779 1.50146 12.1257C1.50146 17.8036 6.14701 22.4491 11.8249 22.4491C17.5028 22.4491 22.1483 17.8036 22.1483 12.1257C22.1483 6.44779 17.5028 1.80225 11.8249 1.80225ZM11.8249 21.0296C6.92127 21.0296 2.92094 17.0293 2.92094 12.1257C2.92094 7.22205 6.92127 3.22172 11.8249 3.22172C16.7285 3.22172 20.7289 7.22205 20.7289 12.1257C20.7289 17.0293 16.7285 21.0296 11.8249 21.0296Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      message: "שנה סיסמה",
      link: "",
      icon: (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8973 6.9794H17.9215C18.19 6.9794 18.4474 7.07689 18.6372 7.25043C18.827 7.42397 18.9336 7.65933 18.9336 7.90475V19.0089C18.9336 19.2544 18.827 19.4897 18.6372 19.6633C18.4474 19.8368 18.19 19.9343 17.9215 19.9343H1.72792C1.4595 19.9343 1.20206 19.8368 1.01226 19.6633C0.822452 19.4897 0.71582 19.2544 0.71582 19.0089V7.90475C0.71582 7.65933 0.822452 7.42397 1.01226 7.25043C1.20206 7.07689 1.4595 6.9794 1.72792 6.9794H3.75212V6.05405C3.75212 4.58154 4.39191 3.16935 5.53075 2.12812C6.66958 1.0869 8.21418 0.501953 9.82473 0.501953C11.4353 0.501953 12.9799 1.0869 14.1187 2.12812C15.2575 3.16935 15.8973 4.58154 15.8973 6.05405V6.9794ZM2.74002 8.8301V18.0836H16.9094V8.8301H2.74002ZM8.81263 12.5315H10.8368V14.3822H8.81263V12.5315ZM4.76423 12.5315H6.78843V14.3822H4.76423V12.5315ZM12.861 12.5315H14.8852V14.3822H12.861V12.5315ZM13.8731 6.9794V6.05405C13.8731 5.07238 13.4466 4.13091 12.6874 3.43677C11.9282 2.74262 10.8984 2.35265 9.82473 2.35265C8.75103 2.35265 7.7213 2.74262 6.96208 3.43677C6.20285 4.13091 5.77633 5.07238 5.77633 6.05405V6.9794H13.8731Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      message: "התנתק",
      link: "",
      icon: (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.52154 0.716064C9.30757 0.716064 9.10236 0.801065 8.95106 0.952367C8.79975 1.10367 8.71475 1.30888 8.71475 1.52285C8.71475 1.73683 8.79975 1.94204 8.95106 2.09334C9.10236 2.24464 9.30757 2.32964 9.52154 2.32964C11.59 2.32964 13.5737 3.15132 15.0362 4.61391C16.4988 6.0765 17.3205 8.06019 17.3205 10.1286C17.3205 12.197 16.4988 14.1807 15.0362 15.6433C13.5737 17.1059 11.59 17.9276 9.52154 17.9276C9.30757 17.9276 9.10236 18.0126 8.95106 18.1639C8.79975 18.3152 8.71475 18.5204 8.71475 18.7344C8.71475 18.9483 8.79975 19.1535 8.95106 19.3048C9.10236 19.4561 9.30757 19.5411 9.52154 19.5411C12.0179 19.5411 14.412 18.5495 16.1772 16.7843C17.9424 15.0191 18.9341 12.625 18.9341 10.1286C18.9341 7.63224 17.9424 5.23813 16.1772 3.47293C14.412 1.70774 12.0179 0.716064 9.52154 0.716064Z"
            fill="white"
          />
          <path
            d="M4.71329 7.47179C4.8558 7.31885 4.93338 7.11656 4.9297 6.90755C4.92601 6.69853 4.84134 6.49911 4.69352 6.35129C4.5457 6.20348 4.34628 6.1188 4.13727 6.11512C3.92825 6.11143 3.72597 6.18901 3.57303 6.33152L0.345869 9.55868C0.194784 9.70996 0.109921 9.91501 0.109921 10.1288C0.109921 10.3426 0.194784 10.5477 0.345869 10.6989L3.57303 13.9261C3.64689 14.0054 3.73596 14.0689 3.83492 14.113C3.93389 14.1571 4.04072 14.1808 4.14905 14.1828C4.25738 14.1847 4.36498 14.1647 4.46544 14.1242C4.5659 14.0836 4.65716 14.0232 4.73377 13.9466C4.81038 13.87 4.87078 13.7787 4.91135 13.6783C4.95193 13.5778 4.97186 13.4702 4.96995 13.3619C4.96803 13.2535 4.94432 13.1467 4.90023 13.0477C4.85613 12.9488 4.79256 12.8597 4.71329 12.7858L2.86305 10.9356H11.6732C11.8872 10.9356 12.0924 10.8506 12.2437 10.6993C12.395 10.548 12.48 10.3428 12.48 10.1288C12.48 9.91484 12.395 9.70963 12.2437 9.55833C12.0924 9.40702 11.8872 9.32202 11.6732 9.32202H2.86305L4.71329 7.47179Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  const router = useRouter();
  const handleClick = (item) => {
    if (item === "התנתק") {
      alert("אתה בטוח");
      signOut(auth)
        .then((res) => {
          Cookies.set("token", "");
          onLogin();
          router.push("/login");
          toast.success("היציאה הצליחה");
        })
        .catch((err) => {
          toast.warn(err?.message);
        });
    } else if (item === "שנה סיסמה") {
      handleModalOpen("changePassword");
    } else if (item === "צור הודעת מערכת") {
      handleModalOpen("chat");
    }
  };

  return (
    <ProtectedRoute>
    <>
      <div className="profile_container">
        <div className="cover_img">
          <img src={userData?.coverImage || defaultcover} alt="" />
          <div className="cover_d" onClick={() => window.history.back()}>
            <svg
              width="14"
              height="25"
              viewBox="0 0 14 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer", transform: "scaleX(-1)" }}
            >
              <path
                d="M1.14034 11.9586L1.23947 12.0551L1.14034 11.9586C0.954165 12.15 0.850002 12.4064 0.850002 12.6734C0.850002 12.9404 0.954165 13.1968 1.14034 13.3882L1.23947 13.2917L1.14034 13.3882L11.6392 24.1787C11.6394 24.1789 11.6396 24.1791 11.6398 24.1793C11.7332 24.2772 11.845 24.3556 11.9688 24.41C12.0928 24.4646 12.2265 24.494 12.362 24.4966C12.4975 24.4992 12.6321 24.4749 12.7582 24.4251C12.8842 24.3753 12.9991 24.3009 13.0963 24.2064C13.1934 24.1119 13.2708 23.9991 13.3241 23.8744C13.3773 23.7498 13.4053 23.6158 13.4064 23.4803C13.4076 23.3448 13.3818 23.2104 13.3306 23.0849C13.2796 22.9596 13.2043 22.8457 13.109 22.7497C13.1088 22.7495 13.1086 22.7493 13.1084 22.7492L3.30398 12.6734L13.1084 2.59766C13.1086 2.59746 13.1088 2.59726 13.109 2.59705C13.2043 2.50106 13.2796 2.38717 13.3306 2.26193C13.3818 2.13643 13.4076 2.00202 13.4064 1.8665C13.4053 1.73097 13.3773 1.59702 13.3241 1.47238C13.2709 1.34774 13.1934 1.2349 13.0963 1.14038C12.9992 1.04587 12.8842 0.971558 12.7582 0.921747C12.6321 0.871937 12.4975 0.847618 12.362 0.850199C12.2265 0.852777 12.0928 0.882206 11.9688 0.936777C11.8449 0.991245 11.7331 1.06968 11.6398 1.16756C11.6396 1.16775 11.6394 1.16794 11.6392 1.16813L1.14034 11.9586Z"
                fill="#145E94"
                stroke="white"
                stroke-width="0.3"
              />
            </svg>

            <p>חזור</p>
          </div>
        </div>
        <div className="profile_d">
          <div className="profileIntro">
            <img src={userData?.profileImage || defaultAvatar} alt="" />
            <p>
              {userData?.fullName || defaultName}
            </p>
            <p className="_bio">{`${role ?? "מנהל"}`}</p>
          </div>
          {profileManager.map((item, idx) => (
            <div key={idx} className="management_area">
              <p>{item.message}</p>
              <div className="managment_icon">
                <Link
                  onClick={() => handleClick(item?.message)}
                  href={item?.link}
                >
                  {item.icon}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpenModal && modalType === "changePassword" && (
        <ModalDialog onClose={handleCloseModal}>
          <ChangePassword />
        </ModalDialog>
      )}
      {isOpenModal && modalType === "chat" && (
        <ModalDialog onClose={handleCloseModal}>
          <MessageModal />
        </ModalDialog>
      )}
    </>
    </ProtectedRoute>
  );
};

export default Profile;
