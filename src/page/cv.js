import m from 'mithril'

const CV = {
    view: function() {
        return m('.mw6 center tc baskerville', [
            m('h4.fw2 bg-gold center br2 tc', 'too busy to create this page, wait for the cv generator, it\'s under developed!'),
            m('a.fw1 br2 tc', {href: '/', oncreate: m.route.link}, 'back to home')
        ])
    }
}

export default CV