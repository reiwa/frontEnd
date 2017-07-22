import Typography from 'material-ui/Typography'
import InlineCode from '../conponents/InlineCode'

export default {
  p: props => <Typography gutterBottom type='body2' {...props} />,
  code: props => <InlineCode {...props} />
}
