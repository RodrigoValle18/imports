import {
  obtenerUrlCarta,
  dameCarta,
  valorCarta,
  sumarPuntos,
  gestionarFinalPartida,
  resetGame,
} from "./motor";

import { getScore, setScoreDiv, setMessageDiv, setCardImage, setDrawCardButton, setPlantarseButton, setNewGameButton } from "./model";

export const muestraPuntuacion = (): void => {
  setScoreDiv(`Puntuación: ${getScore()}`);
};

export const mostrarCarta = (urlCarta: string): void => {
  setCardImage(urlCarta);
};

export const gameOver = (message: string): void => {
  setMessageDiv(message);
  bloquearBotonPintarCarta();
  setPlantarseButton(true);
  setNewGameButton(true);
};

const bloquearBotonPintarCarta = (): void => {
  setDrawCardButton(true);
};

export const resetGameUI = (): void => {
  resetGame();
  muestraPuntuacion();
  mostrarCarta("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
  setMessageDiv("");
  setDrawCardButton(false);
  setPlantarseButton(false);
  setNewGameButton(false);
};

export const handleDrawCard = (): void => {
  const carta = dameCarta();
  const urlCarta = obtenerUrlCarta(carta);
  mostrarCarta(urlCarta);
  const puntosCarta = valorCarta(carta);
  sumarPuntos(puntosCarta);
  muestraPuntuacion();
  const estadoPartida = gestionarFinalPartida();
  if (estadoPartida === "win") {
    gameOver("¡Has ganado!");
  } else if (estadoPartida === "lose") {
    gameOver("Has perdido");
  }
};

export const handlePlantarse = (): void => {
  let message = "";
  const score = getScore();
  if (score < 4) {
    message = "No debes plantarte tan pronto";
  } else if (score === 4) {
    message = "No está mal, pero podrías intentarlo de nuevo";
  } else if (score === 5) {
    message = "Más valor la próxima vez";
  } else if (score === 6 || score === 7) {
    message = "Casi casi...";
  } else if (score === 7.5) {
    message = "¡Lo has clavado! ¡Enhorabuena!";
  }
  gameOver(message);
};
