
const botoNumeros = document.getElementsByName("numero");
const botoOperacio = document.getElementsByName("operacio");
const botoIgual = document.getElementsByName("igual");
const botoEliminar = document.getElementsByName("eliminar");
let resultat = document.getElementById("resposta");
var opeActual = " ";
var opeAnterior = " ";
var operacio = undefined;

console.log(botoNumeros)

botoNumeros.forEach(function (boto) {
    boto.addEventListener("click", function () {
        agregarNumero(boto.innerText);

    })
});

botoOperacio.forEach(function (boto) {
    boto.addEventListener("click", function () {
        selectOperacio(boto.innerText);

    })
});

botoIgual.forEach(function (boto) {
    boto.addEventListener('click', function () {
        calcular();
        actualizarDisplay();

    })
});


botoEliminar.forEach(function (boto) {
    boto.addEventListener('click', function () {
        clear();
        actualizarDisplay();

    })
});



function agregarNumero(num){
    opeActual= opeActual.toString() + num.toString();
    actualizarDisplay();
}


function selectOperacio(op){
    if(opeActual === '') return;
    if (opeActual !== ''){
      calcular();
    }
    operacio= op.toString();
    opeAnterior = opeActual;
    opeActual = '';

}

function calcular() {
    let resultat;
    let anterior = parseFloat(opeAnterior);
    let actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return; 

    switch (operacio) {
        case "+":
            resultat = (anterior + actual);
            break;
        case "-":
            resultat =(anterior - actual);
            break;
        case "*":
            resultat = (anterior * actual);
            break;
        case "/":
            resultat = (anterior / actual);
            break;
        default:
    }
    
    opeActual = resultat;
    operacio = undefined;
    opeAnterior = '';
}

function actualizarDisplay(){
    resultat.value = opeActual;
}

function clear(){
    opeActual=" ";
    opeAnterior= " ";
    operacio = undefined; 
}



//let num1 = parseInt(prompt("Número 1"));
//let num2 = parseInt(prompt("Número 2"));
//let operacio = prompt("Operació");

//calculadora(num1, num2, operacio)



function calculadora(num1, num2, operacio) {

    let resultat;



    document.getElementById("resposta").innerHTML = resultat;



}
