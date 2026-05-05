import type { DaySchedule } from "./aosta";
import { scheduleData as bergamoSchedule } from "./aosta";
import { scheduleData as cesenaticoSchedule } from "./cesenatico";

export interface EditionInfoItem {
  label: string;
  html: string;
}

export interface Edition {
  slug: "may-2026" | "january-2026" | "june-2025";
  href: string;
  homeOrder: number;
  heroTitle: string;
  title: string;
  location: string;
  dateLabel: string;
  cardDescription: string;
  image: string;
  status: {
    label: string;
    html: string;
  };
  when: {
    title: string;
    description: string;
  };
  where: {
    name: string;
    href: string;
    suffix: string;
    usefulInfo: EditionInfoItem[];
  };
  what: {
    title: string;
    description: string;
  };
  schedule: DaySchedule[];
  video?: {
    youtubeId: string;
    title: string;
    description: string;
  };
}

export const editions: Edition[] = [
  {
    slug: "may-2026",
    href: "/may-2026",
    homeOrder: 1,
    heroTitle: "Estate 26",
    title: "Edizione estate 2026",
    location: "Cesenatico",
    dateLabel: "28-31 Maggio 2026",
    cardDescription: "Unconference, coworking e mare in Romagna.",
    image: "/cesenatico.jpeg",
    status: {
      label: "Già al completo",
      html: 'Se sei ancora interessato, scrivimi a <a href="mailto:info@giuppi.dev" class="underline">info@giuppi.dev</a>.',
    },
    when: {
      title: "dal 28 al 31 Maggio 2026",
      description: "4 giorni di unconference, lavoro e mare",
    },
    where: {
      name: "Cesenatico Camping Village",
      href: "https://www.campingcesenatico.com/",
      suffix: ", Cesenatico",
      usefulInfo: [
        {
          label: "Alloggi",
          html: '<a href="https://www.campingcesenatico.com/" target="_blank" class="underline">Cesenatico Camping Village</a>',
        },
      ],
    },
    what: {
      title: "Lavoro da remoto, workshop, chiacchiere, esperienze di mare",
      description: "Unconference, convivialità, mare",
    },
    schedule: cesenaticoSchedule,
  },
  {
    slug: "january-2026",
    href: "/january-2026",
    homeOrder: 2,
    heroTitle: "Inverno 26",
    title: "Edizione gennaio 2026",
    location: "Costa Volpino, Bergamo",
    dateLabel: "22-25 Gennaio 2026",
    cardDescription: "Coworking, unconference e camino sul Lago d'Iseo.",
    image: "/Ciar.jpeg",
    status: {
      label: "Prenotazioni terminate",
      html: 'Se vuoi rimanere aggiornato sulle prossime edizioni <a href="https://www.giuppi.dev/#community" target="_blank" class="underline">entra nella community</a>.',
    },
    when: {
      title: "dal 22 al 25 Gennaio 2026",
      description: "4 giorni di unconference, lavoro e natura",
    },
    where: {
      name: "Lago d'Iseo - Costa Volpino (BG)",
      href: "https://www.google.com/maps/place/24062+Costa+Volpino+BG/@45.8280144,10.0782252,6551m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4783d970426534a3:0x186660ac98e62ea8!8m2!3d45.8293538!4d10.1028944!16zL20vMDQ2azc5?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D",
      suffix: ", Lombardia",
      usefulInfo: [
        {
          label: "Alloggi",
          html: '<a href="https://www.vrbo.com/it-it/affitto-vacanze/p8798340" target="_blank" class="underline">Chalet Ai Ciar</a>',
        },
      ],
    },
    what: {
      title: "Lavoro da remoto, workshop, chiacchiere, esperienze di montagna",
      description: "Unconference, convivialità, natura",
    },
    schedule: bergamoSchedule,
    video: {
      youtubeId: "TXshylLOZ2I",
      title: "Video vlog dell'edizione gennaio 2026",
      description: "Guarda il racconto dell'edizione a Costa Volpino.",
    },
  },
  {
    slug: "june-2025",
    href: "/june-2025",
    homeOrder: 3,
    heroTitle: "Estate 25",
    title: "Edizione giugno 2025",
    location: "Introd, Aosta",
    dateLabel: "19-22 Giugno 2025",
    cardDescription: "La prima edizione tra lavoro da remoto e Valle d'Aosta.",
    image: "/aosta.jpeg",
    status: {
      label: "Prenotazioni terminate",
      html: 'Se vuoi rimanere aggiornato sulle prossime edizioni <a href="https://www.giuppi.dev/#community" target="_blank" class="underline">entra nella community</a>.',
    },
    when: {
      title: "dal 19 al 22 Giugno 2025",
      description: "4 giorni di unconference, lavoro e natura",
    },
    where: {
      name: "Introd",
      href: "https://www.google.com/maps/place/Case+vacanza+Vieilles+maisons+d'Introd/@45.692663,7.1825525,15z/data=!4m8!3m7!1s0x0:0xac8d4f3bf892a698!5m2!4m1!1i2!8m2!3d45.692663!4d7.1825525",
      suffix: ", Valle d'Aosta",
      usefulInfo: [
        {
          label: "Alloggi",
          html: '<a href="https://appartamenti-valledaosta.it/" target="_blank" class="underline">Vieilles Maison</a>',
        },
        {
          label: "Auto",
          html: "Autostrada uscita Aosta",
        },
        {
          label: "Pullman",
          html: 'Flixbus fino ad Aosta / <a href="https://www.mycicero.it/arriva-bg/TPWebPortal/it" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Arriva</a> per Introd',
        },
        {
          label: "Treno",
          html: "Cambio ad Ivrea su bus sostitutivo, gestito da Trenitalia",
        },
        {
          label: "Passaggi",
          html: '<a href="https://docs.google.com/spreadsheets/d/1O2qVP1o3Tgvvjr-aJrmBegb_CZttu-ji7Sp0k_Ec13U/edit?usp=sharing" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Offri o cerca un passaggio</a>',
        },
      ],
    },
    what: {
      title: "Lavoro da remoto, workshop, chiacchiere, esperienze di montagna",
      description: "Unconference, convivialità, natura",
    },
    schedule: bergamoSchedule,
    video: {
      youtubeId: "Zfhv0X1VstY",
      title: "Video vlog dell'edizione giugno 2025",
      description: "Guarda il racconto dell'edizione a Introd.",
    },
  },
];

export const homeEditions = editions
  .slice()
  .sort((first, second) => first.homeOrder - second.homeOrder);

export function getEdition(slug: Edition["slug"]) {
  return editions.find((edition) => edition.slug === slug);
}
