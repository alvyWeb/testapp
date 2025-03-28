"use client";
import { MainContext } from "@/context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import "./createprofile.scss";

const CreateProfile = ({ standings, setStandings }) => {
  const router = useRouter();
  const {
    user: { data },
  } = useContext(MainContext);

  // useEffect(() => {
  //   if (!user?.data?.uid) {
  //     router.push("/login");
  //   }
  // }, [user, router]);


  const handleProfile = () => {
    // Navigate to the profile page when the avatar is clicked
    router.push("/profile");
  };

  const initialUser = {
    id: data?.uid,
    fullName: data?.displayName,
    nickName: "",
    birthday: "",
    avatar: "",
    coverImg: "",
    email: data?.email,
    country: "",
    city: "",
    height: "",
    strongHand: "",
    backhand: "",
    role: "user",
  };

  const [userData, setUser] = useState(initialUser);
  const [profileImg, setProfileImg] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [previewProfile, setPreviewProfile] = useState(
    "../user-Image/pUser.png"
  );
  const [coverPreview, setCoverPreview] = useState("../bgN.png");

  const handleInput = (e) => {
    setUser({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (type, e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      type === "profile"
        ? setPreviewProfile(reader.result)
        : setCoverPreview(reader.result);
    };
    reader.readAsDataURL(file);

    if (type === "profile") {
      setProfileImg(file);
    } else {
      setCoverImg(file);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("id", user.id);
  //   formData.append("fullName", user.fullName);
  //   formData.append("nickName", user.nickName);
  //   formData.append("birthday", user.birthday);
  //   formData.append("email", user.email);
  //   formData.append("country", user.country);
  //   formData.append("city", user.city);
  //   formData.append("height", user.height);
  //   formData.append("strongHand", user.strongHand);
  //   formData.append("backhand", user.backhand);
  //   formData.append("role", user.role);
  //   formData.append("profileImg", profileImg);
  //   formData.append("coverImg", coverImg);

  //   try {
  //     const response = await axios.post(
  //       "https://firestore.googleapis.com/v1/projects/atpenn-4fc94/databases/(default)/documents/users",
  //       // "http://127.0.0.1:5001/atpenn-4fc94/europe-west1/api/users",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log("Server Response:", response.data);
  //   } catch (error) {
  //     // nothing
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (event) => { 
    event.preventDefault();

    const firestoreData = {
      fields: {
        id: { stringValue: userData.id },
        metadata: {
          mapValue: {
            fields: {
              createdAt: { timestampValue: new Date().toISOString() },
              updatedAt: { timestampValue: new Date().toISOString() },
            },
          },
        },
        schemaVersion: { stringValue: "2.0" }, // Change version as needed
        UserInfo: {
          mapValue: {
            fields: {
              avatar: { stringValue: previewProfile }, // URL of profile image
              backhandStyle: { stringValue: userData.backhand },
              city: { stringValue: userData.city },
              country: { stringValue: userData.country },
              dateOfBirth: { stringValue: userData.birthday },
              firstName: { stringValue: userData.fullName.split(" ")[0] || "" },
              lastName: { stringValue: userData.fullName.split(" ")[1] || "" },
              height: { stringValue: userData.height },
              sex: { stringValue: userData.sex || "unspecified" }, // Default to 'unspecified' if not provided
            },
          },
        },
      },
    };
    
    
    try {
      const response = await axios.post(
        "https://firestore.googleapis.com/v1/projects/atpenn-4fc94/databases/(default)/documents/users",
        firestoreData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Firestore Error:", error.response?.data || error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="createprofile_container">
        <div className="cover_profile">
          <div className="cover">
            <img src={coverPreview} alt="" />
            <div className="body_cover">
              <div className="return" onClick={() => window.history.back()}>
                <svg
                  width="13"
                  height="24"
                  viewBox="0 0 13 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1618 11.6734L0.254463 1.4919C0.172894 1.40984 0.108408 1.31243 0.0647346 1.2053C0.0210614 1.09816 -0.000930926 0.983424 3.01952e-05 0.867731C0.000991316 0.752038 0.0248862 0.637685 0.0703333 0.531288C0.11578 0.424892 0.181877 0.328564 0.264798 0.247881C0.347719 0.167197 0.445817 0.103759 0.553416 0.0612376C0.661016 0.0187164 0.77598 -0.00204378 0.891656 0.000158552C1.00733 0.00236088 1.12142 0.027482 1.22732 0.0740681C1.33323 0.120654 1.42884 0.18778 1.50863 0.271562L12.0086 11.0632C12.1676 11.2266 12.2565 11.4455 12.2565 11.6734C12.2565 11.9013 12.1676 12.1202 12.0086 12.2836L1.50863 23.0752C1.42884 23.159 1.33323 23.2261 1.22732 23.2727C1.12142 23.3193 1.00733 23.3444 0.891656 23.3466C0.77598 23.3488 0.661016 23.3281 0.553416 23.2856C0.445817 23.243 0.347719 23.1796 0.264798 23.0989C0.181877 23.0182 0.11578 22.9219 0.0703333 22.8155C0.0248862 22.7091 0.000991316 22.5948 3.01952e-05 22.4791C-0.000930926 22.3634 0.0210614 22.2486 0.0647346 22.1415C0.108408 22.0344 0.172894 21.9369 0.254463 21.8549L10.1618 11.6734Z"
                    fill="white"
                  />
                </svg>
                <p>חזור</p>
              </div>
            </div>
            <div
                className="add_cover"
                onClick={() =>
                  document.getElementById("fileInputCover").click()
                }
              >
                <img src="../addS.png" alt="Add Cover" />
                <input
                  type="file"
                  id="fileInputCover"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload("cover", e)}
                />
            </div>
            <div className="managerlink" onClick={handleProfile}>
              <p>ניהול</p>
            </div>
          </div>
          <div className="profile">
            <img src={previewProfile} alt="" />
            <div
              onClick={() =>
                document.getElementById("fileInputProfile").click()
              }
              className="add-profile"
            >
              <img src="../addS.png" alt="" />
              <input
                type="file"
                id="fileInputProfile"
                style={{ display: "none" }}
                onChange={(e) => handleFileUpload("profile", e)}
              />
            </div>
          </div>
        </div>
        <div className="createprofile_body">
          <div className="f_n_name">
            <div className="label_input">
              <label htmlFor="">שם פרטי</label>
              <input
                onChange={handleInput}
                name="fullName"
                type="text"
                placeholder="הכנס שם..."
              />
            </div>
            <div className="label_input">
              <label htmlFor="">כינוי</label>
              <input
                onChange={handleInput}
                name="nickName"
                type="text"
                placeholder="יינתן לך בהמשך..."
              />
            </div>
          </div>
          <div className="calender">
            <p>תאריך לידה</p>
            <div className="date_input">
              <input onChange={handleInput} name="birthday" type="date" />
            </div>
          </div>
          <div className="body_datils">
            <div className="country_height">
              <div className="label_input">
                <label htmlFor="">מולדת</label>
                <span>
                  <input onChange={handleInput} name="country" type="text" />
                  <img src="./flags/il.png" alt="" />
                </span>
              </div>
              <div className="label_input">
                <label htmlFor="">גובה</label>
                <input onChange={handleInput} name="city" type="text" />
              </div>
            </div>
            <div className="country_height">
              <div className="label_input">
                <label htmlFor="">יד חזקה</label>
                <input onChange={handleInput} name="strongHand" type="text" />
              </div>
              <div className="label_input">
                <label htmlFor="">חבטת גב</label>
                <input onChange={handleInput} name="backhand" type="text" />
              </div>
            </div>
          </div>
          <div className="create_button">
            <button type="submit">שמור והמשך</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default CreateProfile;
