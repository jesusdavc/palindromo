alert('Bienvenido al verificador de palíndromo.')


function palindrome(word){
    let space = " ";

    let special = /[\u0300-\u036f]/
    /*/[\u0300-\u036f]/ rango de caracteres NFD*/
    word = word.replace(new RegExp(space, "g"), "");
    word = word.normalize("NFD").replace(new RegExp(special, "g"), "" );
    word = word.toLowerCase();
    let wordArray = Array.from(word);
    let wordArrayRev = wordArray.reverse();
    let wordRev = wordArrayRev.join('');
    
    if (word == wordRev){
        return true}
    else{
        return false
    }
}

let word = prompt('Escriba una palabra o frase');

let isWord = palindrome(word);

if(isWord){
    alert('Es palíndromo')
}else{
    alert('No es palíndromo')
}


