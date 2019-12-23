import Component, * as Components from '../../lib/Component'
import MapTile from './MapTile'


const defaults = {
    mapSize: { x: 3, y: 3 },
}


export default class Map extends Component {
    constructor (instanceIndex, element, config = {}) {
        config = {...config, ...defaults}
        super(instanceIndex, element, config)
    }
    

    init () {
        super.init()
        this.generate(this.config.mapSize.x, this.config.mapSize.y)
        this.render()
        return this
    }


    generate (x, y) {
        const map = []
        let iX, iY
        for (iX = 1; iX < (x + 1); iX++) {
            for (iY = 1; iY < (y + 1); iY++) {
                const mapTile = Components.register.childShadow(this, MapTile, { pos: { x: iX, y: iY }})
                map.push(mapTile)
            }
        }
        return map
    }
}
