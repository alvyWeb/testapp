"use client";
import { LuPenLine } from "react-icons/lu";
import "./userManagement.scss";

import ToggleSwitch from "@/components/common/ToggleSwitech";
import Link from "next/link";
import { useRouter } from "next/navigation";

const userManagement = ({}) => {
  const router = useRouter();
  return (
    <main className="main-container">
      <Link className="return" href="/profile">
        <div className="lft_arro">
          <img src="./placement/svg/left arrow.svg" alt="" />
        </div>
        <p>Return</p>
      </Link>
      <div className="search_input">
        <input type="search" placeholder="Search users..." />
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3833 9.74548L10.3235 9.81575L10.3887 9.881L10.6356 10.1279L10.6649 10.1571H10.7063H11.3872L15.8586 14.6286L14.6286 15.8586L10.1571 11.3872V10.7063V10.6649L10.1279 10.6356L9.881 10.3887L9.81565 10.3234L9.74536 10.3834C8.68511 11.2884 7.33684 11.7856 5.94285 11.7857C4.39324 11.7857 2.90708 11.1701 1.81133 10.0744C0.715585 8.97863 0.1 7.49248 0.1 5.94286C0.1 4.39324 0.715585 2.90708 1.81133 1.81133C2.90708 0.715585 4.39324 0.1 5.94286 0.1C7.49248 0.1 8.97863 0.715585 10.0744 1.81133C11.1701 2.90708 11.7857 4.39324 11.7857 5.94286C11.7857 7.39004 11.2554 8.72045 10.3833 9.74548ZM5.94286 1.72857C3.60191 1.72857 1.72857 3.60191 1.72857 5.94286C1.72857 8.2838 3.60191 10.1571 5.94286 10.1571C8.2838 10.1571 10.1571 8.2838 10.1571 5.94286C10.1571 3.60191 8.2838 1.72857 5.94286 1.72857Z"
              fill="white"
              stroke="#1C1C1E"
              stroke-width="0.2"
            />
          </svg>
        </span>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <span>Email</span>
              </th>
              <th>
                <span>Phone</span>
              </th>
              <th>
                <span>Ball</span>
              </th>
              <th>
                <span>Level</span>
              </th>
              <th>
                <span>Ratting</span>
              </th>
              <th>
                <span>Captain</span>
              </th>
              <th>
                <span>Active</span>
              </th>
              <th>
                <span>User</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <tr key={item}>
                <td className="table-data">
                  <span>hayatul@gmail.com </span>
                </td>
                <td className="table-data">
                  <span>0524876588 </span>
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
                  <p>Penn N. (panther)</p>

                  <span className="user-info">
                    <div className="user-imgs">
                      <img
                        className="user-img"
                        src="/user-Image/Sabbir Sagar.png"
                        alt=""
                      />
                      <img
                        src="./flags/bi.png"
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
          Add
        </button>
      </div>
    </main>
  );
};

export default userManagement;
