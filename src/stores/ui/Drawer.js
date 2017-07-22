import { types } from 'mobx-state-tree'

export default types.model('Drawer', {
  isOpen: false
}, {
  toggle () {
    this.isOpen = !this.isOpen
  },
  close () {
    this.isOpen = false
  }
})
