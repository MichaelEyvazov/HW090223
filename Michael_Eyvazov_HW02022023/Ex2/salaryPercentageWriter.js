export class SalaryPercentageWriter {
    #reader;
    constructor(reader) {
        this.#reader = reader;
    }

    writeHTML() {
        this.getFinalySalary();
        this.calculateDeductions();
        document.getElementById('output').innerText = `
            First name: ${this.#reader.firstName},
            Last name: ${this.#reader.lastName},
            Pension percentage: ${this.#reader.pensionMoney},
            Education fund percentage: ${this.#reader.educationFund},
            Net salary: ${this.#reader.monthlySalary},
        `;
    }
    
    getFinalySalary() {
        switch (true) {
            case this.#reader.monthlySalary <= 6790:
                return this.#reader.monthlySalary * (1 - .10);
            case this.#reader.monthlySalary <= 9730:
                return this.#reader.monthlySalary * (1 - .14);
            case this.#reader.monthlySalary <= 15620:
                return this.#reader.monthlySalary * (1 - .20);
            case this.#reader.monthlySalary <= 21710:
                return this.#reader.monthlySalary * (1 - .31);
            case this.#reader.monthlySalary <= 45180:
                return this.#reader.monthlySalary * (1 - .35);
            case this.#reader.monthlySalary <= 58190:
                return this.#reader.monthlySalary * (1 - .47);
            case this.#reader.monthlySalary >= 58190:
                return this.#reader.monthlySalary * (1 - .50);
        }
        console.log(this.#reader.monthlySalary);
    }
    calculateDeductions() {
        let pensionMoney = this.#reader.monthlySalary / 100 * this.#reader.pensionMoney;
        let educationFund = this.#reader.monthlySalary / 100 * this.#reader.educationFund;
        this.#reader.monthlySalary = this.#reader.monthlySalary - pensionMoney - educationFund;
        // consoleog(this.#reader.totalSalary);
        // console.log(.l"pensionMoney: " + pensionMoney);
        // console.log("educationFund: " + educationFund);
    }
}