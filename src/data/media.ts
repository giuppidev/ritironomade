// src/data/media.ts
// Photos and looping clips from the retreats, optimized into public/media
// (photos: WebP 1600px, clips: 720p H.264, muted, ≤15s, with a WebP poster).
import type { Edition } from "./editions";

export interface MediaSlot {
  kind: "image" | "video";
  src: string;
  poster?: string;
  // Portrait crop served to phones held upright.
  mobile?: { src: string; poster: string };
  // CSS object-position for crops that must keep a subject in frame.
  position?: string;
  alt: string;
}

const photo = (name: string, alt: string): MediaSlot => ({ kind: "image", src: `/media/${name}.webp`, alt });

const clip = (name: string, alt: string): MediaSlot => ({
  kind: "video",
  src: `/media/${name}.mp4`,
  poster: `/media/${name}-poster.webp`,
  alt,
});

export const media = {
  heroMontage: {
    ...clip(
      "heroMontage",
      "Montaggio delle edizioni che alterna natura e lavoro: spiaggia, trekking, lago d'Iseo, coworking, talk, giochi, unconference",
    ),
    mobile: { src: "/media/heroMontage-mobile.mp4", poster: "/media/heroMontage-mobile-poster.webp" },
  },
  laptopOutdoors: clip("laptopOutdoors", "Persone al laptop sul tavolo verde all'aperto"),
  unconferenceMontage: clip(
    "unconferenceMontage",
    "Sessioni di unconference: in cerchio sul prato, accanto al camper, in veranda",
  ),
  circleAosta: {
    ...photo("circleAosta", "Cerchio sul prato con le montagne della Valle d'Aosta sullo sfondo"),
    position: "right center",
  },
  campfireGroup: photo("campfireGroup", "Gruppo seduto davanti al camino durante un talk"),
  longTable: photo("longTable", "Tavolata lunga sotto il tetto di canne, tutti sorridono"),
  workshopCircle: clip("workshopCircle", "Unconference in cerchio sotto i pini, accanto al camper"),
  hikers: clip("hikers", "Il gruppo in fila sul sentiero nel bosco"),
  meditation: clip("meditation", "Tre persone camminano sulla spiaggia all'alba"),
  cooking: photo("cooking", "Masterclass di cucina nella cucina condivisa"),
  boardGame: clip("boardGame", "Partita a un gioco da tavolo sulla tavolata in veranda"),
  vanNight: clip("vanNight", "Camper con i post-it dell'unconference e persone che chiacchierano"),
  sunsetHug: clip("sunsetHug", "Cerchio sulla spiaggia al tramonto con la pizza"),
} satisfies Record<string, MediaSlot>;

export type MediaKey = keyof typeof media;

// Cover media per edition. Val di Sella has no photos of its own yet.
export const editionMedia: Record<Edition["slug"], MediaSlot> = {
  "january-2027": {
    kind: "image",
    src: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1600&q=75&auto=format&fit=crop",
    alt: "Bosco innevato nella nebbia",
  },
  "may-2026": clip("may-2026", "Chitarra e cajón sulla spiaggia di Cesenatico al tramonto"),
  "january-2026": clip("january-2026", "Camminata sulla collina sopra il Lago d'Iseo"),
  "june-2025": photo("june-2025", "Ponte di legno sul torrente nel bosco della Valle d'Aosta"),
};

// Carousel moments on the homepage, in display order.
export const galleryKeys: MediaKey[] = [
  "circleAosta",
  "campfireGroup",
  "laptopOutdoors",
  "longTable",
  "workshopCircle",
  "hikers",
  "meditation",
  "cooking",
  "boardGame",
  "vanNight",
  "sunsetHug",
];
