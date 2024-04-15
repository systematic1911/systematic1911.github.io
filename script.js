let forgivenessLevel = 1;
let clicks = 0;
let noClicks = 0;
let currentPhraseIndex = 0;

const phrases = [
  "andaaaaaaaaaaaaaaa :(",
  "Porfi?? :(",
  "Yo creo que quieres decir que sí :)",
  "No te arrepentirás :)",
  "por la ciencia??",
  "Solo un sí y todo estará bien ",
  "No seas malita :(",
  "por la salvación de la humanidad?? :O",
  "Un pequeño sí no hace daño, no?",
];

function forgive() {
  document.getElementById("buttons").innerHTML = "";
  document.getElementById("message").innerText =
    "¡¡YEEEEEI!!, (TÚ MUY BIEN, AQUÍ TE ESPEROOOOO)";
}

function dontForgive() {
  forgivenessLevel++;
  clicks++;

  if (clicks < 30) {
    document.getElementById("message").innerText = phrases[currentPhraseIndex];
    if (currentPhraseIndex === phrases.length - 1) {
      currentPhraseIndex = 0;
    } else {
      currentPhraseIndex++;
    }
  } else {
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("message").innerText =
      "¡Ya clickeaste 30 veces, ya mejor ven!";
  }

  if (clicks < 30) {
    // Ajustar el tamaño del botón "Sí"
    const yesButton = document.getElementById("yes");
    const randomTop2 =
      Math.random() * (window.innerHeight - yesButton.offsetHeight);
    const randomLeft2 =
      Math.random() * (window.innerWidth - yesButton.offsetWidth);

    // Posicionar el botón "NO"
    yesButton.style.position = "absolute";
    yesButton.style.top = `${randomTop2}px`;
    yesButton.style.left = `${randomLeft2}px`;
    yesButton.style.fontSize = `${20 - forgivenessLevel * 2}px`;
    yesButton.style.fontSize = `${16 + Math.pow(2, forgivenessLevel)}px`; // Hace el botón "Sí" el doble de grande cada vez
    yesButton.style.zIndex = "2"; // Establece un valor de z-index mayor para el botón verde

    // Obtener el botón "NO"
    const noButton = document.getElementById("no");
    noButton.style.zIndex = "1"; // Establece un valor de z-index menor para el botón rojo

    if (clicks >= 10) {
      noButton.style.display = `none`; // Oculta el botón "NO" después de 10 clics
    }

    // Generar posiciones aleatorias
    const randomTop =
      Math.random() * (window.innerHeight - noButton.offsetHeight);
    const randomLeft =
      Math.random() * (window.innerWidth - noButton.offsetWidth);

    // Posicionar el botón "NO"
    noButton.style.position = "absolute";
    noButton.style.top = `${randomTop}px`;
    noButton.style.left = `${randomLeft}px`;
    noButton.style.fontSize = `${20 - forgivenessLevel * 2}px`;
  }
}

function noClick() {
  noClicks++;
  if (noClicks >= 10) {
    const noButton = document.getElementById(`no`);
    noButton.style.display = `none`; // Oculta el botón "NO" después de 10 clics
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("no").addEventListener("keydown", function (event) {
    if (event.key === " ") {
      event.preventDefault(); // Evita la acción predeterminada de la tecla de espacio
    }
  });
});

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Busca el botón que dice "Open Sandbox"
  const openSandboxButton = document.querySelector(
    'button[aria-label="Open Sandbox"]'
  );

  // Verifica si se encontró el botón
  if (openSandboxButton) {
    // Oculta el botón
    openSandboxButton.style.display = "none";
  }
});
