/*function somar(numero1,numero2) {
    let resultado = (numero1 + numero2)
    return resultado;
    }

    console.log(somar(20,12))



let deuses = ["Aegir","Aud","Balder"];
let total = deuses.push("Loki");

console.log(deuses)*/

var deuses = ["Aegir", "Aud", "Balder", "Bragi", "Búri", "Dag", "Dellingr"];

for (let deus of deuses) {
  let nomeDeus = "<li>"+deus+"<li>";
  document.getElementById("nomes").innerHTML += nomeDeus;
}
  

