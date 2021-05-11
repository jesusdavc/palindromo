alert('Bienvenido al verificador de palíndromo.')


function palindromo(palabra){
    let espacio = " ";
<<<<<<< HEAD
    let acentos = /[\u0300-\u036f]/
    /*/[\u0300-\u036f]/ rango de caracteres NFD*/
    palabra = palabra.replace(new RegExp(espacio, "g"), "");
    palabra = palabra.normalize("NFD").replace(new RegExp(acentos, "g"), "" );
=======
    /*/[\u0300-\u036f]/ rango de caracteres NFD
    
    */
    palabra = palabra.replace(new RegExp(espacio, "g"), "");
    palabra = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "" );
>>>>>>> 5f257be06a025d2fe300381451c2d45bbb5b48e2
    palabra = palabra.toLowerCase();
    let palabraArray = Array.from(palabra);
    let palabraArrayRev = palabraArray.reverse();
    let palabraRev = palabraArrayRev.join('');
    
    if (palabra == palabraRev){
        return true}
    else{
        return false
    }
}

let palabra = prompt('Escriba una palabra o frase');

let esPalabra = palindromo(palabra);

if(esPalabra){
    alert('Es palíndromo')
}else{
    alert('No es palíndromo')
}


