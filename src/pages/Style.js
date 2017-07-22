import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <div style={{color: 'red'}}>
      hello
    </div>
}

render(<App />, document.querySelector('.root'))`

const codeStoreA = Store.create({code: codeA})

const codeB = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <div style={this.style}>
      hello
    </div>
    
  style = {color: 'red'}
}

render(<App />, document.querySelector('.root'))`

const codeStoreB = Store.create({code: codeB})

const codeC = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <button
      onClick={this.onClick}
      style={{color: this.state.color}}>
      hello
    </button>

  state = {color: 'red'}
  
  onClick = () => {
    const isRed = this.state.color === 'red'
    this.setState({
      color: isRed ? 'blue' : 'red'
    })
  }
}

render(<App />, document.querySelector('.root'))`

const codeStoreC = Store.create({code: codeC})

export default () => markdown(extensions)`
# Style

スタイルの最も簡単な方法は\`inline-style\`です,
これはHtmlと殆ど同じものです.

Jsxではこれを\`Object\`として渡す必要があります.

つまり,
\`border-radius\`ではなく,
\`borderRadius\`であるということです.

Jsxでは式を用いるには\`${'{}'}\`としますが,
その中に\`Object\`が入るので\`${'{{}}'}\`となることに注意してください.

ここでは,
テキストの\`color\`を\`red\`にしています.

${<Code>{codeStoreA}</Code>}

## 変数を用いる

スタイルはただの\`Object\`なので,
外部に定義することができます.

ここでは,
クラスのプロパティとして定義していますが普通に外部に変数を定義していいです.

繰り返し使われるスタイルは,
変数を用いると可読性が上がります.

${<Code>{codeStoreB}</Code>}

## メソッド

\`state\`に文字列を設定してみます.

\`onClick\`が発火すると\`color\`は\`red\`または\`blue\`に変化します.

このようにスタイルを簡単に操作することができます.

\`className\`に変数を持ちいれば動的にclassNameを切り替えることができます.

メニューの表示・非表示を切り替えるなどといった実装が考えられます.

${<Code>{codeStoreC}</Code>}
`
