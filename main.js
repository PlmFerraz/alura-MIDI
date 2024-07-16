/* PARÂMETROS
Os parâmetros são os nomes que damos a valores que uma função pode receber em sua chamada, 
que podem ou não ter um valor padrão. 
Os parâmetros de uma função são como variáveis ficam disponíveis apenas no corpo da função.
Os parâmetros servem para auxiliar em alguma lógica no código dentro de uma função. 
Por exemplo, uma função calculaMedia(), pode ter como parâmetros notaA e notaB, que serão os valores utilizados para serem calculados e retornar o valor da média.
*/

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador]; //tecla atual
  const instrumento = tecla.classList[1]; // classe da posição 1 (nome da tecla)

  const idAudio = `#som_${instrumento}`; //concatenação (template string) do id com a classe

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
   
}
