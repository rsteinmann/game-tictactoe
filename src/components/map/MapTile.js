import * as Components from '../../lib/Component'

const defaults = {
    pos: { x: null, y: null },
    template: `<div id="map-tile-{{config.pos.x}}-{{config.pos.y}}" class="map-tile" data-module="{{constructor.name}}"></div>`,
}


export default class MapTile extends Components.ShadowComponent {
    constructor (instanceIndex, element = null, config = {}) {
        super(instanceIndex, element, {...config, ...defaults})
        this.pos = this.config.pos
        return this
    }
}