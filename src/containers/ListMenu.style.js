import { createStyleSheet } from 'material-ui/styles'

export default createStyleSheet('ListMenu', theme => {
  return {
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    select: {
      background: 'rgba(0, 0, 0, 0.2)'
    }
  }
})
