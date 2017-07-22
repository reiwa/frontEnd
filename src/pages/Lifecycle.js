import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <div className='sample'>hello</div>
  
  componentDidMount = () => {
    document.querySelector('.sample')
    .style.color = 'red'
  }
}

render(<App />, document.querySelector('.root'))`

const codeStoreA = Store.create({code: codeA})

export default () => markdown(extensions)`
# LifeCycle

クラスベースのコンポーネントには,
ライフサイクルが存在します.

具体的には,
レンダリングが終わった後やコンポーネントが消滅する時などに何かを行うことができます.

\`componentDidMout\`は,
仮想DOMのレンダリングの終了後に呼び出されます.

よって,
この時点ではDOMが存在するので参照することができます.

${<Code>{codeStoreA}</Code>}
`
