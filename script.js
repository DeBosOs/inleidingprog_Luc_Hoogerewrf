let i = 0
let fouteAntwoorden = 0
const vragenlijst = ['Wat is het laatste cijfer van Luc zijn leeftijd?', 'Wat voor cijfer krijgt deze opdracht als het geen 10 is?',
    'Met welk rugnummer speelt Mark van der marel (beste speler van de eredivisie)?', 'Welk getal is kenmerkend voor een stad in de provincie Utrecht?',
    'Lekker bezig dief, je hebt succesvol de code gekraakt. Vul hem snel in en pak de buit!']
let gesteldeVraag = vragenlijst[i]

const antwoordenlijst = ['9', '9', '2', '3', '9923']
let antwoord = antwoordenlijst[i]

const vraag = document.getElementById('vraag')
let userInput

const knop = document.querySelector('button')

vraag.textContent = gesteldeVraag

const feedback = document.getElementById('check')

const harten = document.querySelectorAll('.hart')

function codeTonen() {
    if (i == 1) {
        feedback.textContent = '9 _ _ _'
    } else
        if (i == 2) {
            feedback.textContent = '9 9 _ _'
        } else
            if (i == 3) {
                feedback.textContent = '9 9 2 _'
            } else
                if (i == 4) {
                    feedback.textContent = '9 9 2 3'
                }
}

function submitInput() {
    userInput = document.getElementById('userInput').value;
    console.log(userInput)
    checkAntwoord()
}

function checkAntwoord() {
    if (userInput == antwoord) {
        console.log('Goed antwoord')
        i += 1
        gesteldeVraag = vragenlijst[i]
        antwoord = antwoordenlijst[i]
        vraag.textContent = gesteldeVraag
        codeTonen()

    } else
        if (userInput != antwoord) {
            console.log('Fout antwoord')
            fouteAntwoorden += 1
            HP()
        }
}

function HP() {
    if (fouteAntwoorden == 1) {
        const hartWeg = harten[2]
        hartWeg.classList.add('weghart')
    } else
        if (fouteAntwoorden == 2) {
            const hartWeg = harten[1]
            hartWeg.classList.add('weghart')
        } else
            if (fouteAntwoorden == 3) {
                const hartWeg = harten[0]
                hartWeg.classList.add('weghart')
            }
}
knop.addEventListener('click', submitInput)
window.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        submitInput()
    }
})
