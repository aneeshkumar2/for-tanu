// ============================
// PAGE NAVIGATION
// ============================


const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".nextBtn");


function showPage(pageID){

    pages.forEach(page=>{

        page.classList.remove("active");

    });


    const target = document.getElementById(pageID);


    if(target){

        target.classList.add("active");

    }


    updateProgress();

}



nextButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const nextPage = button.dataset.next;


        if(nextPage){

            showPage(nextPage);

        }


    });


});




// ============================
// PROGRESS
// ============================


const progress = document.getElementById("progress");


function updateProgress(){


    const current = document.querySelector(".page.active");


    if(current){

        const number = current.id.replace("page","");


        progress.innerHTML =
        `❤️ Page ${number} / 9`;

    }


}



updateProgress();




// ============================
// MUSIC
// ============================


const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");


let playing = false;


musicBtn.addEventListener("click",()=>{


    if(playing){


        music.pause();

        musicBtn.innerHTML="🎵";


    }
    else{


        music.play();

        musicBtn.innerHTML="🔊";


    }


    playing = !playing;


});




// ============================
// FLOATING HEARTS
// ============================


const hearts = document.getElementById("hearts");


function createHeart(){


    const heart = document.createElement("div");


    heart.className="heartFloat";


    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"%";


    heart.style.animationDuration =
    (4 + Math.random()*5)+"s";


    hearts.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },8000);



}


setInterval(createHeart,700);





// ============================
// LOVE LETTER
// ============================


const envelope =
document.getElementById("envelope");


const typedText =
document.getElementById("typedText");


let letterStarted=false;


const letter =

"Thank you for being a beautiful part of my life. You make my days happier and my world brighter. ❤️";



envelope.addEventListener("click",()=>{


    envelope.classList.add("open");


    if(!letterStarted){

        typeLetter();

        letterStarted=true;

    }


});



function typeLetter(){


    let i=0;


    function write(){


        if(i < letter.length){


            typedText.innerHTML += letter[i];


            i++;


            setTimeout(write,40);


        }


    }


    write();


}
// ============================
// WHY YOU
// ============================


const reasons = [

"Your smile makes my day better ❤️",

"You understand me like no one else 🌸",

"You make normal moments special ✨",

"You always make me laugh 💕",

"I love talking to you ❤️",

"Your happiness matters to me 🌷",

"You make life more beautiful 🤍",

"I can always be myself with you 🫶",

"You are someone I truly appreciate 💖",

"I would choose you again and again ❤️"

];


let reasonIndex = 0;


const reasonText =
document.getElementById("reasonText");


const dots =
document.getElementById("dots");



function showReason(){


    reasonText.innerHTML =
    reasons[reasonIndex];


    dots.innerHTML="";


    reasons.forEach((item,index)=>{


        const dot =
        document.createElement("span");


        dot.className="dot";


        if(index===reasonIndex){

            dot.classList.add("active");

        }


        dots.appendChild(dot);


    });


}


showReason();



document.getElementById("nextReason")
.addEventListener("click",()=>{


    reasonIndex++;


    if(reasonIndex>=reasons.length){

        reasonIndex=0;

    }


    showReason();


});



document.getElementById("prevReason")
.addEventListener("click",()=>{


    reasonIndex--;


    if(reasonIndex<0){

        reasonIndex=reasons.length-1;

    }


    showReason();


});




// ============================
// HEART CLICK
// ============================


const heart =
document.getElementById("heart");


const heartMessage =
document.getElementById("heartMessage");


const videoBtn =
document.getElementById("videoBtn");


let heartClicks=0;



heart.addEventListener("click",()=>{


    heartClicks++;


    heart.style.transform =
    `scale(${1 + heartClicks*0.05})`;



    heartMessage.innerHTML =
    `❤️ ${heartClicks}/5`;



    if(heartClicks>=5){


        heartMessage.innerHTML =
        "I Love You ❤️";


        videoBtn.classList.remove("hidden");


        confetti();


    }


});




// ============================
// OPEN WHEN
// ============================


const cards =
document.querySelectorAll(".openCard");


const openMessage =
document.getElementById("openMessage");



cards.forEach(card=>{


    card.addEventListener("click",()=>{


        openMessage.style.display="block";


        openMessage.innerHTML =
        card.dataset.message;


    });


});





// ============================
// REPLAY
// ============================


document.getElementById("restartBtn")
.addEventListener("click",()=>{


    showPage("page1");


    heartClicks=0;


    heart.style.transform="scale(1)";


    heartMessage.innerHTML =
    "Tap the heart...";


    videoBtn.classList.add("hidden");


    openMessage.style.display="none";


});





// ============================
// CONFETTI
// ============================


function confetti(){


    for(let i=0;i<40;i++){


        const item =
        document.createElement("div");


        item.innerHTML="❤️";


        item.style.position="fixed";

        item.style.left =
        Math.random()*100+"vw";

        item.style.top="-20px";

        item.style.fontSize="20px";


        item.style.animation =
        "fall 3s linear";


        document.body.appendChild(item);



        setTimeout(()=>{

            item.remove();

        },3000);


    }


}
