import Link from "next/link";
import "./balances.scss";

const Balances = ({ standings, setStandings }) => {
  
  const balancesData = [
    {
      date: "02/24/2023",
      amount: "200",
      remarks: "משחק טניס ביום שני",
    },
    {
      date: "02/24/2023",
      amount: "100",
      remarks: "משחק טניס ביום שני",
    },
    {
      date: "02/24/2023",
      amount: "300",
      remarks: "משחק טניס ביום שני",
    },
    {
      date: "02/24/2023",
      amount: "200",
      remarks: "משחק טניס ביום שני",
    },
    {
      date: "02/24/2023",
      amount: "100",
      remarks: "משחק טניס ביום שני",
    },
    {
      date: "02/24/2023",
      amount: "200",
      remarks: "משחק טניס ביום שני",
    },
  ];
  return (
    <main>
      <div className="games_container">
        <div className="container_head">
          <Link className="return" href="/profile">
            <div className="lft_arro">
              <img src="../placement/svg/left arrow.svg" alt="" />
            </div>
            <p>חזור</p>
          </Link>

          <div className="profile">
            <div className="details">
              <span>
                <img src="../user-Image/a1.png" alt="" />
                <img src="../flags/br.png" alt="" />
              </span>
              <div className="name_bio">
                <p>יורם אברהמי</p>
                <p>שחקן טניס</p>
              </div>
            </div>
            <div className="cash">
              <p>220 ש”ח בזכות</p>
              <p>לתשלום ב-PayBox</p>
            </div>
          </div>
        </div>

        <div className="games_balances">
          <a href="" className="active">
            <p>משחקים</p>
          </a>
          <a href="">
            <p>יתרות</p>
          </a>
        </div>
        
        <div className="container_body">
          <table className="commonTable">
              <thead>
                <tr>
                  <th className="tableHeadingText">
                    <span>תאריך</span>
                  </th>
                  <th className="tableHeadingText">
                    <span>סכום</span>
                  </th>
                  <th className="tableHeadingText">
                    <span>הערות</span>
                  </th>
                </tr>
              </thead>
              <tbody>
              {balancesData.map((item) => (
                <tr>
                  <td className="tablebodyText">
                    <span>{item.date}</span>
                  </td>
                  <td className="tablebodyText">
                    <span>{item.amount}</span>
                  </td>
                  <td className="tablebodyText">
                    <span>{item.remarks}</span>
                  </td>
                </tr>
              ))}
              </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Balances;
