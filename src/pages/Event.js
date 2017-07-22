import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <button onClick={this.onClick}>
      button
    </button>

  onClick = () => { alert('hello') }
}

render(<App />, document.querySelector('.root'))`

const codeStoreA = Store.create({code: codeA})

const codeB = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <input
      onChange={this.onChange}
      value='' />
 
  onChange = (event) => {
    alert(event.target.value)
  }
}

render(<App />, document.querySelector('.root'))`

const codeStoreB = Store.create({code: codeB})

export default () => markdown(extensions)`
# Event

Reactでは\`SyntheticEvent\`というラップされたイベントを扱います.

イベントハンドラは多くありますが,
ブラウザ間で一貫したものになっています.

クリックイベントを扱うときは\`onClick\`を使用します.

ここでは,
クリックするとアラートが表示されます.

${<Code>{codeStoreA}</Code>}

## onChange

入力を受け取る場合は,
\`onChange\`を使用します.

ここでは文字を入力するとアラートに内容が表示されます.

${<Code>{codeStoreB}</Code>}
`
