"use client";

import { useState, useEffect } from "react";
import { db } from "../../../utils/firebase";
import { collection, getDocs, doc, setDoc, serverTimestamp } from "firebase/firestore";
import "./news.scss";
// import Link from "next/link";

const StatNews = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
        const fetchNews = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "news"));
            const newsData = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            }));
            setArticles(newsData);
          } catch (error) {
            console.error("Error fetching news:", error);
          }
        };
      
        fetchNews();
    }, []);
  
    return (
        <div className="static-news-container">
            {/* Slice the static articles based on offset and limit */}
            {articles.map((article, index) => (
                <div className="container_sm_heading" key={index}>
                    <div className="container_sm_heading_text">
                        <div className="container_heading_sm_text">
                            <span className="newTag">חדשות</span>
                            <p>
                                {article.title.slice(0, 60)}
                                {article.title.length > 60 && "..."}
                            </p>
                        </div>
                        <div className="container_heading_sm_sm_text">
                            <p class="container_heading_sm_info">
                                <span className="time">
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
                                    <span className="timeInfo">
                                        {article.time}
                                    </span>
                                </span>

                                <span className="comment">
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M6.525 12.05C7.61774 12.05 8.68594 11.726 9.59452 11.1189C10.5031 10.5118 11.2113 9.64889 11.6294 8.63933C12.0476 7.62976 12.157 6.51887 11.9438 5.44713C11.7307 4.37538 11.2044 3.39092 10.4318 2.61824C9.65908 1.84555 8.67462 1.31935 7.60287 1.10616C6.53113 0.892981 5.42023 1.00239 4.41067 1.42057C3.40111 1.83874 2.53822 2.5469 1.93113 3.45548C1.32404 4.36406 1 5.43226 1 6.525C1 7.43847 1.221 8.29914 1.61389 9.05852L1 12.05L3.99148 11.4361C4.75025 11.8284 5.61215 12.05 6.525 12.05Z"
                                        stroke="#145E94"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span className="commentInfo">
                                        {article.comment} תגובות
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="container_sm_heading_img">
                        <img
                            src={article.image}
                            alt={article.title}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatNews;

