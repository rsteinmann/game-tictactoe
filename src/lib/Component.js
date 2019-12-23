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
 * @param {Object} options - Options for component
 */
function registerComponent (constructor, options = {}) {
    const collection = []
    document
        .querySelectorAll(`[data-component="${constructor.name}"]`)
        .forEach(element => {
            const instanceIndex = instances.push({}) - 1
            instances[instanceIndex] = new constructor(instanceIndex, element, {...options, ...defaultOptions})
            console.log('instance', instanceIndex, instances[instanceIndex])
            collection.push(instances[instanceIndex])
        })
    return collection
}


function registerShadow (constructor, options = {}) {
    const instanceIndex = instances.push({}) - 1
    instances[instanceIndex] = new constructor(instanceIndex, null, {...options, ...defaultOptions})
    return instances[instanceIndex]
}


function registerChildShadow (parent, constructor, options = {}) {
    const instance = registerShadow(constructor, options)
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


/**
 * Creates the Components element from options template string.
 * @param {Component} component - Any component that contains an `option.template` value
 * @return {NodeList} - The Nodelist generated out of the string
 */
export function createElement (component) {
    const element = Tmpl.parseTemplate(component.options.template, component)[0]
    element.setAttribute('module-id', component.identifier)
    return component.element = element
}



const defaultOptions = { debug: false }


export class DefaultComponent {
    constructor (instanceIndex, element = null, options = {}) {
        this.components = []
        this.element = element
        this.identifier = `${this.constructor.name}_${instanceIndex}`
        this.is = {}
        this.is.initialized = false
        this.is.rendered = false
        this.instanceIndex = instanceIndex
        this.options = {...options, ...defaultOptions}
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
    constructor (instanceIndex, element = null, options = {}) {
        super(instanceIndex, element, options)
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
    constructor (instanceIndex, element = null, options = {}) {
        super(instanceIndex, element, options)
        return this
    }

    render () {
        super.render()
        createElement(this)
        this.parent.element.appendChild(this.element)
        return this
    }
}
