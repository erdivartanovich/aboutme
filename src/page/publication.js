import m from 'mithril'

const Publication = {
    view: function() {
        return m('.mw6 center tc baskerville', [
            m('h1.lh-title', 'Publication what?'),
            m('h4.fw2 bg-gold center br2 tc', 'gosh, don\'t hope too much for now'),
            m('a.fw1 br2 tc', {href: '/', oncreate: m.route.link}, 'back to home')
        ])
    }
}

export default Publication