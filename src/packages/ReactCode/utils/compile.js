import { transform } from 'babel-standalone'
import presetReact from 'babel-preset-react'
import pluginTransformDecorators from 'babel-plugin-transform-decorators-legacy'
import pluginTransformClassProperties from 'babel-plugin-transform-class-properties'

export default (code, uuid) => {
  try {
    return transform(code, {
      presets: ['es2015', 'stage-0', presetReact],
      plugins: [
        pluginTransformDecorators,
        pluginTransformClassProperties
      ]
    })
    .code
    .replace(new RegExp('.root', 'g'), '.' + uuid)
    .replace(new RegExp('console.log', 'g'), 'consoleLog')
  } catch (err) {
    return err
  }
}
