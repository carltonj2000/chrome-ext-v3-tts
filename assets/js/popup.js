const text = document.getElementById("text");
const speak = document.getElementById("speak");
const pause = document.getElementById("pause");
const resume = document.getElementById("resume");
const stop = document.getElementById("stop");
const clear = document.getElementById("clear");

speak.addEventListener("click", () => chrome.tts.speak(text.value));
pause.addEventListener("click", () => chrome.tts.pause());
resume.addEventListener("click", () => chrome.tts.resume());
stop.addEventListener("click", () => chrome.tts.stop());
clear.addEventListener("click", () => {
  chrome.tts.stop();
  chrome.storage.local.clear();
  text.value = "";
});

chrome.storage.local.get(["speakText"], (data) => {
  text.value = data.speakText || "select text first";
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.speakText) text.value = changes.speakText.valued || "select text";
});
