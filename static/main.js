let startBtn = document.getElementById('startButton');
let startPage = document.getElementById('startPage');
let firstPage = document.getElementById('firstPage');
let filmShit = document.getElementById('filmShit');
let filmShit2 = document.getElementById('filmShit2');

startBtn.addEventListener('click', function () {
    startPage.style.display = 'none';
    filmShit.style.display = 'flex';
    filmShit2.style.display = 'flex';
    firstPage.style.display = 'flex';
});

let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');
let secondPage = document.getElementById('secondPage');
let thirdPage = document.getElementById('thirdPage');
let fourthPage = document.getElementById('fourthPage');
let firstDot = document.getElementById('firstDot');
let secondDot = document.getElementById('secondDot');
let thirdDot = document.getElementById('thirdDot');
let fourthDot = document.getElementById('fourthDot');
let curtain = document.getElementById('curtain');
let curtainTimeout = null;

let counter = 0;

rightArrow.addEventListener('click', function () {
    if (counter < 5) {
        counter++;
    }
    changePage(counter);
    console.log(counter);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        if (counter < 5) {
            counter++;
        }
        changePage(counter);
        console.log(counter);
    } else if (event.key === 'ArrowLeft') {
        if (counter > 0) {
            counter--;
        }
        changePage(counter);
        console.log(counter);
    }
});



leftArrow.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
    }
    changePage(counter);
    console.log(counter);
});

firstDot.addEventListener('click', function () {
    counter = 0;
    changePage(counter);
    console.log(counter);
});

secondDot.addEventListener('click', function () {
    counter = 1;
    changePage(counter);
    console.log(counter);
});

thirdDot.addEventListener('click', function () {
    counter = 2;
    changePage(counter);
    console.log(counter);
});

fourthDot.addEventListener('click', function () {
    counter = 3;
    changePage(counter);
    console.log(counter);
});


function changePage(counter) {
    if (curtainTimeout === null) {
        curtainTimeout = setTimeout(function () {
            curtain.style.display = 'none';
            curtainTimeout = null;
        }, 500);
    }

    console.info(`changing page to ${counter}`);
    curtain.style.display = 'block';
    if (counter == 0) {
        document.querySelectorAll('.hexagone').forEach(dot => dot.classList.remove('selectedDot'));
        firstDot.classList.add('selectedDot');
        firstPage.style.display = 'flex';
        secondPage.style.display = 'none';
        thirdPage.style.display = 'none';
        fourthPage.style.display = 'none';
        document.documentElement.style.setProperty('--primary', '#f08976');
    } else if (counter == 1) {
        document.querySelectorAll('.hexagone').forEach(dot => dot.classList.remove('selectedDot'));
        secondDot.classList.add('selectedDot');
        document.documentElement.style.setProperty('--primary', '#b116f6');
        firstPage.style.display = 'none';
        thirdPage.style.display = 'none';
        secondPage.style.display = 'flex';
        fourthPage.style.display = 'none';
    } else if (counter == 2) {
        document.querySelectorAll('.hexagone').forEach(dot => dot.classList.remove('selectedDot'));
        thirdDot.classList.add('selectedDot');
        document.documentElement.style.setProperty('--primary', '#81b2f2');
        firstPage.style.display = 'none';
        secondPage.style.display = 'none';
        fourthPage.style.display = 'none';
        thirdPage.style.display = 'flex';
    } else if (counter == 3) {
        document.querySelectorAll('.hexagone').forEach(dot => dot.classList.remove('selectedDot'));
        document.documentElement.style.setProperty('--primary', '#fad336');
        firstPage.style.display = 'none';
        secondPage.style.display = 'none';
        thirdPage.style.display = 'none';
        fourthDot.classList.add('selectedDot');
        fourthPage.style.display = 'flex';
    }
}

//thirdPage script

let présentation = document.getElementById('présentation');
let niveaux = document.getElementById('niveaux');
let invaders = document.getElementById('aliens');
let boss = document.getElementById('boss');
let toggleSIpage = document.querySelectorAll('.toggleSIpage');
let présentationSI = document.getElementById('presentationSI');
let presNiveauxSI = document.getElementById('presNiveauxSI');
let presInvadersSI = document.getElementById('presInvadersSI');
let presBossSI = document.getElementById('presBossSI');

