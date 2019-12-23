import * as Components from './lib/Component'
import Map from './components/map/Map'



/**
 * Component Collection
 */
let mainComponents = Components.register.component(Map)
mainComponents = Components.init(mainComponents)
console.log('Components:', mainComponents)

