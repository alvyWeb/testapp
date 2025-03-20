"use client";
import { LuPenLine } from "react-icons/lu";
import "./userManagement.scss";

import ToggleSwitch from "@/components/common/ToggleSwitech";
import Link from "next/link";
import { useRouter } from "next/navigation";

const userManagement = ({}) => {
  const router = useRouter();

  const handleMyProfile = () => {
    // Navigate to the profile page when the avatar is clicked
    router.push("/createprofile");
  };

  return (
    <main className="management-container">
      <div className="topperBlock">
        <Link className="return" href="/profile">
          <div className="lft_arro">
            <img src="./placement/svg/left arrow.svg" alt="" />
          </div>
          <p>חזור</p>
        </Link>
        <div className="search_input">
          <input type="search" placeholder="חפש משתמשים..." />
          <span>
            <img src="./icon/search.svg" alt="" />
          </span>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <span>משתמשים</span>
              </th>
              <th>
                <span>פעיל</span>
              </th>
              <th>
                <span>קפטן</span>
              </th>
              <th>
                <span>דירוג</span>
              </th>
              <th>
                <span>רמה</span>
              </th>
              <th>
                <span>כדורים</span>
              </th>
              <th>
                <span>טלפון</span>
              </th>
              <th>
                <span>אימייל</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((item) => (
            <tr key={item}>
              <td className="table-data user-data"  onClick={handleMyProfile}>
                <span className="user-info">
                  <div className="user-imgs">
                    <img
                      className="user-img"
                      src="/user-Image/a1.png"
                      alt=""
                    />
                    <img
                      src="./flags/br.png"
                      alt=""
                      className="country-img"
                    />
                  </div>
                </span>
                <p>פן נ. (פנתר)</p>
                <span className="edit-pen">
                  <LuPenLine />
                </span>
              </td>
              <td className="table-data">
                <div className="dateInfo">
                  <ToggleSwitch />
                </div>
              </td>
              <td className="table-data">
                <div className="dateInfo">
                  <ToggleSwitch />
                </div>
              </td>
              <td className="table-data">
                <div className="dateInfo">
                  <span className="edit-pen">
                    <LuPenLine />
                  </span>
                  <span>#1</span>
                </div>
              </td>
              <td className="table-data">
                <div className="dateInfo">
                  <span>1</span>
                </div> 
              </td>
              <td className="table-data">
                <div className="dateInfo">
                  <span className="edit-pen">
                    <LuPenLine />
                  </span>
                  <span>1</span>
                </div>
              </td>
              <td className="table-data">
                <div className="dateInfo">
                  <span>0524876588</span>
                </div>
              </td>
              <td className="table-data">
                <div className="dateInfo">
                  <span>johndoe@gmail.com</span>
                </div>
              </td>
            </tr> 
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => router.push("/createprofile")}
          className="button"
        >
          הוספת משתמש
        </button>
      </div>
    </main>
  );
};

export default userManagement;
