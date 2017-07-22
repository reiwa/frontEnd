import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = Store.create({
  code: `x => x + 20`
})

const codeB = Store.create({
  code: `(x, y) => x + y`
})

const codeC = Store.create({
  code: `() => 20`
})

const codeD = Store.create({
  code: `(x, y) => {
  const value = x + y
  return value
}

(x, y) => {}`
})

const codeE = Store.create({
  code: `const func = x => x + 20

const x = func(20)

console.log(x)`
})

const codeF = Store.create({
  code: `const x = (x => x + 20)(20)

console.log(x)`
})

export default () => markdown(extensions)`
# 関数の宣言

関数は\`=>\`を使って表現します.

ここでは,
引数\`x\`を受け取り, \`x + 20\`を返す関数を定義しています.

${<Code>{codeA}</Code>}

## 引数

２つ以上の引数を受け取るには,
括弧\`()\`を用いて\`(x, y)\`のように表現します.

${<Code>{codeB}</Code>}

引数を受け取らない場合は,
空の\`()\`を用いてください.

${<Code>{codeC}</Code>}

## 戻り値

\`=>\`は値を返しますが,
関数内で処理を記述したい時は\`${'{}'}\`で表現します.

この場合は,
\`return\`を用いて値を返します.

何も返さない時は\`return\`を省略してください.

${<Code>{codeD}</Code>}

## 呼び出し

代入することで,
後で呼び出すことができます.

呼び出す時は括弧\`()\`を用いて,
指定した引数を代入します.

${<Code>{codeE}</Code>}

引数が空の時は,
\`undefined\`が代入されてしまいます.

## 即時関数

代入せずに呼び出す時は括弧\`()\`で囲み呼び出してください.

${<Code>{codeF}</Code>}

基本的に即時関数を使用する機会はほぼありません.
`
