import { createStyleSheet } from 'material-ui/styles'

export default createStyleSheet('LeftMenu', theme => {
  return {
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '250px',
      padding: '10px',
      boxSizing: 'border-box',
      height: '100%',
      overflowY: 'auto',
      background: 'rgba(0, 0, 0, 0)',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  }
})
