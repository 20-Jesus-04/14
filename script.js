const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.querySelector(".hearts");
const mainCard = document.getElementById("mainCard");
const heartScene = document.getElementById("heartScene");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

function createHeart(){
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 5 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);

function sparkle(){
  const s = document.createElement("div");
  s.className = "sparkle";
  s.innerHTML = "✨";
  s.style.left = Math.random() * window.innerWidth + "px";
  s.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 2000);
}

yesBtn.addEventListener("click", () => {
  mainCard.classList.add("hidden");
  heartScene.classList.remove("hidden");

  setTimeout(() => heartScene.classList.add("open"), 500);

  setTimeout(() => {
    heartScene.classList.add("hidden");
    mainCard.classList.remove("hidden");

    mainCard.innerHTML = `
      <h1 class="fade-text">Olenka 💖</h1>

      <p class="fade-text" style="animation-delay:.5s">
        Quería decirte esto de una forma especial, porque tú eres especial para mí.
        Desde el primer momento en que llegaste a mi vida, algo cambió.
      </p>

      <p class="fade-text" style="animation-delay:1.3s">
        Me haces sentir tranquilo, feliz, motivado.
        Tus palabras, tus gestos, tu forma de ser…
        todo en ti suma cosas bonitas a mis días.
      </p>

      <p class="fade-text" style="animation-delay:2.1s">
        No prometo ser perfecto, pero sí prometo cuidarte,
        escucharte, respetarte y hacer todo lo posible
        para verte sonreír siempre 🌹
      </p>

      <p class="fade-text" style="animation-delay:3s">
        Hoy no solo te pregunto si quieres ser mi San Valentín,
        sino si me dejas compartir contigo momentos,
        risas, abrazos y recuerdos inolvidables 💫
      </p>

      <h2 class="fade-text pulse" style="animation-delay:3.8s">
        Gracias por decir que sí 💕
      </h2>

      <h2 class="fade-text" style="animation-delay:4.6s">
        Te amo muchisimo 💖
      </h2>
    `;

    document.body.style.background =
      "linear-gradient(135deg,#ff758c,#ff7eb3)";

    for(let i=0;i<40;i++){
      setTimeout(sparkle, i * 120);
    }

  }, 3200);
});
