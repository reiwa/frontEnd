import { observer } from 'mobx-react'
import React, { Component } from 'react'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import ReactCode from '../packages/ReactCode'
import ReactCodeEditor from '../packages/ReactCode/Editor'
import ReactCodePreview from '../packages/ReactCode/Preview'
import editorOptions from '../constants/editorOptions'

const styleSheet = createStyleSheet('Code', theme => {
  return {
    root: {
      padding: '10px 0',
      flexGrow: 1
    },
    editor: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    },
    preview: {
      background: 'rgba(0, 0, 0, 0.02)'
    },
    previewDom: {
      background: 'rgba(0, 0, 0, 0.02)',
      padding: '10px'
    },
    error: {
      background: 'tomato'
    },
    preError: {
      margin: 0,
      padding: '5px 10px',
      color: 'white',
      fontFamily: '"Roboto Mono", Monaco, courier, monospace',
      overflowX: 'auto'
    },
    logs: {
      background: 'darkturquoise',
      borderRadius: '2px'
    },
    preLogs: {
      margin: 0,
      padding: '5px 10px',
      color: 'white',
      fontFamily: '"Roboto Mono", Monaco, courier, monospace',
      overflowX: 'auto'
    }
  }
})

@withStyles(styleSheet)
@observer
export default class Code extends Component {
  render () {
    const {classes, compiledCode} = this.props
    const store = this.props.children || this.props.store
    if (this.props.code) {
      return (
        <div className={classes.root}>
          <Grid container gutter={0}>
            <Grid item className={classes.editor} xs={12} md={6}>
              <ReactCodeEditor store={store} options={editorOptions} />
            </Grid>
          </Grid>
        </div>
      )
    }
    if (compiledCode) {
      return (
        <div className={classes.root}>
          <Grid container gutter={0}>
            <Grid item className={classes.editor} xs={12} md={6}>
              <ReactCodeEditor store={store} options={editorOptions} />
            </Grid>
            <Grid item className={classes.preview} xs={12} md={6}>
              <ReactCodePreview store={store} options={editorOptions} />
            </Grid>
          </Grid>
          {store.error && (
            <Grid item className={classes.error} xs={12} md={12}>
              <pre className={classes.preError}>{store.error}</pre>
            </Grid>
          )}
        </div>
      )
    } else {
      return (
        <div className={classes.root}>
          <Grid container gutter={0}>
            <Grid item className={classes.editor} xs={12} md={6}>
              <ReactCodeEditor store={store} options={editorOptions} />
            </Grid>
            <Grid item className={classes.previewDom} xs={12} md={6}>
              <ReactCode store={store} />
              {store.logs && (
                <Grid item className={classes.logs} xs={12} md={12}>
                  {store.logs.map((log, index) =>
                    <pre key={index} className={classes.preLogs}>{log}</pre>
                  )}
                </Grid>
              )}
            </Grid>
          </Grid>
          {store.error && (
            <Grid item className={classes.error} xs={12} md={12}>
              <pre className={classes.preError}>{store.error}</pre>
            </Grid>
          )}
        </div>
      )
    }
  }
}
