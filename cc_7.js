//Task 1 creates an object company which has departments, employees, and their salaries, as well as a hierarchy through subordinate arrays
const company = {
    departments: [
        {
            departmentName: 'Marketing',
            employees: [
                {
                    name: 'Sanjay',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Jorge',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charles',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Leila',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Jai',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Karson',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Gabe',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

//Task 2 creates a function that can calculate the total salary of a department
function calculateDepartmentSalary(department) {
//Sets the department salary to 0 
    var departmentSalary = 0;
//Adds the employee salary of each employee in the department
    for (const employee of department.employees) {
        departmentSalary += employee.salary;
//Adds the suboordinate salary
        if (employee.subordinates && employee.subordinates.length > 0) {
            departmentSalary += calculateDepartmentSalary({employees: employee.subordinates });
        }
    }

    console.log(departmentSalary);
}

//Task 3 Creates a function that can calculate the total salaries across all departments
function calculateCompanysalary(company){
//Sets the total to 0
    var totalSalary = 0;
//Runs the calculateDepartmentSalary and adds it to the total
    for(const department of company.departments){
        totalSalary += calculateDepartmentSalary(department);
    }
console.log(totalSalary);
}

calculateCompanysalary(company);

//Used to display the array "Comapny"
console.log(company);

//Used to see the total salary of the first department "Marketing"
calculateDepartmentSalary(company.departments[0]);

//Used to display the total salary of the company
calculateTotalSalary(comapny);
