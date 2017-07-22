import page from 'page'
import Model from './model'
import qs from 'qs'

const Router = {
  createModel (options = {}) {
    if (options.hashbang && !window.location.hash) {
      window.location.hash = '#!'
    }
    return new RouterClass({options})
  }
}

export { Router }

export class RouterClass {
  constructor ({options}) {
    this.options = options
    this.stores = {}
    this.routes = []
  }

  inject (stores) {
    this.stores = stores
  }

  setStores (stores) {
    this.stores = stores
  }

  setRoute (path, options) {
    this.routes.push({
      path,
      action: options.action,
      exit: options.exit
    })
  }

  setBase (path) {
    if (!path.includes('/')) return
    page.base(path)
  }

  run () {
    const stores = this.stores

    this.routes.forEach(route => {
      page(route.path, (context, next) => {
        context.next = next
        context.query = qs.parse(context.querystring)
        const asyncFuntion = route.action(stores, context, next)
        if (!asyncFuntion || !asyncFuntion.then) return
        asyncFuntion
        .catch(err => {
          if (route.catch) {
            route.catch(err)
          } else {
            console.error(err)
          }
        })
      })
      if (route.exit) {
        page.exit(route.path, (context, next) => {
          context.next = next
          const asyncFuntion = route.exit(stores, context, next)
          if (!asyncFuntion || !asyncFuntion.then) return
          asyncFuntion
          .catch(err => {
            if (route.catch) {
              route.catch(err)
            } else {
              console.error(err)
            }
          })
        })
      }
    })

    page(this.options)
  }

  createStore () {
    const routes = Model.create()
    this.stores.routes = routes
    return routes
    // TODO: Model.create({page})
  }
}
