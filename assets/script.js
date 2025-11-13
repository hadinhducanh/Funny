const bgMusic = document.getElementById("bgMusic");
const openLetterButton = document.getElementById("openLetter");
const closeLetterButton = document.getElementById("closeLetter");
const letterMessage = document.getElementById("letterMessage");

let closeLetterTimeoutId = null;

attemptAutoplay();
setupLetterInteractions();

function attemptAutoplay(fromInteraction = false) {
  if (!bgMusic) {
    return;
  }

  bgMusic
    .play()
    .then(() => {
      document.removeEventListener("pointerdown", handleUserInteraction);
    })
    .catch(() => {
      if (!fromInteraction) {
        document.addEventListener("pointerdown", handleUserInteraction, {
          once: true
        });
      }
    });
}

function handleUserInteraction() {
  attemptAutoplay(true);
}

function setupLetterInteractions() {
  if (!openLetterButton || !letterMessage) {
    return;
  }

  openLetterButton.addEventListener("click", () => {
    toggleLetter(letterMessage.hidden);
  });

  if (closeLetterButton) {
    closeLetterButton.addEventListener("click", () => {
      toggleLetter(false);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !letterMessage.hidden) {
      toggleLetter(false);
    }
  });
}

function toggleLetter(forceOpen) {
  const shouldOpen = forceOpen ?? letterMessage.hidden;

  if (closeLetterTimeoutId) {
    clearTimeout(closeLetterTimeoutId);
    closeLetterTimeoutId = null;
  }

  if (shouldOpen) {
    letterMessage.hidden = false;
    requestAnimationFrame(() => {
      letterMessage.classList.add("visible");
    });
    openLetterButton.classList.add("open");
    openLetterButton.setAttribute("aria-expanded", "true");
    letterMessage.focus({ preventScroll: true });
  } else {
    letterMessage.classList.remove("visible");
    openLetterButton.classList.remove("open");
    openLetterButton.setAttribute("aria-expanded", "false");
    closeLetterTimeoutId = window.setTimeout(() => {
      letterMessage.hidden = true;
    }, 220);
    openLetterButton.focus();
  }
}

