import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import ListMenu from './ListMenu'
import styleSheet from './Drawer.style'

@withStyles(styleSheet)
@inject(stores => {
  return {drawer: stores.drawer}
})
@observer
export default class Content extends Component {
  render () {
    const {drawer, classes} = this.props
    return (
      <Drawer
        className={classes.root}
        anchor='left'
        open={drawer.isOpen}
        onClick={drawer.close}>
        <ListMenu />
      </Drawer>
    )
  }
}
