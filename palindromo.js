alert('Bienvenido al verificador de palíndromo.')


function palindromo(palabra){
    let espacio = " ";
    let acentos = /[\u0300-\u036f]/
    /*/[\u0300-\u036f]/ rango de caracteres NFD*/
    palabra = palabra.replace(new RegExp(espacio, "g"), "");
    palabra = palabra.normalize("NFD").replace(new RegExp(acentos, "g"), "" );
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


