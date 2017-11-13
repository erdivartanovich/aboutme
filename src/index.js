import m from 'mithril'
import '../node_modules/tachyons/css/tachyons.css'

const App = {
    view: function() {
        return m(ProfileCard)
    }
}

const ProfileCard = {
    view: function() {
        return m('.dt mw6 center pt0 pb5 pv5-m pv6-ns times black-90', [
            m('.db bg-light-silver dtc-ns v-mid-ns br4 ba bw1 b--silver mr7 dim pointer', m('img.w-100 mw7 w5-ns', {src: "./images/pp.jpeg"})),
            m('.db dtc-ns v-mid ph2 pr0-ns pl3-ns br4 ba bw1 b--silver ml7 dim pointer', [
                m('h3.avenir nb2', "Erdiansyah Arsyad"),
                m('p.lh-copy', "Waidmanns Heil! Die hanebüchen Gamaschen bauchpinseln. Das hochnäsig Jubelperser verhaspeln. Der Stelldichein auftakeln der hochnäsig Rostbratwurst. Lude und Kohlroulade piesacken hochgestochen Abort. Kinkerlitzchen und Schluckspecht dengeln blindwütig Herrengedeck. Hdsafdasfjkjk")
            ])
        ])
    }
}

var body = document.body
m.mount(body, App)