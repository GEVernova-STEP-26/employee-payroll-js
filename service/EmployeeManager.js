const Employee = require("../model/Employee");
const employeeStore = require("../data/EmployeeData");

/**
 * Handles employee management operations
 */
class EmployeeManager {
    constructor() {
        this.employeeList = employeeStore;
    }

    addEmployee(empId, fullName, baseSalary) {
        if (this.employeeList.some(emp => emp.empId === empId)) {
            throw new Error(`Employee ID ${empId} already exists`);
        }

        const newEmployee = new Employee(empId, fullName, baseSalary);
        this.employeeList.push(newEmployee);

        return newEmployee;
    }

    findEmployee(empId) {
        const employee = this.employeeList.find(emp => emp.empId === empId);

        if (!employee) {
            throw new Error(`Employee with ID ${empId} not found`);
        }

        return employee;
    }

    modifyEmployee(empId, changes) {
        const employee = this.findEmployee(empId);

        if (changes.fullName !== undefined) {
            employee.fullName = changes.fullName;
        }

        if (changes.baseSalary !== undefined) {
            if (changes.baseSalary < 0) {
                throw new Error("Salary cannot be negative");
            }
            employee.baseSalary = changes.baseSalary;
        }

        return employee;
    }

    removeEmployee(empId) {
        const index = this.employeeList.findIndex(emp => emp.empId === empId);

        if (index === -1) {
            throw new Error(`Employee with ID ${empId} not found`);
        }

        return this.employeeList.splice(index, 1)[0];
    }

    listEmployees() {
        return [...this.employeeList];
    }
}

module.exports = EmployeeManager;
