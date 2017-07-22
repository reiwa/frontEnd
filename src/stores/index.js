import Drawer from './ui/Drawer'
import Routes from './domain/Routes'

const stores = {
  drawer: Drawer.create()
}

Routes.setStores(stores)

const routes = Routes.createStore()

Routes.run()

stores.routes = routes

export default stores
