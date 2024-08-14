export let score = 0;

export const getScore = (): number => score;

export const setScore = (newScore: number): void => {
  score = newScore;
};

export const incrementScore = (points: number): void => {
  score += points;
};

export const getScoreDiv = (): HTMLDivElement => {
  const element = document.getElementById("score") as HTMLDivElement;
  if (!element) throw new Error("Element with ID 'score' not found");
  return element;
};

export const setScoreDiv = (content: string): void => {
  getScoreDiv().textContent = content;
};

export const getDrawCardButton = (): HTMLButtonElement => {
  const element = document.getElementById("draw-card-button") as HTMLButtonElement;
  if (!element) throw new Error("Element with ID 'draw-card-button' not found");
  return element;
};

export const setDrawCardButton = (disabled: boolean): void => {
  getDrawCardButton().disabled = disabled;
};

export const getPlantarseButton = (): HTMLButtonElement => {
  const element = document.getElementById("plantarse-button") as HTMLButtonElement;
  if (!element) throw new Error("Element with ID 'plantarse-button' not found");
  return element;
};

export const setPlantarseButton = (disabled: boolean): void => {
  getPlantarseButton().disabled = disabled;
};

export const getNewGameButton = (): HTMLButtonElement => {
  const element = document.getElementById("new-game-button") as HTMLButtonElement;
  if (!element) throw new Error("Element with ID 'new-game-button' not found");
  return element;
};

export const setNewGameButton = (visible: boolean): void => {
  getNewGameButton().style.display = visible ? "block" : "none";
};

export const getMessageDiv = (): HTMLDivElement => {
  const element = document.getElementById("message") as HTMLDivElement;
  if (!element) throw new Error("Element with ID 'message' not found");
  return element;
};

export const setMessageDiv = (content: string): void => {
  getMessageDiv().textContent = content;
};

export const getCardImage = (): HTMLImageElement => {
  const element = document.getElementById("card-image") as HTMLImageElement;
  if (!element) throw new Error("Element with ID 'card-image' not found");
  return element;
};

export const setCardImage = (src: string): void => {
  getCardImage().src = src;
};
