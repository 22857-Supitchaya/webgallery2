/* =========================================================
   🍭 SWEET CANDY GALLERY
   DELUXE JAVASCRIPT
========================================================= */


/* =========================================================
   INTRO LOADING
========================================================= */

const intro =
    document.getElementById("intro");

const enterButton =
    document.getElementById("enterButton");

const loadingProgress =
    document.getElementById("loadingProgress");

const loadingPercent =
    document.getElementById("loadingPercent");


let loading =
    0;


const loadingTimer =
    setInterval(() => {


        loading +=
            Math.floor(
                Math.random() * 5
            ) + 1;


        if (
            loading >= 100
        ) {

            loading =
                100;

            clearInterval(
                loadingTimer
            );

        }


        loadingProgress.style.width =
            loading + "%";


        loadingPercent.textContent =
            loading + "%";


    }, 80);



/* =========================================================
   ENTER CANDY WORLD
========================================================= */

enterButton.addEventListener(
    "click",
    (event) => {


        createCandyExplosion(
            window.innerWidth / 2,
            window.innerHeight / 2,
            70
        );


        createCandyBurst(
            window.innerWidth / 2,
            window.innerHeight / 2
        );


        intro.classList.add(
            "hide"
        );


        setTimeout(
            () => {

                intro.style.display =
                    "none";

            },
            1000
        );


    }
);



/* =========================================================
   CANDY EXPLOSION
========================================================= */

function createCandyExplosion(
    x,
    y,
    amount = 30
) {


    const sweets = [

        "🍭",
        "🍬",
        "🧁",
        "🍩",
        "🍰",
        "🍪",
        "🍓",
        "🍫",
        "🫐",
        "🍋",
        "✨",
        "💗",
        "⭐",
        "🌟"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "click-particle";


        particle.textContent =
            sweets[
                Math.floor(
                    Math.random()
                    *
                    sweets.length
                )
            ];


        particle.style.left =
            x + "px";


        particle.style.top =
            y + "px";


        particle.style.setProperty(
            "--x",
            (
                Math.random() * 600
                - 300
            ) + "px"
        );


        particle.style.setProperty(
            "--y",
            (
                Math.random() * 600
                - 300
            ) + "px"
        );


        particle.style.setProperty(
            "--scale",
            (
                .6
                +
                Math.random() * 1.2
            )
        );


        particle.style.setProperty(
            "--rotate",
            (
                Math.random() * 720
                - 360
            ) + "deg"
        );


        particle.style.fontSize =
            (
                15
                +
                Math.random() * 25
            ) + "px";


        particle.style.animationDuration =
            (
                .8
                +
                Math.random() * .7
            ) + "s";


        document.body.appendChild(
            particle
        );


        setTimeout(
            () => {

                particle.remove();

            },
            1600
        );

    }

}



/* =========================================================
   BIG CANDY BURST
========================================================= */

function createCandyBurst(
    x,
    y
) {


    const ring =
        document.createElement(
            "div"
        );


    ring.style.position =
        "fixed";


    ring.style.left =
        x + "px";


    ring.style.top =
        y + "px";


    ring.style.width =
        "30px";


    ring.style.height =
        "30px";


    ring.style.border =
        "5px solid white";


    ring.style.borderRadius =
        "50%";


    ring.style.pointerEvents =
        "none";


    ring.style.zIndex =
        "99998";


    ring.style.transform =
        "translate(-50%,-50%)";


    ring.style.transition =
        "1s ease";


    document.body.appendChild(
        ring
    );


    requestAnimationFrame(
        () => {

            ring.style.width =
                "700px";

            ring.style.height =
                "700px";

            ring.style.opacity =
                "0";

        }
    );


    setTimeout(
        () => {

            ring.remove();

        },
        1000
    );

}



/* =========================================================
   THEME PANEL
========================================================= */

const themePanel =
    document.getElementById(
        "themePanel"
    );


const themeOpen =
    document.getElementById(
        "themeOpen"
    );


const themeClose =
    document.getElementById(
        "themeClose"
    );


const themeOptions =
    document.querySelectorAll(
        ".theme-option"
    );


