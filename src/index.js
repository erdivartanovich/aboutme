import m from 'mithril'
import '../node_modules/tachyons/css/tachyons.css'

const App = {
    view: function() {
        return m(ProfileCard)
    }
}
const ProfilePhoto = m('.profile-photo pr3-ns mb4 mb0-ns w-100 w-40-ns dim grow pointer', 
    m('img.db br-100', {src: "./images/pp.jpeg"})
)
const ProfileSummary =  m('.w-100 w-60-ns tc pl3-ns pt2 ba b--silver br4', [
    m('h1.f3 mb1 avenir mt0 lh-title', 'Erdiansyah (erdi)'),
    m('h2.f5 fw4 dark-gray times mt0', 'Fullstack Software Engineer'),
    m('h3.f6 fw5 gray times nt2', 'Now @Refactory @KellerWilliam. Previously @Monommania @Digivisi'),
    m('p.f6 tj f5-l pa1 lh-copy measure-wide', 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt.'),
    m('a.f6 tc fw6 db dark-gray underline dim pointer', 'read more')
])
const ProfileCard = {
    view: function() {
        return m('.container mw7 center times', [
            m('h2.main-title times fw1 ph3 ph0-l', 'About me.'),
            m('.profile-card pv4 bt bb b--black-10', [
                m('.profile-card-body flex flex-column flex-row-ns', [
                    ProfilePhoto,
                    ProfileSummary
                ])
            ])
        ])
    }
}

var body = document.body
m.mount(body, App)