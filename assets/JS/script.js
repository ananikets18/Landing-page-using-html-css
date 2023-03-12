/* ===== DOM SELECTOR FOR NAV MENU  ===== */
const nav_menu = document.querySelector("#nav_menu");

/* ===== DOM SELECTOR FOR TOGGLE BUTTON  ===== */
const toggle_btn = document.querySelector("#toggle_nav");

/* ===== SHOW MENU FUNCTION ===== */
function showMenu() {
  nav_menu.classList.toggle("show");

  document.body.classList.toggle("stop_scroll");
}
/* ===== 'CLICK' EVENT ON TOGGLE BUTTON ===== */
toggle_btn.addEventListener("click", showMenu);

// ==== GSAP ANIMATIONS ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.2,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_nav_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

// ==== MAIN HEADING  ==== //
gsap.from(".hero_text", {
  opacity: 0,
  y: 20,
  delay: 2.6,
  duration: 1,
});
// ==== SUB-HEADING ==== //
gsap.from(".hero_subtext", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn", {
  opacity: 0,
  delay: 3,
  duration: 1,
});
// ==== STUDENT LIST IMAGE  ==== //
gsap.from(".student_list img", {
  opacity: 0,
  y: 10,
  delay: 3.2,
  duration: 0.5,
  stagger: 0.25,
});
// ==== STUDENT STATS TEXT ==== //
gsap.from(".students_stats_text", {
  opacity: 0,
  y: 20,
  delay: 3.4,
  duration: 1.5,
});
// ==== HERO IMAGE ==== //
gsap.from(".hero_img", {
  opacity: 0,
  y: 20,
  delay: 3.6,
  duration: 1,
});
// ==== STAT ITEM ==== //
gsap.from(".stat_item", {
  opacity: 0,
  y: 10,
  delay:4,
  duration: 0.5,
  stagger: 0.25,
});
