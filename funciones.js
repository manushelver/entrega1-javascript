// Idea: convertidor de unidades (kilos a libras y viceversa, millas a metros, etc)


let tipoOperacion = alert("Bienvenido");
let operacionValida = false;
let resultado;

while (!operacionValida){
    tipoOperacion = prompt("Ingrese el tipo de operacion: (Distancia, Peso)");
    switch (tipoOperacion){
        case "Distancia":
            console.log("Modo conversion de distancias");
            operacionValida = true;
            break;
        case "Peso":
            console.log("Modo conversion de pesos");
            operacionValida = true;
            break;
        default:
            alert("Error en tipo de operacion, intentar de nuevo");
            break;
    }
}

if (tipoOperacion == "Distancia"){
    let unidad = prompt("Ingrese la unidad que desea ingresar: (Metro,Milla) ");
    while (unidad != "Metro" && unidad != "Milla"){
        unidad = prompt("Ingrese la unidad que desea ingresar: (Metro,Milla)");
    }
    if (unidad == "Metro"){
        let aConvertir = prompt("Ingrese su valor en metros: ");
        resultado = convertir(aConvertir,unidad);
    }
    else if (unidad == "Milla") {
        let aConvertir = prompt("Ingrese su valor en millas: ");
        resultado = convertir(aConvertir,unidad);
    }
}
else if (tipoOperacion == "Peso"){
    let unidad = prompt("Ingrese la unidad que desea ingresar: (Gramo, Libra) ");
    while (unidad != "Gramo" && unidad != "Libra"){
        unidad = prompt("Ingrese la unidad que desea ingresar: ");
    }
    if (unidad == "Gramo"){
        let aConvertir = prompt("Ingrese su valor en gramos: ");
        resultado = convertir(aConvertir,unidad);
    }
    else if (unidad == "Libra") {
        let aConvertir = prompt("Ingrese su valor en libras: ");
        resultado = convertir(aConvertir,unidad);
    }
}

alert("Su resultado es: " + resultado);
console.log("Programa ejecutado correctamente... creo");

function convertir (valor, tipo){
    let res;
    switch (tipo){
        case "Gramo":
            res = valor/453.6;
            break;
        case "Milla":
            res = valor*1609;
            break;
        case "Metro":
            res = valor/1609
            break;
        case "Libra":
            res = valor *453.6;
            break;
    }
    return res;
}


