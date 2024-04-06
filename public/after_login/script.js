const dropbtn = document.querySelector(".dropbtn");
const dropbtnUp = document.querySelector(".bxs-chevron-up");
const dropbtnDown = document.querySelector(".bxs-chevron-down");
const dropDownContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", function() {
    if (dropDownContent.style.display === "block") {
        dropDownContent.style.display = "none";
        dropbtnUP.style.display = "none";
    } else {
        dropDownContent.style.display = "block";
        dropbtnDown.style.display = "none";
        dropbtnDown.style.display = "none";
    }
});