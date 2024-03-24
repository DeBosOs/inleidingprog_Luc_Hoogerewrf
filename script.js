let i = 0 //hier geef ik een waarde die de vragen en antwoorden bij houdt (0 is eerste vraag, 1 is 2e vraag enzov.)
let fouteAntwoorden = 0 //hier hou ik het aantal foute antwoorden bij, de waardes zijn beide let zodat deze nog kunnen veranderen (const geeft read only property)
const vragenlijst = ['Wat is het laatste cijfer van Luc zijn leeftijd?', 'Wat voor cijfer krijgt deze opdracht als het geen 10 is?',
    'Met welk rugnummer speelt Mark van der marel (beste speler van de eredivisie)?', 'Welk getal is kenmerkend voor een stad in de provincie Utrecht?',
    'Lekker bezig dief, je hebt succesvol de code gekraakt.<br>Vul hem snel in en pak de buit!'] //dit is een array die de vragen bevat
let gesteldeVraag = vragenlijst[i] //hier pak ik de vraag uit de array door de waarde van i te gebruiken

const antwoordenlijst = ['9', '9', '2', '3', '9923'] //hier doe ik het zelfde als de vorige array maar dan voor de antwoorden
let antwoord = antwoordenlijst[i] //hier doe ik het zelfde als de vragen maar dan voor de antwoorden

const vraag = document.getElementById('vraag') //hier zorg ik er voor dat ik de vraag op het scherm kan laten komen (de p heet 'vraag')
let userInput //heir maak ik de input van de gebruiker bekend (deze ga ik later nog gebruiken)

const knop = document.querySelector('button') //hier zorg ik er voor dat de indienen knop bekend is in javascript 

vraag.textContent = gesteldeVraag //hier zorg ik dat de vraag die op het scherm komt beinvloed kan worden door javascript

const feedback = document.getElementById('check') //'check' is de weergave van je vorige goed beantwoordde vragen. Deze maak ik hier bekend in js

const harten = document.querySelectorAll('.hart') //er zijn 3 harten, deze maak ik hier bekend in js

const scherm = document.getElementById('spel') //tijdens het spelen van het spel moet er bepaalde content in het scherm. Dit staat allemaak in een <div> deze heet 'spel'

const verloren = document.getElementById('loser') //Wanneer er verloren is moet er totaal andere content op het scherm, deze content staat in een div genaamd 'loser'

const winner = document.querySelector('.winner') //Wanneer er gewonnen is moet er totaal andere content op het scherm, deze content staat in een div genaamd 'winner'

function codeTonen() { //hier staat een functie om de code (die je goed hebt) op het scherm te laten verschijnen
    if (i == 1) { //als i gelijk is aan 1
        feedback.textContent = '9 _ _ _' //verschijnt het eerste cijfer op het scherm
    } else if (i == 2) { //als i gelijk is aan 2
        feedback.textContent = '9 9 _ _' //verschijnen de eerste 2 cijfers op het scherm
    } else if (i == 3) { //als i gelijk is aan 3
        feedback.textContent = '9 9 2 _' //verschijnen de eerste 3 cijfers op het scherm
    } else if (i == 4) { //als i gelijk is aan 4
        feedback.textContent = '9 9 2 3' //verschijnen alle 4 cijfers op het scherm
    } else if (i == 5) { //als i gelijk is aan 4
        winScherm() //heb je het spel gewonnen en verschijnt het winscherm op het beeld
        vraag.textContent = ' ' //Wanneer je gewonnen hebt moet de vraag niet langer verschijnen op het scherm
    }
}

function verliesScherm() { //hier maak ik een functie om het verliesscherm te laten zien
    scherm.classList.add('wegScherm') //Wanneer er verloren is wordt er een class 'wegscherm' toegevoegd, hierdoor gaat alle oude content weg
    verloren.classList.remove('verborgen') //en bij het verliesscherm wordt de class 'verborgen' weg gehaald waardoor deze tevoorschijn komt
}

function winScherm() { //hier maak ik een functie voor het winscherm
    scherm.classList.add('wegScherm') //dit werkt het zelfde als het verliesscherm
    winner.classList.remove('verborgen') //dit werkt het zelfde als het verliesscherm

}

function submitInput() { //Hier zorg ik er voor dat de input van de gebruiker ingevoerd kan worden
    userInput = document.getElementById('userInput').value; //Eerst zorg ik ervoor dat het input balkje bekend is in js
    //console.log(userInput) Deze was later niet meer nodig maar ik wilde wel graag laten zien dat ik alles testte door middel van console.logs
    checkAntwoord()//Hier wordt een functie aangeroepen om het antwoord goed of fout te rekenen
}

function checkAntwoord() { //Dit is de functie om een antwoord goed of fout te rekenen
    if (userInput == antwoord) { //Als de input van de gebruiker gelijk is aan eht juiste antwoord (uit de array)
        //console.log('Goed antwoord') ook dit testte ik eerst met console.log
        i += 1 //Dan worden de volgende vraag en antwoord laten klaar gezet
        gesteldeVraag = vragenlijst[i] //Hier wordt de volgende vraag geladen
        antwoord = antwoordenlijst[i] //Hier wordt het volgende antwoord geladen
        vraag.innerHTML = gesteldeVraag //Hier laat ik de volgende vraag zien
        codeTonen() //Dit is een functie om het ingevulde cijfer te laten zien

    } else if (userInput != antwoord) { //anders (als het antwoord dus fout is)
        //console.log('Fout antwoord') ook dit testte ik met console.log is nu dus niet meer nodig
        fouteAntwoorden += 1 //Gaat er 1 bij je foute antwoorden, dit wordt van belang in de HP functie
        HP() //Hier wordt de HP functie aangeroepen
    }
}

function HP() { //Dit is een functie voor de 3 levens
    if (fouteAntwoorden == 1) { //Als je 1 antwoord fout hebt
        const hartWeg = harten[2] //wordt het 3e (eerste omdat de harten door flexbox achterstevoren staan) hart geselecteerd
        hartWeg.classList.add('weghart') //Dit haalt het hart weg
    } else if (fouteAntwoorden == 2) { //Als je 2 antwoorden fout hebt
        const hartWeg = harten[1] //wordt het 2e hart geselecteerd
        hartWeg.classList.add('weghart') //en weg gehaald
    } else if (fouteAntwoorden == 3) { //Als het 3e antwoord fout is
        const hartWeg = harten[0] //Wordt het laatste hart geselecteerd
        hartWeg.classList.add('weghart') //en weg gehaald
        vraag.textContent = 'Handen omhoog jongeman!' //Deze text komt op het scherm
        verliesScherm() //en het verliesscherm komt in beeld
    }
}

knop.addEventListener('click', submitInput) //Wanneer je op de submit knop klikt
window.addEventListener('keydown', function (event) {
    if (event.key == "Enter") { //of op enter klikt
        submitInput() //Wordt je antwoord ingevoerd
    }
})
