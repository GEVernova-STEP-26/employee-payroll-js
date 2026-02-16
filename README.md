# Employee Wage Management System

## Project Overview

The Employee Wage Management System is a structured JavaScript project that demonstrates Object-Oriented Programming (OOP) concepts and CRUD (Create, Read, Update, Delete) operations. It manages employee records with attributes such as employee ID, name, and salary using a clean modular architecture.

The project is implemented using pure JavaScript with Node.js and follows a layered structure separating model, data store, and service logic.

---

## Features

* Employee class using OOP design
* In-memory data storage
* Complete CRUD operations
* Service layer for business logic
* Modular folder structure
* Input validation and error handling
* Easy to extend into API or database-backed system

---

## Tech Stack

* JavaScript (ES6+)
* Node.js
* CommonJS modules (require / module.exports)
* No external dependencies

---

## Project Structure

```
EMPLOYEEWAGE/
│
├── data/
│   └── EmployeeData.js
│
├── model/
│   └── Employee.js
│
├── service/
│   └── EmployeeManager.js
│
├── app.js
└── README.md
```

---

## Module Description

### model/Employee.js

Defines the Employee class.

Properties:

* id — unique employee identifier
* name — employee full name
* salary — employee salary amount

Responsible only for representing the employee entity.

---

### data/EmployeeData.js

Acts as an in-memory datastore using an array. It simulates a database and stores employee objects during runtime.

Data resets when the application stops.

---

### service/EmployeeManager.js

Contains all business logic and CRUD operations for employees.

Methods:

* getAllEmployees()
  Returns the full employee list.

* getEmployeeById(id)
  Returns an employee matching the given ID.

* createEmployee(id, name, salary)
  Creates a new employee after checking for duplicate IDs.

* updateEmployee(id, updatedData)
  Updates employee name and/or salary fields.

* deleteEmployee(id)
  Removes an employee by ID.

Includes validation and error throwing for invalid operations.

---

### app.js

Application entry point used to test and demonstrate all CRUD operations. It creates employees, fetches records, updates data, deletes records, and logs outputs to the console.

---

## Data Model

Employee Object Structure:

```
{
  id: Number,
  name: String,
  salary: Number
}
```

---

## How to Run the Project

### Prerequisites

* Node.js version 14 or higher installed

### Steps

1. Ensure the folder structure matches the layout shown above
2. Open terminal in the EMPLOYEEWAGE project root directory
3. Run the application:

```
node app.js
```

---

## Example Operations Covered

The app.js file demonstrates:

* Creating multiple employees
* Fetching all employees
* Fetching employee by ID
* Updating employee salary
* Deleting an employee
* Handling duplicate IDs
* Handling missing employee errors

---

## Error Handling

The service layer throws errors when:

* Creating an employee with an existing ID
* Updating a non-existent employee
* Deleting a non-existent employee
* Searching with an invalid ID

Errors are caught and displayed in the main application flow.

---# employee-payroll-js
# employee-payroll-js
# employee-payroll-js
