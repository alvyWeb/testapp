import './bettingboard.scss';

const Bettingboard = ({ standings, setStandings }) => {
  const betboard = [
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
    {
      "profileImg": "./user-Image/a1.png",
      "country": "./flags/br.png",
      "name": "פן נ. (פנתר)",
      "money": "99000000",
      "toffee": "35",
      "dLike": "35",
      "open": "50000"
    },
  ]
  return (
    <main>
      <div className="bettingboard_container">
        <div className="bettingboard_head">
          <span className="icon_cash">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4544 9.62044C14.5112 9.62044 16.9891 8.51911 16.9891 7.16056C16.9891 5.80201 14.5112 4.70068 11.4544 4.70068C8.39766 4.70068 5.91968 5.80201 5.91968 7.16056C5.91968 8.51911 8.39766 9.62044 11.4544 9.62044Z" stroke="#210C0C" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.91968 7.16064V14.5403C5.91968 15.8932 8.37956 17.0002 11.4544 17.0002C14.5293 17.0002 16.9891 15.8932 16.9891 14.5403V7.16064" stroke="#210C0C" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.9892 10.8503C16.9892 12.2032 14.5293 13.3102 11.4545 13.3102C8.37964 13.3102 5.91976 12.2032 5.91976 10.8503M11.3315 2.24073C9.8943 1.35379 8.22138 0.924841 6.53473 1.01079C3.47218 1.01079 1 2.11774 1 3.47067C1 4.19634 1.71336 4.8482 2.84491 5.31558" stroke="#210C0C" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.84491 12.6952C1.71336 12.2279 1 11.576 1 10.8503V3.4707" stroke="#210C0C" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.84491 9.00555C1.71336 8.53818 1 7.88631 1 7.16064" stroke="#210C0C" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span className="tofee_d_like">
            <span className="icon">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5605 1.08262H12.6357C12.6426 0.869414 12.6465 0.65495 12.6465 0.439456C12.6465 0.196725 12.4497 0 12.2071 0H2.79293C2.55032 0 2.35348 0.196725 2.35348 0.439456C2.35348 0.65495 2.35737 0.869414 2.36435 1.08262H0.439453C0.196724 1.08262 0 1.27934 0 1.52208C0 3.49116 0.514641 5.34889 1.44905 6.75321C2.3727 8.1415 3.60306 8.93779 4.93217 9.01527C5.2335 9.34314 5.55199 9.61048 5.88375 9.81441V11.7676H5.14652C4.25526 11.7676 3.53027 12.4927 3.53027 13.3839V14.1211H3.49903C3.2563 14.1211 3.05958 14.3179 3.05958 14.5605C3.05958 14.8033 3.2563 15 3.49903 15H11.501C11.7437 15 11.9404 14.8033 11.9404 14.5605C11.9404 14.3179 11.7437 14.1211 11.501 14.1211H11.4697V13.3839C11.4697 12.4927 10.7447 11.7676 9.85348 11.7676H9.11625V9.81441C9.44801 9.61059 9.76662 9.34314 10.0679 9.01527C11.3969 8.93779 12.6273 8.1415 13.5511 6.75321C14.4855 5.34889 15 3.49116 15 1.52208C15 1.27934 14.8033 1.08262 14.5605 1.08262ZM2.18079 6.26637C1.41003 5.10811 0.957184 3.59313 0.888176 1.96153H2.41344C2.57195 3.96724 3.04276 5.8212 3.77861 7.2928C3.8958 7.52718 4.01836 7.74862 4.14551 7.95714C3.41457 7.6811 2.73811 7.10409 2.18079 6.26637ZM10.5908 13.3839V14.1212H4.40918V13.3839C4.40918 12.9774 4.73991 12.6465 5.14652 12.6465H9.85348C10.2601 12.6465 10.5908 12.9774 10.5908 13.3839ZM8.23734 11.7676H6.76266V10.1963C7.00424 10.2599 7.2504 10.293 7.5 10.293C7.7496 10.293 7.99576 10.2599 8.23734 10.1963V11.7676ZM8.50948 9.15077C8.48969 9.15889 8.47069 9.16873 8.45249 9.1796C8.1419 9.3341 7.82272 9.4141 7.5 9.4141C7.17739 9.4141 6.85833 9.3341 6.54785 9.17983C6.52943 9.16873 6.51031 9.15889 6.49029 9.15054C6.14571 8.96835 5.81234 8.69323 5.49706 8.33171C5.48046 8.30802 5.46181 8.28616 5.44109 8.26625C5.1281 7.89465 4.83364 7.43757 4.5647 6.8997C3.7571 5.28458 3.29063 3.16088 3.23753 0.878913H11.7625C11.7093 3.16088 11.2428 5.28469 10.4353 6.8997C10.1664 7.43757 9.8719 7.89465 9.55902 8.26625C9.53819 8.28616 9.51931 8.30813 9.50283 8.33182C9.18755 8.69346 8.85406 8.96846 8.50948 9.15077ZM12.8192 6.26637C12.2619 7.10409 11.5854 7.6811 10.8545 7.95714C10.9816 7.74862 11.1042 7.52718 11.2214 7.2928C11.9572 5.8212 12.4279 3.96724 12.5866 1.96153H14.1118C14.0428 3.59313 13.59 5.10811 12.8192 6.26637Z" fill="black" />
              </svg>
            </span>
            <span className="icon">
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.47841 14C2.7185 14 2.10048 13.3822 2.10048 12.6223C2.10048 12.5711 2.10351 12.5198 2.10931 12.4681C2.10023 12.4226 2.09922 12.3765 2.10906 12.3315C2.37238 11.1245 1.82378 9.75367 1.47336 9.04427C1.44307 8.98318 1.41353 8.9236 1.38526 8.86982C1.33224 8.80848 1.26054 8.76707 1.17975 8.75193H1.07599C1.0611 8.75193 1.03762 8.75041 1.01944 8.74814C0.444332 8.71557 0 8.24853 0 7.6757V1.07597C0 0.482698 0.482706 0 1.07599 0H8.51729C8.55011 0 8.58167 0.00403931 8.61146 0.0118655C9.3085 0.0853304 9.84372 0.672041 9.84372 1.37816C9.84372 1.75786 9.68922 2.10246 9.43802 2.35189C9.71875 2.60435 9.89573 2.97016 9.89573 3.37661C9.89573 3.76969 9.73037 4.12464 9.46553 4.37609C9.73037 4.62703 9.89573 4.98249 9.89573 5.37557C9.89573 5.76864 9.73037 6.1236 9.46553 6.37454C9.73037 6.62599 9.89573 6.98094 9.89573 7.37402C9.89573 8.13391 9.2777 8.75218 8.51779 8.75218L5.33501 8.75167C6.22494 11.5189 4.64428 13.3744 4.57233 13.4567C4.57081 13.4582 4.5693 13.4597 4.56829 13.462C4.3075 13.7993 3.90305 14 3.47841 14ZM2.87326 12.3729C2.87983 12.4133 2.87983 12.4542 2.8715 12.4946C2.86241 12.537 2.85761 12.5799 2.85761 12.6223C2.85761 12.9644 3.13633 13.2426 3.47841 13.2426C3.6776 13.2426 3.86013 13.1485 3.9793 12.9844C3.99116 12.968 4.00454 12.9523 4.01868 12.9379C4.19414 12.7221 5.48902 11.0076 4.4413 8.51992C4.39207 8.40303 4.40444 8.26948 4.47488 8.16395C4.54481 8.05792 4.66321 7.9943 4.79045 7.9943H8.51729C8.6829 7.9943 8.83867 7.93018 8.95607 7.81279C9.07296 7.69539 9.13759 7.53963 9.13759 7.37402C9.13759 7.03194 8.85912 6.75322 8.51729 6.75322C8.30825 6.75322 8.1386 6.58357 8.1386 6.37454C8.1386 6.1655 8.30825 5.99585 8.51729 5.99585C8.85912 5.99585 9.13759 5.71765 9.13759 5.37557C9.13759 5.03349 8.85912 4.75477 8.51729 4.75477C8.30825 4.75477 8.1386 4.58512 8.1386 4.37609C8.1386 4.16705 8.30825 3.9974 8.51729 3.9974C8.85912 3.9974 9.13759 3.71869 9.13759 3.37661C9.13759 3.03453 8.85912 2.75633 8.51729 2.75633C8.30825 2.75633 8.1386 2.58667 8.1386 2.37764C8.1386 2.17593 8.29639 2.00476 8.4976 1.99391C8.82756 1.97674 9.08609 1.70585 9.08609 1.37816C9.08609 1.04972 8.82756 0.779587 8.4976 0.76242C8.4822 0.76141 8.46781 0.759895 8.45317 0.757371H1.07599C0.90053 0.757371 0.757384 0.900262 0.757384 1.07597V7.67595C0.757384 7.84687 0.891946 7.98597 1.06387 7.99228C1.07145 7.99279 1.08331 7.9938 1.09467 7.99481H1.20803C1.22393 7.99481 1.24009 7.99582 1.25574 7.99784C1.55895 8.03671 1.82631 8.19248 2.00833 8.43711C2.01969 8.45302 2.03004 8.46917 2.03913 8.48634C2.07523 8.5545 2.11335 8.62948 2.15223 8.70926C2.62004 9.65547 3.11613 11.048 2.87326 12.3729Z" fill="black" />
              </svg>
            </span>
            <p>פתוח</p>
          </span>
        </div>
        {/* Bettingboard_Body */}
        {
          betboard.map((item) => (
            <div className="bettingboard_body">
              <div className="profile">
                <img src={item.profileImg} alt="" />
                <img src={item.country} alt="" className='country' />
                <p>{item.name}</p>
              </div>
              <div className="board_det">
                <div className="money">
                  <p>{item.money}</p>
                </div>
                <div className="toffee">
                  <p>{item.toffee}</p>
                </div>
                <div className="dlike">
                  <p>{item.dLike}</p>
                </div>
                <div className="open">
                  <p>{item.open}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Bettingboard;

