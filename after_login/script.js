const dropbtn = document.querySelector(".dropbtn");
const dropDownContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", function() {
    if (dropDownContent.style.display === "block") {
        dropDownContent.style.display = "none";
    } else {
        dropDownContent.style.display = "block";
    }
});
