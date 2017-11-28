import m from 'mithril'
import profile from '../model/profile'
import styleSheet from '../stylesheet'

import myphoto from '../static/images/pp.jpeg'

const styles = styleSheet()

const ProfilePhoto = m(styles.profilePhoto, 
    m(styles.avatar, {src: myphoto})
)
const ProfileSummary =  m(styles.summary, [
    m(styles.fullName, profile.fullName),
    m(styles.subTitle1, profile.subtTitle1),
    m(styles.subTitle2, profile.subtTitle2),
    m(styles.summaryText, m.trust(profile.summaryText)),
    m(styles.readMoreLink, 
        {href: '/cv', oncreate: m.route.link},
        'read more'
    )
])

const ProfileCard = {
    view: function() {
        return m(styles.container, [
            m(styles.mainTitle, 'About me.'),
            m(styles.profileCard, [
                m(styles.profileCardBody, [
                    ProfilePhoto,
                    ProfileSummary
                ])
            ])
        ])
    }
}

const githubLink = m(styles.buttonLink,
    {href: "https://github.com/erdivartanovich", target: 'blank'},
    m('span', [
        m('i.fa fa-github', {'aria-hidden': true}),
        ''
    ])
)

const linkedinLink = m(styles.buttonLink,
    {href: "https://www.linkedin.com/in/erdivartanovich", target: 'blank'},
    m('span', [
        m('i.fa fa-linkedin', {'aria-hidden': true}),
        ''
    ])
)

const twitterLink = m(styles.buttonLink,
    {href: "https://twitter.com/ErdiVartanovich", target: 'blank'},
    m('span', [
        m('i.fa fa-twitter', {'aria-hidden': true}),
        ''
    ])
)

const publicationLink = m(styles.buttonLink,
    m('span', [
        m('i.fa fa-file-text-o', {'aria-hidden': true}),
        ' publications'
    ])
)

const blogLink = m(styles.buttonLink,
    m('span', [
        m('i.fa fa-rss', {'aria-hidden': true}),
        ' blog'
    ])
)

const LinksCard = {
    view: function() {
        return m(styles.linksContainer, [
            githubLink,
            linkedinLink,
            twitterLink,
            blogLink,
            publicationLink,
        ])
    }
}

const Home = {
    view: function() {
        return m('div', [
            m(ProfileCard),
            m(LinksCard)
        ])
    }
}

export default Home

