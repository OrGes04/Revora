// Menu
(function () {
  var nav = document.querySelector("nav");
  var toggle = nav.querySelector(".menu-toggle");
  var menu = document.getElementById("menu");
  var icon = toggle.querySelector("i");
  var narrow = window.matchMedia("(max-width: 899px)");

  function setOpen(open, returnFocus) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    icon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    if (!open && returnFocus) toggle.focus();
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  nav.addEventListener("click", function (e) {
    if (e.target === nav) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false, true);
    }
  });

  narrow.addEventListener("change", function () {
    setOpen(false);
  });
})();

// FAQ accordion
(function () {
  var items = document.querySelectorAll("#accordion li");

  function setOpen(li, open) {
    var btn = li.querySelector(".faqq");
    var panel = li.querySelector(".content");
    li.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "";
  }

  items.forEach(function (li) {
    li.querySelector(".faqq").addEventListener("click", function () {
      var willOpen = !li.classList.contains("open");
      items.forEach(function (other) {
        if (other !== li) setOpen(other, false);
      });
      setOpen(li, willOpen);
    });
  });

  window.addEventListener("resize", function () {
    items.forEach(function (li) {
      if (li.classList.contains("open")) {
        var panel = li.querySelector(".content");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
})();
