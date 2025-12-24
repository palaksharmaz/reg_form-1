document.getElementById('registrationForm');
document.getElementById('nameInput');
document.getElementById('emailInput');
document.getElementById('rollnoInput');
document.getElementById('mobileNo');
document.getElementById('result');

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const rollValue = rollnoInput.value.trim();
    const PNo = mobileNo.value.trim();

    if (nameValue === "" || emailValue === "" || rollValue === "" || PNo === "") {
        result.innerHTML = "<p style='color:red'>All fields are required</p>"
        return;
    }

    result.style.display = "block";
    result.innerHTML = "";
    result.innerHTML = `
    <p><strong>Name:</strong> ${nameValue}</p>
    <p><strong>Email:</strong> ${emailValue}</p>
    <p><strong>Roll No:</strong> ${rollValue}</p>
    <p><strong>Phone No.:</strong>${PNo}</p>
    `;

    nameInput.value = "";
    emailInput.value = "";
    rollnoInput.value = "";
});