présentation.addEventListener('click', function () {
    presNiveauxSI.style.display = 'none';
    presInvadersSI.style.display = 'none';
    presBossSI.style.display = 'none';
    présentationSI.style.display = 'flex';
    toggleSIpage.forEach(page => page.classList.remove('toggleSIchoices'));
    présentation.classList.add('toggleSIchoices');
});

niveaux.addEventListener('click', function () {
    presNiveauxSI.style.display = 'flex';
    presInvadersSI.style.display = 'none';
    présentationSI.style.display = 'none';
    presBossSI.style.display = 'none';
    toggleSIpage.forEach(page => page.classList.remove('toggleSIchoices'));
    niveaux.classList.add('toggleSIchoices');
});

invaders.addEventListener('click', function () {
    presNiveauxSI.style.display = 'none';
    presInvadersSI.style.display = 'flex';
    présentationSI.style.display = 'none';
    presBossSI.style.display = 'none';
    toggleSIpage.forEach(page => page.classList.remove('toggleSIchoices'));
    invaders.classList.add('toggleSIchoices');
});

boss.addEventListener('click', function () {
    presNiveauxSI.style.display = 'none';
    presInvadersSI.style.display = 'none';
    presBossSI.style.display = 'flex';
    présentationSI.style.display = 'none';
    toggleSIpage.forEach(page => page.classList.remove('toggleSIchoices'));
    boss.classList.add('toggleSIchoices');
});

function loadPage() {
    let fragment = window.location.hash;
    let page = parseInt(fragment.slice(1), 10);
    if (isNaN(page)) {
        window.location.hash = "";
        return;
    } else {
        counter = page;
        startPage.style.display = 'none';
        filmShit.style.display = 'flex';
        filmShit2.style.display = 'flex';
        firstPage.style.display = 'flex';
    }
    changePage(counter);
}

window.addEventListener('hashchange', loadPage);
document.addEventListener('DOMContentLoaded', loadPage);

//fourthPage script

let arrowNextPageLeft = document.getElementById('arrowNextPageLeft');
let arrowNextPageRight = document.getElementById('arrowNextPageRight');
let QVGDM = document.getElementById('QVGDM');
let QVGDM2 = document.getElementById('QVGDM2');
let QVGDM3 = document.getElementById('QVGDM3');
let QVGDM4 = document.getElementById('QVGDM4');
let QVGDM5 = document.getElementById('QVGDM5');
let whereAreYouNow = document.getElementById('whereAreYouNow');
let skills = document.getElementById('skills');
let rondnoir = document.getElementById('rond-noir');
let svgPage = document.getElementById('svg-Page');


const debounce = (func, wait, immediate) => {
    // 'private' variable to store the instance
    // in closure each timer will be assigned to it
    let timeout;

    // debounce returns a new anonymous function (closure)
    return function () {
        // reference the context and args for the setTimeout function
        let context = this,
            args = arguments;

        // should the function be called now? If immediate is true
        // and not already in a timeout then the answer is: Yes
        const callNow = immediate && !timeout;

        // base case
        // clear the timeout to assign the new timeout to it.
        // when event is fired repeatedly then this helps to reset
        clearTimeout(timeout);

        // set the new timeout
        timeout = setTimeout(function () {

            // Inside the timeout function, clear the timeout variable
            // which will let the next execution run when in 'immediate' mode
            timeout = null;

            // check if the function already ran with the immediate flag
            if (!immediate) {
                // call the original function with apply
                func.apply(context, args);
            }
        }, wait);

        // immediate mode and no wait timer? Execute the function immediately
        if (callNow) func.apply(context, args);
    }
}

