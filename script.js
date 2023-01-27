//Selecionando os IDs do HTML
const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date(); //cria um objeto de data com a data e hora atuais;
//console.log(data);

let hr = data.getHours(); //retorna as horas de uma data como um numero (0-23);
let min = data.getMinutes(); //(0-59)
let seg = data.getSeconds(); //(0-59)
//console.log(hr + " horas, " + min + " minutos, " + seg + " segundos");

//(horas do horario atual multiplicado por 360 graus dividido por 12 passos) somados (ao nro de minutos adicionais da linha debaixo, dividido por 12 passos)
let posicaoHr = (hr*360/12)+(min*(360/60)/12);
//(minutos da horario atual multiplicado por 360 graus dividido por 60 passos) somados (ao nro de segundos adicionais da linha debaixo, dividido por 60 passos)
let posicaoMin = (min*360/60)+(seg*(360/60)/60); 
//seg do horario atual multiplicados por 360 graus dividido por 60 seg
let posicaoSeg = seg*360/60; 

function executarRelogio(){
   //360 graus/12 nro de horas no giro = 30 -> 1 hora tem 3600 segundos -> 30/3600 (elimina os zeros) = 3/360
   posicaoHr = posicaoHr+(3/360); 
   //360 graus/60 segundos de um minuto = 6 -> 1 min tem 60 segundos -> 6/60
   posicaoMin = posicaoMin+(6/60); 
   //resultado de 360 graus/60 segundos (1 giro)
   posicaoSeg = posicaoSeg+6; 

   // Aplicando o transform ao estilo da constante com uma rotacao de let em graus
   PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)";
   PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
   PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";
}
var intervalo = setInterval(executarRelogio, 1000); //chama a funcao e atualiza a cada segundo.

/* 
-> Primeiro devemos selecionar os IDs do HTML, onde cada um e um ponteiro no svg;
-> Configurar 3 lets;
-> Aplicar os nros da posicao como graus nos estilos embutidos para transforma-los cada um em num objeto;
-> Declarar um novo objeto do tipo data, ele apresenta a data e hora atual sem atualizacao;
-> Depois vou extrair da hora atual, as horas, minutos e os segundos da variavel data 
-> Criar uma funcao para que seja atualizado a cada segundo, chame-a no final da funcao;
-> Quando graus os ponteiros devem se mover dentro da funcao de executar o relogio, foi feito acima das declaracoes das posicoes, porque precisamos aumentar gradualmente. 
*/