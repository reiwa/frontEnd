import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Content from './Content'
import LeftMenu from './LeftMenu'
import Drawer from './Drawer'
import DrawerButton from './DrawerButton'

export default () =>
  <MuiThemeProvider>
    <div>
      <Content />
      <LeftMenu />
      <Drawer />
      <DrawerButton />
    </div>
  </MuiThemeProvider>
