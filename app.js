$(".nav-list a")
  .not('[href="#"]')
  .click(function (e) {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000,
      "linear"
    );
  });

const nav_list = document.querySelectorAll(".nav-list ul > *");
const c_box = document.querySelector(".menu-checkbox");
nav_list.forEach((el) => {
  el.addEventListener("click", function () {
    setTimeout(function () {
      c_box.checked = false;
    }, 600);
  });
});
