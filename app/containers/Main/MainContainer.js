import React, { Component, PropTypes } from 'react'
import { container, innerContainer } from './styles.css'
import { Navigation } from 'components'
import { connect } from 'react-redux'

class MainContainer extends Component {
  render () {
    console.log('props', this.props)
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool
}

export default connect(
  ({users}) => ({isAuthed: users.isAuthed})
)(MainContainer)
