/* Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have 
    this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"**/


const inputname = document.querySelector("#name");
const inputlastName = document.querySelector("#lastName");
const inputemail = document.querySelector("#email");
const inputpassword = document.querySelector("#password");
const bttnsubmit = document.querySelector("#submit");

const errMessageN = document.querySelector(".errMessageN");
const errMessageL = document.querySelector(".errMessageL");
const errMessageE = document.querySelector(".errMessageE");
const errMessageP = document.querySelector(".errMessageP");


function messageError(input, errorMessage, nameinput) {
  input.oninvalid = (event) => {
    errorMessage.textContent = `${nameinput} cannot be empty`
    input.attributes[1].textContent = "";
    event.preventDefault();
  }
}
messageError(inputname, errMessageN, "First Name");
messageError(inputlastName, errMessageL, "Last Name");
messageError(inputpassword, errMessageP, "Password");

function messageErrorEmail() {
  inputemail.oninvalid = (event) => {
    errMessageE.textContent = "Looks like this is not an email"
    inputemail.attributes[1].textContent = "";
    event.preventDefault();
  }
}
messageErrorEmail();

