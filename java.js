//spustenie po nacitani stranky
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("header-menu");
  const menuOffset = menu.offsetTop;
  const menuLinks = document.querySelectorAll("#header-menu a[href^='#']");
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = menu.querySelector("ul");

//hladky prechod
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
//rozbalovanie menu pri zmenseni
  menuToggle.addEventListener("click", function () {
    menuList.classList.toggle("menu-opened");
    menu.classList.toggle("menu-opened");
  });
});
