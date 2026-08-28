/* ========================================
   🍭 CANDY LAND INTRO
======================================== */

const candyIntro =
    document.getElementById("candyIntro");


function enterCandyLand(){

    if(candyIntro.classList.contains("exit")){
        return;
    }

    candyIntro.classList.add("exit");

    /*
        ปล่อยให้ animation ระเบิด
        ทำงานก่อน แล้วค่อยซ่อน
    */

    setTimeout(()=>{

        candyIntro.classList.add("hide");

    },1000);

}


/* ========================================
   AUTO ENTER
======================================== */

/*
   ถ้าไม่กดอะไรเลย
   หลังจาก 7 วินาทีจะเข้าเว็บอัตโนมัติ
*/

setTimeout(()=>{

    if(
        candyIntro &&
        !candyIntro.classList.contains("hide")
    ){

        enterCandyLand();

    }

},7000);


/* ========================================
   INTRO CLICK PARTICLES
======================================== */

candyIntro.addEventListener(
    "click",
    function(e){

        const sweets = [
            "🍭",
            "🍬",
            "🧁",
            "🍩",
            "🍰",
            "🍓",
            "✨",
            "💗"
        ];

        for(let i=0;i<14;i++){

            const particle =
                document.createElement("div");

            particle.className =
                "click-particle";

            particle.textContent =
                sweets[
                    Math.floor(
                        Math.random()*sweets.length
                    )
                ];

            particle.style.left =
                e.clientX + "px";

            particle.style.top =
                e.clientY + "px";

            particle.style.setProperty(
                "--x",
                (Math.random()*300-150)+"px"
            );

            particle.style.setProperty(
                "--y",
                (Math.random()*300-150)+"px"
            );

            candyIntro.appendChild(particle);

            setTimeout(()=>{

                particle.remove();

            },800);

        }

    }
);