themeOpen.addEventListener(
    "click",
    () => {

        themePanel.classList.add(
            "active"
        );

    }
);


themeClose.addEventListener(
    "click",
    () => {

        themePanel.classList.remove(
            "active"
        );

    }
);


themePanel.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            themePanel
        ) {

            themePanel.classList.remove(
                "active"
            );

        }

    }
);



/* =========================================================
   THEME CHANGE
========================================================= */

themeOptions.forEach(
    option => {


        option.addEventListener(
            "click",
            () => {


                const theme =
                    option.dataset.theme;


                document.body.classList.remove(

                    "blueberry",
                    "chocolate",
                    "lemon",
                    "cotton",
                    "galaxy"

                );


                if (
                    theme !==
                    "strawberry"
                ) {

                    document.body.classList.add(
                        theme
                    );

                }


                themeOptions.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                option.classList.add(
                    "active"
                );


                localStorage.setItem(
                    "sweetTheme",
                    theme
                );


                createCandyExplosion(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    45
                );


                createCandyBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                );


                setTimeout(
                    () => {

                        themePanel.classList.remove(
                            "active"
                        );

                    },
                    400
                );


            }
        );


    }
);



/* =========================================================
   LOAD SAVED THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "sweetTheme"
    );


if (
    savedTheme
) {


    document.body.classList.remove(

        "blueberry",
        "chocolate",
        "lemon",
        "cotton",
        "galaxy"

    );


    if (
        savedTheme !==
        "strawberry"
    ) {

        document.body.classList.add(
            savedTheme
        );

    }


    themeOptions.forEach(
        option => {

            option.classList.remove(
                "active"
            );


            if (
                option.dataset.theme
                ===
                savedTheme
            ) {

                option.classList.add(
                    "active"
                );

            }

        }
    );

}



/* =========================================================
   CLICK CANDY EXPLOSION
========================================================= */

document.addEventListener(
    "click",
    event => {


        if (
            event.target.closest(
                ".theme-option"
            )
        ) {

            return;

        }


        if (
            event.target.closest(
                ".theme-open"
            )
        ) {

            return;

        }


        if (
            event.target.closest(
                ".theme-close"
            )
        ) {

            return;

        }


        if (
            event.target.closest(
                ".modal-close"
            )
        ) {

            return;

        }


        createCandyExplosion(
            event.clientX,
            event.clientY,
            14
        );

    }
);



/* =========================================================
   HEART
========================================================= */

document
    .querySelectorAll(".heart")
    .forEach(
        heart => {


            heart.addEventListener(
                "click",
                event => {


                    event.stopPropagation();


                    heart.classList.toggle(
                        "liked"
                    );


                    heart.textContent =
                        heart.classList.contains(
                            "liked"
                        )
                        ? "♥"
                        : "♡";


                    createCandyExplosion(
                        event.clientX,
                        event.clientY,
                        25
                    );


                }
            );


        }
    );



/* =========================================================
   IMAGE MODAL
========================================================= */

const imageModal =
    document.getElementById(
        "imageModal"
    );


const largeImage =
    document.getElementById(
        "largeImage"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


document
    .querySelectorAll(".view-button")
    .forEach(
        button => {


            button.addEventListener(
                "click",
                event => {


                    event.stopPropagation();


                    const card =
                        button.closest(
                            ".card"
                        );


                    const image =
                        card.querySelector(
                            "img"
                        );


                    const title =
                        card.querySelector(
                            "h3"
                        );


                    largeImage.src =
                        image.src;


                    largeImage.alt =
                        image.alt;


                    modalTitle.textContent =
                        title.textContent;


                    imageModal.classList.add(
                        "active"
                    );


                    createCandyExplosion(
                        event.clientX,
                        event.clientY,
                        18
                    );


                }
            );


        }
    );



/* =========================================================
   CLOSE MODAL
========================================================= */

modalClose.addEventListener(
    "click",
    () => {

        imageModal.classList.remove(
            "active"
        );

    }
);


imageModal.addEventListener(
    "click",
    event => {


        if (
            event.target ===
            imageModal
        ) {

            imageModal.classList.remove(
                "active"
            );

        }

    }
);



/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key ===
            "Escape"
        ) {

            imageModal.classList.remove(
                "active"
            );


            themePanel.classList.remove(
                "active"
            );

        }

    }
);



