// ===============================
// Wait until page is fully loaded
// ===============================
document.addEventListener("DOMContentLoaded", function () {
   // -----------------------
   // TYPEWRITER EFFECT
   // -----------------------
   const typing = document.getElementById("typing");
   const text = "Every heartbeat of mine whispers your name ❤️";
   let i = 0;
   function typeWriter() {
       if (i < text.length) {
           typing.innerHTML += text.charAt(i);
           i++;
           setTimeout(typeWriter, 70);
       }
   }
   typeWriter();

   // -----------------------
   // FLOATING HEARTS
   // -----------------------
   const heartContainer = document.getElementById("hearts");
   function createHeart() {
       const heart = document.createElement("div");
       heart.className = "heart";
       heart.innerHTML = "❤️";
       heart.style.left = Math.random() * 100 + "vw";
       heart.style.fontSize = (20 + Math.random() * 20) + "px";
       heart.style.animationDuration = (5 + Math.random() * 5) + "s";
       heartContainer.appendChild(heart);
       setTimeout(() => {
           heart.remove();
       }, 9000);
   }
   setInterval(createHeart, 250);

   // -----------------------
   // LOVE COUNTER
   // -----------------------
   const startDate = new Date("2025-07-06");
   function updateCounter() {
       const today = new Date();
       const diff = today - startDate;
       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
       const counter = document.getElementById("loveCounter");
       if (counter) {
           counter.innerHTML =
               "❤️ Together For ❤️<br><br>" +
               "<span style='font-size:60px'>" +
               days +
               "</span><br>Days";
       }
   }
   updateCounter();
   setInterval(updateCounter, 1000);

   // -----------------------
   // LOVE POPUP
   // -----------------------
   const loveBtn = document.getElementById("loveBtn");
   const popup = document.getElementById("lovePopup");
   const closeBtn = document.getElementById("closePopup");
   if (loveBtn && popup) {
       loveBtn.addEventListener("click", function () {
           popup.style.display = "flex";
           if (typeof confetti !== "undefined") {
               confetti({
                   particleCount: 250,
                   spread: 180,
                   origin: {
                       y: 0.6
                   }
               });
           }
       });
   }
   if (closeBtn) {
       closeBtn.addEventListener("click", function () {
           popup.style.display = "none";
       });
   }
   
   const bgMusic = document.getElementById("bgMusic");
   loveBtn.addEventListener("click", () => {
   bgMusic.play();
   popup.style.display = "flex";
   confetti({
       particleCount: 200,
       spread: 180,
       origin: { y: 0.6 }
   });
});
   window.onclick = function (e) {
       if (e.target == popup) {
           popup.style.display = "none";
       }
   };

   // -----------------------
// SECRET BUTTON
// -----------------------
const secret = document.getElementById("secretBtn");
if (secret) {
   secret.addEventListener("click", function () {
       if (typeof confetti !== "undefined") {
           confetti({
               particleCount: 600,
               spread: 360,
               origin: { y: 0.6 }
           });
       }
       document.querySelector(".popup-box h1").innerHTML =
           "💖 One Last Surprise 💖";
       document.querySelector(".popup-box p").innerHTML = `
       Shraddha ❤️
<br><br>
       Agar mujhe dobara zindagi jeene ka mauka mile...
       Har baar tumhe hi choose karunga.
<br><br>
       Main hamesha tumhari smile ki wajah banna chahta hoon.
       Tumhare saath har chhoti si khushi celebrate karna chahta hoon.
<br><br>
       Thank you meri zindagi me aane ke liye.
<br><br>
       ❤️ I Love You More Than Yesterday,
       Less Than Tomorrow ❤️
<br><br>
<strong>Forever Yours,<br>Shubham ❤️</strong>
       `;
       popup.style.display = "flex";
   });
}

   // -----------------------
   // TITLE ANIMATION
   // -----------------------
   const titles = [
       "❤️ For Shraddha ❤️",
       "💖 I Love You ❤️",
       "🌹 Forever Yours ❤️"
   ];
   let t = 0;
   setInterval(() => {
       document.title = titles[t];
       t++;
       if (t >= titles.length) t = 0;
   }, 2000);
});
