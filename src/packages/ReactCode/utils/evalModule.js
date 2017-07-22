import React from 'react'
import ReactDom from 'react-dom'
import * as MaterialUI from 'material-ui'

export default code => {
  try {
    window.require = require
    const logs = []
    window.consoleLog = (str) => {
      if (typeof str === 'string') {
        logs.push(str)
      } else {
        logs.push(String(str))
      }
    }
    // eslint-disable-next-line no-eval
    eval(code)
    window.require = null
    window.consoleLog = null
    if (logs.length !== 0) {
      return logs
    } else {
      return null
    }
  } catch (err) {
    return err
  }
}

function require (name) {
  switch (name) {
    case 'react':
      return React
    case 'react-dom':
      return ReactDom
    case 'material-ui':
      return MaterialUI
  }
}
