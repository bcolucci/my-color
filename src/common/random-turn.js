
import _ from 'lodash'
import colors from './colors'

export default () => {
  const color = _.sample(colors)
  const otherColors = colors.filter(c => c !== color)
  const text = _.sample(otherColors)
  const choices = [ text ];
  while (choices.length < 3) {
    const randomColor = _.sample(otherColors)
    if (choices.includes(randomColor))
      continue;
    choices.push(randomColor)
  }
  return { color, text, choices: _.shuffle(choices) }
}
