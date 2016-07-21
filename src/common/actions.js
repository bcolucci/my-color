
export const PLAY = 'play';
export const TIMER_END = 'timerEnd'

export function play(color) {
  return { type: PLAY, color: color }
}

export function timerEnd(color) {
  return { type: TIMER_END, color: color }
}
