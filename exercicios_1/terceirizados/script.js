const dados = [
  {
    nome: "Maria Silva",
    valorHora: 80.0,
    horasTrabalhadas: 20,
    terceirizado: true,
  },
  {
    nome: "João Rocha",
    valorHora: 60.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
  {
    nome: "Tiago James",
    valorHora: 80.0,
    horasTrabalhadas: 10,
    terceirizado: true,
  },
  {
    nome: "Ana Carla",
    valorHora: 70.0,
    horasTrabalhadas: 40,
    terceirizado: true,
  },
  {
    nome: "Pedro Paulo",
    valorHora: 50.0,
    horasTrabalhadas: 25,
    terceirizado: false,
  },
];


//---------------------------------------------------------------------------
// FUNCAO funcionariosTerceirizados
// Parâmetros:
// list: lista de funcionarios
// Efeito: retorna uma lista contendo somente os funcionários terceirizados
//---------------------------------------------------------------------------

function funcionariosTerceirizados(list) {
  const funcionarios = [];
  for( let i = 0; i < list.length; i++){
    if(list[i].terceirizado){
        funcionarios.push(list[i])
    }
  }
  return funcionarios
}

//---------------------------------------------------------------------------
// FUNCAO custoTotal
// Parâmetros:
//   list: lista de funcionarios
// Efeito: retorna um número representando o custo total dos funcionários
//---------------------------------------------------------------------------

function custoTotal(list) {
  let valor = 0;
  for(let i = 0; i < list.length; i++){
    valor = valor + (list[i].valorHora * list[i].horasTrabalhadas)
  }
  return valor;
}

//---------------------------------------------------------------------------
// SCRIPT PRINCIPAL
//---------------------------------------------------------------------------

const terceirizados = funcionariosTerceirizados(dados);
const custoTerceirizados = custoTotal(terceirizados);

console.log(
  "Custo total dos funcionarios terceirizados: R$ " + custoTerceirizados
);
