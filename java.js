$(document).ready(function() {
    // Sticky menu
    let menu = $("#header-menu");
    let menuOffset = menu.offset().top;
  
    $(window).on("scroll", function() {
      if ($(window).scrollTop() > menuOffset) {
        menu.addClass("sticky");
      } else {
        menu.removeClass("sticky");
      }
    });
  
    // Hamburger toggle
    $('#menu-toggle').click(function() {
    $('.menu ul').toggleClass('menu-opened');
    $('.menu').toggleClass('menu-opened');
  });
  
    // Scroll with offset animation
    $(".menu a[href^='#']").click(function(e) {
      e.preventDefault();
      let target = $(this.getAttribute("href"));
      if (target.length) {
        let offset = menu.outerHeight();
        $("html, body").animate({
          scrollTop: target.offset().top - offset
        }, 1000);
      }
    });
  
    // Titles on hover for small screens
    function toggleTitle() {
      if (window.innerWidth < 768) {
        $(".menu li a").each(function() {
          let span = $(this).find("span");       
          if (span.is(":hidden")) {
            $(this).attr("title", span.text());
          } else {
            $(this).removeAttr("title");
          }
        });
      } else {
        $(".menu li a").removeAttr("title");
      }
    }
    
    function toggleTitleForIcons() {
      $(".menu li a").each(function () {
        let span = $(this).find("span");
    
        // ak span nie je viditeľný (tzn. display: none)
        if (span.css("display") === "none") {
          $(this).attr("title", span.text());
        } else {
          $(this).removeAttr("title");
        }
      });
    }
    
    // Spusti pri načítani
    $(document).ready(function () {
      toggleTitleForIcons();
      $(window).resize(toggleTitleForIcons);
    });
  
    toggleTitle();
    $(window).resize(toggleTitle);
  });
  