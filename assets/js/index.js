// SKIP INTRO ANIMATION CONSTANTS

const skipBtn = document.querySelector(".skip-btn");
const introContainer = document.querySelector(".container");
// const portfolioContainer = document.querySelector(".portfolio-container");
const copyright = document.querySelector(".copyright");
const navLine = document.querySelector(".line");
const socialContainer = document.querySelector(".social-container");
const navContainer = document.querySelector(".nav-container");

// SKIP PORTFOLIO CONSTANTS

const portfolioContainer = document.querySelector(".portfolio-container");
const portfolioTitle = document.querySelector(".portfolio-title");
const portfolioSubtitle = document.querySelector(".subtitle-portfolio");
const portfolioArrow = document.querySelector(".portfolio-arrow");
const portfolioArrowCircle = document.querySelector(".portfolio-arrow-circle");
const portfolioChevron = document.querySelector(".portfolio-chevron");
// const aboutTextContainer = document.querySelector(".about-text-container");
// const aboutTitle = document.querySelector(".about-title");
// const aboutLink = document.querySelector(".about-link");

// ABOUT CONSTANTS

const aboutContainer = document.querySelector(".about-container");
const aboutTextContainer = document.querySelector(".about-text-container");
const aboutTitle = document.querySelector(".about-title");
const aboutArrow = document.querySelector(".about-arrow");
const aboutArrowCircle = document.querySelector(".about-arrow-circle");
const aboutChevron = document.querySelector(".about-chevron");
const aboutLink = document.querySelector(".about-link");

// RESUME CONSTANTS

const resumeContainer = document.querySelector(".resume-container");
const resumeTitle = document.querySelector(".resume-title");
const skillsContainer = document.querySelector(".skills-container");
const htmlLevel = document.querySelector(".html-level");
const cssLevel = document.querySelector(".css-level");
const scssLevel = document.querySelector(".scss-level");
const jsLevel = document.querySelector(".js-level");
const nodeLevel = document.querySelector(".node-level");
const reactLevel = document.querySelector(".react-level");
const gitLevel = document.querySelector(".git-level");
const githubLevel = document.querySelector(".github-level");
const psdLevel = document.querySelector(".psd-level");
const aiLevel = document.querySelector(".ai-level");
const idLevel = document.querySelector(".id-level");
const formationContainer = document.querySelector(".formation-container");
const experienceContainer = document.querySelector(".experience-container");
const resumeArrow = document.querySelector(".resume-arrow");
const resumeArrowCircle = document.querySelector(".resume-arrow-circle");
const resumeChevron = document.querySelector(".resume-chevron");
const resumeLink = document.querySelector(".resume-link");

// WORKS CONSTANTS

const worksContainer = document.querySelector(".works-container");
const worksTitle = document.querySelector(".works-title");
const projectsWrapper = document.querySelector(".projects-wrapper");
const website1 = document.querySelector(".website1");
const website2 = document.querySelector(".website2");
const website3 = document.querySelector(".website3");
const underlineTop = document.querySelector(".underline-top");
const underlineBottom = document.querySelector(".underline-bottom");
const scrollDotLeft = document.querySelector(".scroll-dot-left");
const scrollDotRight = document.querySelector(".scroll-dot-right");
const chevronSlider = document.querySelector(".chevron-slider");
const worksLink = document.querySelector(".works-link");

// console.log(chevronSlider);

// -------------------------------------------------------------------------------

// SKIP INTRO ANIMATION

skipBtn.addEventListener("click", () => {
  introContainer.classList.add("intro-hidden");
  portfolioContainer.classList.add("skip-text-animation");
  portfolioArrow.classList.add("skip-text-animation");
  copyright.classList.add("skip-text-animation");
  navLine.classList.add("skip-line-animation");
  socialContainer.classList.add("skip-text-animation");
  navContainer.classList.add("skip-text-animation");
});

// SKIP PORTFOLIO CONTAINER TO ABOUT CONTAINER

