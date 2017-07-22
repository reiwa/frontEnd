import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = Store.create({
  code: `import React, { Component } from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, Button } from 'material-ui'

const App =
  <MuiThemeProvider>
    <div>
      <Button raised color='primary'>raised</Button>
      <Button>flat</Button>
      <button>plan</button>
    </div>
  </MuiThemeProvider>

render(App, document.querySelector('.root'))`
})

export default () => markdown(extensions)`
# React

[React](https://facebook.github.io/react/)はFacebook社が開発する,
ユーザインタフェースを構築する為のライブラリです.

Reactは主にシングルページアプリケーションの開発を目的としています.

Reactは開発側に多くのメリットがあります.

## コンポーネント思考

コンポーネントは,
構造,
スタイリング,
イベントハンドリングなどのロジックを持ちます.

Reactはこれらを1つのclassにすることができ,
\`Props\`を用いて様々なパターンを吸収します.

${<Code>{codeA}</Code>}

## 仮想DOM

DOMが増えたり消えたりするような実装においては,
パフォーマンスを調整が必要です.

仮想DOMはこれらを高速に動作させるアルゴリズムです.
`
