import MapTile from './MapTile'


export default class MapTileEmpty extends MapTile {
    constructor (instanceIndex, element = null, options = {}) {
        super(instanceIndex, element, options)
        return this
    }
}