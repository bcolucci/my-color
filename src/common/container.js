
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Hello from './components/hello'
import * as Actions from './actions'

const mapStateToProps = (state) => _.pick(state, [ 'frame', 'turn', 'end' ])

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
