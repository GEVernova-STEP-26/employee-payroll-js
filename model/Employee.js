class Employee {
    constructor(empId, fullName, baseSalary) {
        if (!empId || !fullName || baseSalary < 0) {
            throw new Error("Invalid employee details provided");
        }

        this.empId = empId;
        this.fullName = fullName;
        this.baseSalary = baseSalary;
    }
}

module.exports = Employee;
