import { observer } from 'mobx-react'
import React, { Component } from 'react'
import codemirror from 'codemirror'

@observer
export default class ReactCode extends Component {
  render = () => {
    const {store} = this.props
    return (
      <textarea
        ref={ref => { this.ref = ref }}
        autoComplete={'off'}
        defaultValue={store.compiledCode} />
    )
  }

  instance = null

  static defaultProps = {
    options: {
      lineNumbers: true,
      mode: 'jsx',
      theme: 'base16-light',
      indentUnit: 2,
      autoCloseBrackets: true,
      viewportMargin: Infinity
    }
  }

  componentDidMount = () => {
    this.instance = codemirror.fromTextArea(this.ref, this.props.options)
  }

  componentDidUpdate = () => {
    this.instance.setValue(this.props.store.compiledCode)
  }

  shouldComponentUpdate = () => {
    return false
  }
}
