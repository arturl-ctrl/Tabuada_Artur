let soma = document.querySelector("#somar");
soma.addEventListener("click", somatoria);

function somatoria(){
    let tn1 = document.querySelector("#txtn1");
    let tn2 = document.querySelector("#txtn2");

    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);

    let total = n1 + n2;
    let resultado = document.querySelector("#resultado")
    resultado.innerText = `A soma dos valores é igual: ${total}.`;
}