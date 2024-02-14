///////////////////////////////////////////////////
// Mobile Navigation
const btnEl = document.querySelector(".btn-nav");
const btnToogle = document.querySelector(".navigation");
btnEl.addEventListener("click", function () {
  btnToogle.classList.toggle("nav-open");
});
///////////////////////////////////////////////////
// Compiler HTML input code in Textarea
const inputCode = document.querySelector(".input-text-area");
inputCode.textContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body> </body>
</html>`;

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });

      // Close mobile navigation
      if (link.classList.contains("navigation-links"))
        btnToogle.classList.toggle("nav-open");
    }
    // For links to other pages, let the default behavior happen
  });
});
///////////////////////////////////////////////////////////
// Accordion
const accordionItems = document.querySelectorAll(".item");
accordionItems.forEach((item) => {
  const btnAccordion = item.querySelector(".accordion-cursor");
  btnAccordion.addEventListener("click", function () {
    item.classList.toggle("open");
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
// Cookies
const cookiesText = document.querySelector(".cookies-container-main-text");
cookiesText.textContent = '"We are using cookies for better Experience"';
const cookiesAllowButton = document.querySelector(".btn-allow-cookie");
cookiesAllowButton.textContent = "Allow cookies";
const cookies = document.querySelector(".cookies");
const btnAllowCookies = document.querySelector(".btn-allow-cookie");
btnAllowCookies.addEventListener("click", function () {
  cookies.style.opacity = "0";
  cookies.style.visibility = "hidden";
  cookies.style.pointerEvents = "none";
});

///////////////////////////////////////////////////////////
// Offline/Online mode preferences
const offlineText = document.querySelector(".offline-mode-container-text");
offlineText.textContent = "You are offline";
const headerContainer = document.querySelector(".header-container");
const offlineMode = document.querySelector(".offline-mode");
const headerClass = document.querySelector(".header");
headerClass.prepend(offlineMode);
addEventListener("offline", function () {
  offlineMode.style.display = "block";
  headerContainer.style.marginTop = "2rem";
});
addEventListener("online", function () {
  offlineMode.style.display = "none";
  headerContainer.style.marginTop = "0";
});

////////////////////////////////////////////////////////////////
// Tabbed section
// const tabbedLink = document.querySelectorAll(".tab-link");
// tabbedLink.addEventListener("click", function (e) {
//   e.preventDefault();
// });
const tabbedLink = document.querySelector(".tab-link");
tabbedLink.addEventListener("click", function (e) {
  e.preventDefault();
});
const tab1 = document.querySelector(".tab--1");
const tab2 = document.querySelector(".tab--2");
const tab3 = document.querySelector(".tab--3");
const addActive1 = document.querySelector(".active-text--1");
const addActive2 = document.querySelector(".active-text--2");
const addActive3 = document.querySelector(".active-text--3");
tab1.addEventListener("click", function () {
  addActive1.classList.add("active-text");
  addActive2.classList.remove("active-text");
  addActive3.classList.remove("active-text");
});
tab2.addEventListener("click", function () {
  addActive2.classList.add("active-text");
  addActive1.classList.remove("active-text");
  addActive3.classList.remove("active-text");
});
tab3.addEventListener("click", function () {
  addActive3.classList.add("active-text");
  addActive2.classList.remove("active-text");
  addActive1.classList.remove("active-text");
});

///////////////////////////////////////////////////////
// Reveal section os scroll
const allSections = document.querySelectorAll("section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
});
