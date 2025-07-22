document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleccionar los botones de navegación y las secciones
  // Se apunta directamente al botón dentro del enlace para cambiar sus clases
  const navButtons = document.querySelectorAll("header nav a button");
  const sections = document.querySelectorAll("main section[id]");

  if (navButtons.length === 0 || sections.length === 0) return;

  // Función para gestionar las clases de Shadcn y el estado activo
  const setActiveButton = (id) => {
    navButtons.forEach((button) => {
      // El id del botón lo tomamos del href de su 'padre' <a>
      const linkHref = button.parentElement.getAttribute("href");

      // Clases para el estado activo (simula variant="default")
      const activeClasses = ["bg-accent", "text-accent-foreground"];
      // Clase para el estado inactivo (de variant="outline")
      const inactiveClass = "text-muted-foreground";

      button.classList.remove(...activeClasses);
      button.classList.add(inactiveClass);

      if (linkHref === `#${id}`) {
        // Es el botón activo, aplicamos estilos de "default"
        button.classList.remove(inactiveClass);
        button.classList.add(...activeClasses);
      }
    });
  };

  // 2. Añadir event listener de clic a cada botón
  navButtons.forEach((button) => {
    button.parentElement.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = button.parentElement.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // 3. Implementar desplazamiento suave
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 4. Opciones del observador más precisas
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -75% 0px", // Zona de activación: 25% superior de la pantalla
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Gestionar clases de Shadcn al hacer scroll
        setActiveButton(entry.target.id);
      }
    });
  }, observerOptions);

  // Observar cada sección [cite: 7, 8, 10]
  sections.forEach((section) => {
    observer.observe(section);
  });
});
