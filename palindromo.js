alert('Bienvenido al verificador de palíndromo.')


function palindromo(palabra){
    let espacio = " ";
    palabra = palabra.replace(new RegExp(espacio, "g"), "");
    console.log(palabra)
    palabra = palabra.toLowerCase();
    let palabraArray = Array.from(palabra);
    let palabraArrayRev = palabraArray.reverse();
    let palabraRev = palabraArrayRev.join('');
    console.log(palabraRev)
    if (palabra == palabraRev){
        return true}
    else{
        return false
    }
}

let palabra = prompt('Escriba una palabra');

let esPalabra = palindromo(palabra);

if(esPalabra == true){
    alert('Es palíndromo')
}else{
    alert('No es palíndromo')
}


