let students = JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;

function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}


document.getElementById('registrationForm');
document.getElementById('nameInput');
document.getElementById('emailInput');
document.getElementById('rollnoInput');
document.getElementById('mobileNo');
document.getElementById('result');

const searchInput = document.getElementById("searchInput");
const form = document.querySelector("form");
const submitBtn = form.querySelector("button");

function getFilteredStudents(query) {
    query = query.toLowerCase();

    return students.filter(function (student) {
        return (
            student.name.toLowerCase().includes(query) ||
            student.roll.toLowerCase().includes(query)
        );
    });
}

function renderStudents(list = students) {
    result.innerHTML = "";

    if (students.length === 0) {
        result.style.display = "none";
        return;
    }

    list.forEach(function (student, index) {

        result.style.display = "block";

        result.innerHTML += `
        <div class="student-card">
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Roll No:</strong> ${student.roll}</p>
            <p><strong>Phone No:</strong> ${student.phone}</p>
            <button class ="edit-btn" onclick="editStudent(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
        </div>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    saveToLocalStorage();
    renderStudents();

    editIndex = -1;
    submitBtn.textContent = "Add Student";
}

function editStudent(index) {
    const student = students[index];

    nameInput.value = student.name;
    emailInput.value = student.email;
    rollnoInput.value = student.roll;
    mobileNo.value = student.phone;

    editIndex = index;
    submitBtn.textContent = "Update Student";
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

    if (editIndex === -1) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = -1;
    }

    saveToLocalStorage();
    renderStudents();

    submitBtn.textContent = "Add Student";


    nameInput.value = "";
    emailInput.value = "";
    rollnoInput.value = "";
    mobileNo.value = "";
});

searchInput.addEventListener("input", function () {
    const value = searchInput.value.trim();

    if (value === "") {
        renderStudents();
    } else {
        renderStudents(getFilteredStudents(value));
    }
});

renderStudents();
