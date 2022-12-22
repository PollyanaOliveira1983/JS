import * as taxService from './tax-service.js';
import * as pensionService from './pension-service.js';

export function netSalary(employee) {

    const tax = taxService.tax(employee.grossSalary);
    const pension = pensionService.discount(employee.grossSalary);

    return employee.grossSalary - tax - pension;
   
}