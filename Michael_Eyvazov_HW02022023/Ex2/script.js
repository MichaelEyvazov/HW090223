import {SalaryFormReader} from './salaryFormReader.js';
import {SalaryPercentageWriter} from './salaryPercentageWriter.js';

document.querySelector('button').addEventListener('click', () => {
    const reader = new SalaryFormReader('salaryForm');
    const writer = new SalaryPercentageWriter(reader);
    writer.writeHTML();
});