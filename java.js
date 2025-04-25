document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("header-menu");
  const menuOffset = menu.offsetTop;
  const menuLinks = document.querySelectorAll("#header-menu a[href^='#']");
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = menu.querySelector("ul");

  // Sticky menu pri scrollovaní
  /*window.addEventListener("scroll", function () {
    if (window.scrollY > menuOffset) {
      menu.classList.add("sticky");
    } else {
      menu.classList.remove("sticky");
    }
  });*/

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const offset = menu.offsetHeight;
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  menuToggle.addEventListener("click", function () {
    menuList.classList.toggle("menu-opened");
    menu.classList.toggle("menu-opened");
  });

  toggleTitleForIcons();
  window.addEventListener("resize", toggleTitleForIcons);
});