portfolioArrow.addEventListener("click", () => {
  // portfolioArrowCircle.classList.add("portfolio-arrow-circle-hidden");
  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  // portfolioChevron.classList.add("portfolio-chevron-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  // portfolioArrow.classList.add("arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");
  // portfolioContainer.classList.add("section-container-slide-up");
  aboutTextContainer.classList.add("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up");
  aboutArrow.classList.add("about-arrow-slide-up");
  aboutLink.classList.add("navLink-visited");
});

aboutLink.addEventListener("click", () => {
  // portfolioArrowCircle.classList.add("portfolio-arrow-circle-hidden");
  portfolioArrowCircle.classList.add("arrow-circle-hidden");
  // portfolioChevron.classList.add("portfolio-chevron-hidden");
  portfolioChevron.classList.add("chevron-hidden");
  portfolioArrow.classList.add("portfolio-arrow-slide-up");
  portfolioTitle.classList.add("portfolio-title-slide-up");
  portfolioSubtitle.classList.add("subtitle-container-slide-up");
  portfolioContainer.classList.add("portfolio-container-slide-up");
  aboutTextContainer.classList.add("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up");
  aboutArrow.classList.add("about-arrow-slide-up");
  aboutLink.classList.add("navLink-visited");
  // ******************************************************************
  // aboutArrowCircle.classList.remove("arrow-circle-hidden");
  // aboutChevron.classList.remove("chevron-hidden");
  // aboutTextContainer.classList.remove("text-container-slide-up2");
  // aboutTitle.classList.remove("about-title-slide-up2");
  // aboutContainer.classList.remove("about-container-slide-up");
  // skillsContainer.classList.remove("skills-container-slide-up");
  // htmlLevel.classList.remove("skill-level-full-width");
  // cssLevel.classList.remove("skill-level-full-width");
  // scssLevel.classList.remove("skill-level-full-width");
  // jsLevel.classList.remove("skill-level-full-width");
  // nodeLevel.classList.remove("skill-level-full-width");
  // reactLevel.classList.remove("skill-level-full-width");
  // gitLevel.classList.remove("skill-level-full-width");
  // githubLevel.classList.remove("skill-level-full-width");
  // psdLevel.classList.remove("skill-level-full-width");
  // aiLevel.classList.remove("skill-level-full-width");
  // idLevel.classList.remove("skill-level-full-width");
  // formationContainer.classList.remove("formation-container-slide-up");
  // experienceContainer.classList.remove("experience-container-slide-up");
  // resumeArrow.classList.remove("resume-arrow-slide-up");
  // resumeLink.classList.remove("navLink-visited");
});

// SKIP ABOUT CONTAINER TO EXPERIENCE CONTAINER

aboutArrow.addEventListener("click", () => {
  aboutArrowCircle.classList.add("arrow-circle-hidden");
  aboutChevron.classList.add("chevron-hidden");
  aboutTextContainer.classList.add("text-container-slide-up2");
  aboutTextContainer.classList.remove("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up2");
  aboutTitle.classList.remove("about-title-slide-up");
  aboutContainer.classList.add("about-container-slide-up");
  aboutLink.classList.remove("navLink-visited");
  resumeTitle.classList.add("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up");
  htmlLevel.classList.add("skill-level-full-width");
  cssLevel.classList.add("skill-level-full-width");
  scssLevel.classList.add("skill-level-full-width");
  jsLevel.classList.add("skill-level-full-width");
  nodeLevel.classList.add("skill-level-full-width");
  reactLevel.classList.add("skill-level-full-width");
  gitLevel.classList.add("skill-level-full-width");
  githubLevel.classList.add("skill-level-full-width");
  psdLevel.classList.add("skill-level-full-width");
  aiLevel.classList.add("skill-level-full-width");
  idLevel.classList.add("skill-level-full-width");
  formationContainer.classList.add("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up");
  resumeArrow.classList.add("resume-arrow-slide-up");
  resumeLink.classList.add("navLink-visited");
});

