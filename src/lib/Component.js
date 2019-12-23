import * as Tmpl from './Tmpl'

/**
 * Global component storage
 */
const instances = []


export const register = {
    component: registerComponent,
    shadow: registerShadow,
    childShadow: registerChildShadow,
}


/**
 * Registers a component.
 * @param {Constructor} constructor  - Constructor of class
 * @param {Object} config - config for component
 */
function registerComponent (constructor, config = {}) {
    const collection = []
    document
        .querySelectorAll(`[data-component="${constructor.name}"]`)
        .forEach(element => {
            const instanceIndex = instances.push({}) - 1
            instances[instanceIndex] = new constructor(instanceIndex, element, {...config, ...defaults})
            console.log('instance', instanceIndex, instances[instanceIndex])
            collection.push(instances[instanceIndex])
        })
    return collection
}


function registerShadow (constructor, config = {}) {
    const instanceIndex = instances.push({}) - 1
    instances[instanceIndex] = new constructor(instanceIndex, null, {...config, ...defaults})
    return instances[instanceIndex]
}


function registerChildShadow (parent, constructor, config = {}) {
    const instance = registerShadow(constructor, config)
    instance.parent = parent
    parent.components.push(instance)
    return instance
}


/**
 * Initializes a collection of compents or all instances of components stored.
 * @param {Array} components - A collection of components - default: instances
 */
export function init (components = instances) {
    return components.map(component => component.init())
}


const defaults = { debug: false }


export class DefaultComponent {
    constructor (instanceIndex, element = null, config = {}) {
        this.components = []
        this.element = element
        this.identifier = `${this.constructor.name}_${instanceIndex}`
        this.is = {}
        this.is.initialized = false
        this.is.rendered = false
        this.instanceIndex = instanceIndex
        this.config = {...config, ...defaults}
        this.parent = null
        return this
    }

    init () {
        this.is.initialized = true
        return this
    }

    render () {
        this.is.rendered = true
        return this
    }
}


export default class Component extends DefaultComponent {
    constructor (instanceIndex, element = null, config = {}) {
        super(instanceIndex, element, config)
        this.element.setAttribute('module-id', this.identifier)
        return this
    }

    render () {
        super.render()
        this.components.forEach(component => component.render())
        return this
    }
}


export class ShadowComponent extends DefaultComponent{
    constructor (instanceIndex, element = null, config = {}) {
        super(instanceIndex, element, config)
        return this
    }

    render () {
        super.render()
        this.createElement()
        this.parent.element.appendChild(this.element)
        return this
    }


    /**
     * Creates the Components element from config template string.
     * @return {NodeList} - The Nodelist generated out of the string
     */
    createElement () {
        this.element = Tmpl.parseTemplate(this.config.template, this)[0]
        this.element.setAttribute('module-id', this.identifier)
        return this
    }
}
