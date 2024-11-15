const departments = [
  { name: "General Department" },
  { name: "Computer Engineering (CME)" },
  { name: "Electrical & Electronics Engineering (EEE)" },
  { name: "Electronics & Communication Engineering (ECE)" },
  { name: "Mechanical Engineering (M)" }
];

function loadDepartments() {
  const departmentsList = document.getElementById('departments-list');

  departments.forEach(department => {
    const li = document.createElement('li');
    li.textContent = department.name;
    departmentsList.appendChild(li);
  });
}

window.onload = loadDepartments;
