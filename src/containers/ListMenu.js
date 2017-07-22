import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Collapse from 'material-ui/transitions/Collapse'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import styleSheet from './ListMenu.style'

@withStyles(styleSheet)
@inject(stores => {
  return {routes: stores.routes}
})
@observer
export default class extends Component {
  render = () =>
    <List dense>
      <ListItem button
        className={classnames({[this.props.classes.select]: this.props.routes.page === 'home'})}
        component='a' href='/home'>
        <ListItemText primary={'はじめに'} />
      </ListItem>
      {/* JavaScript */}
      <ListItem button
        className={classnames({[this.props.classes.select]: this.props.routes.page === 'babel'})}
        component='a' href='/babel'>
        <ListItemText primary={'JavaScript'} />
        <ListItemSecondaryAction>
          <IconButton
            className={classnames(this.props.classes.expand, {
              [this.props.classes.expandOpen]: this.state.expandJavaScript
            })}
            onClick={this.onExpandJavaScript}>
            <ExpandMoreIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={this.state.expandJavaScript} unmountOnExit>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'variable'})}
          component='a' href='/variable'>
          <ListItemText inset primary={'定数の宣言'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'data'})}
          component='a' href='/data'>
          <ListItemText inset primary={'データ型'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'func'})}
          component='a' href='/func'>
          <ListItemText inset primary={'関数'} />
        </ListItem>
      </Collapse>
      {/* React */}
      <ListItem button
        className={classnames({[this.props.classes.select]: this.props.routes.page === 'react'})}
        component='a' href='/react'>
        <ListItemText primary={'React'} />
        <ListItemSecondaryAction>
          <IconButton
            className={classnames(this.props.classes.expand, {
              [this.props.classes.expandOpen]: this.state.expandReact
            })}
            onClick={this.onExpandReact}>
            <ExpandMoreIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={this.state.expandReact} unmountOnExit>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'jsx'})}
          component='a' href='/jsx'>
          <ListItemText inset primary={'Jsx'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'props'})}
          component='a' href='/props'>
          <ListItemText inset primary={'Props'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'class'})}
          component='a' href='/class'>
          <ListItemText inset primary={'Class'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'lifecycle'})}
          component='a' href='/lifecycle'>
          <ListItemText inset primary={'Lifecycle'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'event'})}
          component='a' href='/event'>
          <ListItemText inset primary={'Event'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'state'})}
          component='a' href='/state'>
          <ListItemText inset primary={'State'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'keys'})}
          component='a' href='/keys'>
          <ListItemText inset primary={'Keys'} />
        </ListItem>
        <ListItem button
          className={classnames({[this.props.classes.select]: this.props.routes.page === 'style'})}
          component='a' href='/style'>
          <ListItemText inset primary={'Style'} />
        </ListItem>
      </Collapse>
      {/* MST */}
      <ListItem button component='a' href='/mst'>
        <ListItemText primary={'MST'} />
        <ListItemSecondaryAction>
          <IconButton><ExpandMoreIcon /></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {/* アーキテクチャ */}
      <ListItem button component='a' href='/arc'>
        <ListItemText primary={'アーキテクチャ'} />
        <ListItemSecondaryAction>
          <IconButton><ExpandMoreIcon /></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {/* Material-UI */}
      <ListItem button component='a' href='/materialUI'>
        <ListItemText primary={'Material-UI'} />
        <ListItemSecondaryAction>
          <IconButton><ExpandMoreIcon /></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {/* 開発環境 */}
      <ListItem button component='a' href='/user'>
        <ListItemText primary={'開発環境'} />
        <ListItemSecondaryAction>
          <IconButton><ExpandMoreIcon /></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {/* 実践 */}
      <ListItem button component='a' href='/user'>
        <ListItemText primary={'実践'} />
        <ListItemSecondaryAction>
          <IconButton><ExpandMoreIcon /></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>

  state = {
    expandJavaScript: true,
    expandReact: true
  }

  onExpandJavaScript = () => {
    this.setState({expandJavaScript: !this.state.expandJavaScript})
  }

  onExpandReact = () => {
    this.setState({expandReact: !this.state.expandReact})
  }
}
