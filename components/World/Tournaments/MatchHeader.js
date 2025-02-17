import usePlayerProfile from "@/api/usePlayerProfile";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MatchHeader = ({ status, round, players }) => {
  const firstPlayer = players ? players[0] : {};
  const secondPlayer = players ? players[1] : {};
  const router = useRouter();

  const { profile: firstPlayerProfile } = usePlayerProfile({
    id: players ? firstPlayer["@id"] : "",
  });
  const { profile: secondPlayerProfile } = usePlayerProfile({
    id: players ? secondPlayer["@id"] : "",
  });

  const handleBack = () => {
    router.back();
  };
  return (
    <div
      className="match-header"
      style={{
        backgroundImage: "url('/home/tournament/clay_mini.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="top-info">
        <svg
          width="14"
          height="25"
          viewBox="0 0 14 25"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleBack}
          style={{ cursor: "pointer" }}
        >
          <path
            d="M1.1402 13.3882L1.24772 13.2836L1.14021 13.3882L11.6391 24.1787C11.6393 24.1789 11.6395 24.1791 11.6397 24.1793C11.733 24.2772 11.8448 24.3556 11.9686 24.41C12.0927 24.4646 12.2263 24.494 12.3618 24.4966C12.4973 24.4992 12.632 24.4749 12.7581 24.4251C12.8841 24.3753 12.999 24.3009 13.0962 24.2064C13.1933 24.1119 13.2707 23.9991 13.324 23.8744C13.3772 23.7498 13.4052 23.6158 13.4063 23.4803C13.4074 23.3448 13.3817 23.2104 13.3305 23.0849C13.2795 22.9596 13.2041 22.8457 13.1089 22.7497C13.1087 22.7495 13.1085 22.7494 13.1083 22.7492L3.30385 12.6734L13.1083 2.59766C13.1085 2.59746 13.1087 2.59726 13.1089 2.59706C13.2041 2.50107 13.2795 2.38717 13.3305 2.26193C13.3817 2.13643 13.4074 2.00202 13.4063 1.8665C13.4052 1.73097 13.3772 1.59702 13.324 1.47238C13.2707 1.34774 13.1933 1.2349 13.0962 1.14039C12.999 1.04587 12.8841 0.971558 12.7581 0.921747C12.632 0.871937 12.4973 0.847618 12.3618 0.850199C12.2263 0.852777 12.0927 0.882206 11.9686 0.936777C11.8448 0.991239 11.733 1.06966 11.6397 1.16752C11.6395 1.16772 11.6393 1.16792 11.6391 1.16813L1.14021 11.9586L1.24772 12.0632L1.1402 11.9586C0.954035 12.15 0.849873 12.4064 0.849873 12.6734C0.849873 12.9404 0.954035 13.1968 1.1402 13.3882Z"
            stroke-width="0.3"
          />
        </svg>
        {/* <IoIosArrowDropleft
          style={{ cursor: "pointer" }}
          onClick={handleBack}
          size={28}
        /> */}
        {/* <div className="notification-follow-btn">
          <IoNotifications />
          <button>Following</button>
        </div> */}
      </div>

      <div className="player-info">
        <div className="player">
          <h2>{firstPlayer["@name"]?.slice(0, 6)}</h2>
          <Image
            src={
              firstPlayerProfile?.image
                ? "/profile/right-player.png"
                : // ? `data:image/jpeg;base64,${firstPlayerProfile?.image}`
                  "/profile/right-player.png"
            }
            width={80}
            height={100}
            loading="lazy"
          />
        </div>
        <div className="match-status">
          <h3>{status}</h3>
          <p>{round}</p>
        </div>
        <div className="player">
          <h2>{secondPlayer["@name"]?.slice(0, 6)}</h2>
          <Image
            src={
              secondPlayerProfile?.image
                ? "/profile/right-player.png"
                : // ? `data:image/jpeg;base64,${secondPlayerProfile?.image}`
                  "/profile/right-player.png"
            }
            width={80}
            height={100}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default MatchHeader;
