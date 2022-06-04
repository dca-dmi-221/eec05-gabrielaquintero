'use strict'

/*1.Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function shuffle(a,b) {
  const random=Math.random()
  if(random<0.5){
  return-1}
  else{
      return 1
  }
}
function wordCutter(word){
let split=word.split('').sort(shuffle)
split.forEach(letter=>console.log(letter))
}
wordCutter(testWord)

/*2.Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(principalWord, wordsList) {
    let newWordsList = wordsList.map((element) => element.toLowerCase());
    let newWord = principalWord.toLowerCase();
    newWord = normalWord(newWord);
    newWord = newWordsList.includes(newWord);
    console.log(principalWord);
    if (newWord === true) {
        console.log(principalWord + " si está en la lista");
    } else {
        console.log(principalWord + " no está en la lista");
    }
    
}

function normalWord(word) {
    return word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

wordSearcherIgnoreCase(testTargetWordA, testWordsList);
wordSearcherIgnoreCase(testTargetWordB, testWordsList);
wordSearcherIgnoreCase(testTargetWordC, testWordsList);


/*3.Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(words) {
    let totalLetters=0
    const sortedWords=words.sort((wordA,wordB)=>{
        if(wordA.length<wordB.length){
            return -1
        } else if (wordA.length>wordB.length){
            return 1
        } else{
            return 0
        }
    })
    sortedWords.forEach(word=>totalLetters+=word.length)
    const average=totalLetters/sortedWords.length
    return{
        shortestWord: sortedWords[0],
        longestWord: sortedWords[sortedWords.length-1],
        average
    }
}
console.log(wordLengthClassifier(testSampleList))


/*4.Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    console.log(word.toLowerCase())
    let palindromeWord = word.toLowerCase().split("").reverse().join("");
   if ( palindromeWord === word.toLowerCase() ) {
       console.log("Si es un palíndromo")
   }else{
        console.log("No es un palíndromo")
   }
}
palindromeVerifier(onVerificationWordA)
palindromeVerifier(onVerificationWordB)
palindromeVerifier(onVerificationWordC)
palindromeVerifier(onVerificationWordD)

/*5.Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
   let list=objectContainer.list
   let vowels=0
   let consonants=0
   list.forEach(word=>{
       word.split('').forEach(letter=>{
           if( letter==="a"||letter==="e"||letter==="i"||letter==="o"||letter==="u") {
               vowels++
            }
           else{
               consonants++
           }
       })
   })
   return[vowels,consonants]
}
console.log(lettersCounter(containerTestObject))



/*6.Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {

 let together=wordArrayA.concat(wordArrayB)
 console.log(together)
}
arrayJoiner()

/*7.Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
   array=[]
   wordsToVerify.forEach((palabra,index) =>{
       if(palabra.split('').every(letra=>{
           return testWordToExplore.includes(letra)
       })) 
       array.push(index)
    })
    return array
}
console.log(anagramVerifier(testWordToExplore, wordsToVerify))

/*8.Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let juntos=objectMultiContainer.listA.concat(objectMultiContainer.listB)
    const resultado = []

    for(let i=0; i<juntos.length;i++){
        const palabraActual = juntos[i].split('');
        for(let index=0;index<juntos[i].length;index++){
            if(palabraActual[index]==="a"||palabraActual[index]==="e"||palabraActual[index]==="i"||palabraActual[index]==="o"||palabraActual[index]==="u"){
              palabraActual.splice(index, 1);
            }
        }
        resultado.push(palabraActual.join(''))
    }
    console.log(resultado)
}
vocalsRemoverFromObject(testObjMultiContainer)

console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*9.Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    // :)
}


/*10.Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];
function doubleListVerifier(listA, listB) {
    // :)
}