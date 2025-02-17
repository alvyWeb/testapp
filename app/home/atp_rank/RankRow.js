import { findCountry } from "@/utils/findCountry";
import Link from "next/link";

const RankRow = ({ rank }) => {
  const country = findCountry(rank["@country"]);
  const countryCode = country?.code?.toLocaleLowerCase();

  const countryImg = `/flags/${countryCode}.png`;

  return (
    <Link href="/propyl">
      <table className="border_bottom_table _cut_bottom">
        <tbody>
          <tr>
            <td>
              <span className="_ranking">
                <span className="_number">{rank["@rank"]}</span>
                <span className="country_name">
                  <span className="_country">
                    <img src={countryImg} />
                  </span>
                  <span className="_name">{rank["@name"]}</span>
                </span>
              </span>
              <span className="_points">{rank["@points"]}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Link>
  );
};

export default RankRow;
