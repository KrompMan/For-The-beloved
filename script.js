// script.js

// ───────────── Typing Quotes ─────────────
const messages = [
  "I made this site just to tell you you're amazing 🌹",
  "You make my world brighter 💡",
  "Your smile is my favorite thing 😊",
  "Every moment with you feels special 💖",
  "I think you already know you’ve got me wrapped around your finger 🧷",
  "I feel honored just being in your presence ❤️❤️❤️",
  "My heart is a captive of yours, and I couldn't be happier! 💘",
  "One word from you, and I melt. 🫠",
  "I feel so helpless and vulnerable around you 🤍",
  "You don’t need to ask twice — I’m already yours. 🥀",
  "You're my favorite kind of authority. 💼❤️",
  "Being yours feels like the most natural thing. 🌸",
  "I’m yours completely, whenever you wish 🤍",
  "At your command, I’m ready to please you 🥀",
  "Your word is my guide and my desire 🌹",
  "I find peace in following your lead 🌙",
  "Every moment under your gaze feels right ✨",
  "Being your devoted one is my greatest joy ❤️",
  "I surrender willingly to your gentle power 🕊️",
  "Your happiness is my highest reward 💖",
  "To serve you is where I find my strength 💪🌸",
  "I'm grateful to be your loyal companion 🤗"
];



let currentIndex = 0;

function showMessage() {
  const text = messages[currentIndex];
  typeMessage(text);
  currentIndex = (currentIndex + 1) % messages.length;
}

function typeMessage(text) {
  const el = document.getElementById("secretMessage");
  el.textContent = "";
  let i = 0;
  const iv = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) clearInterval(iv);
  }, 40);
}

// Expose for inline onclick
window.showMessage = showMessage;


// ───────────── Feedback Section ─────────────
function handleFeedback(feeling) {
  const promptEl  = document.getElementById("feedbackPrompt");
  const inputEl   = document.getElementById("feedbackInput");
  const submitBtn = document.getElementById("submitFeedbackBtn");
  const displayEl = document.getElementById("feedbackDisplay");

  displayEl.textContent = "";
  inputEl.style.display   = "block";
  submitBtn.style.display = "inline-block";

  if (feeling === "bad") {
    promptEl.textContent = "OH I'M SO SORRY 😭 what did my dumbass do?";
  } else if (feeling === "sweet") {
    promptEl.textContent = "🥺 Y-you really think so? Tell me more...";
  } else if (feeling === "neutral") {
    promptEl.textContent = "I'm SO SORRY, What could I do better?";
  }
}

function submitFeedback() {
  const inputEl   = document.getElementById("feedbackInput");
  const displayEl = document.getElementById("feedbackDisplay");
  const promptEl  = document.getElementById("feedbackPrompt");

  const feedback = inputEl.value.trim();
  if (feedback) {
    displayEl.textContent = `You said: "${feedback}" 🥺`;
    inputEl.value = "";
  } else {
    displayEl.textContent = "You didn’t say anything... I guess silence is feedback too 😔";
  }
  inputEl.style.display       = "none";
  document.getElementById("submitFeedbackBtn").style.display = "none";
  promptEl.textContent        = "";
}

// Expose for inline onclick
window.handleFeedback  = handleFeedback;
window.submitFeedback  = submitFeedback;


// ───────────── Vertical Love Meter ─────────────
document.addEventListener("DOMContentLoaded", () => {
  const meter = document.getElementById("verticalLoveMeter");
  const fill  = document.getElementById("verticalLoveMeterFill");
  const msg   = document.getElementById("verticalConfessionMsg");

  const confessions = [
    "I love you because you're so kind 🥰",
    "I love you because you are so pretty! 🌹",
    "I love you because you're so confident! 💪",
    "I love you because __________________", // edit me
    "I love you because __________________"  // edit me
  ];

  let clicks = 0;
  let idx    = 0;
  const max  = confessions.length;

  meter.addEventListener("click", () => {
    // advance meter
    clicks = (clicks + 1) % max;
    const pct = ((clicks + 1) / max) * 100;
    fill.style.height = pct + "%";

    // show message
    if (clicks === max - 1) {
      msg.textContent = confessions[idx];
      idx = (idx + 1) % max;
    } else {
      msg.textContent = `Love meter: ${Math.round(pct)}% 💕`;
    }
  });
});
document.getElementById("confessionBtn").addEventListener("click", () => {
  // Trigger the love meter's click handler
  document.getElementById("verticalLoveMeter").click();
});

