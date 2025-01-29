const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".autoshow").forEach((element) => {
  observer.observe(element);
});

// lectures section
document.addEventListener("DOMContentLoaded", () => {
  const dayLinks = document.querySelectorAll(".schedule-nav .days a");
  const occupationLinks = document.querySelectorAll(
    ".schedule-nav .occupations a"
  );

  function handleActiveClass(links, clickedLink) {
    links.forEach((link) => link.classList.remove("active"));
    clickedLink.classList.add("active");
  }

  dayLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      handleActiveClass(dayLinks, link);
    });
  });

  occupationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      handleActiveClass(occupationLinks, link);
    });
  });
});

const lecturesObserver = new IntersectionObserver(
  (entries, lecturesObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Dodaj klasu koja aktivira animaciju
        entry.target.classList.add("fadeIn");
        // Prestanimo pratiti nakon što je animacija počela
        lecturesObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
); // Aktivira kada je 50% elementa na ekranu

// Pratimo sve h3 elemente unutar .lecture-details
document.querySelectorAll(".lecture-details h3").forEach((h3) => {
  lecturesObserver.observe(h3);
});

document.querySelectorAll(".lecture-details span").forEach((span) => {
  lecturesObserver.observe(span);
});
