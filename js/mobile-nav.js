const mobileNav = () => {
  const menuBtn = document.querySelector(".toggle-menu-btn");
  const closeMenuBtn = menuBtn.querySelector(".icon-close");
  const openMenuBtn = menuBtn.querySelector(".icon-hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = mobileNav.querySelectorAll(".mobile__nav-link");
  const html = document.documentElement;

  const toggleMenu = () => {
    const isOpen = mobileNav.classList.toggle("mobile-nav-visible");

    html.style.overflowY = isOpen ? "hidden" : "auto";
    openMenuBtn.classList.toggle("hidden", isOpen);
    closeMenuBtn.classList.toggle("visible", isOpen);
  };

  mobileLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  menuBtn.addEventListener("click", toggleMenu);
};

export default mobileNav;
