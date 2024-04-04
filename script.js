let employees = [];

const form = document.getElementById('employee-form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
const employeeList = document.getElementById('employee-list');
const noEmployeesMsg = document.getElementById('no-employees-msg');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = parseInt(document.getElementById('age').value);

    if (name === '' || profession === '' || isNaN(age)) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    } else {
        const newEmployee = {
            id: employees.length + 1,
            name: name,
            profession: profession,
            age: age
        };

        employees.push(newEmployee);
        renderEmployees();
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    }
});

function renderEmployees() {
    employeeList.innerHTML = '';
    if (employees.length === 0) {
        noEmployeesMsg.style.display = 'block'; 
    } else {
        noEmployeesMsg.style.display = 'none'; 
        employees.forEach(function(employee) {
            const employeeContainer = document.createElement('div');
            employeeContainer.classList.add('employee-container');
            const employeeDiv = document.createElement('div');
            employeeDiv.classList.add('employee');
            const employeeDetails = document.createElement('p');
            employeeDetails.innerHTML = `${employee.id}. Name: ${employee.name} | Profession: ${employee.profession} | Age: ${employee.age}`;
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = function() {
                deleteEmployee(employee.id);
            };
            employeeDiv.appendChild(employeeDetails);
            employeeDiv.appendChild(deleteBtn);
            employeeContainer.appendChild(employeeDiv);
            employeeList.appendChild(employeeContainer);
        });
    }
}

function deleteEmployee(id) {
    employees = employees.filter(function(employee) {
        return employee.id !== id;
    });
    if (employees.length === 0) {
        noEmployeesMsg.style.display = 'block';
    }
    renderEmployees();
}


