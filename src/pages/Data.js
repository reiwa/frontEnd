import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'

const codeA = Store.create({
  code: `const bool = true // Boolean

const num = 20 // Number

const str = '20' // String

const sym = Symbol()

const nul = null // null

const undef = void 0 // undefined`
})

const codeB = Store.create({
  code: `const str = 'abcdef'

const len = 'abcdef'.length

console.log(len)`
})

const codeC = Store.create({
  code: `const obj = {}`
})

const codeD = Store.create({
  code: `const array = []`
})

export default () => markdown(extensions)`
# データ型

JavaScriptには7つの型があります.

## プリミティブ型

データ型のうち以下の6つはプリミティブ型です.

- 真理値: Boolean

- 数値: Number

- 文字列: String

- シンボル: Symbol

- null

- undefined

それぞれ以下のように表現できます.

${<Code>{codeA}</Code>}

## リテラル

値の表現にリテラルを用いることができます.

### 文字列リテラル

文字列はシングルクォートで囲むことで表現できます.

${<Code>{codeB}</Code>}

文字列リテラルを持つ値は,
Stringオブジェクトの全てのメソッドとプロパティを呼び出すことができます.

\`'sbcdef'.length\`のようにすると,
文字列オブジェクトが生成されメソッドを呼び出し破棄されます.


## オブジェクト

オブジェクトはオブジェクトリテラル\`${'{}'}\`を用いて表現できます.

${<Code>{codeC}</Code>}


オブジェクト初期化子の1つとして\`配列\`が存在します.

配列は\`[]\`を用いて表現します.

${<Code>{codeD}</Code>}
`
