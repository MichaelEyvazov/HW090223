export class SalaryPercentageWriter {
    #reader;
    constructor(reader) {
        this.reader = reader;

    }
    #getFinalySalary() {
        let salary = this.reader.monthlySalary;
        switch (true) {
            case salary <= 6790:
                return salary * (1 - .10);
            case salary <= 9730:
                return salary * (1 - .14);
            case salary <= 15620:
                return salary * (1 - .20);
            case salary <= 21710:
                return salary * (1 - .31);
            case salary <= 45180:
                return salary * (1 - .35);
            case salary <= 58190:
                return salary * (1 - .47);
            case salary >= 21710:
                return salary * (1 - .50);
        }
    }
    writeHTML() {
        document.querySelector('#output').innerText = `Final Salary:${this.#getFinalySalary()}`
    }
}