export class SalaryFormReader {
    firstName;
    lastName;
    monthlySalary;
    constructor(id) {
        const root = document.querySelector('#' + id);
        this.firstName = root.querySelector('.firstname').value;
        this.lastName = root.querySelector('.lastname').value;
        this.monthlySalary = root.querySelector('.monthlySalary').value;
    }
}