import Link from "next/link";
import "./groupregulations.scss";

const groupregulations = ({ standings, setStandings }) => {
  const bodyData = [
    {
      bodyData:
        "1. מצבי הבריאותי תקין, ומאפשר משחק תקין ובריא עבורי ועבור חבריי.",
    },
    {
      bodyData:
        "2. לא תהיה לי כל טענה כלפי הקבוצה ו/או מי ממנהליה עבור כל עניין ודבר שקשור במשחקים / פציעות ועניינים רפואיים / רישומים / מגרשים או כל עניין אחר.",
    },
    {
      bodyData:
        "3. ידוע לי כי ההמלצה לפני כל משחק היא לעשות חימום ומתיחות באופן מסודר.",
    },
    {
      bodyData:
        "4. חוקי הקבוצה והמשחקים ידועים לי, וברור לי כי ויכוחים מיותרים על In/Out במהלך המשחק ידרדרו את איכות המשחק. אני זוכר ש! אף משחק לא מוכרע על נקודה אחת, ולמרות שלפעמים לי נראה משהו מסוים, יכול להיות שזה לא נכון. ולכן - מי שהכדור בצד שלו - הוא זה שקובע. אם מדובר בזוג, הקביעה תיעשה בין שניהם יחד.",
    },
    {
      bodyData: `5. כללי ניצחון והפסד:

            - לעניין ניצחון המשחק כולו, אין חשיבות כמה משחקונים כל קבוצה ניצחה - רק סטים נחשבים.
            - משחק שישוחק לפחות שעה וחצי, ותוצאתו תהיה תיקו עד אותו רגע (1:1 או 2:2), ילך לאחת מ-2 האופציות הבאות:`,
    },
    {
      bodyData:
        "א. סופר טיי ברייק (שובר שוויון עד 10). לאחר שובר השוויון, אם עדיין יהיה אור, אפשר להמשיך לשחק אבל ללא הזנת תוצאות.",
    },
    {
      bodyData: `ב. מערכה נוספת מכריעה. אם בוחרים באופציה זו - אסור להפסיק עד שמסיימים את המערכה. קבוצה שהפסיקה מבחירתה את המשחק תהיה הקבוצה שפרשה, הזנת התוצאה תהיה 6:0 למערכה זו, והקבוצה השניה תהיה המנצחת. כמובן למעט הפסקות שלא בשליטתנו כגון גשם, כיבוי תאורה, גשם של טילים, רעידת אדמה, חדירת מחבלים, חדירת חייזרים וכו׳.

            בחירת המסלול (א׳ או ב׳) תהיה בהחלטת כולם פה אחד. במידה ואין החלטה - מחליטים באמצעות הגרלה במקום (סיבוב מחבט לריצפה - W או M במקרה של ווילסון לקביעת מסלול). מי שלא יכבד החלטה זו - ייחשב שפרש מהמשחק.
            
            - שחקן שפורש לפני תום שעתיים של משחק שלא בהסכמת כל השחקנים, קבוצתו תפסיד טכנית ללא קשר מה הייתה התוצאה. אם הפרישה הייתה באמצע סט, יירשם 6:0 נגדו ותסומן לו פרישה, שמשמעה הפסד המשחק כולו. כל מקרה מיוחד יוכרע ע״י הנהלת הקבוצה.

            - לאחר שעתיים של משחק, שחקן שירצה לפרוש יוכל. אם הפרישה היא באמצע סט - יירשם 6:0 נגדו במערכה הנוכחית בלבד.`,
    },
    {
      bodyData:
        "6. ידוע לי שהערה לפרטנר שלי במהלך משחק עלולה להוריד משמעותית את היכולת שלנו לשחק טוב ביחד, ולכן אשתדל לכבד את הפרטנר שלי גם כשמפסידים נקודות.",
    },
    {
      bodyData:
        "7. ידוע לי שכל זריקת מחבט בצורה מסוכנת, העפת כדור בצורה מסוכנת ו/או כל שימוש באלימות מילולית או פיזית במגרשים, עלול לגרור סנקציות נגדי כגון השהיה ממשחקים או מקבוצות הווטסאפ או מהקבוצה כולה לתקופה מסויימת או לצמיתות.",
    },
    {
      bodyData:
        "8. אני מאשר קבלת הודעות אוטומטיות בסמס או ווטסאפ על פעילות הקבוצה (רישום, שיבוץ, ביטולים, תוצאות וכו׳).",
    },
    {
      bodyData:
        "9. מחיר משחק נכון ל1-ינואר 2023 - 45 ש״ח למשחק זוגות.",
    },
    {
      bodyData:
        "תנאי הקבוצה וחוקיה נקבעים עי הנהלת הקבוצה בלבד, ועלולים להשתנות מעת לעת.",
    },
  ];
  return (
    <main>
      <div className="groupregulations_contanier">
        <p>תקנון הקבוצה</p>
        {bodyData.map((item) => (
          <div className="groupregulations_body">
            <p>{item.bodyData}</p>
          </div>
        ))}
        <div className="groupregulations_confirm">
          <input type="checkbox" />
          <p>אני מאשר שקראתי את כל התקנון.</p>  
        </div>
        <div className="groupregulations_button">
          <Link href="/news">
            <button>סיים</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default groupregulations;
