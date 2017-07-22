import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const style = {
  '@global': {
    '*': {
      '-webkit-font-smoothing': 'antialiased'
    },
    'body': {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      background: '#F8F7F8'
    },
    '.CodeMirror': {
      height: 'auto'
    },
    '.cm-s-uufish.CodeMirror': {
      padding: '5px',
      color: '#202020',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      fontFamily: '"Roboto Mono", Monaco, courier, monospace',
      fontSize: '12px',
      letterSpacing: '0.5px'
    },
    '.cm-s-uufish div.CodeMirror-selected': {
      background: '#e0e0e0'
    },
    '.cm-s-uufish .CodeMirror-line::selection, .cm-s-uufish .CodeMirror-line > span::selection, .cm-s-uufish .CodeMirror-line > span > span::selection': {
      background: '#e0e0e0'
    },
    '.cm-s-uufish .CodeMirror-line::-moz-selection, .cm-s-uufish .CodeMirror-line > span::-moz-selection, .cm-s-uufish .CodeMirror-line > span > span::-moz-selection': {
      background: '#e0e0e0'
    },
    '.cm-s-uufish .CodeMirror-gutters': {
      background: 'rgba(0, 0, 0, 0)',
      borderRight: '0px'
    },
    '.cm-s-uufish .CodeMirror-guttermarker': {
      color: '#ac4142'
    },
    '.cm-s-uufish .CodeMirror-guttermarker-subtle': {
      color: '#b0b0b0'
    },
    '.cm-s-uufish .CodeMirror-linenumber': {
      color: '#b0b0b0'
    },
    '.cm-s-uufish .CodeMirror-cursor': {
      borderLeft: '1px solid #505050'
    },
    '.cm-s-uufish span.cm-comment': {
      color: '#8f5536'
    },
    '.cm-s-uufish span.cm-atom': {
      color: '#aa759f'
    },
    '.cm-s-uufish span.cm-number': {
      color: '#aa759f'
    },
    '.cm-s-uufish span.cm-property, .cm-s-uufish span.cm-attribute': {
      color: '#90a959'
    },
    '.cm-s-uufish span.cm-keyword': {
      color: '#ac4142'
    },
    '.cm-s-uufish span.cm-string': {
      color: '#f4bf75'
    },
    '.cm-s-uufish span.cm-variable': {
      color: '#90a959'
    },
    '.cm-s-uufish span.cm-variable-2': {
      color: '#6a9fb5'
    },
    '.cm-s-uufish span.cm-def': {
      color: '#d28445'
    },
    '.cm-s-uufish span.cm-bracket': {
      color: '#202020'
    },
    '.cm-s-uufish span.cm-tag': {
      color: '#ac4142'
    },
    '.cm-s-uufish span.cm-link': {
      color: '#aa759f'
    },
    '.cm-s-uufish span.cm-error': {
      background: '#ac4142',
      color: '#505050'
    },
    '.cm-s-uufish .CodeMirror-activeline-background': {
      background: '#DDDCDC'
    },
    '.cm-s-uufish .CodeMirror-matchingbracket': {
      textDecoration: 'underline',
      color: 'white !important'
    }
  }
}

const sheet = jss.createStyleSheet(style)

sheet.attach()
