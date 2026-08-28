/* ========================================
   🍭 SWEET CHOICE SYSTEM
======================================== */

const candyIntro =
    document.getElementById("candyIntro");


let chosenSweet = null;


function chooseSweet(type){

    if(chosenSweet) return;

    chosenSweet = type;

    const option =
        document.querySelector(
            "." + type + "-option"
        );

    candyIntro.classList.add("choosing");

    option.classList.add("selected");


    /* ====================================
       CHANGE ENTIRE WORLD THEME
    ==================================== */

    document.body.dataset.sweet = type;


    /* ====================================
       EXTRA PARTICLES
    ==================================== */

    let symbols;

    if(type === "candy"){

        symbols = [
            "🍭",
            "💗",
            "💖",
            "🍬",
            "🍓",
            "✨"
        ];

    }

    else if(type === "cupcake"){

        symbols = [
            "🧁",
            "💜",
            "✨",
            "⭐",
            "🌸",
            "🍬"
        ];

    }

    else{

        symbols = [
            "🍰",
            "🍓",
            "✨",
            "💎",
            "💗",
            "⭐"
        ];

    }


    for(let i=0;i<35;i++){

        const particle =
            document.createElement("div");

        particle.className =
            "click-particle";

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random()*symbols.length
                )
            ];

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.setProperty(
            "--x",
            (Math.random()*700-350)+"px"
        );

        particle.style.setProperty(
            "--y",
            (Math.random()*700-350)+"px"
        );

        candyIntro.appendChild(particle);


        setTimeout(()=>{

            particle.remove();

        },900);

    }
