import Link from "next/link";
import "./groupregulations.scss";

const groupregulations = ({ standings, setStandings }) => {
  const bodyData = [
    {
      bodyData:
        "1. My health condition is normal, and allows a normal and healthy game for me and my friends.",
    },
    {
      bodyData:
        "2. I will not have any claim against the team and/or any of its managers for any matter and thing related to games / injuries and medical matters / records / pitches or any other matter.",
    },
    {
      bodyData:
        "3. I know that the recommendation before every game is to warm up and stretch in an orderly manner.",
    },
    {
      bodyData:
        "4. I know the rules of the team and the games, and it is clear to me that unnecessary arguments about In/Out during the game will deteriorate the quality of the game. I remember that! No game is decided by one point, and although sometimes it seems to me something certain, it may not be true. And so - whoever has the ball on his side - is the one who decides. If it is a couple, the determination will be made between both of them together.",
    },
    {
      bodyData: `5. Winning and losing rules:

            - Regarding winning the entire game, it doesn't matter how many games each team won - only sets count.
            - A game that will be played for at least an hour and a half, and the result will be a draw until that moment (1:1 or 2:2), will go to one of the following 2 options:`,
    },
    {
      bodyData:
        "A. Super tie break (tie breaker up to 10). After the tie breaker, if there is still light, you can continue playing but without entering results.",
    },
    {
      bodyData: `B. Another decisive act. If you choose this option - you must not stop until you finish the campaign. A team that stopped choosing the game will be the team that retired, the score entry will be 6:0 for this set, and the other team will be the winner. Of course, with the exception of interruptions beyond our control such as rain, lights out, rain of missiles, earthquake, terrorist intrusion, alien intrusion, etc.

            The choice of route (A or B) will be a unanimous decision of all. If there is no decision - it is decided by means of a lottery on the spot (rotation of the racket to the floor - W or M in the case of Wilson to determine a course). Whoever does not respect this decision - will be considered to have retired from the game.
            
            - A player who retires before the end of two hours of a game without the consent of all the players, his team will technically lose regardless of what the result was. If the retirement was in the middle of a set, 6:0 will be recorded against him and he will be marked with a retirement, which means the loss of the entire game. Each special case will be decided by the management of the group.
            - After two hours of play, a player who wants to quit can. If the retirement is in the middle of a set - 6:0 will be recorded against him in the current set only.`,
    },
    {
      bodyData:
        "6. I know that commenting to my partner during a game can significantly lower our ability to play well together, so I will try to respect my partner even when we lose points.",
    },
    {
      bodyData:
        "7. I am aware that any dangerous throwing of a racket, dangerous throwing of a ball and/or any use of verbal or physical violence on the courts, may result in sanctions against me such as suspension from games or from the WhatsApp groups or from the entire group for a certain period or permanently.",
    },
    {
      bodyData:
        "8. I approve receiving automatic SMS or WhatsApp messages about group activity (registration, assignment, cancellations, results, etc.).",
    },
    {
      bodyData:
        "9. Game price as of January 1, 2023 - NIS 45 for a doubles game.",
    },
    {
      bodyData:
        "The conditions of the group and its rules are determined by the management of the group only, and may change from time to time.",
    },
  ];
  return (
    <main>
      <div className="groupregulations_contanier">
        <p>Group regulations</p>
        {bodyData.map((item) => (
          <div className="groupregulations_body">
            <p>{item.bodyData}</p>
          </div>
        ))}
        <div className="groupregulations_confirm">
          <p>I confirm that I have read the entire regulation.</p>
          <input type="checkbox" />
        </div>
        <div className="groupregulations_button">
          <Link href="/news">
            <button>Finish</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default groupregulations;
