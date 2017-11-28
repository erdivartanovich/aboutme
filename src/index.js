import m from 'mithril'

import Home from './page/home'
import CV from './page/cv'
import Blog from './page/blog'
import Publication from './page/publication'

// mount our app component to the DOM
var body = document.body
m.route(body, '/', {
    '/': Home,
    '/cv': CV,
    '/blog': Blog,
    '/publication': Publication,
})

console.log('%c I know, you want to inspect what inside', 'font-size: 250%; background: #222; color: white')
console.log('%c Just go on, there is no mistery here.', 'font-size: 200%; background: red; color: white')
