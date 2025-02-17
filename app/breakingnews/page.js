import "./breakingnews.scss";

const Breakingnews = ({ standings, setStandings }) => {
    return (
        <main>
            <div className="breaking_container">
                <div className="news_profile">
                    <img src="./user-Image/breaking-News.png" />
                    <span>
                        <svg
                            width="25"
                            height="27"
                            viewBox="0 0 25 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.2109 17.2052C18.6751 17.2052 17.3105 17.9516 16.4601 19.1004L9.13907 15.3591C9.26189 14.9418 9.32812 14.5005 9.32812 14.044C9.32812 13.4257 9.20691 12.8353 8.98744 12.2948L16.6603 7.68477C17.5165 8.68961 18.7905 9.32812 20.2109 9.32812C22.7827 9.32812 24.875 7.23583 24.875 4.66406C24.875 2.0923 22.7827 0 20.2109 0C17.6392 0 15.5469 2.0923 15.5469 4.66406C15.5469 5.25847 15.6589 5.82712 15.8625 6.35038L8.1704 10.9719C7.31491 9.99674 6.06022 9.37995 4.66406 9.37995C2.0923 9.37995 0 11.4722 0 14.044C0 16.6158 2.0923 18.7081 4.66406 18.7081C6.22507 18.7081 7.60926 17.9372 8.45631 16.7561L15.7561 20.4866C15.6202 20.9237 15.5469 21.388 15.5469 21.8693C15.5469 24.441 17.6392 26.5333 20.2109 26.5333C22.7827 26.5333 24.875 24.441 24.875 21.8693C24.875 19.2975 22.7827 17.2052 20.2109 17.2052ZM20.2109 1.55469C21.9254 1.55469 23.3203 2.94955 23.3203 4.66406C23.3203 6.37857 21.9254 7.77344 20.2109 7.77344C18.4964 7.77344 17.1016 6.37857 17.1016 4.66406C17.1016 2.94955 18.4964 1.55469 20.2109 1.55469ZM4.66406 17.1534C2.94955 17.1534 1.55469 15.7585 1.55469 14.044C1.55469 12.3295 2.94955 10.9346 4.66406 10.9346C6.37857 10.9346 7.77344 12.3295 7.77344 14.044C7.77344 15.7585 6.37857 17.1534 4.66406 17.1534ZM20.2109 24.9786C18.4964 24.9786 17.1016 23.5838 17.1016 21.8693C17.1016 20.1548 18.4964 18.7599 20.2109 18.7599C21.9254 18.7599 23.3203 20.1548 23.3203 21.8693C23.3203 23.5838 21.9254 24.9786 20.2109 24.9786Z"
                                fill="white"
                            />
                        </svg>
                        <svg
                            width="13"
                            height="24"
                            viewBox="0 0 13 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.1618 11.6734L0.254463 1.4919C0.172894 1.40984 0.108408 1.31243 0.0647346 1.2053C0.0210614 1.09816 -0.000930926 0.983424 3.01952e-05 0.867731C0.000991316 0.752038 0.0248862 0.637685 0.0703333 0.531288C0.11578 0.424892 0.181877 0.328564 0.264798 0.247881C0.347719 0.167197 0.445817 0.103759 0.553416 0.0612376C0.661016 0.0187164 0.77598 -0.00204378 0.891656 0.000158552C1.00733 0.00236088 1.12142 0.027482 1.22732 0.0740681C1.33323 0.120654 1.42884 0.18778 1.50863 0.271562L12.0086 11.0632C12.1676 11.2266 12.2565 11.4455 12.2565 11.6734C12.2565 11.9013 12.1676 12.1202 12.0086 12.2836L1.50863 23.0752C1.42884 23.159 1.33323 23.2261 1.22732 23.2727C1.12142 23.3193 1.00733 23.3444 0.891656 23.3466C0.77598 23.3488 0.661016 23.3281 0.553416 23.2856C0.445817 23.243 0.347719 23.1796 0.264798 23.0989C0.181877 23.0182 0.11578 22.9219 0.0703333 22.8155C0.0248862 22.7091 0.000991316 22.5948 3.01952e-05 22.4791C-0.000930926 22.3634 0.0210614 22.2486 0.0647346 22.1415C0.108408 22.0344 0.172894 21.9369 0.254463 21.8549L10.1618 11.6734Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                </div>
                <div className="main_news_body">
                    <div className="news_body">
                        <p>
                            Lorem Ipsum is a nickname for a completely meaningless text called
                        </p>
                        <div className="body_details">
                            <p>
                                Lorem Ipsum is a term for a completely meaningless text that is
                                sometimes called a completely meaningless text
                            </p>
                            <div className="details">
                                <img src="./user-Image/Tafsir.png" />
                                <div className="details_title">
                                    <p>Yoram Abrahami</p>
                                    <div className="content_row">
                                        <span>
                                            <div className="calender_icon">
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
                                            </div>

                                            <p>24/02/2023</p>
                                        </span>

                                        <span>
                                            <div className="time_icon">
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clip-path="url(#clip0_267_261)">
                                                        <path
                                                            d="M7 13.125C3.6225 13.125 0.875 10.3775 0.875 7C0.875 3.6225 3.6225 0.875 7 0.875C10.3775 0.875 13.125 3.6225 13.125 7C13.125 10.3775 10.3775 13.125 7 13.125ZM7 1.75C4.10375 1.75 1.75 4.10375 1.75 7C1.75 9.89625 4.10375 12.25 7 12.25C9.89625 12.25 12.25 9.89625 12.25 7C12.25 4.10375 9.89625 1.75 7 1.75Z"
                                                            fill="#145E94"
                                                        />
                                                        <path
                                                            d="M8.75003 9.1875C8.67128 9.1875 8.59253 9.17 8.52253 9.12625L6.33503 7.81375C6.27024 7.77481 6.21676 7.7196 6.17992 7.65359C6.14308 7.58759 6.12416 7.51309 6.12503 7.4375V3.9375C6.12503 3.6925 6.31753 3.5 6.56253 3.5C6.80753 3.5 7.00003 3.6925 7.00003 3.9375V7.1925L8.97753 8.37375C9.05898 8.42367 9.12194 8.49879 9.15685 8.58771C9.19177 8.67663 9.19674 8.77452 9.17102 8.86652C9.1453 8.95853 9.09028 9.03964 9.01431 9.09756C8.93834 9.15548 8.84556 9.18706 8.75003 9.1875Z"
                                                            fill="#145E94"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_267_261">
                                                            <rect width="14" height="14" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>

                                            <p>24/02/2023</p>
                                        </span>

                                        <span>
                                            <div className="show_icon">
                                                <svg
                                                    width="17"
                                                    height="11"
                                                    viewBox="0 0 17 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.5571 5.31352C16.5332 5.25867 15.9482 3.96141 14.6418 2.655C13.4296 1.44422 11.3469 0 8.29677 0C5.24662 0 3.16396 1.44422 1.95177 2.655C0.645366 3.96141 0.0603661 5.25656 0.0364599 5.31352C0.0124217 5.36752 0 5.42597 0 5.48508C0 5.54419 0.0124217 5.60264 0.0364599 5.65664C0.0603661 5.71078 0.645366 7.00805 1.95177 8.31445C3.16396 9.52523 5.24662 10.9688 8.29677 10.9688C11.3469 10.9688 13.4296 9.52523 14.6418 8.31445C15.9482 7.00805 16.5332 5.71289 16.5571 5.65664C16.5811 5.60264 16.5935 5.54419 16.5935 5.48508C16.5935 5.42597 16.5811 5.36752 16.5571 5.31352ZM8.29677 10.125C6.09037 10.125 4.1638 9.32203 2.56982 7.7393C1.90162 7.07523 1.33619 6.31523 0.892163 5.48438C1.33606 4.65365 1.90151 3.89387 2.56982 3.23016C4.1638 1.64672 6.09037 0.84375 8.29677 0.84375C10.5032 0.84375 12.4297 1.64672 14.0237 3.23016C14.692 3.89387 15.2575 4.65365 15.7014 5.48438C15.2535 6.34289 13.0077 10.125 8.29677 10.125ZM8.29677 2.25C7.65707 2.25 7.03174 2.43969 6.49985 2.79509C5.96796 3.15049 5.5534 3.65563 5.3086 4.24663C5.0638 4.83764 4.99975 5.48796 5.12455 6.11537C5.24934 6.74278 5.55739 7.31909 6.00972 7.77142C6.46206 8.22376 7.03837 8.5318 7.66578 8.6566C8.29318 8.7814 8.94351 8.71735 9.53451 8.47255C10.1255 8.22775 10.6307 7.81319 10.9861 7.2813C11.3415 6.74941 11.5311 6.12407 11.5311 5.48438C11.53 4.62691 11.1889 3.80488 10.5826 3.19856C9.97627 2.59224 9.15424 2.25112 8.29677 2.25ZM8.29677 7.875C7.82395 7.875 7.36175 7.73479 6.96861 7.47211C6.57548 7.20942 6.26906 6.83606 6.08812 6.39923C5.90718 5.9624 5.85984 5.48172 5.95208 5.01799C6.04433 4.55425 6.27201 4.12828 6.60635 3.79395C6.94068 3.45961 7.36665 3.23193 7.83038 3.13968C8.29412 3.04744 8.77479 3.09478 9.21162 3.27573C9.64845 3.45667 10.0218 3.76308 10.2845 4.15621C10.5472 4.54935 10.6874 5.01155 10.6874 5.48438C10.6874 6.11841 10.4355 6.72647 9.9872 7.1748C9.53887 7.62313 8.93081 7.875 8.29677 7.875Z"
                                                        fill="#145E94"
                                                    />
                                                </svg>
                                            </div>
                                            <p>24/02/2023</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news">
                            <p>
                                It was a Wimbledon final that will not be forgotten for many
                                years to come. After almost five grueling hours, Carlos Alcaraz
                                defeated Novak Djokovic in five sets - winning for the first
                                time in his career at Wimbledon and preventing the Serbian from
                                winning the tournament for the eighth time. If you will, the new
                                king of tennis deposed the undisputed ruler, who had not lost in
                                ten years on the main court in London. To this day. I made a
                                dream come true," said the excited Alcaras. "I'm very proud of
                                myself, I made history."
                            </p>
                        </div>
                    </div>
                    <div className="send_yourfeedback">
                        <div className="player_comment">
                            <div className="border_b">
                                <div className="enter_comment">
                                    <div className="feedback_title">
                                        <span>
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 15.5C9.48336 15.5 10.9334 15.0601 12.1668 14.236C13.4001 13.4119 14.3614 12.2406 14.9291 10.8701C15.4968 9.49968 15.6453 7.99168 15.3559 6.53683C15.0665 5.08197 14.3522 3.7456 13.3033 2.6967C12.2544 1.64781 10.918 0.933503 9.46318 0.644114C8.00832 0.354725 6.50032 0.50325 5.12987 1.07091C3.75943 1.63856 2.58809 2.59986 1.76398 3.83323C0.939867 5.0666 0.5 6.51664 0.5 8C0.5 9.24 0.8 10.4083 1.33333 11.4392L0.5 15.5L4.56083 14.6667C5.59083 15.1992 6.76083 15.5 8 15.5Z"
                                                    stroke="black"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <p>Comments</p>
                                        </span>
                                    </div>
                                    <p>see all</p>
                                </div>
                                <div className="feedback_body">
                                    <img src="./user-Image/Tafsir.png" alt="" />
                                    <input name="" id="" placeholder="Add a comment..." />
                                </div>
                            </div>
                            <div className="member_fedback">
                                <div className="member">
                                    <img src="./user-Image/Tafsir.png" alt="" />
                                    <p>Ron Levy</p>
                                    <p>5 minutes ago</p>
                                </div>
                                <p>
                                    Lorem Ipsum is a term for a completely meaningless text
                                    sometimes also called demi text or gibberish!
                                </p>
                            </div>
                        </div>
                        <div className="player_comment">
                            <div className="border_b">
                                <div className="enter_comment">
                                    <div className="feedback_title">
                                        <span>
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 15.5C9.48336 15.5 10.9334 15.0601 12.1668 14.236C13.4001 13.4119 14.3614 12.2406 14.9291 10.8701C15.4968 9.49968 15.6453 7.99168 15.3559 6.53683C15.0665 5.08197 14.3522 3.7456 13.3033 2.6967C12.2544 1.64781 10.918 0.933503 9.46318 0.644114C8.00832 0.354725 6.50032 0.50325 5.12987 1.07091C3.75943 1.63856 2.58809 2.59986 1.76398 3.83323C0.939867 5.0666 0.5 6.51664 0.5 8C0.5 9.24 0.8 10.4083 1.33333 11.4392L0.5 15.5L4.56083 14.6667C5.59083 15.1992 6.76083 15.5 8 15.5Z"
                                                    stroke="black"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <p>Comments</p>
                                        </span>
                                    </div>
                                    <p>see all</p>
                                </div>
                                <div className="feedback_body">
                                    <img src="./user-Image/Tafsir.png" alt="" />
                                    <input name="" id="" placeholder="Add a comment..." />
                                </div>
                            </div>
                            <div className="member_fedback">
                                <div className="member">
                                    <img src="./user-Image/Tafsir.png" alt="" />
                                    <p>Ron Levy</p>
                                    <p>5 minutes ago</p>
                                </div>
                                <p>
                                    Lorem Ipsum is a term for a completely meaningless text
                                    sometimes also called demi text or gibberish!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Breakingnews;
