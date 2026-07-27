let segundosTotales = 0;
let intervalo = null;
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");
const card = document.getElementById("card");
const botonesPreset = document.querySelectorAll(".btn-preset");
const sonidoFin = document.getElementById("sonidoFin");

function renderizarTimpo() {
  const horasFormato = String(Math.floor(segundosTotales / 3600)).padStart(
    2,
    "0",
  );
  const minutosFormato = String(Math.floor(segundosTotales / 60) % 60).padStart(
    2,
    "0",
  );
  const segundosFormato = String(segundosTotales % 60).padStart(2, "0");

  document.getElementById("horas").textContent = horasFormato;
  document.getElementById("minutos").textContent = minutosFormato;
  document.getElementById("segundos").textContent = segundosFormato;
}

function Temporizador() {
  if (segundosTotales === 0) {
    clearInterval(intervalo);
    intervalo = null;
    btnPausar.disabled = true;
    btnReiniciar.disabled = false;
    btnIniciar.disabled = true;
    sonidoFin.play();
    card.classList.remove("border-5", "border-success", "border-warning")
    card.classList.add("alerta");

    return;
  }

  segundosTotales--;
  renderizarTimpo();
}

btnIniciar.addEventListener("click", () => {
  if (intervalo === null) {
    intervalo = setInterval(Temporizador, 1000);
    btnPausar.disabled = false;
    btnReiniciar.disabled = false;
    card.classList.remove("border-warning");
    card.classList.add("border-5", "border-success");
  }
});
btnPausar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  card.classList.remove("border-success");
  card.classList.add("border-warning");
});

btnReiniciar.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  segundosTotales = 0;
  renderizarTimpo();
  btnPausar.disabled = true;
  btnReiniciar.disabled = true;
  btnIniciar.disabled = true;
  sonidoFin.pause();
  sonidoFin.currentTime = 0;
  card.classList.remove(
    "border-3",
    "border-warning",
    "border-success",
    "alerta",
  );
});

botonesPreset.forEach((boton) => {
  boton.addEventListener("click", () => {
    const segundos = parseInt(boton.dataset.segundos);
    segundosTotales += segundos;
    renderizarTimpo();
    btnIniciar.disabled = false;
  });
});
