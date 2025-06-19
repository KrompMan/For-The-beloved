const messages = [
  "I like you more than all the stars in the sky ✨",
  "You make my world brighter 💡",
  "Your smile is my favorite thing 😊",
  "Every moment with you feels special 💖",
  "I made this site just to tell you you're amazing 🌹",
  "I think you already know you’ve got me wrapped around your finger 🧷",
  "I feel honored just being in your presence ❤️❤️❤️",
  "My heart is a captive of yours, and I couldn't be happier! 💘",
  "One word from you, and I melt. 🫠",
  "I feel so helpless and vulnerable around you 🤍",
  "You don’t need to ask twice — I’m already yours. 🥀",
  "You're my favorite kind of authority. 💼❤️",
  "Being yours feels like the most natural thing. 🌸"
];

let currentIndex = 0;

function showMessage() {
  const message = messages[currentIndex];
  typeMessage(message);
  currentIndex = (currentIndex + 1) % messages.length;
}

function typeMessage(text) {
  const el = document.getElementById("secretMessage");
  el.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
}

function handleFeedback(feeling) {
  const prompt = document.getElementById("feedbackPrompt");
  const input = document.getElementById("feedbackInput");
  const button = document.getElementById("submitFeedbackBtn");
  const display = document.getElementById("feedbackDisplay");

  display.innerText = "";
  input.style.display = "block";
  button.style.display = "inline-block";

  if (feeling === "bad") {
    prompt.innerText = "OH I'M SO SORRY 😭 what did my dumbass do?";
  } else if (feeling === "sweet") {
    prompt.innerText = "🥺 Y-you really think so? Tell me more...";
  } else if (feeling === "neutral") {
    prompt.innerText = "I'm SO SORRY, What could I do better?";
  }
}

function submitFeedback() {
  const feedback = document.getElementById("feedbackInput").value.trim();
  const display = document.getElementById("feedbackDisplay");

  if (feedback) {
    display.innerText = `You said: "${feedback}" 🥺`;
    document.getElementById("feedbackInput").value = "";
  } else {
    display.innerText = "You didn’t say anything... I guess silence is feedback too 😔";
  }

  document.getElementById("feedbackInput").style.display = "none";
  document.getElementById("submitFeedbackBtn").style.display = "none";
  document.getElementById("feedbackPrompt").innerText = "";
}

