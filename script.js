const music = document.getElementById("bg-music");

window.addEventListener("click", () => {
    music.volume = 0.35;
    music.play().catch(() => {});
}, { once: true });

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        music.pause();
    }
});

window.addEventListener("pagehide", () => {
    music.pause();
});
