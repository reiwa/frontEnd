import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = `import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render = () =>
    <div>
      {[
        <div key='a'>hello-A</div>,
        <div key='b'>hello-B</div>,
        <div key='c'>hello-C</div>
      ]}
    </div>
}

render(<App />, document.querySelector('.root'))`

const codeStoreA = Store.create({code: codeA})

const codeB = `import React, { Component } from 'react'
import { render } from 'react-dom'

const array = [
  {_id: 'a', text: 'hello-A'},
  {_id: 'b', text: 'hello-B'},
  {_id: 'c', text: 'hello-C'}
]

class App extends Component {
  render = () =>
    <div>
      {array.map(item =>
        <div key={item._id}>{item.text}</div>
      )}
    </div>
}

render(<App />, document.querySelector('.root'))`

const codeStoreB = Store.create({code: codeB})

const codeC = `import React, { Component } from 'react'
import { render } from 'react-dom'

const array = [
  {_id: 'a', text: 'hello-A'},
  {_id: 'b', text: 'hello-B'},
  {_id: 'c', text: 'hello-C'},
  {_id: 'd', text: 'hello-AB'}
]

class App extends Component {
  render = () =>
    <div>
      {array
      .filter(item => item.text.includes('A'))
      .map(item =>
        <div key={item._id}>{item.text}</div>
      )}
    </div>
}

render(<App />, document.querySelector('.root'))`

const codeStoreC = Store.create({code: codeC})

export default () => markdown(extensions)`
# Keys

\`props.children\`は配列を受け取ることができます.

ここでは,
３つの要素がレンダリングされています.

${<Code>{codeStoreA}</Code>}

## 配列

配列は外部から取得、定義されることが殆どです.

Wordpressなどから取得した記事データなどがそれです.

このように配列からレンダリングする場合は,
\`key\`を指定する必要があります.

配列要素にユニークなIDを降らなければ,
差分の発生した要素を特定できないからです.

配列要素は減ったり増えたりするので\`key\`に\`index\`は指定しないでください

${<Code>{codeStoreB}</Code>}

## 配列操作

配列操作を用いて要素を減らしたりできます.

ここでは,
\`text\`にAを含む要素のみをレンダリングしています.

${<Code>{codeStoreC}</Code>}
`
