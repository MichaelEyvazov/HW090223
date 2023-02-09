export class SalaryFormReader {
    firstName;
    lastName;
    monthlySalary;
    pensionMoney;
    educationFund;
    constructor(id) {
        const root = document.querySelector('#' + id);
        this.firstName = root.querySelector('.firstName').value;
        this.lastName = root.querySelector('.lastName').value;
        this.monthlySalary = root.querySelector('.monthlySalary').value;
        this.pensionMoney = root.querySelector('.pensionMoney').value;
        this.educationFund = root.querySelector('.educationFund').value;
    }
}