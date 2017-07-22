import { createStyleSheet } from 'material-ui/styles'

export default createStyleSheet('Content', theme => {
  return {
    root: {
      paddingLeft: '245px',
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        paddingLeft: '0px'
      }
    },
    copyright: {
      paddingTop: '40px',
      paddingBottom: '10px'
    }
  }
})
