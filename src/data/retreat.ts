// src/data/retreat.ts
// Homepage content and schedule helpers.
import type { Activity, ActivityType, DaySchedule } from "./aosta";
import { scheduleData as bergamoSchedule } from "./aosta";
import { homeEditions, type Edition } from "./editions";

export const nextEdition: Edition =
  homeEditions.find((edition) => edition.registration) ?? homeEditions[0];

export function sortedActivities(day: DaySchedule): Activity[] {
  return day.activities
    .filter((activity) => activity.title)
    .slice()
    .sort((first, second) => first.startHour - second.startHour);
}

// A real "Coworking Day" from a past edition, used as the typical day.
export const typicalDay: DaySchedule = bergamoSchedule[1];

export const activityLabels: Record<ActivityType, string> = {
  work: "Lavoro",
  meal: "Cibo",
  session: "Unconference",
  wellness: "Mindfulness",
  social: "Connessioni",
};

export const pillars = [
  {
    key: "connessioni",
    title: "Connessioni autentiche",
    text: "Conosci persone come te, condividi esperienze, impara e insegna in un contesto informale. Qui le relazioni nascono attorno a un fuoco, non dentro una conference room.",
  },
  {
    key: "focus",
    title: "Focus e libertà",
    text: "Spazi e tempi pensati per lavorare con concentrazione, senza rinunciare a momenti di respiro, scambio e scoperta. Il ritmo lo scegli tu.",
  },
  {
    key: "natura",
    title: "Natura che rigenera",
    text: "Mare, bosco o collina: la natura è il nostro sfondo. Uno spazio vivo che stimola nuove idee, ritmi più umani e un senso di libertà difficile da spiegare.",
  },
] as const;

export const intro =
  "Un ritiro nomade è un evento in stile unconference dove si uniscono nomadi digitali, lavoratori da remoto e appassionati di tecnologia per condividere esperienze e competenze. Le giornate si alternano tra sessioni di lavoro, workshop auto-organizzati dai partecipanti, attività all'aria aperta e networking informale.";

export const isOpen = (edition: Edition) => Boolean(edition.registration);
