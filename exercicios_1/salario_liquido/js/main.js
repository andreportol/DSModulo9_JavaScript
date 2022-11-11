import Employee from "./models/employee.js";
import * as salaryService from "./services/salary-service.js"
//const data1 = document.getElementById("grossSalaryInput").value; // obtem o conteudo
//console.log(data1)


const data = document.getElementById("grossSalaryInput").innerHTML; // obtem o conteudo
const vetor_data = data.split('\n');// converte uma String em um vetor
const grossSalary = Number(vetor_data[1]) // obtém o número que está no array na posição 1

const employee = new Employee(vetor_data[0],grossSalary);
const netSalary = salaryService.netSalary(employee)



console.log(`Funcionário = ${employee.name}`);
console.log(`Salário bruto = ${employee.grossSalary.toFixed(2)}`);
console.log(`Salário líquido = ${netSalary.toFixed(2)}`);