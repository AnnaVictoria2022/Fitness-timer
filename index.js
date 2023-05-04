//Jog
const jogButton = document.querySelector('.jog');
const audioJog = document.querySelector('#playerJog');

jogButton.addEventListener('click', jogPress);
function jogPress(){
audioJog.play();
const timerJog = 1;
let amountTimeJog = timerJog * 60;

function jogCountdown(){
    const jogContainer = document.querySelector('.jogContainer');
    jogContainer.style.display = 'flex';
    const countdownJog = document.querySelector('.jogTimer');
    let minutesJog = Math.floor(amountTimeJog/60);
    let secondsJog = amountTimeJog%60;

    if (secondsJog <10){
        secondsJog = '0' + secondsJog;
    }

    countdownJog.textContent = `${minutesJog} : ${secondsJog}`;
    amountTimeJog--;

    if (amountTimeJog < 0){
        stopTimerJog();
        amountTimeJog = 0;
        jogContainer.style.display = 'none';
    }

    function stopTimerJog(){
        clearInterval(timerIdJog);
        audioJog.pause();
    }
}
jogCountdown();

let timerIdJog = setInterval(jogCountdown,1000);
}

//Squat
const squatButton = document.querySelector('.squat');
const audioSquat = document.querySelector('#playerSquat');

squatButton.addEventListener('click', squatPress);
function squatPress(){
audioSquat.play();
const timerSquat = 0.5;
let amountTimeSquat = timerSquat * 60;

function squatCountdown(){
    const squatContainer = document.querySelector('.squatContainer');
    squatContainer.style.display = 'flex';
    const countdownSquat = document.querySelector('.squatTimer');
    let minutesSquat = Math.floor(amountTimeSquat/60);
    let secondsSquat = amountTimeSquat%60;

    if (secondsSquat <10){
        secondsSquat = '0' + secondsSquat;
    }

    countdownSquat.textContent = `${minutesSquat} : ${secondsSquat}`;
    amountTimeSquat--;

    if (amountTimeSquat < 0){
        stopTimerSquat();
        amountTimeSquat = 0;
        squatContainer.style.display = 'none';
    }

    function stopTimerSquat(){
        clearInterval(timerIdSquat);
        audioSquat.pause();
    }
}
squatCountdown();

let timerIdSquat = setInterval(squatCountdown,1000);
}

//Knees

const kneeButton = document.querySelector('.knee');
const audioKnee = document.querySelector('#playerKnee');

kneeButton.addEventListener('click', kneePress);
function kneePress(){
audioKnee.play();
const timerKnee = 1;
let amountTimeKnee = timerKnee * 60;

function kneeCountdown(){
    const kneeContainer = document.querySelector('.kneeContainer');
    kneeContainer.style.display = 'flex';
    const countdownKnee = document.querySelector('.kneeTimer');
    let minutesKnee = Math.floor(amountTimeKnee/60);
    let secondsKnee = amountTimeKnee%60;

    if (secondsKnee <10){
        secondsKnee = '0' + secondsKnee;
    }

    countdownKnee.textContent = `${minutesKnee} : ${secondsKnee}`;
    amountTimeKnee--;

    if (amountTimeKnee < 0){
        stopTimerKnee();
        amountTimeKnee = 0;
        kneeContainer.style.display = 'none';
    }

    function stopTimerKnee(){
        clearInterval(timerIdKnee);
        audioKnee.pause();
    }
}
kneeCountdown();

let timerIdKnee = setInterval(kneeCountdown,1000);
}



