import markdown from 'markdown-in-js'
import Button from 'material-ui/Button'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = Store.create({
  code: `import React from 'react'
import { render } from 'react-dom'

const App = <div>hello!</div>

render(App, document.querySelector('.root'))`
})

const codeB = Store.create({
  code: `const word = 'hello'
console.log(word)`
})

const codeC = Store.create({
  code: `const word = 'hello'
const word = 0`
})

export default () => markdown(extensions)`
# フロントエンド

この資料は最近のフロントエンドを扱うものではありません,
主に2015年にフォーカスしています.

## コードについて

読み進めるに当たって,
開発環境を用意する必要はありません.

この資料にあるコードはおおよそ編集することができます.

動作を確認するには下の\`<div>hello</div>\`の部分を書き換えてみてください.

${<Code>{codeA}</Code>}

### console.logについて

console.logに対応しました.

変数の中身を確認したいときは,
\`console.log\`関数を使用してください.

${<Code>{codeB}</Code>}

### エラーについて

もし文法または実行に問題がある時はエラーを表示するようにしました.

\`unknown: Duplicate declaration "word"\`と出るはずです.

${<Code>{codeC}</Code>}

${<Button raised color='primary' href='/babel'>next</Button>}
`
