import React from "react";
import "./atpenn.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

const AtPennMessage = () => {
    const matchInfo = {
        location: "פארק הירקון, תל אביב | מגרש #1",
        date: "02/24/2023",
        time: "02:07",
        messages: 26,
        players: [
        { 
            name: "מנדלר ת.", 
            role: "פרו", 
            img: "/user-Image/a3.png", 
            flag: "/flags/br.png", 
        },
        { 
            name: "עוז י.", 
            role: "הוויז", 
            img: "/user-Image/a1.png", 
            flag: "/flags/br.png",  
        },
        { 
            name: "פן נ.", 
            role: "פנתר", 
            img: "/user-Image/a4.png", 
            flag: "/flags/br.png", 
            captain: true 
        },
        { 
            name: "גורן ש.", 
            role: "מוצקין", 
            img: "/user-Image/a2.png", 
            flag: "/flags/br.png", 
        },
        ],
        score: "3 - 1",
        rounds: ["0 - 1", "2 - 1", "3 - 4"],
    };
    return (
        <div className="matchleadinfo bg-white p-4 rounded-xl shadow-md w-full max-w-lg mx-auto">
        {/* Match Header */}
            <div className="matchleadInfoSingle">
                <div className="flex headerflex items-center justify-between text-gray-700">
                    <h2 className="text-lg font-semibold">{matchInfo.location}</h2>
                    <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M14.1172 12.0177C13.0444 12.0177 12.0912 12.539 11.4973 13.3415L6.38357 10.7282C6.46936 10.4367 6.51562 10.1285 6.51562 9.80963C6.51562 9.37776 6.43096 8.96535 6.27766 8.58785L11.6371 5.36775C12.2351 6.06963 13.125 6.51562 14.1172 6.51562C15.9135 6.51562 17.375 5.05417 17.375 3.25781C17.375 1.46145 15.9135 0 14.1172 0C12.3208 0 10.8594 1.46145 10.8594 3.25781C10.8594 3.673 10.9376 4.0702 11.0798 4.43569L5.70696 7.66382C5.10941 6.98265 4.23302 6.55182 3.25781 6.55182C1.46145 6.55182 0 8.01328 0 9.80963C0 11.606 1.46145 13.0674 3.25781 13.0674C4.34817 13.0674 5.31501 12.529 5.90667 11.704L11.0055 14.3097C10.9106 14.615 10.8594 14.9394 10.8594 15.2755C10.8594 17.0719 12.3208 18.5333 14.1172 18.5333C15.9135 18.5333 17.375 17.0719 17.375 15.2755C17.375 13.4792 15.9135 12.0177 14.1172 12.0177ZM14.1172 1.08594C15.3148 1.08594 16.2891 2.06024 16.2891 3.25781C16.2891 4.45538 15.3148 5.42969 14.1172 5.42969C12.9196 5.42969 11.9453 4.45538 11.9453 3.25781C11.9453 2.06024 12.9196 1.08594 14.1172 1.08594ZM3.25781 11.9815C2.06024 11.9815 1.08594 11.0072 1.08594 9.80963C1.08594 8.61206 2.06024 7.63776 3.25781 7.63776C4.45538 7.63776 5.42969 8.61206 5.42969 9.80963C5.42969 11.0072 4.45538 11.9815 3.25781 11.9815ZM14.1172 17.4474C12.9196 17.4474 11.9453 16.4731 11.9453 15.2755C11.9453 14.0779 12.9196 13.1036 14.1172 13.1036C15.3148 13.1036 16.2891 14.0779 16.2891 15.2755C16.2891 16.4731 15.3148 17.4474 14.1172 17.4474Z"
                            fill="#145e94"
                        />
                    </svg>
                </div>

                {/* Date & Time */}
                <div className="flex infoFlex items-center space-x-2 text-gray-500 text-sm mt-1">
                    <div className="dateInfo flex">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M12.1876 2.4H12.1875H10.4125V1.5625C10.4125 1.4531 10.369 1.34818 10.2917 1.27082C10.2143 1.19346 10.1094 1.15 10 1.15C9.8906 1.15 9.78568 1.19346 9.70832 1.27082C9.63096 1.34818 9.5875 1.4531 9.5875 1.5625V2.4H5.4125V1.5625C5.4125 1.4531 5.36904 1.34818 5.29168 1.27082C5.21432 1.19346 5.1094 1.15 5 1.15C4.8906 1.15 4.78568 1.19346 4.70832 1.27082C4.63096 1.34818 4.5875 1.4531 4.5875 1.5625V2.4H2.8125L2.81238 2.4C2.37165 2.40053 1.94913 2.57584 1.63748 2.88748C1.32584 3.19913 1.15053 3.62165 1.15 4.06238V4.0625L1.15 12.1875L1.15 12.1876C1.15053 12.6283 1.32584 13.0509 1.63748 13.3625C1.94913 13.6742 2.37165 13.8495 2.81238 13.85H2.8125H12.1875H12.1876C12.6284 13.8496 13.051 13.6744 13.3627 13.3627C13.6744 13.051 13.8496 12.6284 13.85 12.1876V12.1875V4.0625V4.06242C13.8496 3.62163 13.6744 3.19899 13.3627 2.8873C13.051 2.57561 12.6284 2.40035 12.1876 2.4ZM13.025 12.1875C13.025 12.4096 12.9368 12.6226 12.7797 12.7797C12.6226 12.9368 12.4096 13.025 12.1875 13.025H2.8125C2.59038 13.025 2.37736 12.9368 2.2203 12.7797C2.06324 12.6226 1.975 12.4096 1.975 12.1875V6.975H13.025V12.1875ZM13.025 6.15H1.975V4.0625C1.975 3.60014 2.34907 3.225 2.8125 3.225H4.5875V4.0625C4.5875 4.1719 4.63096 4.27682 4.70832 4.35418C4.78568 4.43154 4.8906 4.475 5 4.475C5.1094 4.475 5.21432 4.43154 5.29168 4.35418C5.36904 4.27682 5.4125 4.1719 5.4125 4.0625V3.225H9.5875V4.0625C9.5875 4.1719 9.63096 4.27682 9.70832 4.35418C9.78568 4.43154 9.8906 4.475 10 4.475C10.1094 4.475 10.2143 4.43154 10.2917 4.35418C10.369 4.27682 10.4125 4.1719 10.4125 4.0625V3.225H12.1875C12.4096 3.225 12.6226 3.31324 12.7797 3.4703C12.9368 3.62736 13.025 3.84038 13.025 4.0625V6.15Z"
                            fill="#145E94"
                            stroke="#145E94"
                            stroke-width="0.2"
                            />
                        </svg>
                        <span>{matchInfo.date}</span>
                    </div>
                    <div className="timeInfo flex">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1300_2978)">
                                <path d="M6 11.25C3.105 11.25 0.75 8.895 0.75 6C0.75 3.105 3.105 0.75 6 0.75C8.895 0.75 11.25 3.105 11.25 6C11.25 8.895 8.895 11.25 6 11.25ZM6 1.5C3.5175 1.5 1.5 3.5175 1.5 6C1.5 8.4825 3.5175 10.5 6 10.5C8.4825 10.5 10.5 8.4825 10.5 6C10.5 3.5175 8.4825 1.5 6 1.5Z" />
                                <path d="M7.50002 7.875C7.43252 7.875 7.36502 7.86 7.30502 7.8225L5.43002 6.6975C5.37449 6.66413 5.32865 6.6168 5.29708 6.56022C5.2655 6.50364 5.24928 6.43979 5.25002 6.375V3.375C5.25002 3.165 5.41502 3 5.62502 3C5.83502 3 6.00002 3.165 6.00002 3.375V6.165L7.69502 7.1775C7.76484 7.22029 7.8188 7.28468 7.84873 7.3609C7.87866 7.43711 7.88292 7.52101 7.86088 7.59987C7.83883 7.67874 7.79167 7.74826 7.72655 7.79791C7.66144 7.84756 7.58191 7.87462 7.50002 7.875Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1300_2978">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>{matchInfo.time}</span>
                    </div>
                </div>

                {/* Players & Score */}
                <div className="flex scoreboardInfo items-center justify-between mt-4">
                    {/* Left Players */}
                    <div className="flex space-x-2">
                    {matchInfo.players.slice(0, 2).map((player, index) => (
                        <div key={index} className="text-center">
                        <div className="relative">
                            <img className="w-12 h-12 userImg rounded-full border-2 border-gray-200" src={player.img} alt={player.name} />
                            <img className="absolute flagImg bottom-0 right-0 w-4 h-4" src={player.flag} alt="flag" />
                        </div>
                        <p className="playerName text-sm font-medium">{player.name}</p>
                        <p className="playerRole text-xs text-gray-500">({player.role})</p>
                        </div>
                    ))}
                    </div>

                    {/* Score */}
                    <div className="text-center numberInfo">
                    <p className="text-xl font-bold">{matchInfo.score}</p>
                    {matchInfo.rounds.map((round, index) => (
                        <p key={index} className="text-sm bg-gray-100 rounded-full px-2 mt-1">{round}</p>
                    ))}
                    </div>

                    {/* Right Players */}
                    <div className="flex space-x-2">
                    {matchInfo.players.slice(2, 4).map((player, index) => (
                        <div key={index} className="text-center">
                        <div className="relative">
                            <img className="w-12 h-12 userImg rounded-full border-2 border-gray-200" src={player.img} alt={player.name} />
                            <img className="absolute flagImg bottom-0 right-0 w-4 h-4" src={player.flag} alt="flag" />
                        </div>
                        {/* <p>{player.captain && <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-1 rounded-full">C</span>}</p> */}
                        <p className="playerName text-sm font-medium">{player.name}</p>
                        <p className="playerRole text-xs text-gray-500">({player.role})</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtPennMessage;