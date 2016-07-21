
import _ from 'lodash'
import colors from './colors'

export default () => {
  const color = _.sample(colors)
  const text = _.sample(colors.filter(c => c !== color))
  return {
    color, 
    text,
    choices: _.shuffle(colors)
  }
}
