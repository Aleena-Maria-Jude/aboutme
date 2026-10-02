
/* Show the current year in the footer */
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

/* Show a message when a project link is clicked */
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Thanks for exploring my portfolio!");
    });
});