resumeLink.addEventListener("click", () => {
  aboutArrowCircle.classList.add("arrow-circle-hidden");
  aboutChevron.classList.add("chevron-hidden");
  aboutTextContainer.classList.add("text-container-slide-up2");
  aboutTextContainer.classList.remove("text-container-slide-up");
  aboutTitle.classList.add("about-title-slide-up2");
  aboutTitle.classList.remove("about-title-slide-up");
  aboutContainer.classList.add("about-container-slide-up");
  aboutLink.classList.remove("navLink-visited");
  resumeTitle.classList.add("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up");
  htmlLevel.classList.add("skill-level-full-width");
  cssLevel.classList.add("skill-level-full-width");
  scssLevel.classList.add("skill-level-full-width");
  jsLevel.classList.add("skill-level-full-width");
  nodeLevel.classList.add("skill-level-full-width");
  reactLevel.classList.add("skill-level-full-width");
  gitLevel.classList.add("skill-level-full-width");
  githubLevel.classList.add("skill-level-full-width");
  psdLevel.classList.add("skill-level-full-width");
  aiLevel.classList.add("skill-level-full-width");
  idLevel.classList.add("skill-level-full-width");
  formationContainer.classList.add("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up");
  resumeArrow.classList.add("resume-arrow-slide-up");
  resumeLink.classList.add("navLink-visited");
});

// SKIP EXPERIENCE CONTAINER TO WORKS CONTAINER

resumeArrow.addEventListener("click", () => {
  resumeArrowCircle.classList.add("arrow-circle-hidden");
  resumeChevron.classList.add("chevron-hidden");
  resumeTitle.classList.add("resume-title-slide-up2");
  resumeTitle.classList.remove("resume-title-slide-up");
  skillsContainer.classList.add("skills-container-slide-up2");
  skillsContainer.classList.remove("skills-container-slide-up");
  formationContainer.classList.add("formation-container-slide-up2");
  formationContainer.classList.remove("formation-container-slide-up");
  experienceContainer.classList.add("experience-container-slide-up2");
  experienceContainer.classList.remove("experience-container-slide-up");
  resumeContainer.classList.add("resume-container-slide-up");
  worksTitle.classList.add("works-title-slide-down");
  underlineTop.classList.add("underline-top-full-width");
  underlineBottom.classList.add("underline-bottom-full-width");
  website1.classList.add("website1-show");
  website2.classList.add("website2-show");
  website3.classList.add("website3-show");
  scrollDotLeft.classList.add("scroll-dot-show");
  scrollDotRight.classList.add("scroll-dot-show");
  chevronSlider.classList.add("chevron-slider-show");
  resumeLink.classList.remove("navLink-visited");
  worksLink.classList.add("navLink-visited");
});

// SLIDE CARROUSEL WORKS CONTAINER

// let scrollContainer = document.querySelector(".gallery-wrapper");
// let chevronLeft = document.querySelector(".fa-chevron-left");
// let chevronRight = document.querySelector(".fa-chevron-right");

// chevronLeft.addEventListener("click", () => {
//   scrollContainer.style.scrollBehavior = "smooth";
//   scrollContainer.scrollLeft += "100%";
// });

// **********************************************************************

// Sélection des éléments
const galleryWrapper = document.querySelector(".gallery-wrapper");
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");
const dots = document.querySelectorAll(".scroll-dot");

let currentIndex = 0; // Index actuel du slider
const totalSlides = document.querySelectorAll(".projects-wrapper").length;

// Fonction pour mettre à jour la position du slider
function updateSlider(index) {
  const offset = -index * 100; // Décalage en pourcentage
  galleryWrapper.style.transform = `translateX(${offset}%)`;

  // Mise à jour des indicateurs actifs
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Gestion des flèches
leftArrow.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  updateSlider(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  updateSlider(currentIndex);
});

// Gestion des dots (facultatif)
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider(currentIndex);
  });
});
