const myForm = document.getElementById("my-form");
const myInput = document.getElementById("my-input");
const myOutput = document.getElementById("result");

const myNumber = 34;

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
        if (myInput.value === myNumber){
    myOutput.innerHTML = "yes!"
    } else {
        myInput.value = "";
    }
})