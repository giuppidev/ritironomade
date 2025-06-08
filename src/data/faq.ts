interface FAQItem {
  question: string;
  answer?: string; // Optional since we might use answerHtml instead
  answerHtml?: string; // Optional HTML content for answers that need links
}

export const faqItems: FAQItem[] = [
  {
    question: "Posso partecipare se sono nuovo al lavoro remoto?",
    answer:
      "Accogliamo nomadi digitali di tutti i livelli di esperienza. Molti workshop sono progettati specificamente per coloro che stanno passando o ottimizzando il loro stile di vita da lavoro remoto.",
  },
  {
    question: "Se non voglio dormire lì?",
    answer:
      "No problema. Ti chiederemo di partecipare alle spese comuni di caffè/merende/pasti comuni a cui parteciperai.",
  },
  {
    question: "Posso portare altre persone?",
    answer:
      "Puoi portare chi vuoi nei limiti dello spirito dell'evento, soprattutto se pensate di alloggiare in struttura.",
  },
  {
    question: "Non so ancora se riesco a venire, posso unirmi dopo?",
    answerHtml:
      "Se ci saranno ancora posti liberi nessun problema, scrivimi a <a href='mailto:info@giuppi.dev' class='text-blue-600 hover:text-blue-800 underline'>info@giuppi.dev</a>. Se gli alloggi dovessero essere al completo puoi sempre cercare una soluzione differente per dormire e unirti a noi per l'evento.",
  },
  {
    question: "Devo per forza essere un developer?",
    answer:
      "Assolutamente no, lo spirito è quello di condividere un'esperienza nomade e creare discussioni su qualsiasi argomento.",
  },
  {
    question: "Ho altre domande, dove le faccio?",
    answerHtml:
      "Scrivimi a <a href='mailto:info@giuppi.dev' class='text-blue-600 hover:text-blue-800 underline'>info@giuppi.dev</a>",
  },
];
