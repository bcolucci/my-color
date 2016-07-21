
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MyColor from '../components/MyColor'
import * as Actions from './actions'

const publicStateProps = [ 'frame', 'score', 'time', 'turn', 'end' ]

const mapStateToProps = ({ state }) => _.pick(state, publicStateProps)

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MyColor)
