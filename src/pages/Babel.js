import React from 'react'
import markdown from 'markdown-in-js'
import { Store } from '../packages/ReactCode'
import Code from '../conponents/Code'
import extensions from '../utils/extensions'
import emoticon from '../constants/emoticon'

const codeA = Store.create({
  eval: false,
  code: `export default px = n => \`\${n}px\``
})

export default () => markdown(extensions)`
# トランスコンパイル

JavaScriptはブラウザによって実装が違います. ${emoticon.fuck}

2011年6月にEdition5.1が実装され,
2015年6月にはEdition2015(ES2015)が実装されています.

2015年以降の殆どのライブラリはこのES2015を前提としています.

## Babel

現在はES2017とそれ以降の策定が進められています.

[Babel](https://github.com/babel/babel)はこれらの機能をES5に還元します.

${<Code compiledCode>{codeA}</Code>}

具体的にはファイルを読み込み,
コンパイルしES5に還元した文字列を生成、またはファイルを生成します.

[Babel](https://github.com/babel/babel)は
[webpack](https://github.com/webpack/webpack)などの開発ツールと組み合わせて使うことができます.

また,
ブラウザの実装が進むにつれトランスコンパイラも必要がなくなります.

この点がTypeScriptやCoffeeScript,
ReasonなどのAltJSとの違いです.

よって,
開発環境があればブラウザサポートを気にせずにおおよそ全ての標準機能が使えます. ${emoticon.end}
`
