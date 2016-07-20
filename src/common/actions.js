
export function play(color) {
  return { type: 'play', color: color }
}

export function save(turns) {
  return { type: 'save', turns: turns }
}
