const bgMusic = document.getElementById("bg-music");

// Start nur nach Klick
window.addEventListener("click", () => {
    bgMusic.volume = 0.35;
    bgMusic.play().catch(() => {});
}, { once: true });

// TAB WECHSEL -> PAUSE
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        bgMusic.pause();
    } else {
        bgMusic.play().catch(() => {});
    }
});

// TAB VERLASSEN / MINIMIEREN
window.addEventListener("blur", () => {
    bgMusic.pause();
});

// zurück in Fenster
window.addEventListener("focus", () => {
    bgMusic.play().catch(() => {});
});