/* =========================================================
   CANDY TRAIL
========================================================= */

const trailLayer =
    document.getElementById(
        "trailLayer"
    );


const trailSymbols = [

    "🍭",
    "🍬",
    "✨",
    "💗",
    "⭐",
    "🍓",
    "🧁"

];


let lastTrail =
    0;


document.addEventListener(
    "mousemove",
    event => {


        const now =
            Date.now();


        if (
            now - lastTrail <
            45
        ) {

            return;

        }


        lastTrail =
            now;


        const trail =
            document.createElement(
                "div"
            );


        trail.className =
            "trail-dot";


        trail.textContent =
            trailSymbols[
                Math.floor(
                    Math.random()
                    *
                    trailSymbols.length
                )
            ];


        trail.style.left =
            event.clientX + "px";


        trail.style.top =
            event.clientY + "px";


        trail.style.setProperty(
            "--tx",
            (
                Math.random() * 80
                - 40
            ) + "px"
        );


        trail.style.setProperty(
            "--ty",
            (
                Math.random() * 80
                - 40
            ) + "px"
        );


        trailLayer.appendChild(
            trail
        );


        setTimeout(
            () => {

                trail.remove();

            },
            850
        );

    }
);



/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.querySelector(
        ".cursor"
    );


const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );


document.addEventListener(
    "mousemove",
    event => {


        if (
            window.innerWidth <=
            700
        ) {

            return;

        }


        cursor.style.left =
            event.clientX + "px";


        cursor.style.top =
            event.clientY + "px";


        cursorDot.style.left =
            event.clientX + "px";


        cursorDot.style.top =
            event.clientY + "px";


    }
);



/* =========================================================
   CURSOR HOVER
========================================================= */

document
    .querySelectorAll(
        "button, a, .card"
    )
    .forEach(
        element => {


            element.addEventListener(
                "mouseenter",
                () => {

                    document.body.classList.add(
                        "cursor-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    document.body.classList.remove(
                        "cursor-hover"
                    );

                }
            );


        }
    );



/* =========================================================
   RIPPLE BUTTON
========================================================= */

document
    .querySelectorAll(
        ".enter-button, .hero-button, .view-button"
    )
    .forEach(
        button => {


            button.addEventListener(
                "click",
                event => {


                    const ripple =
                        document.createElement(
                            "span"
                        );


                    ripple.className =
                        "ripple";


                    const rect =
                        button.getBoundingClientRect();


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );


                    ripple.style.width =
                        size + "px";


                    ripple.style.height =
                        size + "px";


                    ripple.style.left =
                        (
                            event.clientX
                            -
                            rect.left
                            -
                            size / 2
                        ) + "px";


                    ripple.style.top =
                        (
                            event.clientY
                            -
                            rect.top
                            -
                            size / 2
                        ) + "px";


                    button.appendChild(
                        ripple
                    );


                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        700
                    );


                }
            );


        }
    );



/* =========================================================
   CARD 3D TILT
========================================================= */

