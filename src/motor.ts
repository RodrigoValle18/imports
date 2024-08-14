import { getScore, setScore, incrementScore } from "./model";

export const obtenerUrlCarta = (carta: number): string => {
  switch (carta) {
    case 1: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

export const dameNumeroAleatorio = (): number => Math.floor(Math.random() * 10);

export const dameCarta = (): number => {
  const numeroAleatorio = dameNumeroAleatorio();
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

export const valorCarta = (carta: number): number => (carta >= 10 ? 0.5 : carta);

export const sumarPuntos = (puntos: number): void => {
  incrementScore(puntos);
};

export const gestionarFinalPartida = (): string => {
  const currentScore = getScore();
  if (currentScore === 7.5) return "win";
  if (currentScore > 7.5) return "lose";
  return "continue";
};

export const resetGame = (): void => {
  setScore(0);
};