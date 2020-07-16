function resultadoFinal() {

let b1 = +document.getElementById('infob1').value;
let b2 = +document.getElementById('infob2').value;
let b3 = +document.getElementById('infob3').value;
let b4 = +document.getElementById('infob4').value;
var situacao = +document.getElementById('fim').value;


document.getElementById("resFinal").value = (b1+b2+b3+b4)/4
var resultado = +document.getElementById("resFinal").value


//if(b1 && b2 && b3 && b4 == "")  && (b1 && b2 && b3 && b4)< 0 ) 
                                  // ^ inseri essa segunda condição pois quando colocava uma nota zero ativava o alert
//{
//    alert("Campo em branco!")
//} 

if(resultado < 0|| resultado > 10 ){
    document.getElementById("resFinal").value = "Erro!";
    alert("Resultado inválido!")
}
if (resultado > 7 || resultado == 7){
    document.getElementById('fim').value = 'Aprovado';
} else {
     document.getElementById('fim').value = 'Reprovado';
}




};
