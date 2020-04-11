/**
 * @brief if we're not on top of the page apply white background to navbar
 */
function addBackground() {
  window.pageYOffset > 0
    ? $(".navbar").addClass("bg-white")
    : $(".navbar").removeClass("bg-white");
}

/**
 *
 * @param { event object } e
 * @param { string } classNameOne
 * @param { string } classNameTwo
 * @brief toggles classes for switching between sections
 */
function toggleClasses(e, classNameOne, classNameTwo) {
  e.preventDefault();
  $("." + classNameOne)
    .toggleClass("not-visible")
    .toggleClass("h-0");
  $("." + classNameTwo)
    .toggleClass("not-visible")
    .toggleClass("h-0");
  $("." + classNameOne + "Btn").toggleClass("active");
  $("." + classNameTwo + "Btn").toggleClass("active");
}

/**
 * @brief applies event listeners for links in local nav
 */
function localNav() {
  $(".skillsBtn").click(function (e) {
    toggleClasses(e, "aboutMe", "skills");
  });
  $(".aboutMeBtn").click(function (e) {
    toggleClasses(e, "skills", "aboutMe");
  });
  $(".schoolProjectsBtn").click(function (e) {
    toggleClasses(e, "personalProjects", "schoolProjects");
  });
  $(".personalProjectsBtn").click(function (e) {
    toggleClasses(e, "schoolProjects", "personalProjects");
  });
}

function submitForm() {
  $(".send").click(function (e) {
    e.preventDefault();
    $("#email").val("");
    $("#msg").val("");
    $("#contact h2").text("Thank You");
  });
}

$(document).ready(function () {
  // on scroll run function
  window.onscroll = function () {
    addBackground();
  };
  // function for local navbar that switches between local sections
  localNav();

  // if link in nav is clicked user is moved to location
  $(".nav-list a")
    .not('[href="#"]') // just in case '#' condition
    .click(function (e) {
      e.preventDefault();

      const navbarHeight = $(".navbar").height();
      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - navbarHeight, // minus height of navbar
        },
        1000,
        "linear"
      );
    });

  // if navbar link is clicked check checkbox automatically after some delay
  const nav_list = document.querySelectorAll(".nav-list ul > *");
  const c_box = document.querySelector(".menu-checkbox");
  nav_list.forEach((el) => {
    el.addEventListener("click", () => {
      setTimeout(() => {
        c_box.checked = false;
      }, 600);
    });
  });

  submitForm();
});
