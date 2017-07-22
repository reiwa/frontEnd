import { types } from 'mobx-state-tree'
import evalModule from '../utils/evalModule'
import compile from '../utils/compile'
import SampleCode from '../constants/sample-code'

export default types.model('Store', {
  uuid: types.maybe(types.string),
  code: types.optional(types.string, SampleCode),
  compiledCode: types.optional(types.string, ''),
  error: types.maybe(types.string),
  eval: true,
  logs: types.maybe(types.array(types.string))
}, {
  firstCode: null
}, {
  afterCreate () {
    const src = 'abcdefghijklmnopqrstuvwxyz'
    let str = ''
    for (let i = 0, len = src.length; i < 8; ++i) {
      str += src[Math.floor(Math.random() * len)]
    }
    this.uuid = str
    this.firstCode = this.code
  },
  setCode (code) {
    this.code = code
  },
  resetCode (code) {
    this.code = this.firstCode
  },
  run () {
    this.error = ''

    const code = this.compile()

    if (!code) { return }

    if (this.eval) {
      this.runEval()
    }
  },
  compile () {
    const res = compile(this.code, this.uuid)
    if (typeof res === 'string') {
      this.compiledCode = res
      return this.compiledCode
    } else {
      this.error = res.message
    }
  },
  runEval () {
    this.logs = null
    const res = evalModule(this.compiledCode)
    if (Array.isArray(res)) {
      this.logs = res
    } else if (res !== null) {
      this.error = res.message
    }
  }
})
