"use client";
import { useState } from "react";
import "./question.scss";

import styles from "@/styles/pages/Home.module.scss";
import { useRouter } from "next/navigation";
export default function Home() {
  const [currentstep, setcurrentstep] = useState(0);
  const router = useRouter();
  const questionsteps = [
    {
      id: "durations",
      title: "How long have you been playing tennis?",
      options: [
        {
          id: "no-tournaments",
          label: "less than one year",
        },
        {
          id: "time-to-time",
          label: "1-3 years",
        },
        {
          id: "regular",
          label: "3-5 years",
        },
        {
          id: "multiple",
          label: "5-10 years",
        },
        {
          id: "extensive",
          label: "More than 10 years",
        },
      ],
    },
    {
      id: "q2",
      title: "Have you received professional training or training?",
      options: [
        {
          id: "no-training",
          label: "No training or training",
        },
        {
          id: "time-to-time",
          label: "Professional training from time to time",
        },
        {
          id: "regular",
          label: "Regular professional training",
        },
        {
          id: "multiple",
          label: "Multiple professional trainings",
        },
        {
          id: "extensive",
          label: "Extensive professional training",
        },
      ],
    },
    {
      id: "q3",
      title: "Have you participated in competitive tournaments?",
      options: [
        {
          id: "no-tournaments",
          label: "No tournaments",
        },
        {
          id: "several-professional",
          label: "Several professional tournaments",
        },
        {
          id: "regular-participation",
          label: "Regular participation in local tournaments",
        },
        {
          id: "regional-national",
          label: "Regional/national tournaments",
        },
        {
          id: "international",
          label: "International tournaments",
        },
      ],
    },
    {
      id: "q4",
      title:
        "How confident are you in your control over the direction of the blow?",
      options: [
        {
          id: "no-tournaments",
          label: "Very low control",
        },
        {
          id: "several-professional",
          label: "Unstable control",
        },
        {
          id: "regular-participation",
          label: "Medium control",
        },
        {
          id: "regional-national",
          label: "good control",
        },
        {
          id: "international",
          label: "Excellent control",
        },
      ],
    },
    {
      id: "q5",
      title:
        "Do you successfully execute different types of tennis strokes (forehand, backhand, dropshot, volley)?",
      options: [
        {
          id: "no-tournaments",
          label: "Unstable performance",
        },
        {
          id: "several-professional",
          label: "Basic performance",
        },
        {
          id: "regular-participation",
          label: "Variety performance",
        },
        {
          id: "regional-national",
          label: "Strong performance of all strokes",
        },
        {
          id: "international",
          label: "Exceptional performance with power and precision",
        },
      ],
    },
    {
      id: "q6",
      title:
        "Do you have a good understanding of tennis strategies and tactics?",
      options: [
        {
          id: "no-tournaments",
          label: "Limited understanding",
        },
        {
          id: "several-professional",
          label: "Basic understanding",
        },
        {
          id: "regular-participation",
          label: "Sufficient understanding",
        },
        {
          id: "regional-national",
          label: "Skillful understanding",
        },
        {
          id: "international",
          label: "Exceptional performance with power and precision",
        },
      ],
    },
    {
      id: "q7",
      title:
        "Do you have rankings or have you won any awards in tennis in the last two years?",
      options: [
        {
          id: "no-tournaments",
          label: "No ratings/awards",
        },
        {
          id: "several-professional",
          label: "Local/regional rankings/awards",
        },
        {
          id: "regular-participation",
          label: "National ratings/awards",
        },
        {
          id: "regional-national",
          label: "International ratings/awards",
        },
        {
          id: "international",
          label: "Ratings/awards in professional competitions",
        },
      ],
    },
    {
      id: "q8",
      title:
        "How comfortable are you with adjusting your game according to different opponents?",
      options: [
        {
          id: "no-tournaments",
          label: "Not very comfortable",
        },
        {
          id: "several-professional",
          label: "A little uncomfortable",
        },
        {
          id: "regular-participation",
          label: "somewhat comfortable",
        },
        {
          id: "regional-national",
          label: "Comfortable in most cases",
        },
        {
          id: "international",
          label: "Very comfortable",
        },
      ],
    },
    {
      id: "q9",
      title:
        "How consistent are you in the placement of the strokes and their accuracy?",
      options: [
        {
          id: "no-tournaments",
          label: "Very inconsistent",
        },
        {
          id: "several-professional",
          label: "Inconsistent",
        },
        {
          id: "regular-participation",
          label: "somewhat consistent",
        },
        {
          id: "regional-national",
          label: "Consistent in most cases",
        },
        {
          id: "international",
          label: "Very consistent",
        },
      ],
    },
    {
      id: "q10",
      title:
        "Do you manage to pick up your partner and create good chemistry with him?",
      options: [
        {
          id: "no-tournaments",
          label: "Can not do it",
        },
        {
          id: "several-professional",
          label: "Rarely succeeds",
        },
        {
          id: "regular-participation",
          label: "Succeeds occasionally",
        },
        {
          id: "regional-national",
          label: "Good chemistry, but a lot depends on him",
        },
        {
          id: "international",
          label: "Always manages to get more out of it",
        },
      ],
    },
  ];

  const handleNext = () => {
    if (currentstep + 1 < questionsteps.length) {
      setcurrentstep(currentstep + 1);
    } else {
      router.push("/");
    }
  };

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionChange = (questionId, selectedOptionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOptionId,
    });
  };

  return (
    <main className={styles.homepage}>
      <div className="questionnaire_container">
        {/* QUESTIONNAIRE-BOX */}
        <div className="questionnaire">
          <img src="../../Stock/images/questionnaire.jpg" alt="" />
          <div className="questionnaire_data">
            <div className="questionnaire_text">
              <div className="num_head">
                <p className="questionnaire_count">
                  {currentstep + 1}/{questionsteps.length}
                </p>
                <p className="questionnaire_head">
                  {questionsteps[currentstep]?.title}
                </p>
              </div>
              {/* ITEM */}
              <div className="questionnaire_item">
                {questionsteps[currentstep]?.options.map((item, index) => (
                  <div className="item">
                    <input
                      type="radio"
                      id={item.id}
                      name={questionsteps[currentstep].id}
                      onChange={() =>
                        handleOptionChange(
                          questionsteps[currentstep].id,
                          item.id
                        )
                      }
                      checked={
                        selectedAnswers[questionsteps[currentstep].id] ===
                        item.id
                      }
                    />
                    <p className="item_text">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div onClick={handleNext} className="questionnaire_button">
              {currentstep + 1 < questionsteps.length && (
                <button>Continue</button>
              )}
              {currentstep + 1 == questionsteps.length && <button>Send</button>}
            </div>
          </div>
        </div>
        {/* BOX_END */}
      </div>
    </main>
  );
}
