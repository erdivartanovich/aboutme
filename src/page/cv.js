import m from 'mithril'
import profile from '../model/profile'

const Biography = {
    view: function() {
        return div('.biography mw7 center tc', [
            h2('.fullName', profile.fullName),
            p('.f6 lh-copy measure center nt3', [
                span('.f6 lh-copy', profile.address.line1),
                span('.f6 lh-copy', profile.address.line2),
                span('.f6 lh-copy', profile.address.line3),
            ])
        ])
    }
}

const Summary = {
    view: function() {
        return p('.black-90 mw7 center lh-copy measure-width', profile.data.text)
    }
}
const ProfessionalExperiences = {
    view: function() {
        return div('.mt4', 
            h4('.f4 pv1 bb bw2 b--black-70', 'Professional Experiences'),
            profile.data.experiences.map(function(qualif) {
                return div('.company mb4', [
                    p('.f5 fw6', qualif.company),
                    p('.f6 nt3', qualif.years),
                    qualif.companyWeb ?
                        p('.lh-copy', [
                            span('.f6 fw6', 'Company Web: '),
                            a('.f6 black-90', {href: qualif.companyWeb, target: "blank"}, qualif.companyWeb),
                        ])
                    :   null,
                    p('.nt2 lh-copy', [
                        span('.f6 fw6', 'Job Title:   '),
                        span('.f6', qualif.jobTitle),
                    ]),
                    div('.nt2 projects', [
                        p('.mw3 f6 fw6', 'Projects: '),
                        qualif.projects.map(function(project) {
                            return m('.bl b--silver pl3', [
                                p('.f6 fw6 underline', project.title),
                                p('.f6 black-90 nt2 lh-copy', m.trust(project.description)),
                                p('.f6 nt2 black-90 lh-copy', [
                                    span('.black fw5', 'Highlights: '),
                                    span('', project.highlights),
                                ]),
                                p('.f6 nt2 black-90 lh-copy', [
                                    span('.black fw5', 'Stack: '),
                                    span('', project.stacks),
                                ])
                            ])
                        })
                    ]),
                ]) 
            })
        )
    }
}

const TechnicalExpertises = {
    view: function() {
        return div('.mt4', 
            h4('.f4 pv1 bb bw2 b--black-70', 'Technical Expertise'),
            profile.data.skillsets.map(function(skills) {
                return div('.mb4', 
                        m('.bl b--silver pl3', [
                        p('.f6 fw6 nb2 underline', skills.title),
                        skills.skills.map(function(skill) {
                            return p('.f6 nb3 black-90 lh-copy', skill)
                        })
                    ])
                )
            })
        )     
    }
}

const CVContainer = {
    view: function() {
        return div('.avenir mw7 center mv3 ph4 ba b--gold br4', [
            div('.topBar', [
                m(Biography),
            ]),
            div('.content', [
                m(Summary),
                m(TechnicalExpertises),
                m(ProfessionalExperiences)
            ]),
            div('.footerBar', [
                
            ])
        ])
    }
}
const CV = {
    view: function() {
        return div('', m(CVContainer))
    }
}

export default CV