import { createStyleSheet } from 'material-ui/styles'

export default createStyleSheet('DrawersButton', theme => {
  return {
    root: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    button: {
      margin: theme.spacing.unit
    }
  }
})
