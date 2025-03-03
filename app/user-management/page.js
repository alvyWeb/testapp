"use client";
import { LuPenLine } from "react-icons/lu";
import "./userManagement.scss";

import ToggleSwitch from "@/components/common/ToggleSwitech";
import Link from "next/link";
import { useRouter } from "next/navigation";

const userManagement = ({}) => {
  const router = useRouter();
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
                <span>אימייל</span>
              </th>
              <th>
                <span>טלפון</span>
              </th>
              <th>
                <span>כדורים</span>
              </th>
              <th>
                <span>רמה</span>
              </th>
              <th>
                <span>דירוג</span>
              </th>
              <th>
                <span>קפטן</span>
              </th>
              <th>
                <span>פעיל</span>
              </th>
              <th>
                <span>משתמשים</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <tr key={item}>
                <td className="table-data">
                  <span>johndoe@gmail.com</span>
                </td>
                <td className="table-data">
                  <span>0524876588</span>
                </td>
                <td className="table-data">
                  <span className="edit-pen">
                    <LuPenLine />
                  </span>
                  <span>1</span>
                </td>
                <td className="table-data">
                  <span>1</span>
                </td>
                <td className="table-data">
                  <span className="edit-pen">
                    <LuPenLine />
                  </span>
                  <span>#1</span>
                </td>
                <td className="table-data">
                  <ToggleSwitch />
                </td>
                <td className="table-data">
                  <ToggleSwitch />
                </td>
                <td className="table-data user-data">
                  <span className="edit-pen">
                    <LuPenLine />
                  </span>
                  <p>פן נ. (פנתר)</p>

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
