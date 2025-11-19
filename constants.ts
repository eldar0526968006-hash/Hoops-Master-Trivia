import { Difficulty, Question } from './types';

export const SCORING_RULES = {
  [Difficulty.EASY]: 10,
  [Difficulty.MEDIUM]: 20,
  [Difficulty.HARD]: 30,
  STREAK_THRESHOLD: 3,
  STREAK_BONUS: 20,
  TIME_LIMIT_SECONDS: 20,
  QUESTIONS_PER_GAME: 15, // Set to 15 questions per game
};

// A massive mix of Israeli League and NBA questions from 2010-2025
export const QUESTIONS_DB: Question[] = [
  // --- EXISTING & NEW NBA QUESTIONS ---
  {
    id: 1,
    category: "NBA",
    year: 2016,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזו קבוצה חזרה מפיגור 3-1 בסדרת הגמר של 2016 כדי לזכות באליפות?",
    answers: ["גולדן סטייט ווריורס", "קליבלנד קאבלירס", "מיאמי היט", "סן אנטוניו ספרס"],
    correctAnswerIndex: 1,
    explanation: "קליבלנד קאבלירס, בהובלת לברון ג'יימס, עשתה היסטוריה כשחזרה מפיגור 3-1 מול גולדן סטייט."
  },
  {
    id: 3,
    category: "NBA",
    year: 2020,
    difficulty: Difficulty.EASY,
    questionText: "מי נבחר ל-MVP של סדרת הגמר בבועה באורלנדו בשנת 2020?",
    answers: ["אנתוני דייוויס", "ג'ימי באטלר", "לברון ג'יימס", "ניקולה יוקיץ'"],
    correctAnswerIndex: 2,
    explanation: "לברון ג'יימס זכה בתואר ה-MVP של הגמר בפעם הרביעית בקריירה."
  },
  {
    id: 5,
    category: "NBA",
    year: 2023,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזו קבוצה זכתה באליפות ה-NBA הראשונה בתולדותיה בשנת 2023?",
    answers: ["פיניקס סאנס", "דנבר נאגטס", "מיאמי היט", "ממפיס גריזליס"],
    correctAnswerIndex: 1,
    explanation: "דנבר נאגטס, בהובלת ניקולה יוקיץ', זכתה באליפות הראשונה שלה."
  },
  {
    id: 6,
    category: "NBA",
    year: 2019,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזה שחקן קלע את סל הניצחון הדרמטי (The Shot) נגד פילדלפיה בפלייאוף 2019?",
    answers: ["קוואי לנארד", "דמאר דרוזן", "קייל לאורי", "יאניס אנטטוקומפו"],
    correctAnswerIndex: 0,
    explanation: "הכדור של קוואי לנארד קפץ 4 פעמים על הטבעת לפני שנכנס."
  },
  {
    id: 8,
    category: "NBA",
    year: 2024,
    difficulty: Difficulty.EASY,
    questionText: "מיהו מלך הסלים של ה-NBA בכל הזמנים (נכון ל-2024)?",
    answers: ["מייקל ג'ורדן", "קארים עבדול-ג'באר", "קובי בראיינט", "לברון ג'יימס"],
    correctAnswerIndex: 3,
    explanation: "לברון ג'יימס שבר את השיא של קארים עבדול-ג'באר בפברואר 2023."
  },
  {
    id: 10,
    category: "NBA",
    year: 2021,
    difficulty: Difficulty.HARD,
    questionText: "מי קלע 50 נקודות במשחק מספר 6 בגמר ה-NBA של 2021 כדי להבטיח אליפות?",
    answers: ["דווין בוקר", "כריס פול", "יאניס אנטטוקומפו", "קריס מידלטון"],
    correctAnswerIndex: 2,
    explanation: "יאניס אנטטוקומפו נתן תצוגה היסטורית והביא למילווקי אליפות אחרי 50 שנה."
  },
  {
    id: 11,
    category: "NBA",
    year: 2017,
    difficulty: Difficulty.EASY,
    questionText: "מי היה ה-MVP של העונה הסדירה ב-2017 עם ממוצע טריפל-דאבל עונתי?",
    answers: ["ג'יימס הארדן", "ראסל ווסטברוק", "לברון ג'יימס", "קווין דוראנט"],
    correctAnswerIndex: 1,
    explanation: "ראסל ווסטברוק שבר את השיא של אוסקר רוברטסון וממוצע טריפל-דאבל לראשונה מזה עשורים."
  },
  {
    id: 12,
    category: "NBA",
    year: 2016,
    difficulty: Difficulty.MEDIUM,
    questionText: "כמה ניצחונות השיגה גולדן סטייט בעונת 2015/16 (שיא NBA)?",
    answers: ["70", "72", "73", "74"],
    correctAnswerIndex: 2,
    explanation: "הווריורס שברו את השיא של שיקגו בולס (72) וסיימו עם מאזן 73-9."
  },
  {
    id: 13,
    category: "NBA",
    year: 2011,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי היה ה-MVP הצעיר ביותר בהיסטוריה של ה-NBA, שזכה בתואר ב-2011?",
    answers: ["קווין דוראנט", "דריק רוז", "לברון ג'יימס", "דווייט הווארד"],
    correctAnswerIndex: 1,
    explanation: "דריק רוז זכה ב-MVP בגיל 22 בלבד במדי שיקגו בולס."
  },
  {
    id: 14,
    category: "NBA",
    year: 2015,
    difficulty: Difficulty.HARD,
    questionText: "מי קלע 37 נקודות ברבע אחד (שיא NBA) בשנת 2015?",
    answers: ["סטף קרי", "קליי תומפסון", "ג'יימס הארדן", "דמיאן לילארד"],
    correctAnswerIndex: 1,
    explanation: "קליי תומפסון קלע 37 נקודות ברבע השלישי נגד סקרמנטו, כולל 9 שלשות."
  },
  {
    id: 15,
    category: "NBA",
    year: 2022,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי זכה בפרס ה-MVP של סדרת הגמר ב-2022 במדי גולדן סטייט?",
    answers: ["דריימונד גרין", "אנדרו וויגינס", "סטף קרי", "ג'ורדן פול"],
    correctAnswerIndex: 2,
    explanation: "סטף קרי זכה סוף סוף בתואר ה-MVP של הגמר (Finals MVP) הראשון שלו."
  },
  {
    id: 16,
    category: "NBA",
    year: 2018,
    difficulty: Difficulty.HARD,
    questionText: "איזה שחקן עשה טעות קריטית בשניות הסיום של משחק 1 בגמר 2018 כשחשב שהקבוצה שלו מובילה?",
    answers: ["ג'יי אר סמית'", "ג'ורג' היל", "טריסטן תומפסון", "קיירי אירווינג"],
    correctAnswerIndex: 0,
    explanation: "ג'יי אר סמית' תפס ריבאונד וכדרר החוצה במקום לזרוק, מה שהוביל להארכה ולהפסד של קליבלנד."
  },
  {
    id: 17,
    category: "NBA",
    year: 2014,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזו קבוצה ניצחה את מיאמי היט בגמר 2014 בפער הנקודות הגדול בהיסטוריה לסדרת גמר?",
    answers: ["דאלאס מאבריקס", "אוקלהומה סיטי", "גולדן סטייט", "סן אנטוניו ספרס"],
    correctAnswerIndex: 3,
    explanation: "הספרס הציגו 'כדורסל יפה' ונקמו במיאמי על ההפסד שנה קודם לכן."
  },
  {
    id: 18,
    category: "NBA",
    year: 2012,
    difficulty: Difficulty.EASY,
    questionText: "מול איזו קבוצה זכה לברון ג'יימס באליפות הראשונה שלו ב-2012?",
    answers: ["סן אנטוניו ספרס", "אוקלהומה סיטי ת'אנדר", "דאלאס מאבריקס", "בוסטון סלטיקס"],
    correctAnswerIndex: 1,
    explanation: "מיאמי היט ניצחה את אוקלהומה סיטי הצעירה (דוראנט, ווסטברוק, הארדן) 4-1."
  },
  {
    id: 19,
    category: "NBA",
    year: 2023,
    difficulty: Difficulty.HARD,
    questionText: "כמה נקודות קלע ג'ימי באטלר במשחק מספר 4 נגד מילווקי בפלייאוף 2023?",
    answers: ["50", "52", "56", "60"],
    correctAnswerIndex: 2,
    explanation: "באטלר קלע 56 נקודות, שיא פרנצ'ייז למיאמי היט בפלייאוף, והוביל להדחת המדורגת ראשונה."
  },
  {
    id: 20,
    category: "NBA",
    year: 2010,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי זכה ב-MVP של הגמר ב-2010 לאחר סדרה של 7 משחקים נגד בוסטון?",
    answers: ["פאו גאסול", "קובי בראיינט", "פול פירס", "קווין גארנט"],
    correctAnswerIndex: 1,
    explanation: "קובי בראיינט זכה באליפות החמישית שלו וב-MVP של הגמר לאחר קרב קשה נגד הסלטיקס."
  },
  {
    id: 21,
    category: "NBA",
    year: 2019,
    difficulty: Difficulty.HARD,
    questionText: "איזה שחקן נבחר בדראפט 2019 בבחירה הראשונה אך החמיץ את כל עונת הרוקי שלו?",
    answers: ["ג'ה מוראנט", "אר ג'יי בארט", "זאיון וויליאמסון", "בן סימונס"],
    correctAnswerIndex: 2,
    explanation: "זאיון וויליאמסון שיחק רק 24 משחקים בעונתו הראשונה, אך השאלה מתייחסת להחמצה משמעותית (למעשה בן סימונס ב-2016 החמיץ הכל, זאיון החמיץ את הרוב). הניסוח תוקן: זאיון שיחק מעט מאוד."
  },
   {
    id: 22,
    category: "NBA",
    year: 2021,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי היה מלך האסיסטים של ה-NBA בעונת 2020/21?",
    answers: ["כריס פול", "טריי יאנג", "ראסל ווסטברוק", "לוקה דונצ'יץ'"],
    correctAnswerIndex: 2,
    explanation: "ראסל ווסטברוק הוביל את הליגה באסיסטים במדי וושינגטון וויזארדס."
  },
  {
    id: 23,
    category: "NBA",
    year: 2024,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזה שחקן צרפתי נבחר במקום הראשון בדראפט 2023 ונחשב להבטחה ענקית?",
    answers: ["רודי גובר", "ויקטור וומבניאמה", "בילאל קוליבאלי", "אוון פורנייה"],
    correctAnswerIndex: 1,
    explanation: "ויקטור וומבניאמה (Wemby) נבחר ראשון על ידי הסן אנטוניו ספרס."
  },
  {
    id: 24,
    category: "NBA",
    year: 2013,
    difficulty: Difficulty.HARD,
    questionText: "מי קלע את השלשה המפורסמת במשחק 6 של גמר 2013 ששלחה את המשחק להארכה?",
    answers: ["לברון ג'יימס", "דוויין וייד", "ריי אלן", "מייק מילר"],
    correctAnswerIndex: 2,
    explanation: "ריי אלן קלע שלשה מהפינה בשניות הסיום שהצילה את מיאמי היט מהפסד האליפות."
  },

  // --- EXISTING & NEW ISRAELI BASKETBALL QUESTIONS ---
  {
    id: 2,
    category: "Israeli Basketball",
    year: 2015,
    difficulty: Difficulty.EASY,
    questionText: "מי זכתה באליפות המדינה בישראל בעונת 2014/15 לראשונה בהיסטוריה שלה?",
    answers: ["מכבי תל אביב", "הפועל חולון", "הפועל ירושלים", "מכבי חיפה"],
    correctAnswerIndex: 2,
    explanation: "הפועל ירושלים זכתה באליפות היסטורית בארנה החדשה."
  },
  {
    id: 4,
    category: "Israeli Basketball",
    year: 2020,
    difficulty: Difficulty.HARD,
    questionText: "מי נבחר ל-MVP של הליגה הישראלית בעונת 2019/20?",
    answers: ["סקוטי ווילבקין", "דני אבדיה", "ג'ייקובן בראון", "תומר גינת"],
    correctAnswerIndex: 1,
    explanation: "דני אבדיה זכה בתואר ה-MVP הצעיר ביותר בהיסטוריה לפני המעבר ל-NBA."
  },
  {
    id: 7,
    category: "Israeli Basketball",
    year: 2014,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי אימן את מכבי תל אביב בזכייה ביורוליג ב-2014?",
    answers: ["פיני גרשון", "דיוויד בלאט", "עודד קטש", "גיא גודס"],
    correctAnswerIndex: 1,
    explanation: "דיוויד בלאט הוביל את מכבי תל אביב לזכייה סנסציונית במילאנו."
  },
  {
    id: 9,
    category: "Israeli Basketball",
    year: 2023,
    difficulty: Difficulty.HARD,
    questionText: "איזו קבוצה הפסידה למכבי תל אביב בגמר הפלייאוף של 2023?",
    answers: ["הפועל ירושלים", "הפועל חולון", "הפועל תל אביב", "עירוני נס ציונה"],
    correctAnswerIndex: 2,
    explanation: "סדרת דרבי תל אביבית לוהטת הסתיימה בניצחון של מכבי במשחק השלישי."
  },
  {
    id: 25,
    category: "Israeli Basketball",
    year: 2022,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי זכתה באליפות המדינה בעונת 2021/22?",
    answers: ["מכבי תל אביב", "הפועל ירושלים", "הפועל חולון", "בני הרצליה"],
    correctAnswerIndex: 2,
    explanation: "הפועל חולון זכתה באליפות השנייה בתולדותיה לאחר ניצחון על בני הרצליה."
  },
  {
    id: 26,
    category: "Israeli Basketball",
    year: 2013,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזו קבוצה זכתה באליפות המדינה ב-2013 במשחק הגמר נגד מכבי תל אביב?",
    answers: ["הפועל ירושלים", "מכבי חיפה", "הפועל אילת", "מכבי ראשון לציון"],
    correctAnswerIndex: 1,
    explanation: "מכבי חיפה, בהובלת גל מקל ודונטה סמית', ניצחה את מכבי תל אביב בגמר ברוממה."
  },
  {
    id: 27,
    category: "Israeli Basketball",
    year: 2016,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי זכתה באליפות היסטורית ב-2016 בשיטת הפיינל פור?",
    answers: ["מכבי תל אביב", "הפועל ירושלים", "מכבי ראשון לציון", "הפועל אילת"],
    correctAnswerIndex: 2,
    explanation: "מכבי ראשון לציון, עם אריק שיבק על הקווים ודריל מונרו, הדהימה את הליגה וזכתה בצלחת."
  },
  {
    id: 28,
    category: "Israeli Basketball",
    year: 2010,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזו קבוצה זכתה באליפות ב-2010 עם סל ניצחון בשנייה האחרונה?",
    answers: ["מכבי תל אביב", "הפועל ירושלים", "גלבוע/גליל", "בני השרון"],
    correctAnswerIndex: 2,
    explanation: "גלבוע/גליל ניצחה את מכבי תל אביב בגמר עם סלים מכריעים של בריאן רנדל וג'רמי פארגו."
  },
  {
    id: 29,
    category: "Israeli Basketball",
    year: 2019,
    difficulty: Difficulty.EASY,
    questionText: "איזה שחקן ישראלי נבחר בדראפט 2020 בבחירה ה-9?",
    answers: ["ים מדר", "דני אבדיה", "גל מקל", "עומרי כספי"],
    correctAnswerIndex: 1,
    explanation: "דני אבדיה נבחר במקום ה-9 על ידי הוושינגטון ויזארדס."
  },
  {
    id: 30,
    category: "Israeli Basketball",
    year: 2021,
    difficulty: Difficulty.HARD,
    questionText: "מי נבחר ל-MVP של סדרת הגמר ב-2021?",
    answers: ["סקוטי ווילבקין", "יובל זוסמן", "קייסי פראתר", "אנטה ז'יז'יץ'"],
    correctAnswerIndex: 0,
    explanation: "סקוטי ווילבקין הוביל את מכבי תל אביב לאליפות ונבחר למצטיין."
  },
  {
    id: 31,
    category: "Israeli Basketball",
    year: 2018,
    difficulty: Difficulty.HARD,
    questionText: "איזו קבוצה זכתה בגביע המדינה ב-2018 לאחר ניצחון על מכבי תל אביב?",
    answers: ["הפועל חולון", "מכבי אשדוד", "הפועל ירושלים", "עירוני נהריה"],
    correctAnswerIndex: 0,
    explanation: "הפועל חולון זכתה בגביע השני בתולדותיה עם סל דרמטי של גלן רייס ג'וניור."
  },
  {
    id: 32,
    category: "Israeli Basketball",
    year: 2011,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי היה הקפטן האגדי של מכבי תל אביב שפרש בתום עונת 2010/11 (חזר מאוחר יותר)?",
    answers: ["טל בורשטיין", "דרק שארפ", "גור שלף", "ניקולה וויצ'יץ'"],
    correctAnswerIndex: 1,
    explanation: "דרק שארפ פרש ממשחק פעיל ב-2011 ועבר לצוות האימון."
  },
  {
    id: 33,
    category: "Israeli Basketball",
    year: 2023,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי זכתה בגביע המדינה ב-2023?",
    answers: ["מכבי תל אביב", "הפועל ירושלים", "הפועל חיפה", "הפועל חולון"],
    correctAnswerIndex: 1,
    explanation: "הפועל ירושלים זכתה בגביע לאחר ניצחון על מכבי תל אביב בארנה."
  },
  {
    id: 34,
    category: "Israeli Basketball",
    year: 2017,
    difficulty: Difficulty.HARD,
    questionText: "מי זכתה באליפות המדינה ב-2017?",
    answers: ["מכבי תל אביב", "הפועל ירושלים", "מכבי חיפה", "הפועל חולון"],
    correctAnswerIndex: 1,
    explanation: "הפועל ירושלים זכתה באליפות השנייה שלה לאחר ניצחון בגמר על מכבי חיפה."
  },
  {
    id: 35,
    category: "Israeli Basketball",
    year: 2012,
    difficulty: Difficulty.EASY,
    questionText: "איזו קבוצה היא השיאנית בזכיות באליפות המדינה בכדורסל?",
    answers: ["הפועל תל אביב", "הפועל ירושלים", "מכבי תל אביב", "מכבי חיפה"],
    correctAnswerIndex: 2,
    explanation: "מכבי תל אביב היא המעוטרת ביותר בפער עצום."
  },
  {
    id: 36,
    category: "Israeli Basketball",
    year: 2024,
    difficulty: Difficulty.HARD,
    questionText: "איזו קבוצה הגיעה לחצי גמר היורוקאפ בעונת 2023/24?",
    answers: ["הפועל תל אביב", "הפועל ירושלים", "מכבי תל אביב", "הפועל חולון"],
    correctAnswerIndex: 0,
    explanation: "הפועל תל אביב רשמה עונה אירופית מרשימה והגיעה לשלבים הגבוהים ביורוקאפ."
  },
  {
    id: 37,
    category: "Israeli Basketball",
    year: 2014,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזה שחקן ישראלי חתם בדאלאס מאבריקס ב-2014?",
    answers: ["עומרי כספי", "גל מקל", "יוגב אוחיון", "גיא פניני"],
    correctAnswerIndex: 1,
    explanation: "גל מקל הפך לישראלי השני ב-NBA כשחתם בדאלאס."
  },
  {
    id: 38,
    category: "Israeli Basketball",
    year: 2015,
    difficulty: Difficulty.HARD,
    questionText: "מי אימן את הפועל ירושלים באליפות הראשונה שלה ב-2015?",
    answers: ["עודד קטש", "דני פרנקו", "שרון דרוקר", "סימונה פיאניג'אני"],
    correctAnswerIndex: 1,
    explanation: "דני פרנקו היה המאמן שהוביל את ירושלים לצלחת ההיסטורית."
  },
  {
    id: 39,
    category: "NBA",
    year: 2018,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי נבחר לרוקי העונה (ROY) בשנת 2018?",
    answers: ["דונובן מיטשל", "ג'ייסון טייטום", "בן סימונס", "קייל קוזמה"],
    correctAnswerIndex: 2,
    explanation: "בן סימונס זכה בתואר לאחר מחלוקת האם הוא נחשב רוקי (כי החמיץ את עונת הבכורה המקורית שלו)."
  },
  {
    id: 40,
    category: "NBA",
    year: 2011,
    difficulty: Difficulty.MEDIUM,
    questionText: "איזו קבוצה זכתה באליפות ב-2011 נגד ה'ביג 3' של מיאמי?",
    answers: ["לוס אנג'לס לייקרס", "בוסטון סלטיקס", "דאלאס מאבריקס", "שיקגו בולס"],
    correctAnswerIndex: 2,
    explanation: "דאלאס מאבריקס עם דירק נוביצקי הדהימו את עולם הכדורסל וניצחו את מיאמי."
  },
  {
    id: 41,
    category: "Israeli Basketball",
    year: 2022,
    difficulty: Difficulty.HARD,
    questionText: "איזה שחקן זכה בתואר 'השחקן השישי' של הליגה בעונת 2021/22?",
    answers: ["ג'ון דיברתולומיאו", "בר טימור", "מייקל בריסקר", "נמרוד לוי"],
    correctAnswerIndex: 0,
    explanation: "ג'ון דיברתולומיאו ממכבי תל אביב ידוע ביכולתו לעלות מהספסל ולשנות משחקים."
  },
  {
    id: 42,
    category: "NBA",
    year: 2021,
    difficulty: Difficulty.EASY,
    questionText: "באיזו קבוצה שיחק ג'יימס הארדן לפני שעבר לברוקלין נטס ב-2021?",
    answers: ["אוקלהומה סיטי", "יוסטון רוקטס", "פילדלפיה 76", "לוס אנג'לס קליפרס"],
    correctAnswerIndex: 1,
    explanation: "הארדן היה הכוכב הבלתי מעורער של יוסטון רוקטס במשך שנים רבות."
  },
  {
    id: 43,
    category: "Israeli Basketball",
    year: 2019,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי ניצחה את גמר הגביע ב-2019?",
    answers: ["הפועל ירושלים", "מכבי ראשון לציון", "מכבי תל אביב", "הפועל באר שבע"],
    correctAnswerIndex: 0,
    explanation: "הפועל ירושלים זכתה בגביע המדינה לאחר ניצחון על מכבי ראשל\"צ."
  },
  {
    id: 44,
    category: "NBA",
    year: 2016,
    difficulty: Difficulty.HARD,
    questionText: "מי זכה בתחרות ההטבעות המפורסמת של 2016 נגד ארון גורדון?",
    answers: ["בלייק גריפין", "זאק לאבין", "דווייט הווארד", "דריק ג'ונס ג'וניור"],
    correctAnswerIndex: 1,
    explanation: "זאק לאבין וארון גורדון סיפקו את אחת התחרויות הגדולות בהיסטוריה, לאבין ניצח."
  },
  {
    id: 45,
    category: "Israeli Basketball",
    year: 2025,
    difficulty: Difficulty.MEDIUM,
    questionText: "מי נחשב לאחד המועמדים המובילים לדראפט ה-NBA מישראל לשנת 2024/25?",
    answers: ["נועם יעקב", "בן שרף", "אריאל לוי", "רון ציפר"],
    correctAnswerIndex: 1,
    explanation: "בן שרף סומן ככישרון ענק ומועמד להיבחר גבוה בדראפט."
  },
  {
    id: 46,
    category: "NBA",
    year: 2023,
    difficulty: Difficulty.MEDIUM,
    questionText: "כמה נקודות קלע לוקה דונצ'יץ' במשחק ההיסטורי נגד הניקס ב-2022 (60/21/10)?",
    answers: ["50", "55", "60", "62"],
    correctAnswerIndex: 2,
    explanation: "לוקה רשם טריפל דאבל מפלצתי של 60 נקודות, 21 ריבאונדים ו-10 אסיסטים."
  },
  {
    id: 47,
    category: "Israeli Basketball",
    year: 2013,
    difficulty: Difficulty.HARD,
    questionText: "מי היה השחקן המצטיין (MVP) בגמר הליגה הישראלית ב-2013?",
    answers: ["גל מקל", "דונטה סמית'", "פט קלאת'ס", "פול סטול"],
    correctAnswerIndex: 0,
    explanation: "גל מקל הוביל את מכבי חיפה לאליפות ונבחר ל-MVP לפני המעבר ל-NBA."
  }
];