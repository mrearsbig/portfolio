// Optimized scroll navigation script in TypeScript
// Handles nav button activation and smooth scrolling with accessibility & reduced motion support.

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Query buttons inside header navigation
  const navButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    "header nav a button"
  );
  const sections: NodeListOf<HTMLElement> =
    document.querySelectorAll("main section[id]");

  if (navButtons.length === 0 || sections.length === 0) return;

  const ACTIVE_CLASSES = ["bg-accent", "text-accent-foreground"] as const;
  const INACTIVE_CLASS = "text-muted-foreground";

  const setActiveButton = (id: string) => {
    navButtons.forEach((button) => {
      const parent = button.parentElement as HTMLAnchorElement | null;
      if (!parent) return;
      const linkHref = parent.getAttribute("href") || "";

      button.classList.remove(...ACTIVE_CLASSES);
      button.classList.add(INACTIVE_CLASS);

      if (linkHref === `#${id}`) {
        button.classList.remove(INACTIVE_CLASS);
        button.classList.add(...ACTIVE_CLASSES);
      }
    });
  };

  // Attach click handlers (using parent anchor for default prevention & scroll control)
  navButtons.forEach((button) => {
    const anchor = button.parentElement as HTMLAnchorElement | null;
    if (!anchor) return;

    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = anchor.getAttribute("href");
      if (!targetId) return;
      const targetElement = document.querySelector<HTMLElement>(targetId);
      if (!targetElement) return;

      // Scroll behavior: switch to auto if user prefers reduced motion
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      // Accessibility: ensure element can receive focus and focus it without jumping
      if (!targetElement.hasAttribute("tabindex")) {
        targetElement.setAttribute("tabindex", "-1");
      }
      targetElement.focus({ preventScroll: true });
    });
  });

  // IntersectionObserver configuration
  const observerOptions: IntersectionObserverInit = {
    root: null,
    // Trigger when top quarter of viewport reaches the section
    rootMargin: "0px 0px -75% 0px",
    threshold: 0,
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveButton(entry.target.id);
        }
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  } else {
    // Fallback: activate first visible section on scroll
    const fallback = () => {
      let active: HTMLElement | null = null;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.25) {
          active = section;
          break;
        }
      }
      if (active) setActiveButton(active.id);
    };
    // Use globalThis to avoid any potential narrowed type issues in strict TS configs
    globalThis.addEventListener("scroll", fallback, { passive: true });
    fallback();
  }
});
