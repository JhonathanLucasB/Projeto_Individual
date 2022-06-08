function start() {

    let modal = document.querySelector('.modal')

    modal.style.display = 'none';

    button_start.style.display = 'none';
}

var clique = 0
var erro = 1

function verify(){

    var verificacao = input_resposta.value.toUpperCase()
    var resposta = verificacao.trim()
    
    clique++
        
    if(resposta == "CPU" && clique == 1){ 
        num_question.innerHTML = "2"
        pergunta.innerHTML = "Um circuto digital que realiza operações lógicas e aritméticas. Qual é o nome deste componente?"
/* estilizacao */
        td_D12.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_D13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_D14.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_D12.innerHTML = "C"; td_D13.innerHTML = "P"; td_D14.innerHTML = "U"     

    } else if(resposta == "ULA" && clique == 2){
        num_question.innerHTML = "3"
        pergunta.innerHTML = "Tipo de memória que se encontra no topo da hierarquia de memória: (plural)"
/* estilizacao */
        td_D14.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_E14.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F14.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_D14.innerHTML = "U"; td_E14.innerHTML = "L";td_F14.innerHTML = "A"

    } else if(resposta == "REGISTRADORES" && clique == 3) {
        num_question.innerHTML = "4"
        pergunta.innerHTML = "Tipo de memória volátil que tem como nome Random Acess Memory. Qual é a sigla deste componente?"
/* estilizacao */
        td_Q2.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q3.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q4.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q5.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q6.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q7.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q8.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q10.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q11.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q12.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q14.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_Q2.innerHTML = "R"; td_Q3.innerHTML = "E"; td_Q4.innerHTML = "G"; td_Q5.innerHTML = "I"; td_Q6.innerHTML = "S"; td_Q7.innerHTML = "T"; td_Q8.innerHTML = "R"; td_Q9.innerHTML = "A"; td_Q10.innerHTML = "D"; td_Q11.innerHTML = "O"; td_Q12.innerHTML = "R"; td_Q13.innerHTML = "E"; td_Q14.innerHTML = "S";
        
    } else if(resposta == "RAM" && clique == 4) {
        num_question.innerHTML = "5"
        pergunta.innerHTML = "Tipo de memória não volátil que oferece dados apenas para leitura:"
/* estilizacao */
        td_D8.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_E8.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F8.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_D8.innerHTML = "R"; td_E8.innerHTML = "A"; td_F8.innerHTML = "M"

    } else if(resposta == "ROM" && clique == 5) {
        num_question.innerHTML = "6"
        pergunta.innerHTML = "Tipo de memória não volátil que precisa ter seu chip exposto a luz ultravioleta para apagar seu conteúdo:"
/* estilizacao */
        td_D10.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_E10.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F10.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_D10.innerHTML = "R"; td_E10.innerHTML = "O"; td_F10.innerHTML = "M";

    } else if(resposta == "EPROM" && clique == 6) {
        num_question.innerHTML = "7"
        pergunta.innerHTML = "Tipo particular de EPROM que mantém as informações armazenadas sem a necessidade de uma fonte de energia elétrica:"
/* estilizacao */
        td_F9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_G9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_H9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_J9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_F9.innerHTML = "E"; td_G9.innerHTML = "P"; td_H9.innerHTML = "R"; td_I9.innerHTML = "O"; td_J9.innerHTML = "M";

    } else if(resposta == "FLASH" && clique == 7) {
        num_question.innerHTML = "8"
        pergunta.innerHTML = "Tipo de memória que precisa ter seu conteúdo copiado na RAM para poder ser executado pela CPU:"
/* estilizacao */
        td_C20.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_D20.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_E20.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F20.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_G20.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_C20.innerHTML = "F"; td_D20.innerHTML = "L"; td_E20.innerHTML = "A"; td_F20.innerHTML = "S"; td_G20.innerHTML = "H";

    } else if((resposta == "MEMÓRIA DE MASSA" && clique == 8) || (resposta == "MEMORIA DE MASSA" && clique == 8)) {
        num_question.innerHTML = "9"
        pergunta.innerHTML = "Permite que periféricos acessem diretamente a RAM sem ocupar processamento:"
/* estilizacao */
        td_F8.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F10.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F11.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F12.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F14.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F15.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F16.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F17.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F19.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F20.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F21.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_F8.innerHTML = "M"; td_F9.innerHTML = "E"; td_F10.innerHTML = "M"; td_F11.innerHTML = "Ó"; td_F12.innerHTML = "R"; td_F13.innerHTML = "I"; td_F14.innerHTML = "A"; td_F15.innerHTML = "D"; td_F16.innerHTML = "E"; td_F17.innerHTML = "M"; td_F18.innerHTML = "A"; td_F19.innerHTML = "S"; td_F20.innerHTML = "S"; td_F21.innerHTML = "A";

    } else if(resposta == "DMA" && clique == 9) {
        num_question.innerHTML = "10"
        pergunta.innerHTML = "Também conhecido como Slave Select (SS). Usado para selecionar um ou um conjunto de circuitos que estão conectados no computador: (sigla)"
/* estilizacao */
        td_O9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_P9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_Q9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_O9.innerHTML = "D"; td_P9.innerHTML = "M"; td_Q9.innerHTML = "A";

    } else if(resposta == "CS" && clique == 10) {
        num_question.innerHTML = "11"
        pergunta.innerHTML = "Grupo de linhas ou trilhas usadas para se referir a um endereço físico na memória. O número de trilhas determina a quantidade de endereços na memória física:"
/* estilizacao */
        td_N16.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O16.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_N16.innerHTML = "C"; td_O16.innerHTML = "S";
        
    } else if(resposta == "ADRESS BUS" && clique == 11) {
        num_question.innerHTML = "12"
        pergunta.innerHTML = "Também chamado de Memory Bus. É responsável para carregar os dados."
/* estilizacao */
        td_O8.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O9.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O10.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O11.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O12.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O14.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O15.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O16.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_O8.innerHTML = "A"; td_O9.innerHTML = "D"; td_O10.innerHTML = "R"; td_O11.innerHTML = "E"; td_O12.innerHTML = "S"; td_O13.innerHTML = "S"; td_O14.innerHTML = "B"; td_O15.innerHTML = "U"; td_O16.innerHTML = "S";
        
    } else if(resposta == "DATA BUS" && clique == 12) {
        num_question.innerHTML = "13"
        pergunta.innerHTML = "Modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em setembro de 2009:"
/* estilizacao */
        td_I13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_J13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_K13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_L13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_M13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_N13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_O13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_I13.innerHTML = "D"; td_J13.innerHTML = "A"; td_K13.innerHTML = "T"; td_L13.innerHTML = "A"; td_M13.innerHTML = "B"; td_N13.innerHTML = "U"; td_O13.innerHTML = "S";
        
    } else if(resposta == "I5" && clique == 13) {
        num_question.innerHTML = "14"
        pergunta.innerHTML = "Modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em setembro de 2009:"
/* estilizacao */
        td_F13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_G13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        num_question.style = 'color: red;'
/* html */
        td_F13.innerHTML = "I"; td_G13.innerHTML = "5";

    } else if(resposta == "I7" && clique == 14) {
        num_question.innerHTML = "15"
        pergunta.innerHTML = "Tipo de processador que possui dois processadores ou melhor dizendo ‘dois centros, núcleos ou cores de execução‘ no mesmo circuito integrado.  Cada core tem sua própria memória cash e controlador o que permite que funcione mais efetivamente do que um processador single:"
/* estilizacao */
        td_Q5.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_R5.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        num_question.style = 'color: black;'
/* html */
        td_Q5.innerHTML = "I"; td_R5.innerHTML = "7";
        
    } else if(resposta == "DUAL CORE" && clique == 15) {
        num_question.innerHTML = "16"
        pergunta.innerHTML = "Segue o mesmo princípio de um dual-core, mas agora em teoria tem o dobro da capacidade de processamento:"
/* estilizacao */
        td_I13.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I14.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I15.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I16.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I17.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I19.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I20.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_I13.innerHTML = "D"; td_I14.innerHTML = "U"; td_I15.innerHTML = "A"; td_I16.innerHTML = "L"; td_I17.innerHTML = "C"; td_I18.innerHTML = "O"; td_I19.innerHTML = "R"; td_I20.innerHTML = "E";
        
    } else if(resposta == "QUAD CORE" && clique == 16) {

        td_D18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_E18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_F18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_G18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_H18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_I18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_J18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
        td_K18.style = "background-color: blue; color: white; font-weight: bold; border: 2px solid green";
/* html */
        td_D18.innerHTML = "Q"; td_E18.innerHTML = "U"; td_F18.innerHTML = "A"; td_G18.innerHTML = "D"; td_H18.innerHTML = "C"; td_I18.innerHTML = "O"; td_J18.innerHTML = "R"; td_K18.innerHTML = "E";

            alert("Parabéns !!! Você completou o jogo 👏🥳")
        
     document.location.reload(true);

    } else {
        alert("RESPOSTA INCORRETA! Tente novamente 😉 Tentativa: " + erro)
        clique --
        erro ++
        if(erro >2){
            document.location.reload(true);
        }
    }

}