let clickCounterSkills = 0
skills.addEventListener('click', debounce(function () {
    arrowNextPageLeft.style.animation = 'none';
    arrowNextPageRight.style.animation = 'none';
    whereAreYouNow.style.animation = 'none';
    svgPage.style.animation = 'none';
    if (clickCounterSkills == 0) {
        arrowNextPageLeft.style.animation = 'bodyFadeOut 1s ease-in-out';
        arrowNextPageRight.style.animation = 'bodyFadeOut 1s ease-in-out';
        whereAreYouNow.style.animation = 'bodyFadeOut 1s ease-in-out';
        setTimeout(function () {
        arrowNextPageLeft.style.display = 'none';
        arrowNextPageRight.style.display = 'none';
        whereAreYouNow.style.display = 'none';
        }, 1000);
        skills.innerText = 'RETOUR';
        skills.style.animation = 'fadeOut 2s ease-in-out';
        clickCounterSkills = 1;
        rondnoir.style.display = 'flex';
        rondnoir.style.animation = 'enorminus 2s ease-in-out';
        setTimeout(function () {
            rondnoir.style.display = 'none';
            filmShit2.style.display = 'none';
            svgPage.style.display = 'flex';
            skills.style.animation = 'none';
        }, 2000);
    } else {
        skills.innerText = 'SKILLS';
        skills.style.animation = 'fadeOut 2s ease-in-out';
        svgPage.style.animation = 'bodyFadeOut 0.5s ease-in-out';
        setTimeout(function () {
            arrowNextPageLeft.style.display = 'flex';
            arrowNextPageRight.style.display = 'flex';
            whereAreYouNow.style.display = 'flex';
            clickCounterSkills = 0;
            rondnoir.style.display = 'flex';
            rondnoir.style.animation = 'minusEnorm 2s ease-in-out';
            svgPage.style.display = 'none';
            setTimeout(function () {
                filmShit2.style.display = 'flex';
            }, 300);
            setTimeout(function () {
                rondnoir.style.display = 'none';
                skills.style.animation = 'none';
            }, 2000);
        }, 500);
    }
}, 2000, true));



let counterNextPage = 0;
arrowNextPageLeft.addEventListener('click', function () {
    if (counterNextPage > 0) {
        counterNextPage--;
    } else {
        counterNextPage = 4;
    }
    changePageQVGDM(counterNextPage);
    console.log(counterNextPage);
});

arrowNextPageRight.addEventListener('click', function () {
    if (counterNextPage < 4) {
        counterNextPage++;
    } else {
        counterNextPage = 0;
    }
    changePageQVGDM(counterNextPage);
    console.log("the counter for QVGDM", counterNextPage);
});

function changePageQVGDM(counterNextPage) {
    if (counterNextPage == 0) {
        QVGDM.style.display = 'flex';
        QVGDM2.style.display = 'none';
        QVGDM3.style.display = 'none';
        QVGDM4.style.display = 'none';
        QVGDM5.style.display = 'none';
        whereAreYouNow.innerHTML = "1/5";
    } else if (counterNextPage == 1) {
        QVGDM.style.display = 'none';
        QVGDM2.style.display = 'flex';
        QVGDM3.style.display = 'none';
        QVGDM4.style.display = 'none';
        QVGDM5.style.display = 'none';
        whereAreYouNow.innerHTML = "2/5";
    } else if (counterNextPage == 2) {
        QVGDM2.style.display = 'none';
        QVGDM3.style.display = 'flex';
        QVGDM.style.display = 'none';
        QVGDM4.style.display = 'none';
        QVGDM5.style.display = 'none';
        whereAreYouNow.innerHTML = "3/5";
    } else if (counterNextPage == 3) {
        QVGDM3.style.display = 'none';
        QVGDM.style.display = 'none';
        QVGDM2.style.display = 'none';
        QVGDM4.style.display = 'flex';
        QVGDM5.style.display = 'none';
        whereAreYouNow.innerHTML = "4/5";
    } else if (counterNextPage == 4) {
        QVGDM3.style.display = 'none';
        QVGDM.style.display = 'none';
        QVGDM2.style.display = 'none';
        QVGDM4.style.display = 'none';
        QVGDM5.style.display = 'flex';
        whereAreYouNow.innerHTML = "5/5";
    }
}


//svg animation

