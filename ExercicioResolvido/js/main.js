import * as salario from './services/salary-service.js';
import Employee from './models/employee.js';

// data está no formato de vetor e os elementos são Strings
const data = document.getElementById("info").innerHTML.split("\n");

const Andre = new Employee(data[0], Number(data[1]))


console.log(`Andre = ${Andre.name}`)
console.log(`Salário bruto = ${Andre.grossSalary}`)
console.log(`Salário liquido = ${salario.netSalary(Andre)}`)








