document.addEventListener("DOMContentLoaded", function () {
    const departments = [
        {
            name: "General Department",
            staff: "Senior Lecturer: SYED MIAN HUSSAIN"
        },
        {
            name: "Computer Engineering (CME)",
            staff: "Head of the Department: Sri. P. Sreenivasulu"
        },
        {
            name: "Electronics and Communication Engineering (ECE)",
            staff: "Senior Lecturer: SIBBALA SUJATHA"
        },
        {
            name: "Electrical and Electronics Engineering (EEE)",
            staff: "Head of the Department: Sri. CH. SUBBANNA"
        },
        {
            name: "Mechanical Engineering (ME)",
            staff: "Senior Lecturer: R.NAGARATHANA"
        }
    ];

    const departmentList = document.getElementById("department-list");

    departments.forEach(department => {
        const departmentCard = document.createElement("div");
        departmentCard.classList.add("department-card");

        const departmentName = document.createElement("h3");
        departmentName.textContent = department.name;

        const departmentStaff = document.createElement("p");
        departmentStaff.textContent = department.staff;

        departmentCard.appendChild(departmentName);
        departmentCard.appendChild(departmentStaff);
        departmentList.appendChild(departmentCard);
    });
});
