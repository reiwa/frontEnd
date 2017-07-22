import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import ListMenu from './ListMenu'
import styleSheet from './LeftMenu.style'

@withStyles(styleSheet)
export default class Content extends Component {
  render () {
    const {classes} = this.props
    return (
      <Paper square className={classes.root} elevation={0}>
        <ListMenu />
      </Paper>
    )
  }
}
