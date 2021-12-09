// Ceci est le premier fichier de base004
console.log('Bonjour, maintenant je sais écrire dans la console');

alert('ATTENTION ca va péter');

// mais comment fabriquer une fonction ?

// le mot cle (bleu) let permet de declarer une variable en l'occurence mon alerte
let monAlerte = 'ceci est un message de la plus haute imortance'; // ceci est une instruction
console.log(monAlerte); // ceci est une instruction
alert(monAlerte); // ceci est une instruction

// ceci est un bloc d'instructions
{
let monAlerte2 = "et ce message on s'en fou";
console.log(monAlerte2);
alert(monAlerte2);
}

// le mot clé (bleu) fonction permet de déclarer une fonction
// ceci est la déclaration de la fonction
function cebloc()
{
    let monAlerte3 = "cebloc";
    console.log(monAlerte3);
    alert(monAlerte3);
}
// ceci est l'appel d'une fonction
cebloc();

function ceBlocAmeliorer(monAlerte3)
{
    console.log(monAlerte3);
    alert(monAlerte3);
}
ceBlocAmeliorer("ceBlocAmeliorer " + monAlerte);
ceBlocAmeliorer("ceBlocAmeliorer et ce message on s'en fou");
ceBlocAmeliorer("ceBlocAmeliorer ce bloc");
ceBlocAmeliorer("ceBlocAmeliorer et ça c'est un nouveau message");
    