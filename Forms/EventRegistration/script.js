const inputFirstName = document.querySelector(".label--fname");
const inputLastName = document.querySelector(".label--lname");
const inputMobile = document.querySelector(".input--mobile");
let inputGender = document.querySelector('input[name = "Gender"]:checked');
const options = document.querySelectorAll('.Option');
const genderOptions = document.querySelectorAll('.genOpt');

console.log(inputGender);

// function optionActive() {
    
// }

for(const gender of genderOptions){
    gender.addEventListener('click', function(){
        console.log(gender)
    })
}

// document.querySelectorAll('.genOpt').addEventListener('click', function () {
//     console.log(inputGender.value);
// });

// console.log(genderOptions);
// const  = document.querySelector(".");
// const  = document.querySelector(".");

// const  = document.querySelector(".");
// const  = document.querySelector(".");
// const  = document.querySelector(".");