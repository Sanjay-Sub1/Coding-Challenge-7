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

//Used to display the array "Comapny"
console.log(company);
