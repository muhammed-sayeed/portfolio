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
  contactMessage = document.getElementById("contact-message"),
  submitButon = document.getElementById("submitbutton");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");
    contactMessage.textContent = "Write all the input fields";

    setTimeout(() => {
      contactMessage.textContent = "";
      contactMessage.classList.remove("color-red");
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_21ocdv9",
        "template_5gsu3ux",
        "#contact-form",
        "gAkol4G6mWusWarVc"
      )
      .then(() => {
        contactMessage.classList.add("color-blue");
        contactMessage.textContent = "message sent ✔";

        contactName.value = '';
        contactEmail.value = '';
        contactProject.value = '';

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 4000);
      });
  }
};

submitButon.addEventListener("click", sendEmail);

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
  `.home__data, .project-section, .footer__container, .services__container,.contact__container`
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
    name: "Bun Club",
    category: "Static",
    video: "/assets/videos/Bun Club.mp4",
    link: "http://codforum.site",
    description: 'Responsive Bakery Website Design Using HTML CSS And JavaScript. Contains animations when scrolling'
  },
  {
    name: "casttillo",
    category: "js",
    video: "/assets/videos/Bun Club.mp4",
    link: "http://casttillo.co",
    description: 'Casttillo is a e-commerce platform developed using Node.js, MongoDB and template engines'
  },
  {
    name: "Netflix",
    category: "api",
    video: "/assets/videos/Bun Club.mp4",
  },
];

revealProject();

function displayProjects(category) {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.innerHTML = "";

  projects.forEach((project) => {
    if (category === "all" || project.category === category) {
      const projectCard = document.createElement("a"); // Create an anchor element for the project link
      projectCard.href = project.link; // Set the href attribute to the project link
      projectCard.target = "_blank"; // Add target="_blank" to open links in a new tab

      const projectCardContainer = document.createElement("span");
      projectCardContainer.classList.add("project-card");

      const projectImage = document.createElement("iframe");
      projectImage.src = project.video;
      projectImage.alt = project.name;

      const projectInfo = document.createElement("div");
      projectInfo.classList.add("project-info");
      projectInfo.innerHTML = `<h3>${project.name}</h3>`;

      projectCardContainer.appendChild(projectImage);
      projectCardContainer.appendChild(projectInfo);
      projectCard.appendChild(projectCardContainer);

      projectContainer.appendChild(projectCard);
    }
  });
  revealProject();
}

const jsFilterButton = document.getElementById("js-filter");
const dsFilterButton = document.getElementById("ds-filter");
const apiFiterButton = document.getElementById("api-filter");
const fullFilterButton = document.getElementById("full-filter");
const allFilterButton = document.getElementById("all-filter");

jsFilterButton.addEventListener("click", () => {
  displayProjects("js");
  jsFilterButton.classList.add("active-button");
  dsFilterButton.classList.remove("active-button");
  allFilterButton.classList.remove("active-button");
  apiFiterButton.classList.remove("active-button");
  fullFilterButton.classList.remove("active-button")
});

dsFilterButton.addEventListener("click", () => {
  displayProjects("ds");
  jsFilterButton.classList.remove("active-button");
  dsFilterButton.classList.add("active-button");
  allFilterButton.classList.remove("active-button");
  apiFiterButton.classList.remove("active-button");
  fullFilterButton.classList.remove("active-button")
});

apiFiterButton.addEventListener("click", ()=>{
  displayProjects("api");
  jsFilterButton.classList.remove("active-button");
  dsFilterButton.classList.remove("active-button");
  allFilterButton.classList.remove("active-button");
  apiFiterButton.classList.add("active-button")
})

fullFilterButton.addEventListener("click", ()=>{
  displayProjects("fullstack")
  jsFilterButton.classList.remove("active-button");
  dsFilterButton.classList.remove("active-button");
  allFilterButton.classList.remove("active-button");
  apiFiterButton.classList.remove("active-button");
  fullFilterButton.classList.add("active-button")
})

allFilterButton.addEventListener("click", () => {
  displayProjects("all");
  jsFilterButton.classList.remove("active-button");
  dsFilterButton.classList.remove("active-button");
  allFilterButton.classList.add("active-button");
  apiFiterButton.classList.remove("active-button");
  fullFilterButton.classList.remove("active-button")
});

displayProjects("all");

// ====================== WATSAPP =============================
const whatsappButton = document.getElementById("watsapp-button");

whatsappButton.addEventListener("click", () => {
  const phoneNumber = "8138846225"; // Replace with your phone number
  const message = "Hello! Muhammed sayeed";

  // Generate the WhatsApp URL
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  // Open the WhatsApp chat in a new tab
  window.open(whatsappURL, "_blank");
});
