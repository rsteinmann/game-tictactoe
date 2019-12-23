import Component, * as Components from '../../lib/Component'
import MapTile from './MapTile'


const defaultOptions = {
    mapSize: { x: 3, y: 3 },
}


export default class Map extends Component {
    constructor (instanceIndex, element, options = {}) {
        options = {...options, ...defaultOptions}
        super(instanceIndex, element, options)
    }
    

    init () {
        this.generate(this.options.mapSize.x, this.options.mapSize.y)
        super.init()
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
