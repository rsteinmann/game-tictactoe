/**
 * Parses a string into a nodelist and replaces any text placeholders.
 * @param {string} template - The html construct as string
 * @param {object} textContext - Any object that contains placeholder values as properties
 * @return {NodeList} - The Nodelist generated out of the string
 */
export function parseTemplate (template, textContext) {
    return parseHtml(parseTextPlaceholder(template, textContext))
  }
  
  
  /**
   * Parses a string into a NodeList.
   * @param {String} template - The html construct as string
   * @return {NodeList} - The Nodelist generated out of the string
   */
  export function parseHtml (template) {
    if (typeof template !== 'string') {
      console.error('parseHtml requires a string to be passed as template parameter!', template)
      return null
    }
    const html = new DOMParser().parseFromString(template.trim(), 'text/html')
    return html.body.children
  }
  
  
  /**
   * Converts an array of nodes to a NodeList.
   * @param {Array} arrayOfNodes - An array of dom nodes
   * @return {NodeList} - A NodeList
   */
  export function toNodeList (arrayOfNodes) {
    // console.log('arrayOfNodes', arrayOfNodes.constructor.name, arrayOfNodes);
    if (arrayOfNodes.constructor.name === 'NodeList') {
      return arrayOfNodes
    }
    if (arrayOfNodes.constructor.name !== 'Array' && arrayOfNodes.constructor.name !== 'HTMLCollection') {
      console.warn('Passed param is not of type Array!', arrayOfNodes.constructor.name, arrayOfNodes)
      return arrayOfNodes
    }
    let fragment = document.createDocumentFragment()
    arrayOfNodes.forEach((nodeElement) => fragment.appendChild(nodeElement))
    return fragment.childNodes
  }
  
  
  /**
   * Replaces any text placeholders with real data passed as an object.
   * Placeholder may be added like this: {{ myPlaceholder.textKey }}
   * The data should contain the keys: { myPlacholder: { textKey: 'anyTextValue' }}
   * @param {string} template - A html template that contains text placeholders
   * @param {object} data - Any object that contains placeholder values as properties
   * @return {string} - The html template string with real text data
   */
  export function parseTextPlaceholder (template, data) {
    const regEx = new RegExp(/{{[\s]*([a-zA-Z0-9\.]*)[\s]*}}/g)
    // Get placeholders from template
    let placeholders = template.match(regEx)
    // Get real data from object by placeholders
    let replacers = placeholders
      .map(matchResult => matchResult.replace(/[{}\s]/g, ''))
      .map(sanitizedResult => sanitizedResult.split('.'))
      .map(pathArray => [data].concat(pathArray).reduce((obj, key) => obj[key]))
    // Replace all items with real data
    placeholders.forEach((replaceItem, replaceIndex) => template = template.replace(replaceItem, replacers[replaceIndex]))
    return template
  }