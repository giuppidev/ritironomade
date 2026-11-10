interface FAQItem {
  question: string;
  answer?: string; // Optional since we might use answerHtml instead
  answerHtml?: string; // Optional HTML content for answers that need links
}

export const faqItems: FAQItem[] = [
  {
    question: "Posso partecipare se ho appena iniziato come freelance?",
    answer:
      "Sì. Partecipa chi ha appena iniziato e chi lavora in proprio da anni.",
  },
  {
    question: "Se non voglio dormire lì?",
    answer:
      "No problema. Ti chiederemo di partecipare alle spese comuni di caffè/merende/pasti comuni a cui parteciperai.",
  },
  {
    question: "Posso portare altre persone?",
    answerHtml:
      'Sì! Scrivici prima a <a href="mailto:info@giuppi.dev">info@giuppi.dev</a> così ci organizziamo con i posti in struttura.',
  },
  {
    question: "Non so ancora se riesco a venire, posso unirmi dopo?",
    answerHtml:
      "Se ci saranno ancora posti liberi nessun problema, scrivimi a <a href='mailto:info@giuppi.dev' class='text-blue-600 hover:text-blue-800 underline'>info@giuppi.dev</a>. Se gli alloggi dovessero essere al completo puoi sempre cercare una soluzione differente per dormire e unirti a noi per l'evento.",
  },
  {
    question: "Devo per forza essere un developer?",
    answer:
      "No. La maggior parte lavora nel tech, ma si parla di qualsiasi argomento.",
  },
  {
    question: "Ho altre domande, dove le faccio?",
    answerHtml:
      "Scrivimi a <a href='mailto:info@giuppi.dev' class='text-blue-600 hover:text-blue-800 underline'>info@giuppi.dev</a>",
  },
];
