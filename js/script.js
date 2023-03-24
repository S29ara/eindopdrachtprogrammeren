console.log('Hallo wereld')

/*Start screen*/
var startButton = document.querySelector(".start_button");
var hideElements = document.querySelector(".hide");
var startScherm = document.querySelector("#startscherm");

/* bron sound toevoegen: https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48 */
/*sounds*/
var startbuttonSound = new Audio("audio/bleepsound.mp3");
var ouchSound = new Audio("audio/ouch.mp3");
var stopit_Sound = new Audio ("audio/stopit.mp3");
var scream_Sound = new Audio ("audio/screaming.mp3")
var ew_Sound = new Audio ("audio/ew.mp3")

/*Damage buttons*/
var punch = document.querySelector(".button_punch");
var nunchucks = document.querySelector(".button_nunchucks");
var fire = document.querySelector(".button_fire");
var trash = document.querySelector(".button_trash");

var imgMeangirl = document.querySelector(".girl");
var textCloud = document.querySelector(".textcloud");

var randomButton = document.querySelector(".random_button")

var damageArray = ["meangirl_blood.png", "meangirl_blue_eye.png", "meangirl_trash.png", "meangirl_onfire.png"];

var fewClicks = 0;

function startScreen() {
    hideElements.classList.remove("hide");
    startScherm.classList.add("hide");
};

startButton.addEventListener("click",startScreen);

startButton.addEventListener("click", (e) => {
    startbuttonSound.play();
});

/* hulp van Sander */
function addPunch() {
    fewClicks++;
    console.log(fewClicks);
    ouchSound.play();
    if (fewClicks < 5){
        imgMeangirl.src = "images/meangirl_blue_eye.png";
        textCloud.src = "images/textwolk_ouch.png";

        setTimeout(function blueEye() {
            imgMeangirl.src = "images/meangirl_regular.png";
            textCloud.src = "images/textwolk_loser.png"
        }, 1800);
    }
    else {
        textCloud.src = "images/textwolk_5times.png";
        punch.removeEventListener("click", addPunch);
        punch.classList.add("not_working");
        setTimeout(resetten, 4000); 
     }
}

punch.addEventListener('click', addPunch);


function resetten() {
    console.log("resetten");
    fewClicks = 0;
    punch.addEventListener("click", addPunch);
    punch.classList.remove("not_working");  
}

function addNunchucks() {
    fewClicks++;
    console.log(fewClicks);
    stopit_Sound.currentTime = 0;
    stopit_Sound.play();
    
    if (fewClicks < 5){
    imgMeangirl.src = "images/meangirl_blood.png";
    textCloud.src = "images/textwolk_stopit.png";
    setTimeout(function bloodFace() {
        imgMeangirl.src = "images/meangirl_regular.png";
        textCloud.src = "images/textwolk_loser.png"
    }, 1800);
}
else {
    textCloud.src = "images/textwolk_5times.png";
    nunchucks.removeEventListener("click", addNunchucks);
    nunchucks.classList.add("not_working");
    setTimeout(resetten, 4000); 
}
}

nunchucks.addEventListener("click", addNunchucks);

function resetten() {
    console.log("resetten");
    fewClicks = 0;
    nunchucks.addEventListener("click", addNunchucks);
    nunchucks.classList.remove("not_working");  
}

function addFire() {
    fewClicks++;
    scream_Sound.play();

    if (fewClicks < 5) {
    imgMeangirl.src = "images/meangirl_onfire.png";
    textCloud.src = "images/textwolk_notmyoutfit.png";
    setTimeout(function onFire() {
        imgMeangirl.src = "images/meangirl_regular.png";
        textCloud.src = "images/textwolk_loser.png"
    }, 1800);
    }
    else {
        textCloud.src = "images/textwolk_5times.png";
        fire.removeEventListener("click", addFire);
        fire.classList.add("not_working");
        setTimeout(resetten, 4000); 
    }  
}

fire.addEventListener("click", addFire);

function resetten() {
    console.log("resetten");
    fewClicks = 0;
    fire.addEventListener("click", addFire);
    fire.classList.remove("not_working");  
}

function addTrash() {
    fewClicks++;
    ew_Sound.play();

    if(fewClicks < 5){
    imgMeangirl.src = "images/meangirl_trash.png";
    textCloud.src = "images/textwolk_ew.png";
    setTimeout(function dirty() {
        imgMeangirl.src = "images/meangirl_regular.png";
        textCloud.src = "images/textwolk_loser.png";
    }, 1800);
    }
    else {
        textCloud.src = "images/textwolk_5times.png";
        trash.removeEventListener("click", addTrash);
        trash.classList.add("not_working");
        setTimeout(resetten, 4000); 
    }  
};

function resetten() {
    console.log("resetten");
    fewClicks = 0;
    trash.addEventListener("click", addTrash);
    trash.classList.remove("not_working");  
}

trash.addEventListener("click", addTrash);

/* bron array: https://www.youtube.com/watch?v=PfzA1CX3aI4 */
function randomDamage() {
    const randomImg = Math.floor(Math.random()* damageArray.length);
    choosenImage = damageArray[randomImg];
    imgMeangirl.src = choosenImage;

    setTimeout(function random() {
        imgMeangirl.src = "images/meangirl_regular.png";
        textCloud.src = "images/textwolk_loser.png";
    }, 1800); 
}

randomButton.addEventListener("click", randomDamage);



