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
/* =========================================
   SWEET CANDY MUSIC PLAYER
========================================= */

const music =
    document.getElementById("bgMusic");

const musicToggle =
    document.getElementById("musicToggle");

const musicPlayer =
    document.getElementById("musicPlayer");


if (
    music &&
    musicToggle &&
    musicPlayer
) {

    function updateMusicButton() {

        if (music.paused) {

            musicToggle.textContent = "▶";

            musicToggle.setAttribute(
                "aria-label",
                "Play music"
            );

            musicPlayer.classList.remove(
                "playing"
            );

        } else {

            musicToggle.textContent = "❚❚";

            musicToggle.setAttribute(
                "aria-label",
                "Pause music"
            );

            musicPlayer.classList.add(
                "playing"
            );

        }

    }


    musicToggle.addEventListener(
        "click",
        async function (event) {

            event.stopPropagation();

            try {

                if (music.paused) {

                    await music.play();

                } else {

                    music.pause();

                }

                updateMusicButton();

            } catch (error) {

                console.error(
                    "ไม่สามารถเปิดเพลงได้:",
                    error
                );

                alert(
                    "กรุณาตรวจสอบว่าไฟล์ play-date.mp3 อยู่ในโฟลเดอร์เดียวกับ index.html"
                );

            }

        }
    );


    music.addEventListener(
        "play",
        updateMusicButton
    );


    music.addEventListener(
        "pause",
        updateMusicButton
    );


    music.addEventListener(
        "ended",
        function () {

            music.currentTime = 0;

            updateMusicButton();

        }
    );

}
