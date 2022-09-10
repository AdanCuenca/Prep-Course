// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  const nuevoObjeto = [];
  for (i=0; i< Object.keys(objeto).length; i++){
    
    nuevoObjeto.push([(Object.keys(objeto)[i]), objeto[Object.keys(objeto)[i]]]);
    
  }
  return nuevoObjeto
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // let array = string.split("").sort();
  const dic = new Object();
  
  for (i=0; i<string.length ; i++){
    if (dic.hasOwnProperty(string[i])){
      dic[string[i]] ++;
    } else { 
      dic[string[i]]=1;
    }
  };
  return dic;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  
  var min = '';
  var may = '';

  for (i = 0 ; i <s.length;  i++){
    var aux = 0
    if (s[i] === s[i].toUpperCase()){
      may = may + s[i];
      //array.push(aux)
    } else {
      min = min + s[i]
    }
  }
  
  
  return may+min;
}
capToFront("soyHENRY")

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var array = str.split(" ")
  var array1 = []

  for (i=0; i<array.length; i++){
    var subArray = array[i].split("");
    subArray.reverse();

    

    array1.push(subArray.join(""));
  }

  var array2 = array1.join(" ");

  //var array3 = array2.join(",")

  return array2 ;
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var num1 = String(numero)
  var num2 = String(numero)
  var num3 = num1.split("")
  var num4 = num3.reverse()
  var num5 = num4.join("")

  if (num5===num2){
    return "Es capicua"
  } else {
    return "No es capicua"
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cad1 = ""
  var cad2 = cadena.split("")
  for (i=0; i<cad2.length; i++){
    if (cad2[i] === "a" ||cad2[i] === "b" ||  cad2[i]=== "c"){
      continue;
    } else{
      cad1 += cad2[i];
    }
  }
  return cad1;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (j=0; j < arr.length ; j++){
    for(i=0; i < arr.length-1 ; i++){
      if(arr[i].length > arr[i+1].length){
        var arrtemp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = arrtemp;
        
      }
  }}

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3 = []
  for (j=0; j < arreglo1.length ; j++){
    var element = arreglo1[j];
    for(i=0; i < arreglo2.length ; i++){
      if(element === arreglo2[i]){
        arreglo3.push(element);
      }
  }}

  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

