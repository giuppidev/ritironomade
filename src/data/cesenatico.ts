export type ActivityType = "meal" | "work" | "session" | "wellness" | "social";

export interface Activity {
  time: string;
  startHour: number;
  endHour: number;
  title: string;
  description: string;
  type: ActivityType;
  parallel?: "left" | "right";
}

export interface DaySchedule {
  date: string;
  shortDate: string;
  title: string;
  color: string;
  headerColor: string;
  activities: Activity[];
}

export const scheduleData: DaySchedule[] = [
  {
    date: "Giovedì 28",
    shortDate: "Gio - 28/05",
    title: "Arrivi",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-blue-100",
    activities: [
      {
        time: "10:00 – 13:00",
        startHour: 10,
        endHour: 13,
        title: "Coworking",
        description: "",
        type: "work",
        parallel: "left",
      },
      {
        time: "13:00 – 14:00",
        startHour: 13,
        endHour: 14,
        title: "Pranzo per chi c'è",
        description: "",
        type: "meal",
        parallel: "left",
      },
      {
        time: "14:00 – 18:30",
        startHour: 14,
        endHour: 18.5,
        title: "",
        description: "",
        type: "work",
        parallel: "left",
      },
      {
        time: "10:00 – 19:30",
        startHour: 10,
        endHour: 19.5,
        title: "Arrivi / Networking",
        description: "",
        type: "social",
        parallel: "right",
      },
      {
        time: "19:30 – 21:00",
        startHour: 19.5,
        endHour: 21,
        title: "Cena tutti insieme",
        description: "",
        type: "meal",
      },
      {
        time: "21:00 – 23:00",
        startHour: 21,
        endHour: 23,
        title: "Presentazioni e networking",
        description: "",
        type: "social",
      },
    ],
  },
  {
    date: "Venerdì 29",
    shortDate: "Ven - 29/05",
    title: "Coworking Day",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-100",
    activities: [
      {
        time: "7:00 – 8:00",
        startHour: 7,
        endHour: 8,
        title: "Meditazione + Journaling",
        description: "(facoltativo)",
        type: "wellness",
      },
      {
        time: "9:00 – 13:00",
        startHour: 9,
        endHour: 13,
        title: "Coworking",
        description: "",
        type: "work",
        parallel: "left",
      },
      {
        time: "13:00 – 14:00",
        startHour: 13,
        endHour: 14,
        title: "Pranzo tutti insieme",
        description: "",
        type: "meal",
        parallel: "left",
      },
      {
        time: "14:00 – 18:30",
        startHour: 14,
        endHour: 18.5,
        title: "",
        description: "",
        type: "work",
        parallel: "left",
      },
      {
        time: "9:00 – 19:30",
        startHour: 9,
        endHour: 19.5,
        title: "Attività libere",
        description:
          "mare, pineta, hot seat, nomad talks, wannabe solopreneur, pimp my van, vibe living",
        type: "social",
        parallel: "right",
      },
      {
        time: "19:30 – 21:00",
        startHour: 19.5,
        endHour: 21,
        title: "Cena",
        description: "",
        type: "meal",
      },
      {
        time: "21:00 – 23:00",
        startHour: 21,
        endHour: 23,
        title: "Networking",
        description: "",
        type: "social",
      },
    ],
  },
  {
    date: "Sabato 30",
    shortDate: "Sab - 30/05",
    title: "Unconference Day",
    color: "bg-orange-50 border-orange-200",
    headerColor: "bg-orange-100",
    activities: [
      {
        time: "7:00 – 8:00",
        startHour: 7,
        endHour: 8,
        title: "Meditazione + Journaling",
        description: "(facoltativo)",
        type: "wellness",
      },
      {
        time: "9:00 – 19:30",
        startHour: 9,
        endHour: 19.5,
        title: "Unconference",
        description: "",
        type: "session",
        parallel: "left",
      },
      {
        time: "13:00 – 14:30",
        startHour: 13,
        endHour: 14.5,
        title: "Pranzo",
        description: "",
        type: "meal",
        parallel: "right",
      },
      {
        time: "19:30 – 21:00",
        startHour: 19.5,
        endHour: 21,
        title: "Cena",
        description: "(TBD)",
        type: "meal",
      },
      {
        time: "21:00 – 23:00",
        startHour: 21,
        endHour: 23,
        title: "Seratona giochi e networking",
        description: "",
        type: "social",
      },
    ],
  },
  {
    date: "Domenica 31",
    shortDate: "Dom - 31/05",
    title: "Saluti",
    color: "bg-purple-50 border-purple-200",
    headerColor: "bg-purple-100",
    activities: [
      {
        time: "7:00 – 8:00",
        startHour: 7,
        endHour: 8,
        title: "Meditazione + Journaling",
        description: "(facoltativo)",
        type: "wellness",
      },
      {
        time: "9:00 – 16:00",
        startHour: 9,
        endHour: 16,
        title: "Organizzazione libera",
        description: "Saluti, lacrime e abbracci",
        type: "social",
      },
    ],
  },
];
