let edad = Number(prompt("Ingrese su edad:"));
let estatura = Number(prompt("Ingrse su estatura en metros"));

if (edad >= 15 && estatura >= 1.50) {
    alert("Acceso permitido");
} else {
    alert("Acceso denegado");
}