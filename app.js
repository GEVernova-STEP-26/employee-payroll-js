/**
 * Application Entry Point
 * Demonstrates EmployeeManager operations
 */

const EmployeeManager = require("./service/EmployeeManager");

console.log("===== Employee Wage Management System =====");

const manager = new EmployeeManager();

try {
    const sampleEmployees = [
        { empId: 1, fullName: "Hrudaya", baseSalary: 300000 },
        { empId: 2, fullName: "Saptadipa", baseSalary: 120000 },
        { empId: 3, fullName: "Ashutosh", baseSalary: 155000 }
    ];

    // Add employees
    sampleEmployees.forEach(emp =>
        manager.addEmployee(emp.empId, emp.fullName, emp.baseSalary)
    );

    console.log("\n--- All Employees ---");
    console.table(manager.listEmployees());

    console.log("\n--- Fetch Employee (ID: 2) ---");
    console.log(manager.findEmployee(2));

    console.log("\n--- Updating Salary (ID: 2) ---");
    manager.modifyEmployee(2, { baseSalary: 165000 });
    console.log(manager.findEmployee(2));

    console.log("\n--- Removing Employee (ID: 1) ---");
    manager.removeEmployee(1);
    console.table(manager.listEmployees());

} catch (error) {
    console.error("\nApplication Error:", error.message);
}
