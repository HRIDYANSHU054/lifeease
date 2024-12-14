const runs = [0, 1, 2, 3, 4, 5, 6, "W"];

export function generateLast24BallsRandomly() {
  const last24Balls = [];
  for (let i = 0; i < 24; i++) {
    const randomIndex = Math.floor(Math.random() * runs.length);
    last24Balls.push(runs[randomIndex]);
  }
  return last24Balls;
}