document
    .querySelectorAll(".card")
    .forEach(
        card => {


            card.addEventListener(
                "mousemove",
                event => {


                    if (
                        window.innerWidth <=
                        700
                    ) {

                        return;

                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX
                        -
                        rect.left;


                    const y =
                        event.clientY
                        -
                        rect.top;


                    const rotateY =
                        (
                            x /
                            rect.width
                            -
                            .5
                        )
                        *
                        8;


                    const rotateX =
                        (
                            y /
                            rect.height
                            -
                            .5
                        )
                        *
                        -8;


                    card.style.transform =
                        `
                        perspective(1200px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-10px)
                        scale(1.015)
                        `;


                }
            );


            card.addEventListener(
                "mouseleave",
                () => {


                    card.style.transform =
                        "";


                }
            );


        }
    );



/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
    new IntersectionObserver(
        entries => {


            entries.forEach(
                entry => {


                    if (
                        entry.isIntersecting
                    ) {


                        entry.target.classList.add(
                            "show"
                        );


                        observer.unobserve(
                            entry.target
                        );


                    }


                }
            );


        },
        {
            threshold: .15
        }
    );


document
    .querySelectorAll(
        ".card"
    )
    .forEach(
        card => {

            observer.observe(
                card
            );

        }
    );



/* =========================================================
   RANDOM CANDY METEORS
========================================================= */

const candySky =
    document.getElementById(
        "candySky"
    );


const meteorCandy = [

    "🍭",
    "🍬",
    "🍰",
    "🧁",
    "🍩",
    "🍪",
    "🍓",
    "🍫",
    "🫐",
    "🍋",
    "✨",
    "⭐"

];


function createCandyMeteor() {


    const meteor =
        document.createElement(
            "div"
        );


    meteor.className =
        "candy-star";


    meteor.textContent =
        meteorCandy[
            Math.floor(
                Math.random()
                *
                meteorCandy.length
            )
        ];


    meteor.style.left =
        (
            Math.random() * 100
        ) + "vw";


    meteor.style.top =
        (
            Math.random() * 70
        ) + "vh";


    meteor.style.fontSize =
        (
            14
            +
            Math.random() * 25
        ) + "px";


    meteor.style.setProperty(
        "--travel-x",
        (
            Math.random() * 500
            - 250
        ) + "px"
    );


    meteor.style.setProperty(
        "--travel-y",
        (
            150
            +
            Math.random() * 450
        ) + "px"
    );


    meteor.style.setProperty(
        "--rotation",
        (
            Math.random() * 720
        ) + "deg"
    );


    meteor.style.animationDuration =
        (
            2
            +
            Math.random() * 4
        ) + "s";


    candySky.appendChild(
        meteor
    );


    setTimeout(
        () => {

            meteor.remove();

        },
        7000
    );

}


/* Random timing */

setInterval(
    () => {

        createCandyMeteor();

    },
    650
);



/* =========================================================
   INITIAL CANDY METEORS
========================================================= */

for (
    let i = 0;
    i < 12;
    i++
) {

    setTimeout(
        () => {

            createCandyMeteor();

        },
        i * 250
    );

}



/* =========================================================
   NAVBAR ACTIVE
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {


        let current =
            "";


        sections.forEach(
            section => {


                const sectionTop =
                    section.offsetTop;


                if (
                    window.scrollY
                    >=
                    sectionTop - 300
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            link => {


                link.style.opacity =
                    ".55";


                if (
                    link.getAttribute(
                        "href"
                    )
                    ===
                    "#" + current
                ) {

                    link.style.opacity =
                        "1";

                }

            }
        );


    }
);



/* =========================================================
   INTRO EXTRA BURST
========================================================= */

window.addEventListener(
    "load",
    () => {


        setTimeout(
            () => {


                createCandyExplosion(
                    window.innerWidth / 2,
                    window.innerHeight / 2,
                    35
                );


            },
            900
        );


    }
);

/* =========================================================
   🎵 SWEET CANDY MUSIC PLAYER
========================================================= */

const music =
    document.getElementById(
        "bgMusic"
    );


const musicToggle =
    document.getElementById(
        "musicToggle"
    );


const musicPlayer =
    document.getElementById(
        "musicPlayer"
    );


if (
    music &&
    musicToggle &&
    musicPlayer
) {


    musicToggle.addEventListener(
        "click",
        async () => {


            if (
                music.paused
            ) {


                try {

                    await music.play();

                    musicToggle.textContent =
                        "❚❚";

                    musicToggle.setAttribute(
                        "aria-label",
                        "Pause music"
                    );

                    musicPlayer.classList.add(
                        "playing"
                    );


                    createCandyExplosion(
                        window.innerWidth - 80,
                        window.innerHeight - 60,
                        10
                    );


                }
                catch (error) {

                    console.error(
                        "Music playback failed:",
                        error
                    );

                }


            }
            else {


                music.pause();


                musicToggle.textContent =
                    "▶";


                musicToggle.setAttribute(
                    "aria-label",
                    "Play music"
                );


                musicPlayer.classList.remove(
                    "playing"
                );


            }


        }
    );


    music.addEventListener(
        "ended",
        () => {


            music.currentTime =
                0;


            musicToggle.textContent =
                "▶";


            musicToggle.setAttribute(
                "aria-label",
                "Play music"
            );


            musicPlayer.classList.remove(
                "playing"
            );


        }
    );


}

// =========================================================
// 🍭 SWEET CANDY MUSIC PLAYER
// DELUXE ALL-IN-ONE FIX
// =========================================================

(() => {

    "use strict";

    const oldPlayer =
        document.getElementById("musicPlayer");

    if (!oldPlayer) {
        console.warn("Music player not found.");
        return;
    }

    // =====================================================
    // REMOVE OLD PLAYER EVENTS BY REBUILDING THE PLAYER
    // =====================================================

    const playerParent =
        oldPlayer.parentNode;

    const newPlayer =
        document.createElement("div");

    newPlayer.id =
        "musicPlayer";

    newPlayer.className =
        oldPlayer.className;

    newPlayer.innerHTML = `

        <div class="music-icon">
            🎵
        </div>

        <div class="music-info">

            <div class="music-label">
                NOW PLAYING
            </div>

            <div class="music-title">
                Play Date
            </div>

            <div class="music-subtitle">
                Sweet Candy Music
            </div>

        </div>

        <div class="music-controls">

            <button
                class="music-control"
                id="musicRestartDeluxe"
                type="button"
                aria-label="Restart music"
            >
                ↺
            </button>

            <button
                class="music-toggle"
                id="musicToggleDeluxe"
                type="button"
                aria-label="Play music"
            >
                ▶
            </button>

            <button
                class="music-control"
                id="musicRepeatDeluxe"
                type="button"
                aria-label="Repeat music"
            >
                🔁
            </button>

        </div>

        <div class="music-progress-area">

            <span id="musicCurrentTimeDeluxe">
                0:00
            </span>

            <input
                type="range"
                id="musicProgressDeluxe"
                min="0"
                max="100"
                value="0"
                step="0.1"
                aria-label="Music progress"
            >

            <span id="musicDurationDeluxe">
                0:00
            </span>

        </div>

        <div class="music-volume-area">

            <span class="music-volume-icon">
                🔊
            </span>

            <input
                type="range"
                id="musicVolumeDeluxe"
                min="0"
                max="1"
                value="0.7"
                step="0.05"
                aria-label="Music volume"
            >

        </div>

        <audio
            id="bgMusicDeluxe"
            preload="metadata"
        >

            <source
                src="./play-date.mp3"
                type="audio/mpeg"
            >

            เบราว์เซอร์ไม่รองรับการเล่นเพลง

        </audio>

    `;

    playerParent.replaceChild(
        newPlayer,
        oldPlayer
    );


    // =====================================================
    // DELUXE CSS
    // =====================================================

    const deluxeStyle =
        document.createElement("style");

    deluxeStyle.id =
        "deluxeMusicPlayerStyle";

    deluxeStyle.textContent = `

        #musicPlayer {

            position: fixed;

            right: 25px;
            bottom: 25px;

            width: min(
                450px,
                calc(100vw - 30px)
            );

            min-height: 170px;

            padding: 20px;

            display: grid;

            grid-template-columns:
                62px
                minmax(0, 1fr);

            grid-template-rows:
                auto
                auto
                auto
                auto;

            gap: 12px 14px;

            box-sizing: border-box;

            border: 2px solid
                rgba(255, 255, 255, 0.95);

            border-radius: 28px;

            background:
                linear-gradient(
                    135deg,
                    rgba(255, 255, 255, 0.96),
                    rgba(255, 218, 237, 0.94)
                );

            box-shadow:

                0 12px 40px
                rgba(220, 57, 137, 0.22),

                inset 0 0 25px
                rgba(255, 255, 255, 0.8);

            backdrop-filter:
                blur(20px);

            -webkit-backdrop-filter:
                blur(20px);

            z-index: 9990;

            overflow: visible;

            animation:
                deluxeMusicAppear
                0.8s ease both;

        }


        #musicPlayer::before {

            content: "";

            position: absolute;

            inset: -2px;

            border-radius: 28px;

            padding: 2px;

            background:
                linear-gradient(
                    135deg,
                    #ffffff,
                    #ff8fc4,
                    #ffffff
                );

            -webkit-mask:
                linear-gradient(#fff 0 0)
                content-box,
                linear-gradient(#fff 0 0);

            -webkit-mask-composite:
                xor;

            mask-composite:
                exclude;

            pointer-events: none;

            opacity: 0.8;

        }


        #musicPlayer .music-icon {

            width: 62px;
            height: 62px;

            display: flex;

            align-items: center;
            justify-content: center;

            border-radius: 19px;

            background:
                linear-gradient(
                    135deg,
                    #ff91c7,
                    #ef3f91
                );

            color: white;

            font-size: 31px;

            box-shadow:

                0 7px 18px
                rgba(229, 54, 139, 0.3),

                inset 0 2px 5px
                rgba(255, 255, 255, 0.55);

            position: relative;

            z-index: 1;

        }


        #musicPlayer .music-info {

            min-width: 0;

            width: 100%;

            display: flex;

            flex-direction: column;

            justify-content: center;

            align-items: flex-start;

            text-align: left;

            overflow: hidden;

            position: relative;

            z-index: 2;

        }


        #musicPlayer .music-label {

            display: block;

            width: 100%;

            color: #e24b91;

            font-size: 10px;

            font-weight: 900;

            letter-spacing: 1.3px;

            line-height: 1.5;

            white-space: normal;

            overflow: visible;

            text-overflow: clip;

        }


        #musicPlayer .music-title {

            display: block;

            width: 100%;

            margin-top: 3px;

            color: #b52c70;

            font-size: 18px;

            font-weight: 900;

            line-height: 1.4;

            white-space: nowrap;

            overflow: hidden;

            text-overflow: ellipsis;

        }


        #musicPlayer .music-subtitle {

            display: block;

            width: 100%;

            margin-top: 2px;

            color: #c477a0;

            font-size: 11px;

            font-weight: 600;

            line-height: 1.4;

            white-space: nowrap;

            overflow: hidden;

            text-overflow: ellipsis;

        }


        #musicPlayer .music-controls {

            grid-column: 1 / -1;

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 14px;

            position: relative;

            z-index: 3;

        }


        #musicPlayer .music-toggle,

        #musicPlayer .music-control {

            border: none;

            display: flex;

            align-items: center;

            justify-content: center;

            cursor: pointer;

            font-family: inherit;

            transition:

                transform 0.25s ease,

                box-shadow 0.25s ease,

                background 0.25s ease;

        }


        #musicPlayer .music-toggle {

            width: 55px;
            height: 47px;

            border-radius: 16px;

            color: white;

            background:
                linear-gradient(
                    135deg,
                    #ff83bd,
                    #e83b8e
                );

            font-size: 20px;

            box-shadow:

                0 7px 18px
                rgba(225, 48, 131, 0.32);

        }


        #musicPlayer .music-control {

            width: 38px;
            height: 38px;

            border-radius: 50%;

            color: #c04d83;

            background:
                rgba(255, 255, 255, 0.85);

            font-size: 17px;

            box-shadow:
                0 4px 10px
                rgba(210, 67, 133, 0.1);

        }


        #musicPlayer .music-toggle:hover,

        #musicPlayer .music-control:hover {

            transform:
                translateY(-3px)
                scale(1.07);

            box-shadow:

                0 8px 20px
                rgba(222, 55, 135, 0.3);

        }


        #musicPlayer .music-progress-area {

            grid-column: 1 / -1;

            display: grid;

            grid-template-columns:
                38px
                minmax(0, 1fr)
                38px;

            align-items: center;

            gap: 8px;

            position: relative;

            z-index: 3;

        }


        #musicPlayer
        .music-progress-area span {

            color: #b84b7e;

            font-size: 10px;

            font-weight: 800;

            text-align: center;

        }


        #musicPlayer #musicProgressDeluxe {

            width: 100%;

            height: 6px;

            cursor: pointer;

            appearance: none;

            -webkit-appearance: none;

            border-radius: 20px;

            background:
                linear-gradient(
                    90deg,
                    #f45ca4,
                    #f8c8df
                );

            outline: none;

        }


        #musicPlayer
        #musicProgressDeluxe::-webkit-slider-thumb {

            appearance: none;

            -webkit-appearance: none;

            width: 14px;

            height: 14px;

            border-radius: 50%;

            background: white;

            border: 2px solid #ed4b98;

            box-shadow:
                0 2px 8px
                rgba(213, 48, 124, 0.3);

        }


        #musicPlayer .music-volume-area {

            grid-column: 1 / -1;

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 9px;

            position: relative;

            z-index: 3;

        }


        #musicPlayer .music-volume-icon {

            font-size: 13px;

        }


        #musicPlayer #musicVolumeDeluxe {

            width: 110px;

            height: 5px;

            cursor: pointer;

            accent-color: #ed4b98;

        }


        #musicPlayer.repeat-active
        #musicRepeatDeluxe {

            color: white;

            background: #ed4b98;

            box-shadow:
                0 4px 12px
                rgba(226, 51, 132, 0.3);

        }


        #musicPlayer.playing
        .music-icon {

            animation:
                deluxeMusicPulse
                1.5s ease-in-out infinite;

        }


        @keyframes deluxeMusicAppear {

            from {

                opacity: 0;

                transform:
                    translateY(35px)
                    scale(0.9);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);

            }

        }


        @keyframes deluxeMusicPulse {

            0%,
            100% {

                transform: scale(1);

            }

            50% {

                transform: scale(1.08);

                box-shadow:

                    0 0 25px
                    rgba(244, 74, 157, 0.55);

            }

        }


        @media (max-width: 600px) {

            #musicPlayer {

                right: 10px;

                bottom: 10px;

                width:
                    calc(100vw - 20px);

                min-height: 160px;

                padding: 16px;

                border-radius: 23px;

            }


            #musicPlayer .music-icon {

                width: 52px;
                height: 52px;

                font-size: 26px;

                border-radius: 16px;

            }


            #musicPlayer .music-title {

                font-size: 16px;

            }


            #musicPlayer .music-label {

                font-size: 9px;

                letter-spacing: 1px;

            }


            #musicPlayer .music-subtitle {

                font-size: 10px;

            }


            #musicPlayer .music-toggle {

                width: 52px;
                height: 44px;

            }


            #musicPlayer .music-control {

                width: 35px;
                height: 35px;

            }

        }

    `;

    document.head.appendChild(
        deluxeStyle
    );


    // =====================================================
    // MUSIC ELEMENTS
    // =====================================================

    const music =
        document.getElementById("bgMusicDeluxe");

    const toggle =
        document.getElementById("musicToggleDeluxe");

    const restart =
        document.getElementById("musicRestartDeluxe");

    const repeat =
        document.getElementById("musicRepeatDeluxe");

    const progress =
        document.getElementById("musicProgressDeluxe");

    const currentTime =
        document.getElementById("musicCurrentTimeDeluxe");

    const duration =
        document.getElementById("musicDurationDeluxe");

    const volume =
        document.getElementById("musicVolumeDeluxe");

    const player =
        document.getElementById("musicPlayer");


    let repeatEnabled =
        false;


    // =====================================================
    // TIME FORMAT
    // =====================================================

    function formatTime(seconds) {

        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        const minutes =
            Math.floor(seconds / 60);

        const secondsPart =
            Math.floor(seconds % 60)
                .toString()
                .padStart(2, "0");

        return `${minutes}:${secondsPart}`;

    }


    // =====================================================
    // UPDATE PLAYER
    // =====================================================

    function updatePlayer() {

        if (!music) {
            return;
        }

        const isPlaying =
            !music.paused &&
            !music.ended;

        if (isPlaying) {

            toggle.textContent =
                "❚❚";

            toggle.setAttribute(
                "aria-label",
                "Pause music"
            );

            player.classList.add(
                "playing"
            );

        } else {

            toggle.textContent =
                "▶";

            toggle.setAttribute(
                "aria-label",
                "Play music"
            );

            player.classList.remove(
                "playing"
            );

        }

        currentTime.textContent =
            formatTime(music.currentTime);

        if (
            Number.isFinite(music.duration) &&
            music.duration > 0
        ) {

            duration.textContent =
                formatTime(music.duration);

            progress.value =
                (
                    music.currentTime /
                    music.duration
                ) * 100;

        } else {

            duration.textContent =
                "0:00";

            progress.value =
                0;

        }

    }


    // =====================================================
    // PLAY
    // =====================================================

    async function playMusic() {

        if (!music) {
            return;
        }

        try {

            await music.play();

            updatePlayer();

            if (
                typeof createCandyExplosion ===
                "function"
            ) {

                createCandyExplosion(
                    window.innerWidth - 80,
                    window.innerHeight - 60,
                    10
                );

            }

        } catch (error) {

            console.warn(
                "Music playback failed:",
                error
            );

        }

    }


    // =====================================================
    // PAUSE
    // =====================================================

    function pauseMusic() {

        if (!music) {
            return;
        }

        music.pause();

        updatePlayer();

    }


    // =====================================================
    // PLAY / PAUSE
    // =====================================================

    toggle.addEventListener(
        "click",
        () => {

            if (music.paused) {

                playMusic();

            } else {

                pauseMusic();

            }

        }
    );


    // =====================================================
    // RESTART
    // =====================================================

    restart.addEventListener(
        "click",
        () => {

            music.currentTime =
                0;

            playMusic();

        }
    );


    // =====================================================
    // REPEAT
    // =====================================================

    repeat.addEventListener(
        "click",
        () => {

            repeatEnabled =
                !repeatEnabled;

            player.classList.toggle(
                "repeat-active",
                repeatEnabled
            );

            repeat.setAttribute(
                "aria-label",
                repeatEnabled
                    ? "Repeat enabled"
                    : "Repeat disabled"
            );

        }
    );


    // =====================================================
    // WHEN MUSIC ENDS
    // =====================================================

    music.addEventListener(
        "ended",
        () => {

            if (repeatEnabled) {

                music.currentTime =
                    0;

                playMusic();

            } else {

                music.currentTime =
                    0;

                updatePlayer();

            }

        }
    );


    // =====================================================
    // MUSIC EVENTS
    // =====================================================

    music.addEventListener(
        "play",
        updatePlayer
    );

    music.addEventListener(
        "pause",
        updatePlayer
    );

    music.addEventListener(
        "timeupdate",
        updatePlayer
    );

    music.addEventListener(
        "loadedmetadata",
        updatePlayer
    );

    music.addEventListener(
        "durationchange",
        updatePlayer
    );


    // =====================================================
    // PROGRESS BAR
    // =====================================================

    progress.addEventListener(
        "input",
        () => {

            if (
                !Number.isFinite(music.duration) ||
                music.duration <= 0
            ) {

                return;

            }

            music.currentTime =
                (
                    Number(progress.value) /
                    100
                ) * music.duration;

            updatePlayer();

        }
    );


    // =====================================================
    // VOLUME
    // =====================================================

    music.volume =
        Number(volume.value);

    volume.addEventListener(
        "input",
        () => {

            music.volume =
                Number(volume.value);

        }
    );


    // =====================================================
    // KEYBOARD ACCESSIBILITY
    // =====================================================

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.target.tagName ===
                "INPUT"
            ) {

                return;

            }

            if (
                event.code ===
                "Space"
            ) {

                event.preventDefault();

                if (music.paused) {

                    playMusic();

                } else {

                    pauseMusic();

                }

            }

        }
    );


    // =====================================================
    // START AFTER ENTER BUTTON
    // =====================================================

    const enter =
        document.getElementById("enterButton");

    if (enter) {

        enter.addEventListener(
            "click",
            () => {

                playMusic();

            },
            {
                once: true
            }
        );

    }


    // =====================================================
    // INITIAL STATE
    // =====================================================

    updatePlayer();

})();
