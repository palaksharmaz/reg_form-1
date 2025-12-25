let students = [];

document.getElementById('registrationForm');
document.getElementById('nameInput');
document.getElementById('emailInput');
document.getElementById('rollnoInput');
document.getElementById('mobileNo');
document.getElementById('result');

const form = document.querySelector("form");

function renderStudents() {
    result.innerHTML = "";

    if (students.length === 0) {
        result.style.display = "none";
        return;
    }

    students.forEach(function (student, index) {

        result.style.display = "block";

        result.innerHTML += `
        <div class="student-card">
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Roll No:</strong> ${student.roll}</p>
            <p><strong>Phone No:</strong> ${student.phone}</p>
            <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
        </div>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

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

    let student = {
        name: nameValue,
        email: emailValue,
        roll: rollValue,
        phone: PNo
    };

    students.push(student);

    console.log(students);

    renderStudents();


    nameInput.value = "";
    emailInput.value = "";
    rollnoInput.value = "";
    mobileNo.value = "";
});