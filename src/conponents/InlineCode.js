import React, { Component } from 'react'
import { createStyleSheet, withStyles } from 'material-ui/styles'

const styleSheet = createStyleSheet('InlineCode', theme => {
  return {
    root: {
      margin: '0 2px',
      padding: '0 8px',
      fontFamily: '"Roboto Mono", Monaco, courier, monospace',
      background: 'rgba(0,0,0,0.1)',
      borderRadius: '4px'
    }
  }
})

@withStyles(styleSheet)
export default class Code extends Component {
  render () {
    const {classes, ...other} = this.props
    return (
      <code {...other} className={classes.root} />
    )
  }
}
