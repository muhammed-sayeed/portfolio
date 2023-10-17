// ===== SHOW MENU ===========

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ============== EMAIL JS ==============
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail === "" ||
    contactProject === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Write all the input fields";
  } else {
    emailjs.sendForm("", "", "", "");
  }
};

contactForm.addEventListener("submit", sendEmail);

// ===================SCROLL SECTION ACTIVATE LINK============
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// ================== SHWO SCROLL-UP ================
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// ================= DARK-LIGHT THEME =================

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ============== CHANGE BACKGROUND HEADER =========
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// =================== SCROLL REVEAL ===================
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(
  `.home__data, .project-section, .footer__container, .services__container`
);
sr.reveal(`.home__info div`, { delay: 600, origin: "bottom", interval: 100 });
sr.reveal(`.skills__content:nth-child(1), contact__content:nth-child(1)`, {
  origin: "left",
});
sr.reveal(`.skills__content:nth-child(2), contact__content:nth-child(2)`, {
  origin: "right",
});

function revealProject() {
  sr.reveal(".project-card", {
    interval: 150,
    origin: "bottom",
  });
}

//-------------=====================----------------
const projects = [
  {
    name: "Project 1",
    category: "js",
  },
  {
    name: "Project 2",
    category: "ds",
  },
  {
    name: "Project 3",
    category: "js",
  },
  {
    name: "Project 4",
    category: "js",
  },
  {
    name: "Project 5",
    category: "js",
  },
  {
    name: "Project 6",
    category: "js",
  },
];

revealProject();

function displayProjects(category) {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.innerHTML = "";

  projects.forEach((project) => {
    if (category === "all" || project.category === category) {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project-card");
      projectElement.textContent = project.name;
      projectContainer.appendChild(projectElement);
    }
  });
  revealProject();
}

const jsFilterButton = document.getElementById("js-filter");
const dsFilterButton = document.getElementById("ds-filter");
const allFilterButton = document.getElementById("all-filter");

jsFilterButton.addEventListener("click", () => {
  displayProjects("js");
});

dsFilterButton.addEventListener("click", () => {
  displayProjects("ds");
});

allFilterButton.addEventListener("click", () => {
  displayProjects("all");
});

displayProjects("all");
