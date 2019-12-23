import * as Components from '../../lib/Component'

const defaultOptions = {
    pos: { x: null, y: null },
    template: `<div id="map-tile-{{options.pos.x}}-{{options.pos.y}}" class="map-tile" data-module="{{constructor.name}}"></div>`,
}


export default class MapTile extends Components.ShadowComponent {
    constructor (instanceIndex, element = null, options = {}) {
        super(instanceIndex, element, {...options, ...defaultOptions})
        this.pos = this.options.pos
        return this
    }

    init () {
        return this
    }
}