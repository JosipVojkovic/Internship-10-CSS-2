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
