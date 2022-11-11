import * as desconto from './pension-service.js';
import * as taxa from './tax-service.js';

export function netSalary(employee) {
    return employee.grossSalary - desconto.discount(employee.grossSalary) - taxa.tax(employee.grossSalary)
}
