import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = Store.create({
  code: `let x`
})

const codeB = Store.create({
  code: `let x
x = 0
x = 20

console.log(x)

let y = 20`
})

const codeC = Store.create({
  code: `const x = 20
  
console.log(x)`
})

const codeD = Store.create({
  code: `if (true) {
  const x = 20
}

const x = 40

console.log(x)`
})

export default () => markdown(extensions)`
# 宣言

\`変数\`を宣言するには\`let\`を用いて,
その次には識別子を指定します.

この識別子にはルールがあり,
先頭に数字がきたりスペースや入ることは許されません.

${<Code>{codeA}</Code>}

## 宣言と代入

\`変数\`は再代入が可能です.

\`x = 20\`とすることで\`x\`の値は\`20\`になります.

また,
\`y = 20\`のように宣言と代入を同時にすることもできます.

${<Code>{codeB}</Code>}

基本的に,
\`変数\`を使用することは殆どありません.

## 定数

\`定数\`を宣言するには\`let\`を用いて, その次には識別子を指定します.

変数と違い,
定数は宣言と代入を同時にする必要があり,
再代入は許されません.

${<Code>{codeC}</Code>}

## ブロックスコープ

変数が参照される範囲をスコープといいます.

\`${'{}'}\`はブロックスコープとなり,
この中で宣言された変数は外部から参照されません.

ここで,
\`const x = 20\`は外部からは参照されないので,
\`const x = 40\`としてもエラーになりません.

${<Code>{codeD}</Code>}
`
