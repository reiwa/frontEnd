import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = `import React, { createElement } from 'react'
import { render } from 'react-dom'

const Typography = (props) =>
  <div>{props.text}</div>

const App = (props) =>
  <div>
    <Typography text='text A' />
    <Typography text='text B' />
  </div>

render(<App />, document.querySelector('.root'))`

const codeStoreA = Store.create({code: codeA})

const codeB = `import React, { createElement } from 'react'
import { render } from 'react-dom'

const Typography = (props) =>
  <div>{props.children}</div>

const App = (props) =>
  <div>
    <Typography>text A</Typography>
    <Typography>text B</Typography>
  </div>

render(<App />, document.querySelector('.root'))`

const codeStoreB = Store.create({code: codeB})

const codeC = `import React, { createElement } from 'react'
import { render } from 'react-dom'

const Layout = (props) =>
  <div>{props.children}</div>

const App = (props) =>
  <div>
    <Layout>
      <div>text</div>
      <div>text</div>
    </Layout>
  </div>

render(<App />, document.querySelector('.root'))`

const codeStoreC = Store.create({code: codeC})

const codeD = `import React, { Component, createElement } from 'react'
import { render } from 'react-dom'

const Header = () => <div>Header</div>

const Content = () => <div>Content</div>

const App = () =>
  <div>
    <Header />
    <Content />
  </div>

render(<App />, document.querySelector('.root'))`

const codeStoreD = Store.create({code: codeD})

const codeE = `import React, { Component, createElement } from 'react'
import { render } from 'react-dom'

const Sample = (props) =>
  <div>
    <div>text A</div>
    {props.show &&
    <div>text B</div>}
  </div>

const App = () =>
  <div>
    <Sample show />
  </div>

render(<App />, document.querySelector('.root'))`

const codeStoreE = Store.create({code: codeE})

export default () => markdown(extensions)`
# Props

コンポーネントは外部からデータをPropsとして受け取ることができ,
Jsxではそれは独自の属性となります.

ここでは文字列を受け取っています.

${<Code>{codeStoreA}</Code>}

## Children

Jsxの入れ子になった要素は,
\`props.children\`からアクセスできます.

${<Code>{codeStoreB}</Code>}

## Childrenとコンポーネント

\`props.children\`は,
文字列や数字以外にコンポーネントを受け取ることができます.

また,
複数でも受け取ることができます.

${<Code>{codeStoreC}</Code>}

## コンポーネント

このように,
複数のコンポーネントを組み合わせることができます.

${<Code>{codeStoreD}</Code>}

## propsとBool

\`<Component show='{true}' />\`と\`<Component show />\`は同じ意味になり, 省略できます.

これは\`show\`に限ったことではありません.

${<Code>{codeStoreE}</Code>}
`
