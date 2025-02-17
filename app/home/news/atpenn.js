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
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>{matchInfo.date}</span>
                    </div>
                    <div className="timeInfo flex">
                        <FontAwesomeIcon icon={faClock} />
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