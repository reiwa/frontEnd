import { Router } from '../../packages/mst-routes'

const Routes = Router.createModel({
  hashbang: true
})

Routes.setRoute('/:A?', {
  action ({routes}, {params}) {
    routes.setRoute(params.A || 'home')
    scrollTo(0, 0)
  }
})

export default Routes
