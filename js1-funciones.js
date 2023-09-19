// 1. Retornar un string.
function devolverString(str){
    // 🎯 'Return' la string provista: str
    return(str) 
}
const devolviendoString = devolverString("Hola que hace");
console.log(devolviendoString);

// 2. Retornar una suma.
function suma(x, y){
    // 🎯 suma "x" e "y" y retorná el valor
    let sumandoValores = x + y;
    return(sumandoValores); 
}

//3. Retornar una resta.
function resta(x, y){
    // 🎯 resta "y" e "x" y retorná el valor
    let restando = y - x; 
    return(restando)
}

// 4. Retornar una multiplicación.
function multiplicar(x, y){
    // 🎯 multiplica "x" e "y" y retorná el valor
    return(x * y); 
}

//5. Retornar una división.
function dividir(x, y){
    // 🎯 dividí "x" e "y" y retorná el valor
    let dividiendo = x / y; 
    return(dividiendo);
}

//6. Comparar números.
function igualdad(x, y){
    // 🎯 Devolvé "true" si "x" e "y" son iguales, de lo contrario devolvé "false".
    if(x === y){
        return true;
    }else{
        return false;
    }
}

//7. Comparar la longitud de dos strings.
function compararLongitur(str1, str2){
    // 🎯 Devolvé "true" si las dos strings tienen la misma longitud, de lo contrario devolvé "false".
    const longStr1 = str1.length;
    const longStr2 = str2.length;

    if(longStr1 === longStr2){
        return true;
    }else{
        return false; 
    }

}

//8. Comparar un parámetro I.
function menorQueNoventa(num){
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es menor que noventa, de lo contrario devolvé "false".
    if (num <90){
        return true;
    }else{
        return false;
    }
}

//9. Comparar un parámetro II.
function mayorQueCincuenta(num){
    // 🎯 Devolvé "true" si el parametro de la funcion "num" es mayor que cincuenta, de lo contrario devolvé "false".
    if (num >50){
        return true;
    }else{
        return false;
    } 
}

//10. Retornar el módulo o resto.
function obtenerResto(x, y){
    // 🎯 Obtener el resto de la división de "x" e "y".
    let resto = x % y;
    return(resto);
}

//11. Comprobar si es par.
function esPar(num){
    // 🎯 Devolvé "true" si "num" es par, de lo contario devolvé "false".
    let numerosPares = num % 2;
    if (numerosPares === 0){
        return true;
    } else{
        return false; 
    }
}

//12. Comprobar si es impar.
function esImpar(num){
    // 🎯 Devolvé "true" si "num" es impar, de lo contario devolvé "false".
    let numerosPares = num % 2;
    if (numerosPares !== 0){
        return true;
    } else{
        return false; 
    }
}

//13. Elevar un número al cuadrado.
function elevarAlCuadrado(num){
    // 🎯 Devolvé el valor de "num" elevado al cuadrado.
    let alCuadrado = num * num;
    return(alCuadrado);
}

//14. Elevar un número al cubo.
function elevarAlCubo(num){
    // 🎯 Devolvé el valor de "num" elevado al cubo.
    let alCubo = num * num * num;
    return(alCubo); 
}

//15. Elevar un número a un exponente.
function elevar(num, exponent){
    // 🎯 Devolvé el valor de "num" elevado al exponente dado en "exponent".
    // Tu código: 
}

//16. Redondear un número.
function redondearNumero(num){
    // 🎯 Devolvé el valor de "num" redondeado al entero más próximo.
    // Tu código: 
}

//17. Redondear un número hacia arriba.
function redondearHaciaArriba(num){
    // 🎯 Devolvé el valor de "num" redondeado hacia arriba (al próximo entero).
    // Tu código: 
}

//18. Retornar un número aleatorio.
function numeroRandom(){
    // 🎯 Generar un número al azar entre 0 y 1 y devolverlo.
    // 🕵️ Pista: investigá que hace el método Math.random(). 
    // Tu código: 
}

//19. Comprar si un numero es positivo.
function esPositivo(num){
    // La función va a recibir un número entero. Devolvé como resultado una cadena de texto que indica si el número es positivo o negativo: 
    // 🎯 Si el número es positivo, devolver el string "Es positivo".
    // 🎯 Si el número es negativo, devolver el string "Es negativo".
    // 🎯 Si el número es 0, devolver false.
    if(num > 0){
        return("Es positivo");
    }else if(num === 0){
    return(false);
    }
    else {
        return("Es negativo")
    }
}

//20. Concatenar strings I.
function agregarSimboloDeExclamacion(str){
    // 🎯 Agregá un símbolo de exclamación al final de la string "str" y devolvé una nueva string 
    // Ejemplo: "hello world" pasaría a ser "hello wolrd!".
    return(str + "!")
}

//21. Concatenar strings II.
function combinarNombres(nombre, apellido){
    // 🎯 Devolver "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Diego", "Maldonado" => "Diego Maldonado".
    let nombreCompleto = nombre + " " + apellido
    return(nombreCompleto);
}

//22. Concatenar strings III.
function retornarSaludo(nombre){
    // 🎯 Tomá la string "nombre" y concatená otras string en la cadena para que tome la siguiente forma:
    // "Diego" => "Hola Diego!".
    let saludando = "Hola " + nombre;
    return(saludando); 
}

//23. Operaciones matemáticas I.
function areaDelRectangulo(alto, ancho){
    // 🎯 Devolver el área de un rectángulo teniendo su altura y ancho.
    // 🕵️ Pista: investigá como se calcula el area de un rectángulo. 
   let areaRectangulo = (ancho * alto) + " cm al cuadrado";
   return(areaRectangulo); 
}

//24. Operaciones matemáticas II.
function perimetroDelCuadrado(lado){
    // 🎯 Escibí una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    // 🕵️ Pista: investigá como se calcula el perímetro de un cuadrado. 
    let perimetroCuadrado = (lado + lado + lado + lado) + " cm";
    return(perimetroCuadrado);
}

//25. Operaciones matemáticas III.
function areaDelTriangulo(base, altura){
    // 🎯 Desarrollá una función que calcule el área de un triángulo.
    // 🕵️ Pista: investigá como se calcula el área de un triángulo. 
    let areaTriangulo = ((base * altura) / 2) + " cm cuadrados";
    return(areaTriangulo);
}

//26. Operaciones matemáticas IV.
function deEuroAdolar(euro){
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // 🎯 Escribí un programa que reciba como parámetro un número de euros y calcule el cambio en dólares.
    let conversionAdolar =  (euro * 1.20) + " dolares"
    return(conversionAdolar)
}

//27. Condicionales.
function esVocal(letra){
    // 🎯 Escribí una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".  
    // 🎯 Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle que no se puede procesar el dato mediante el mensaje "Dato incorrecto". 
    // Tu código: 
}