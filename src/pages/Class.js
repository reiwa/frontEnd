import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () => <div>hello</div>
}

render(<App />, document.querySelector('.root'))`

const codeStoreA = Store.create({code: codeA})

const codeB = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <div>{this.text}</div>

  text = 'hello'
}

render(<App />, document.querySelector('.root'))`

const codeStoreB = Store.create({code: codeB})

const codeC = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <button onClick={this.onMethod}>
      button
    </button>

  onMethod = () => { alert('hello') }
}

render(<App />, document.querySelector('.root'))`

const codeStoreC = Store.create({code: codeC})

const codeD = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Sample extends Component {
  render = () =>
    <div>{this.props.text}</div>
}

const App = () =>
  <div>
    <Sample text='hello' />
  </div>

render(<App />, document.querySelector('.root'))`

const codeStoreD = Store.create({code: codeD})

const codeE = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Sample extends Component {
  render = () =>
    <div>{this.props.text}</div>
    
  static defaultProps = {text: 'default hello'}
}

const App = () =>
  <div>
    <Sample />
  </div>

render(<App />, document.querySelector('.root'))`

const codeStoreE = Store.create({code: codeE})

export default () => markdown(extensions)`
# Class

ClassはJavaScriptの仕様です.

Classを用いることで,
コンポーネントをカプセル化することができます.

また,
extendする\`Component\`にはいくつかのReactのAPIが存在します.

\`Component\`クラスをextendすることで, コンポーネントを作ることができます.

これは以下と同じ意味です.

\`const App = () => <div>hello</div>\`

${<Code>{codeStoreA}</Code>}

## プロパティ

\`text = 'hello'\`のようにして宣言したプロパティは\`this.text\`のように参照できます.

${<Code>{codeStoreB}</Code>}

## メソッド

無名関数を定義し代入することができます.

ここでイベントハンドリングについては省略しますが,
クリックイベントで\`onMethod\`を発火させることができます.

クリックすると\`'hello'\`とアラートされます.

${<Code>{codeStoreC}</Code>}

## Props

Propsは\`this.props\`から参照できます.

このpropsはrenderメソッド以外からでも参照できます.

${<Code>{codeStoreD}</Code>}

## defaultProps

設定したpropsに値が代入される保証はありません.

\`defaultProps\`ではpropsのデフォルト値を指定することができます.

ここでは,
props.textは空でしたが代わりにデフォルトの値が代入されています.

${<Code>{codeStoreE}</Code>}
`
