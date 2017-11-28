import m from 'mithril'

const Blog = {
    view: function() {
        return m('.mw6 center tc baskerville', [
            m('h1.lh-title', 'Blog as you wish'),
            m('h4.fw2 bg-gold center br2 tc', 'Will soon create a blog post for software engineering, pray for me! (god, i\'m too busy)'),
            m('a.fw1 br2 tc', {href: '/', oncreate: m.route.link}, 'back to home')
        ])
    }
}

export default Blog