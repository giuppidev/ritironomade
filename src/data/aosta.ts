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
    date: "Giovedì 22",
    shortDate: "Gio - 22/01",
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
        title: "Pizza tutti insieme",
        description: "",
        type: "meal",
      },
      {
        time: "21:00 – 23:00",
        startHour: 21,
        endHour: 23,
        title: "Presentazioni e networking davanti al camino",
        description: "",
        type: "social",
      },
    ],
  },
  {
    date: "Venerdì 23",
    shortDate: "Ven - 23/01",
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
        title: "Spaghettata tutti insieme",
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
          "trekking, hot seat, nomad talks, wannabe solopreneur, pimp my van, vibe living, masterclass cucina",
        type: "social",
        parallel: "right",
      },
      {
        time: "19:30 – 21:00",
        startHour: 19.5,
        endHour: 21,
        title: "Cena tipica",
        description:
          "casoncelli, pizzoccheri, manzo alla Bresciana, dessert flambé",
        type: "meal",
      },
      {
        time: "21:00 – 23:00",
        startHour: 21,
        endHour: 23,
        title: "Networking davanti al camino",
        description: "",
        type: "social",
      },
    ],
  },
  {
    date: "Sabato 24",
    shortDate: "Sab - 24/01",
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
        title: "Pranzo cucinato a casa",
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
        title: "Seratona giochi e networking (davanti al camino)",
        description: "",
        type: "social",
      },
    ],
  },
  {
    date: "Domenica 25",
    shortDate: "Dom - 25/01",
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
