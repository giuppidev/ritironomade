export function initAccordion() {
  const accordions = document.querySelectorAll("[data-accordion-type]");

  accordions.forEach((accordion) => {
    const type = accordion.getAttribute("data-accordion-type");
    const collapsible = accordion.getAttribute("data-collapsible") === "true";
    const items = accordion.querySelectorAll("[data-accordion-item]");

    items.forEach((item) => {
      const trigger = item.querySelector("[data-accordion-trigger]");
      const content = item.querySelector("[data-accordion-content]");

      if (!trigger || !content) return;

      trigger.addEventListener("click", () => {
        const isOpen = item.getAttribute("data-state") === "open";

        if (type === "single" && !collapsible) {
          items.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.setAttribute("data-state", "closed");
              const otherContent = otherItem.querySelector(
                "[data-accordion-content]"
              );
              if (otherContent) {
                otherContent.setAttribute("data-state", "closed");
              }
            }
          });
        }

        if (isOpen && !collapsible) return;

        item.setAttribute("data-state", isOpen ? "closed" : "open");
        content.setAttribute("data-state", isOpen ? "closed" : "open");
      });
    });
  });
}
