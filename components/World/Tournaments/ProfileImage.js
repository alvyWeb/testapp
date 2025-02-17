import Image from "next/image";

const ProfileImage = ({ profileImg, countryImg }) => {
  const profileUrl = profileImg
    ? `data:image/jpeg;base64,${profileImg}`
    : "/icon/player.png";
  return (
    <>
      <Image
        src={profileImg}
        alt={name}
        width={50}
        height={50}
        loading="lazy"
      />
      <img className="flag" src={countryImg} />
    </>
  );
};

export default ProfileImage;
