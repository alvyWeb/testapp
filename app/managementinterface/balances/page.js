import Link from "next/link";
import "./balances.scss";

const Balances = ({ standings, setStandings }) => {
  const balancesData = [
    {
      date: "02/24/2023",
      amount: "200",
      remarks: "Tennis game on Monday",
    },
    {
      date: "02/24/2023",
      amount: "100",
      remarks: "Tennis game on Monday",
    },
    {
      date: "02/24/2023",
      amount: "300",
      remarks: "Tennis game on Monday",
    },
    {
      date: "02/24/2023",
      amount: "200",
      remarks: "Tennis game on Monday",
    },
    {
      date: "02/24/2023",
      amount: "100",
      remarks: "Tennis game on Monday",
    },
    {
      date: "02/24/2023",
      amount: "200",
      remarks: "Tennis game on Monday",
    },
  ];
  return (
    <main>
      <div className="games_container">
        <div className="container_head">
          <Link href="/profile" className="return">
            <svg
              width="14"
              height="25"
              viewBox="0 0 14 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.14045 13.3881L1.24796 13.2835L1.14045 13.3881L11.6393 24.1786C11.6395 24.1788 11.6397 24.179 11.6399 24.1792C11.7333 24.277 11.8451 24.3555 11.9689 24.4099C12.0929 24.4645 12.2266 24.4939 12.3621 24.4965C12.4976 24.4991 12.6323 24.4748 12.7583 24.4249C12.8843 24.3751 12.9993 24.3008 13.0964 24.2063C13.1935 24.1118 13.271 23.9989 13.3242 23.8743C13.3774 23.7497 13.4054 23.6157 13.4066 23.4802C13.4077 23.3447 13.3819 23.2103 13.3308 23.0848C13.2797 22.9595 13.2044 22.8456 13.1091 22.7496C13.1089 22.7494 13.1087 22.7492 13.1085 22.749L3.30409 12.6733L13.1085 2.59754C13.1087 2.59734 13.1089 2.59714 13.1091 2.59693C13.2044 2.50094 13.2797 2.38705 13.3308 2.26181C13.3819 2.1363 13.4077 2.0019 13.4066 1.86637C13.4054 1.73085 13.3774 1.59689 13.3242 1.47226C13.271 1.34762 13.1935 1.23478 13.0964 1.14026C12.9993 1.04575 12.8844 0.971436 12.7583 0.921625C12.6323 0.871815 12.4976 0.847496 12.3621 0.850077C12.2266 0.852655 12.0929 0.882084 11.9689 0.936655C11.8451 0.991117 11.7333 1.06954 11.6399 1.1674C11.6397 1.1676 11.6395 1.1678 11.6393 1.168L1.14045 11.9585L1.24796 12.0631L1.14045 11.9585C0.954279 12.1499 0.850117 12.4063 0.850117 12.6733C0.850117 12.9403 0.954279 13.1967 1.14045 13.3881Z"
                fill="#145E94"
                stroke="white"
                stroke-width="0.3"
              />
            </svg>
            <p>Return</p>
          </Link>
          <div className="profile">
            <div className="details">
              <span>
                <img src="../user-Image/Tafsir.png" alt="" />
                <img src="../flags/aw.png" alt="" />
              </span>
              <div className="name_bio">
                <p>Yoram Abrahami</p>
                <p>a tennis player</p>
              </div>
            </div>
            <div className="cash">
              <p>220 NIS</p>
              <p>To be paid at PayBox</p>
            </div>
          </div>
        </div>
        <div className="games_balances">
          <a href="">
            <p>Games</p>
          </a>
          <a href="">
            <p>Balances</p>
          </a>
        </div>
        <div className="container_body">
          <div className="body_heading">
            <span>
              <p>Date</p>
              <p>Amount</p>
            </span>
            <p>Remarks</p>
          </div>
          {balancesData.map((item) => (
            <div className="body_data">
              <p>{item.date}</p>
              <p>{item.amount}</p>
              <p>{item.remarks}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Balances;
