// PAGE SWITCHING

const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".nextBtn");

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        const nextPage = button.dataset.next;

        pages.forEach(page => {
            page.classList.remove("active");
        });

        document.getElementById(nextPage).classList.add("active");

        window.scrollTo(0,0);

    });

});



// BACKGROUND MUSIC

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;


musicBtn.addEventListener("click",()=>{

    if(musicPlaying){

        music.pause();

        musicBtn.innerHTML="🎵";

    }

    else{

        music.play();

        musicBtn.innerHTML="🔊";

    }

    musicPlaying=!musicPlaying;

});




// FLOATING HEARTS

const heartsBox = document.getElementById("hearts");


function createHeart(){

    const heart=document.createElement("div");

    heart.className="heartFloat";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(4+Math.random()*5)+"s";


    heartsBox.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);

}


setInterval(createHeart,500);




// ENVELOPE OPENING

const envelope=document.getElementById("envelope");

const letterText = 
"Every moment with you is special. ❤️ You make my days brighter and my life happier. Thank you for being you. I am lucky to have you.";

let typedStarted=false;


envelope.addEventListener("click",()=>{


    envelope.classList.add("open");


    if(!typedStarted){

        typeWriter();

        typedStarted=true;

    }

});



function typeWriter(){

    const text=document.getElementById("typedText");

    let i=0;


    function typing(){

        if(i<letterText.length){

            text.innerHTML += letterText.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }


    typing();

}
// WHY YOU SECTION

const reasons = [

"Because your smile can make my worst days better ❤️",

"Because you understand me like nobody else 🌸",

"Because every moment with you feels special ✨",

"Because you make me laugh even when I don't feel like smiling 💕",

"Because you are my favorite person to talk to 💌",

"Because your happiness matters to me ❤️",

"Because you make ordinary moments beautiful 🌷",

"Because I love the way you care about me 🤍",

"Because I can be myself around you 🫶",

"Because I choose you, again and again ❤️"

];


let reasonIndex = 0;


const reasonText=document.getElementById("reasonText");

const dots=document.getElementById("dots");


function showReason(){

    reasonText.innerHTML=reasons[reasonIndex];


    dots.innerHTML="";


    reasons.forEach((_,index)=>{

        const dot=document.createElement("span");

        dot.className="dot";


        if(index===reasonIndex){

            dot.classList.add("active");

        }


        dots.appendChild(dot);

    });

}


showReason();



document.getElementById("nextReason").addEventListener("click",()=>{

    reasonIndex++;


    if(reasonIndex>=reasons.length){

        reasonIndex=0;

    }


    showReason();

});



document.getElementById("prevReason").addEventListener("click",()=>{


    reasonIndex--;


    if(reasonIndex<0){

        reasonIndex=reasons.length-1;

    }


    showReason();


});


/* ===================================
   


/* ===================================
   PROGRESS INDICATOR
=================================== */

const progress = document.createElement("div");
progress.className = "progress";
document.body.appendChild(progress);

function updateProgress(){

    const activePage = document.querySelector(".page.active");

    if(!activePage) return;

    const pageNumber = activePage.id.replace("page","");

    progress.innerHTML = `❤️ Page ${pageNumber} / 9`;

}

updateProgress();


/* Update progress whenever a Next button is clicked */

document.querySelectorAll(".nextBtn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        setTimeout(updateProgress,100);

    });

});


/* ===================================
   REPLAY BUTTON
=================================== */

const replayBtn = document.getElementById("restartBtn");

if(replayBtn){

    replayBtn.addEventListener("click",()=>{

        document.querySelectorAll(".page").forEach(page=>{

            page.classList.remove("active");

        });

        document.getElementById("page1").classList.add("active");

        heartClicks = 0;

        heart.style.transform = "scale(1)";

        heartMessage.innerHTML = "Tap the heart...";

        if(videoBtn){
            videoBtn.classList.add("hidden");
        }

        if(openMessage){
            openMessage.style.display = "none";
            openMessage.innerHTML = "";
        }

        reasonIndex = 0;
        showReason();

        updateProgress();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}


/* ===================================
   FINAL SURPRISE EFFECT
=================================== */

const finalPage = document.getElementById("page9");

if(finalPage){

    const observer = new MutationObserver(()=>{

        if(finalPage.classList.contains("active")){

            createConfetti();

            createFireworks();

        }

    });

    observer.observe(finalPage,{
        attributes:true,
        attributeFilter:["class"]
    });

}


// HEART CLICK GAME


const heart=document.getElementById("heart");

const heartMessage=document.getElementById("heartMessage");

const videoBtn=document.getElementById("videoBtn");


const heartMessages=[

"You're my favorite person ❤️",

"You make my world brighter ✨",

"I miss your smile 🥹",

"I'm grateful for you 🌸",

"I love you forever ❤️"

];


let heartClicks=0;



heart.addEventListener("click",()=>{


    createHeartExplosion();


    heartClicks++;


    if(heartClicks<=heartMessages.length){

        heartMessage.innerHTML=
        heartMessages[heartClicks-1];

    }



    heart.style.transform=
    `scale(${1 + heartClicks*0.05})`;



    if(heartClicks===heartMessages.length){

        heartMessage.innerHTML=
        "I Love You Forever ❤️";


        createConfetti();

        createFireworks();


        videoBtn.classList.remove("hidden");

    }


});




// HEART EXPLOSION


function createHeartExplosion(){


    for(let i=0;i<8;i++){


        const h=document.createElement("div");


        h.className="miniHeart";

        h.innerHTML="❤️";


        h.style.left=
        (window.innerWidth/2)+"px";


        h.style.top=
        (window.innerHeight/2)+"px";



        h.style.setProperty("--x",
        (Math.random()*200-100)+"px");


        h.style.setProperty("--y",
        (Math.random()*200-100)+"px");



        document.body.appendChild(h);



        setTimeout(()=>{

            h.remove();

        },1000);


    }


}
// CONFETTI EFFECT

function createConfetti(){

    const emojis = ["❤️","💖","✨","🌸","💕"];

    for(let i=0;i<50;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];


        confetti.style.left=
        Math.random()*100+"vw";


        confetti.style.animationDuration=
        (2+Math.random()*3)+"s";


        document.body.appendChild(confetti);



        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}




// FIREWORK EFFECT

function createFireworks(){


    for(let i=0;i<8;i++){


        setTimeout(()=>{


            const fire=document.createElement("div");


            fire.className="firework";


            fire.innerHTML="🎆";


            fire.style.left=
            Math.random()*80+10+"vw";


            fire.style.top=
            Math.random()*60+10+"vh";


            document.body.appendChild(fire);



            setTimeout(()=>{

                fire.remove();

            },1000);



        },i*300);


    }


}





// RESTART WEBSITE


const restartBtn=document.getElementById("restartBtn");


restartBtn.addEventListener("click",()=>{


    pages.forEach(page=>{

        page.classList.remove("active");

    });


    document.getElementById("page1")
    .classList.add("active");



    heartClicks=0;


    heart.style.transform="scale(1)";


    heartMessage.innerHTML=
    "Tap the heart...";



    videoBtn.classList.add("hidden");



    reasonIndex=0;

    showReason();


});





// SMALL SPARKLE EFFECT

setInterval(()=>{


    const sparkle=document.createElement("div");


    sparkle.className="sparkle";


    sparkle.innerHTML="✨";


    sparkle.style.left=
    Math.random()*100+"vw";


    sparkle.style.top=
    Math.random()*100+"vh";


    document.body.appendChild(sparkle);



    setTimeout(()=>{

        sparkle.remove();

    },1000);


},700);
