let header = document.querySelector('#intro');
let anim = [
    { t: "[]", ms: 300 },
    { t: "[...]",ms: 300 },
    { t: "[L...]", ms: 300 },
    { t: "[Lo...]", ms: 300 },
    { t: "[Loa...]", ms: 300 },
    { t: "[Load...]", ms: 300 },
    { t: "[Loadi...]", ms: 300 },
    { t: "[Loadin...]", ms: 300 },
    { t: "[Loading...]", ms: 300 },
    { t: "Bir9", ms: 300 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();