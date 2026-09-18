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
