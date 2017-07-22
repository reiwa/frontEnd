import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <button onClick={this.onIncrement}>
      {this.state.count}
    </button>
  
  state = {count: 0}
  
  onIncrement = () => {
    this.setState({count: this.state.count + 1})
  }
}

render(<App />, document.querySelector('.root'))`

const codeStoreA = Store.create({code: codeA})

const codeB = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <button onClick={this.onIncrement}>
      {this.state.countA + this.state.countB}
    </button>
  
  state = {countA: 0, countB: 0}
  
  onIncrement = () => {
    this.setState({
      countA: this.state.countA + 1,
      countB: this.state.countB + 1
    })
  }
}

render(<App />, document.querySelector('.root'))`

const codeStoreB = Store.create({code: codeB})

const codeC = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <div>
      <input
        onChange={this.onInput}
        value={this.state.input} />
      <div>
        {this.state.input}
      </div>
    </div>
  
  state = {input: 'hello'}
  
  onInput = (event) => {
    const value = event.target.value
    if (7 < value.length) return
    this.setState({input: value})
  }
}

render(<App />, document.querySelector('.root'))`

const codeStoreC = Store.create({code: codeC})

export default () => markdown(extensions)`
# State

Componentクラスにとって\`state\`は特別なプロパティです.

このプロパティを\`this.setState\`関数を用いて更新すると,
コンポーネントは再レンダリングされます.

つまり,
前回のstateとの差分が計算され値の更新があればDOMが更新されます.

この仮想DOMの差分計算のアルゴリズムを利用することで再レンダリングを最小限にすることができます.

ここでは,
ボタンをクリックすると\`onIncrement\`関数が発火し\`this.state.count\`が1上がります.

${<Code>{codeStoreA}</Code>}

## 複数のstateの更新

複数のstateを更新するとき\`this.setState\`関数は複数回呼び出さないようにしてください.

${<Code>{codeStoreB}</Code>}

## ユーザの入力

ユーザの入力もstateで管理します.

これにより入力に制限を加えたりすることができます.

ここでは,
7文字以上の入力ができないようになっています.

${<Code>{codeStoreC}</Code>}
`
