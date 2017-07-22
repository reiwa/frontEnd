import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = Store.create({
  code: `import React, { createElement } from 'react'

const App = <div>hello</div>

const _App = createElement('div', {}, 'hello')`
})

const codeB = Store.create({
  code: `import React, { createElement } from 'react'
import { render } from 'react-dom'

const App = <div>hello</div>

render(App, document.querySelector('.root'))`
})

const codeC = Store.create({
  code: `import React, { createElement } from 'react'
import { render } from 'react-dom'

const App = () => <div>hello</div>

render(<App />, document.querySelector('.root'))`
})

const codeD = Store.create({
  code: `import React, { Component, createElement } from 'react'
import { render } from 'react-dom'

const Header = () => <div>Header</div>

const Content = () => <div>Content</div>

const App = () =>
  <div>
    <Header />
    <Content />
  </div>

render(<App />, document.querySelector('.root'))`
})

const codeE = Store.create({
  code: `import React, { createElement } from 'react'
import { render } from 'react-dom'

const App = () =>
  <div className='hello'>hello</div>

render(<App />, document.querySelector('.root'))`
})

const codeF = Store.create({
  code: `import React, { createElement } from 'react'
import { render } from 'react-dom'

const App = () =>
  <div>
    <div>{2 + 2}</div>
    <div>{'https://' + 'google.co.jp'}</div>
  </div>

render(<App />, document.querySelector('.root'))`
})

const codeG = Store.create({
  code: `import React, { createElement } from 'react'
import { render } from 'react-dom'

const text = 'hello'

const obj = {text: 'hello'}

const App = () =>
  <div>
    <div>{text}</div>
    <div>{obj.text}, world!</div>
  </div>

render(<App />, document.querySelector('.root'))`
})

const codeH = Store.create({
  code: `import React, { createElement } from 'react'
import { render } from 'react-dom'

const px = (number) => number + 'px'

const App = () =>
  <div>
    <div>{px(30)}</div>
  </div>

render(<App />, document.querySelector('.root'))`
})

const codeI = Store.create({
  code: `import React, { createElement } from 'react'
import { render } from 'react-dom'

const isTrue = true

const isFalse = false

const App = () =>
  <div>
    {isTrue &&
    <div>is true</div>}
    {isFalse &&
    <div>is false</div>}
  </div>

render(<App />, document.querySelector('.root'))`
})

const codeJ = Store.create({
  code: `import React, { createElement } from 'react'
import { render } from 'react-dom'

const App = () =>
  <div>hello</div>
  <div>hello</div>

render(<App />, document.querySelector('.root'))`
})

export default () => markdown(extensions)`
# Jsx

ReactではJavaScriptの中にXmlが記述されますが,
これは言語仕様ではなくJsxという構文拡張です.

テンプレートエンジンのようですがこれは完全なJavaScriptであり,
xml形式で記述された部分は関数に変換されます.

ここで,
\`App\`と\`_App\`とおなじ意味です.

\`createElement\`関数は「関数を返す関数」で.
\`App\`には「関数」が代入されています.

${<Code>{codeA}</Code>}

## レンダリング

仮想DOMをレンダリングするには, \`react-dom\`モジュールの\`render\`関数が必要です.

\`render\`関数は第一引数に関数を受け取ります.

${<Code>{codeB}</Code>}

## 関数の発火

\`() =>\`は関数を意味します.
これで,
\`App\`は「関数を返す関数」になりました.

関数\`App\`を実行するには\`App()\`とすればいいです.

それでも問題ないのですが,
\`<App />\`または\`<App></App>\`とすることで関数\`App\`は発火します.

このようなユーザの定義したコンポーネントは必ず大文字を使用しなくてはいけません.

${<Code>{codeC}</Code>}

## コンポーネント

このように,
複数のコンポーネントを組み合わせることができます.

${<Code>{codeD}</Code>}

## className

JsxにはHtmlには無い属性がいくつかあります.

特に,
htmlのclass属性は\`className\`に変わるので注意してください.

${<Code>{codeE}</Code>}

## 式の評価

Jsx内で\`${'{}'}\`で囲まれた部分では,
式が記述できます.

この式が評価されるのは関数が発火したとき,
つまりレンダリングされるときです.

${<Code>{codeF}</Code>}

## 変数の記述

\`${'{}'}\`では変数を用いることができます.

${<Code>{codeG}</Code>}

## 関数の記述

関数を実行するときは,
返す値に注意してください.

${<Code>{codeH}</Code>}

## 式の中の記述

式の中にJsxを記述することができます.

例えば,
\`&&\`を用いることで\`true\`のときだけレンダリングするといったことができます.

また,
\`null\`や\`false\`などの値はレンダリングされません.

${<Code>{codeI}</Code>}

## 注意

今のバージョンでは,
ひとつの変数に複数のJsxを代入することはできません.

${<Code>{codeJ}</Code>}
`
