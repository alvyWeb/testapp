import Image from "next/image";
import { Fragment } from "react";
import ball from "../../../public/icon/Ball.svg";
import "../styles/loader.scss";
const Loader = () => {
  return (
    <>
      <div className="animation-container">
        <Fragment>
          <Image className="ball" src={ball} alt="Loading..." />
          <span className="ground-shadow" />
        </Fragment>
      </div>

      {/* <div className="loader-container">
        <Image className="tennis-ball" src={ball} alt="Loading..." />
      </div> */}
    </>
  );
};

export default Loader;
