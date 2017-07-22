import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft'
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import styleSheet from './DrawerButton.style'

@withStyles(styleSheet)
@inject(stores => {
  return {drawer: stores.drawer}
})
@observer
export default class DrawersButton extends Component {
  render () {
    const {drawer, classes} = this.props
    return (
      <div className={classes.root}>
        <Button fab
          color='primary'
          className={classes.button}
          onClick={drawer.toggle}>
          {drawer.isOpen
            ? <KeyboardArrowRight />
            : <KeyboardArrowLeftIcon />}
        </Button>
      </div>
    )
  }
}
