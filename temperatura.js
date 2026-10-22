let temperatura = Number(prompt("Ingrese temperatura:"));

if (temperatura <= 10 || Number.isNaN(temperatura)) {
  alert("muy frio");
} else if (temperatura < 20) {
  alert("frio");
} else if (temperatura < 30) {
  alert("Agradable");
} else if (temperatura > 30) {
  alert("Caluroso");
}