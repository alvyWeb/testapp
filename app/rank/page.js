import ProtectedRoute from "@/components/common/ProtectedRoute";
import Link from "next/link";
import "./rank.scss";
export default function Home() {
  const rankList = [
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bi.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Noam-Peen.png",
      playerCountry: "./flags/au.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Tafsir.png",
      playerCountry: "./flags/aq.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Maya.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
    {
      lavel: "1",
      percent: "23%",
      equal: "50",
      dLike: "50",
      toffee: "50",
      ball: "50",
      score: "1",
      playerName: "Penn N. (panther)",
      playerImg: "./user-Image/Sabbir Sagar.png",
      playerCountry: "./flags/bw.png",
    },
  ];
  return (
    // <ProtectedRoute>
      <main>
        <div className="rank_container">
          <table className="tableContainer">
            <thead>
              <tr>
                <th className="headingTitle"></th>
                <th className="headingTitle"></th>
                <th className="headingTitle">
                  <span className="icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.51647 0.080345C5.53017 0.080345 3.66276 0.853838 2.25822 2.25838C0.853682 3.66292 0.080189 5.53033 0.0802096 7.5166C0.0802301 9.50287 0.853682 11.3703 2.25822 12.7748C3.66276 14.1794 5.53017 14.9529 7.51647 14.9529C9.5027 14.9529 11.3701 14.1794 12.7747 12.7748C14.1792 11.3703 14.9527 9.50287 14.9527 7.5166C14.9527 5.53035 14.1792 3.66292 12.7747 2.25838C11.3701 0.853838 9.50272 0.080345 7.51647 0.080345ZM2.94407 12.089C1.72275 10.8677 1.05013 9.24382 1.05013 7.51662C1.05013 5.78942 1.72275 4.16559 2.94407 2.94427C3.15493 2.73341 3.37804 2.53934 3.61135 2.36182C4.54573 3.81837 5.05628 5.62937 5.05628 7.51662C5.05625 9.40385 4.54573 11.2149 3.61135 12.6714C3.37804 12.4939 3.15493 12.2998 2.94407 12.089ZM7.51645 13.9829C6.41859 13.9829 5.36267 13.7107 4.42514 13.1991C5.46052 11.5863 6.02625 9.58988 6.02621 7.51658C6.02623 5.44326 5.46052 3.4469 4.42514 1.83411C5.36267 1.32242 6.41859 1.05026 7.51645 1.05026C8.61431 1.05026 9.67024 1.32239 10.6077 1.83411C9.57237 3.4469 9.00664 5.44328 9.00668 7.51658C9.00666 9.5899 9.57237 11.5863 10.6077 13.1991C9.67022 13.7108 8.61433 13.9829 7.51645 13.9829ZM13.9827 7.5166C13.9828 9.24378 13.3101 10.8676 12.0888 12.089C11.8779 12.2998 11.6548 12.4939 11.4215 12.6714C10.4871 11.2149 9.9766 9.40385 9.9766 7.5166C9.97662 5.62937 10.4871 3.81835 11.4215 2.3618C11.6548 2.53932 11.8779 2.73339 12.0888 2.94425C13.3101 4.16555 13.9828 5.7894 13.9827 7.5166Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </th>
                <th className="headingTitle">
                  <span className="icon">
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.47841 14C2.7185 14 2.10048 13.3822 2.10048 12.6223C2.10048 12.5711 2.10351 12.5198 2.10931 12.4681C2.10023 12.4227 2.09922 12.3765 2.10906 12.3315C2.37238 11.1245 1.82378 9.75367 1.47336 9.04427C1.44307 8.98318 1.41353 8.9236 1.38526 8.86982C1.33224 8.80848 1.26054 8.76707 1.17975 8.75193H1.07599C1.0611 8.75193 1.03762 8.75041 1.01944 8.74814C0.444332 8.71557 0 8.24853 0 7.6757V1.07597C0 0.482698 0.482706 0 1.07599 0H8.51729C8.55011 0 8.58167 0.00403931 8.61146 0.0118655C9.3085 0.0853305 9.84372 0.67204 9.84372 1.37816C9.84372 1.75786 9.68921 2.10246 9.43802 2.35189C9.71875 2.60435 9.89573 2.97016 9.89573 3.37661C9.89573 3.76969 9.73037 4.12464 9.46553 4.37609C9.73037 4.62703 9.89573 4.98249 9.89573 5.37557C9.89573 5.76864 9.73037 6.1236 9.46553 6.37454C9.73037 6.62599 9.89573 6.98094 9.89573 7.37402C9.89573 8.13391 9.2777 8.75218 8.51779 8.75218L5.33501 8.75167C6.22494 11.5189 4.64428 13.3744 4.57233 13.4567C4.57081 13.4582 4.5693 13.4597 4.56829 13.462C4.3075 13.7993 3.90305 14 3.47841 14ZM2.87326 12.3729C2.87983 12.4133 2.87983 12.4542 2.8715 12.4946C2.86241 12.537 2.85761 12.5799 2.85761 12.6223C2.85761 12.9644 3.13633 13.2426 3.47841 13.2426C3.6776 13.2426 3.86013 13.1485 3.9793 12.9844C3.99116 12.968 4.00454 12.9523 4.01868 12.9379C4.19414 12.7221 5.48901 11.0076 4.4413 8.51992C4.39207 8.40303 4.40444 8.26948 4.47488 8.16395C4.54481 8.05792 4.66321 7.9943 4.79045 7.9943H8.51729C8.6829 7.9943 8.83867 7.93018 8.95607 7.81279C9.07296 7.69539 9.13759 7.53963 9.13759 7.37402C9.13759 7.03194 8.85912 6.75322 8.51729 6.75322C8.30825 6.75322 8.1386 6.58357 8.1386 6.37454C8.1386 6.1655 8.30825 5.99585 8.51729 5.99585C8.85912 5.99585 9.13759 5.71765 9.13759 5.37557C9.13759 5.03349 8.85912 4.75477 8.51729 4.75477C8.30825 4.75477 8.1386 4.58512 8.1386 4.37609C8.1386 4.16705 8.30825 3.9974 8.51729 3.9974C8.85912 3.9974 9.13759 3.71869 9.13759 3.37661C9.13759 3.03453 8.85912 2.75633 8.51729 2.75633C8.30825 2.75633 8.1386 2.58667 8.1386 2.37764C8.1386 2.17593 8.29639 2.00476 8.4976 1.99391C8.82756 1.97674 9.08609 1.70585 9.08609 1.37816C9.08609 1.04972 8.82756 0.779587 8.4976 0.76242C8.4822 0.76141 8.46781 0.759895 8.45316 0.757371H1.07599C0.90053 0.757371 0.757384 0.900262 0.757384 1.07597V7.67595C0.757384 7.84687 0.891946 7.98597 1.06387 7.99228C1.07145 7.99279 1.08331 7.9938 1.09467 7.99481H1.20803C1.22393 7.99481 1.24009 7.99582 1.25574 7.99784C1.55895 8.03672 1.82631 8.19248 2.00833 8.43711C2.01969 8.45302 2.03004 8.46917 2.03913 8.48634C2.07523 8.5545 2.11335 8.62948 2.15223 8.70926C2.62004 9.65547 3.11613 11.048 2.87326 12.3729Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </th>
                <th className="headingTitle">
                  <span className="icon">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.53533 3.69533C1.42644 3.69533 1.33933 3.66267 1.274 3.59733C1.20867 3.532 1.176 3.44489 1.176 3.336V2.78067C1.176 2.67178 1.20867 2.58467 1.274 2.51933C1.33933 2.454 1.42644 2.42133 1.53533 2.42133H7.75833C7.86722 2.42133 7.95433 2.454 8.01967 2.51933C8.09589 2.58467 8.134 2.67178 8.134 2.78067V3.336C8.134 3.44489 8.09589 3.532 8.01967 3.59733C7.95433 3.66267 7.86722 3.69533 7.75833 3.69533H1.53533ZM1.53533 7.77867C1.42644 7.77867 1.33933 7.746 1.274 7.68067C1.20867 7.61533 1.176 7.52822 1.176 7.41933V6.864C1.176 6.75511 1.20867 6.668 1.274 6.60267C1.33933 6.53733 1.42644 6.50467 1.53533 6.50467H7.75833C7.86722 6.50467 7.95433 6.53733 8.01967 6.60267C8.09589 6.668 8.134 6.75511 8.134 6.864V7.41933C8.134 7.52822 8.09589 7.61533 8.01967 7.68067C7.95433 7.746 7.86722 7.77867 7.75833 7.77867H1.53533Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </th>
                <th className="headingTitle">
                  <span className="icon">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.702 6.114C2.09533 6.114 1.61467 5.95533 1.26 5.638C0.914667 5.31133 0.728 4.86333 0.7 4.294C0.690667 4.13533 0.686 3.93 0.686 3.678C0.686 3.40733 0.690667 3.188 0.7 3.02C0.728 2.44133 0.91 1.984 1.246 1.648C1.582 1.30267 2.06733 1.13 2.702 1.13C3.33667 1.13 3.822 1.30267 4.158 1.648C4.50333 1.984 4.69 2.44133 4.718 3.02C4.73667 3.356 4.746 3.57533 4.746 3.678C4.746 3.77133 4.73667 3.97667 4.718 4.294C4.69 4.86333 4.49867 5.31133 4.144 5.638C3.78933 5.95533 3.30867 6.114 2.702 6.114ZM1.526 11C1.442 11 1.372 10.9767 1.316 10.93C1.26 10.874 1.232 10.804 1.232 10.72C1.232 10.664 1.25067 10.6127 1.288 10.566L8.204 1.466C8.27867 1.36333 8.344 1.29333 8.4 1.256C8.46533 1.21867 8.554 1.2 8.666 1.2H9.114C9.198 1.2 9.26333 1.228 9.31 1.284C9.366 1.33067 9.394 1.396 9.394 1.48C9.394 1.536 9.37533 1.58733 9.338 1.634L2.436 10.734C2.36133 10.8273 2.29133 10.8973 2.226 10.944C2.17 10.9813 2.086 11 1.974 11H1.526ZM2.702 5.26C3.038 5.26 3.28533 5.162 3.444 4.966C3.60267 4.77 3.696 4.52733 3.724 4.238C3.74267 3.902 3.752 3.706 3.752 3.65C3.752 3.566 3.74267 3.37467 3.724 3.076C3.70533 2.78667 3.612 2.544 3.444 2.348C3.28533 2.14267 3.038 2.04 2.702 2.04C2.366 2.04 2.11867 2.14267 1.96 2.348C1.80133 2.544 1.71267 2.78667 1.694 3.076C1.68467 3.22533 1.68 3.41667 1.68 3.65C1.68 3.874 1.68467 4.07 1.694 4.238C1.722 4.518 1.81067 4.76067 1.96 4.966C2.11867 5.162 2.366 5.26 2.702 5.26ZM7.91 11.084C7.30333 11.084 6.82267 10.9113 6.468 10.566C6.12267 10.2207 5.936 9.76333 5.908 9.194C5.88933 8.914 5.88 8.72733 5.88 8.634C5.88 8.54067 5.88933 8.30733 5.908 7.934C5.936 7.35533 6.118 6.898 6.454 6.562C6.79 6.21667 7.27533 6.044 7.91 6.044C8.54467 6.044 9.03 6.21667 9.366 6.562C9.71133 6.898 9.898 7.35533 9.926 7.934C9.94467 8.27 9.954 8.48467 9.954 8.578C9.954 8.67133 9.94467 8.87667 9.926 9.194C9.898 9.76333 9.70667 10.2207 9.352 10.566C8.99733 10.9113 8.51667 11.084 7.91 11.084ZM7.91 10.174C8.246 10.174 8.49333 10.076 8.652 9.88C8.81067 9.684 8.904 9.44133 8.932 9.152C8.95067 8.816 8.96 8.61533 8.96 8.55C8.96 8.47533 8.95067 8.28867 8.932 7.99C8.91333 7.70067 8.82 7.458 8.652 7.262C8.49333 7.05667 8.246 6.954 7.91 6.954C7.574 6.954 7.32667 7.05667 7.168 7.262C7.00933 7.458 6.92067 7.70067 6.902 7.99C6.89267 8.13933 6.888 8.326 6.888 8.55C6.888 8.78333 6.89267 8.984 6.902 9.152C6.92067 9.432 7.00933 9.67467 7.168 9.88C7.32667 10.076 7.574 10.174 7.91 10.174Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </th>
                <th className="headingTitle">
                  <span className="text">
                    <p>רמה</p>
                  </span>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </main>
    // </ProtectedRoute>
  );
}
