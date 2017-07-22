import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import * as pages from '../pages'
import styleSheet from './Content.style'

@withStyles(styleSheet)
@inject(stores => {
  return {routes: stores.routes}
})
@observer
export default class Content extends Component {
  render () {
    const {classes} = this.props
    const Page = pages[this.props.routes.page]
    if (Page) {
      return (
        <div className={classes.root}>
          <Page />
          <div className={classes.copyright}>
            <Typography align='center'>2017@uufish</Typography>
          </div>
        </div>)
    } else {
      return (
        <div className={classes.root}>
          準備中です
        </div>
      )
    }
  }
}
