import { observer } from 'mobx-react'
import React, { Component } from 'react'
import classNames from 'classnames'

@observer
export default class ReactCode extends Component {
  render = () => {
    const {className, store} = this.props
    if (this.props.compiledCode) {
      return (
        <div className={classNames(className, store.uuid)}>
          {store.compiledCode}
        </div>
      )
    }
    return (
      <div className={classNames(className, store.uuid)} />
    )
  }
}
