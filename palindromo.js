alert('Bienvenido al verificador de palíndromo.')


function palindromo(palabra){
    let espacio = " ";
    /*/[\u0300-\u036f]/ rango de caracteres NFD
    
    */
    palabra = palabra.replace(new RegExp(espacio, "g"), "");
    palabra = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "" );
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

let palabra = prompt('Escriba una palabra');

let esPalabra = palindromo(palabra);

if(esPalabra){
    alert('Es palíndromo')
}else{
    alert('No es palíndromo')
}


