import { createStyleSheet } from 'material-ui/styles'

export default createStyleSheet('Drawer', theme => {
  return {
    root: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  }
})
