/* =====================================================
   🍭 SWEET CANDY GALLERY
   SCRIPT.JS
===================================================== */


/* =====================================================
   INTRO
===================================================== */

const intro = document.getElementById("intro");
const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    createCandyExplosion(
        window.innerWidth / 2,
        window.innerHeight / 2
    );

    intro.classList.add("hide");

    setTimeout(() => {

        intro.style.display = "none";

    }, 1000);

});


/* =====================================================
   THEME PANEL
===================================================== */

const themePanel =
    document.getElementById("themePanel");

const themeOpen =
    document.getElementById("themeOpen");

const themeClose =
    document.getElementById("themeClose");

const themeOptions =
    document.querySelectorAll(".theme-option");


themeOpen.addEventListener("click", () => {

    themePanel.classList.add("active");

});


themeClose.addEventListener("click", () => {

    themePanel.classList.remove("active");

});


themePanel.addEventListener("click", (event) => {

    if(event.target === themePanel){

        themePanel.classList.remove("active");

    }

});


/* =====================================================
   CHANGE THEME
===================================================== */

themeOptions.forEach(option => {

    option.addEventListener("click", () => {

        const theme =
            option.dataset.theme;

        document.body.classList.remove(
            "blueberry",
            "chocolate",
            "lemon",
            "cotton"
        );

        if(theme !== "strawberry"){

            document.body.classList.add(theme);

        }

        themeOptions.forEach(item => {

            item.classList.remove("active");

        });

        option.classList.add("active");


        /* Candy explosion */

        createCandyExplosion(
            window.innerWidth / 2,
            window.innerHeight / 2
        );


        /* Close panel */

        setTimeout(() => {

            themePanel.classList.remove("active");

        }, 350);

    });

});


/* =====================================================
   CANDY PARTICLE EXPLOSION
===================================================== */

function createCandyExplosion(x, y){

    const sweets = [

        "🍭",
        "🍬",
        "🧁",
        "🍩",
        "🍰",
        "🍪",
        "🍓",
        "🍫",
        "✨",
        "💖",
        "⭐"

    ];


    for(let i = 0; i < 24; i++){

        const particle =
            document.createElement("div");

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
                Math.random() * 500
                - 250
            ) + "px"
        );


        particle.style.setProperty(
            "--y",
            (
                Math.random() * 500
                - 250
            ) + "px"
        );


        particle.style.fontSize =
            (
                14
                +
                Math.random() * 20
            ) + "px";


        document.body.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 1000);

    }

}


/* =====================================================
   CLICK PARTICLES
===================================================== */

document.addEventListener(
    "click",
    event => {

        if(
            event.target.closest(".theme-option") ||
            event.target.closest(".enter-button")
        ){

            return;

        }


        const symbols = [

            "✨",
            "💗",
            "🍭",
            "🍬",
            "⭐"

        ];


        for(let i = 0; i < 5; i++){

            const particle =
                document.createElement("div");

            particle.className =
                "click-particle";

            particle.textContent =
                symbols[
                    Math.floor(
                        Math.random()
                        *
                        symbols.length
                    )
                ];


            particle.style.left =
                event.clientX + "px";

            particle.style.top =
                event.clientY + "px";


            particle.style.setProperty(
                "--x",
                (
                    Math.random() * 100
                    - 50
                ) + "px"
            );


            particle.style.setProperty(
                "--y",
                (
                    Math.random() * 100
                    - 80
                ) + "px"
            );


            document.body.appendChild(
                particle
            );


            setTimeout(() => {

                particle.remove();

            }, 900);

        }

    }
);


/* =====================================================
   HEART
===================================================== */

document.querySelectorAll(".heart")
.forEach(heart => {

    heart.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            heart.classList.toggle(
                "liked"
            );


            heart.textContent =
                heart.classList.contains("liked")
                ? "♥"
                : "♡";


            createCandyExplosion(
                event.clientX,
                event.clientY
            );

        }
    );

});


/* =====================================================
   IMAGE MODAL
===================================================== */

const imageModal =
    document.getElementById("imageModal");

const largeImage =
    document.getElementById("largeImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalClose =
    document.getElementById("modalClose");


document.querySelectorAll(".view-button")
.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const card =
                button.closest(".card");

            const image =
                card.querySelector("img");

            const title =
                card.querySelector("h3");


            largeImage.src =
                image.src;

            largeImage.alt =
                image.alt;

            modalTitle.textContent =
                title.textContent;


            imageModal.classList.add(
                "active"
            );

        }
    );

});


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

        if(
            event.target === imageModal
        ){

            imageModal.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if(event.key === "Escape"){

            imageModal.classList.remove(
                "active"
            );

            themePanel.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   CARD 3D TILT
===================================================== */

document.querySelectorAll(".card")
.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

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
                    x / rect.width
                    -
                    .5
                )
                *
                9;


            const rotateX =
                (
                    y / rect.height
                    -
                    .5
                )
                *
                -9;


            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                scale(1.015)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if(
                    entry.isIntersecting
                ){

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .15
        }
    );


document.querySelectorAll(".card")
.forEach(card => {

    observer.observe(card);

});


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");


document.addEventListener(
    "mousemove",
    event => {

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


/* =====================================================
   CURSOR HOVER
===================================================== */

document.querySelectorAll(
    "button, a, .card, .theme-option"
)
.forEach(element => {

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

});


/* =====================================================
   RIPPLE EFFECT
===================================================== */

document.querySelectorAll(
    ".enter-button, .hero-button, .view-button"
)
.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            const ripple =
                document.createElement(
                    "span"
                );


            ripple.style.position =
                "absolute";

            ripple.style.borderRadius =
                "50%";

            ripple.style.pointerEvents =
                "none";

            ripple.style.background =
                "rgba(255,255,255,.5)";


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


            ripple.style.transform =
                "scale(0)";


            ripple.style.transition =
                "transform .6s, opacity .6s";


            button.appendChild(
                ripple
            );


            requestAnimationFrame(
                () => {

                    ripple.style.transform =
                        "scale(2)";

                    ripple.style.opacity =
                        "0";

                }
            );


            setTimeout(
                () => {

                    ripple.remove();

                },
                650
            );

        }
    );

});


/* =====================================================
   NAVBAR ACTIVE LINK
===================================================== */

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

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            if(
                window.scrollY
                >=
                sectionTop - 300
            ){

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach(link => {

            link.style.opacity =
                "0.6";


            if(
                link.getAttribute("href")
                ===
                "#" + current
            ){

                link.style.opacity =
                    "1";

                link.style.color =
                    "var(--pink-dark)";

            }

        });

    }
);


/* =====================================================
   RANDOM INTRO CANDY
===================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                createCandyExplosion(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                );

            },
            700
        );

    }
);
