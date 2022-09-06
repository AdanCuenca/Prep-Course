// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // 1 Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // 2 Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // 3 Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // 4 "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0; i<array.length; i++){
    array[i]+=1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // 5 Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // 6 Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // 7 "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let palabra = palabras[0];
  for (let i=1; i<palabras.length; i++){
    palabra += (" "+palabras[i])
  }
  
  return palabra;
}


function arrayContiene(array, elemento) {
  // 8 Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // 9 "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum = 0;
  for(let i =0; i < numeros.length; i++){
    sum += numeros[i];
  }
  return sum;
}


function promedioResultadosTest(resultadosTest) {
  // 10 "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum=0;
  for(let i =0; i < resultadosTest.length; i++){
    sum += resultadosTest[i];
  }
  return sum/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  //11 "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numero = -99999;
  for (let i=0; i < numeros.length; i++){
    if(numeros[i] > numero){
      numero = numeros[i];
    }}
  return numero;}



function multiplicarArgumentos() {
  // 11 Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multip = 1 ;
  if (arguments.length>0){
  for (let i=0; i < arguments.length; i++){
      multip = multip * arguments[i];
    }
  return multip;}
  else {
    return 0;
  }
  }



function cuentoElementos(arreglo){
  //12 Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cant= 0;
  for (let i=0; i < arreglo.length; i++){
    if(arreglo[i]>18){
      cant++;
    }
  } return cant;
}


function diaDeLaSemana(numeroDeDia) {
  //13 Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia){
    case 1 :
      return "Es fin de semana";
    case 7 :
      return "Es fin de semana";
    default:
      return "Es dia Laboral";


  }
} 


function empiezaConNueve(n) {
  //14 Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  return (n.toString().charAt(0) == 9)
}


function todosIguales(arreglo) {
  //15 Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var cant= 0;
  for (let i=0; i < arreglo.length -1; i++){
    if(arreglo[i] === arreglo[i+1]){
      cant++;
    }
  } return cant === (arreglo.length -1);
  
  
} 


function mesesDelAño(array) {
  //16 Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoarray = [];
  for (let i=0; i < array.length; i++){
    if(array[i] === "Enero" ||array[i] === "Marzo" || array[i] ==="Noviembre"){
      nuevoarray.push(array[i]);
    }
  } 
  if (nuevoarray.length == 3){
    return nuevoarray
  } else{ return "No se encontraron los meses pedidos"};
}


function mayorACien(array) {
  //17 La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoarray = [];
  for (let i=0; i < array.length; i++){
    if(array[i] >100){
      nuevoarray.push(array[i]);
    }
  } 
  
    return nuevoarray;
 
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoarray = [];
  for (let i=0; i < 10; i++){ 
    numero = numero + (2);
    nuevoarray.push(numero);
    if (numero === i){
      break;
    }
  } 
  
  if (nuevoarray.length<10){
    return "Se interrumpió la ejecución"}
  else {
    return nuevoarray;}
}


function continueStatement(numero) {
  //18 Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoarray = [];
  for (let i=0; i < 10; i++){ 
    if (i === 5){
      continue;
    }
    numero = numero + 2
    nuevoarray.push(numero);
    
  } 
  
    return nuevoarray;}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
