
// let menuBtn = document.querySelector('.menu-btn');
// let menuMobile = document.querySelector('.topnav');

// menuBtn.addEventListener('clik', () => {
//     menuMobile.classList.toggle('menu--open');
// });


// Opening and closing blind version

let versionWork = () => {
    let buttonBig = document.getElementById('blind');
    let buttonSmol = document.querySelector('.glass');
    let versionBlind = document.querySelector('.eyed-panel');

    versionBlind.classList.toggle('eyed-panel-open');
}
document.getElementById('blind').addEventListener('click', versionWork)
document.getElementById('glass').addEventListener('click', versionWork)
// -----------------


// Background
const bodyBackground = document.querySelector('.body');
const whiteBtn = document.getElementById('background-white');
const blackBtn = document.getElementById('background-black');
let blueBtn = document.getElementById('background-blue');

let backgroundToggle = () => {
    bodyBackground.classList.toggle('body-white');
}
document.getElementById('background-white').addEventListener('click', backgroundToggle)

let backgroundToggleBlack = () => {
    bodyBackground.classList.toggle('body-black');
}
document.getElementById('background-black').addEventListener('click', backgroundToggleBlack)

let backgroundToggleBlue = () => {
    bodyBackground.classList.toggle('body-blue');
}
document.getElementById('background-blue').addEventListener('click', backgroundToggleBlue)

// -----------------
//font
let smollFonts = document.getElementById('.smoll-fonts');
let middleFonts = document.getElementById('.midlle-fonts');
let bigFonts = document.getElementById('.big-fonts');

let fontToggle = () => {
    bodyBackground.classList.toggle('smoll-fonts');
}
document.getElementById('smoll-fonts').addEventListener('click', fontToggle)

let fontToggleMidlle = () => {
    bodyBackground.classList.toggle('midlle-fonts');
}
document.getElementById('midlle-fonts').addEventListener('click', fontToggleMidlle)

let fontToggleBig = () => {
    bodyBackground.classList.toggle('big-fonts');
}
document.getElementById('big-fonts').addEventListener('click', fontToggleBig)


//------------------
//-----img----------
let yesImg = document.getElementById('.yesImg');

let imgSee = () => {
    bodyBackground.classList.toggle('yesImg');
}
document.getElementById('yesImg').addEventListener('click', imgSee)

let content = document.getElementById('noSeeImg');
let imgContent = () => {
    content.classList.toggle('yesImg');
}
document.getElementById('yesImg').addEventListener('click', imgContent)

let content2 = document.getElementById('noSeeImg2');
let imgContent2 = () => {
    content2.classList.toggle('yesImg');
}
document.getElementById('yesImg').addEventListener('click', imgContent2)

//-----------------

//-------Voice over text-------
let soundOf = document.getElementById('sound-of');
let soundOn = document.getElementById('sound-on');