let segundosTotales = 0;
let intervalo = null;
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");
const card = document.getElementById("card");

function actualizarCronometro() {
  segundosTotales++;
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
btnIniciar.addEventListener("click", () => {
  if (intervalo === null) {
    intervalo = setInterval(actualizarCronometro, 1000);
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
  document.getElementById("horas").textContent = "00";
  document.getElementById("minutos").textContent = "00";
  document.getElementById("segundos").textContent = "00";
  btnPausar.disabled = true;
  btnReiniciar.disabled = true;
  card.classList.remove("border-3", "border-warning", "border-success");
});
