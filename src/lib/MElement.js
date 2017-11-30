import m  from 'mithril'

const createElement = function(elementName) {
    return function(identifier, ...children) {
        return m(elementName+identifier, ...children)
    }
}

var elementList = [
    'div',
    'article',
    'hr',
    'section',
    'button',
    'legend',
    'fieldset',
    'textarea',
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'span',
    'a',
    'i',
    'ol',
    'ul',
    'li',
    'table',
    'tr',
    'th',
    'td',
    'form',
    'label',
    'input',
    'select',
    'option'
] 

const GenerateDOMComponents = function() {
    for(let i = 0; i < elementList.length; i++) {
        window[elementList[i]] = createElement(elementList[i])
    }
}

export default GenerateDOMComponents