// const menu = $(".menu-container");

// function getScale(matrix) {
//   const values = matrix.split("(")[1].split(")")[0].split(",");
//   return values[0] ? values[0] : "0";
// }

// menu.click(() => {
//   const bubble = $(".bubble");
//   $(".bubble").css("visibility") === "hidden"
//     ? $(".bubble").css("visibility", "visible")
//     : $(".bubble").css("visibility", "hidden");

//   getScale($(".bubble").css("transform")) === "500"
//     ? $(".bubble").css("transform", "scale(0)")
//     : $(".bubble").css("transform", "scale(500)");

//   setTimeout(() => {
//     $(".nav-list").toggleClass("visible").toggleClass("not-visible");
//     $(".scrollDown").toggleClass("visible").toggleClass("not-visible");
//   }, 500);
//   $.each($(".menu-icon > span"), function (index, value) {
//     value.classList.toggle("bg-white");
//     value.classList.toggle("bg-black");
//   });
// });

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
