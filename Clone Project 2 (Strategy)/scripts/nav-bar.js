// Select elements first (before any logic runs)
const hamburger = document.querySelector(".hamburger");
const NavBarContent = document.querySelector(".nav-bar__content ul");

const mainDropTrigger = document.querySelector(
  ".nav-bar__item--hover-state > .nav-bar__item--highlighted"
);
const mainDropMenu = document.querySelector(".nav-bar__item--hover-state > ul");
const downAngleTrigger = document.querySelector(
  ".nav-bar__item--hover-state > .nav-bar__item--highlighted"
);
const downAngle = document.querySelector(".nav-bar__down-angle i");

const deepDropTrigger = document.querySelector(
  ".nav-bar__deep-drop-down-container > .nav-bar__item--highlighted"
);
const deepDropMenu = document.querySelector(
  ".nav-bar__deep-drop-down-container > ul"
);
const deepDownAngle = deepDropTrigger.querySelector(".nav-bar__down-angle i");

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.contains("active");

  // Toggle hamburger + menu
  hamburger.classList.toggle("active");
  NavBarContent.classList.toggle("active");

  // If it was open and is now closing — reset everything
  if (isOpen) {
    setTimeout(() => {
      // Reset icons
      deepDownAngle.classList.remove("active");
      downAngle.classList.remove("active");
      // Close dropdowns
      deepDropMenu.classList.remove("active");
      mainDropMenu.classList.remove("active");
    }, 300);
  }
});

// Close everything on nav link click
document.querySelectorAll(".nav-bar__item a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    NavBarContent.classList.remove("active");
    downAngle.classList.remove("active");
    mainDropMenu.classList.remove("active");
    deepDropMenu.classList.remove("active");
    deepDownAngle.classList.remove("active");
  })
);

// Main dropdown toggle

mainDropTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  mainDropMenu.classList.toggle("active");
  downAngle.classList.toggle("active");
  //Close deep drop down if main drop down is closed
  if (
    !downAngle.classList.contains("active") &&
    !mainDropMenu.classList.contains("active")
  ) {
    deepDownAngle.classList.remove("active");
    deepDropMenu.classList.remove("active");
  }
});

// Deep dropdown toggle
deepDropTrigger.addEventListener("click", (e) => {
  e.stopPropagation();
  deepDropMenu.classList.toggle("active");
  deepDownAngle.classList.toggle("active");
});
