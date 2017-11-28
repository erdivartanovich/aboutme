import helper from '../helper/helper'

var profile = {
    fullName: "Erdiansyah",
    subtTitle1: "Fullstack Software Engineer",
    subtTitle2: "Now @Refactory @KellerWilliam. Previously @Monommania @Digivisi",
    data: {
        text: `Hello there, 
        I am Erdi,
        I love to help anyone to design and build a new system/ software from the ground up, 
        as well as bring innovative enhancement for an existing system. 
        I would glad to discuss the requirements before getting the job done, so we both know each other what we need to achieve together. 
        I am a hard worker with 10+ years experiences of working in software development industry, 
        and achieving technical proficiency in end to end software development aspects, infrastructure, architectural design, and development life cycle (DevOps).`,
        experiences: [
            {

            }
        ],
        services: [
            {
                title: 'Backend/ Restful API Services',
                description: 'Build web services with using NodeJS, PHP Laravel, Python Flask, Golang, from simple monolithic MVC onto Microservices design'
            },
            {
                title: 'Web Frontend Development',
                description: 'using Javascript (VanillaJS, Jquery, React, Angular, Vue, or my personal favorite one: Mithril JS'
            },
            {
                title: 'Mobile App Development',
                description: 'using Javascript (VanillaJS, Jquery, React, Angular, Vue, or my personal favorite one: Mithril JS'
            },
            {
                title: "Desktop Application Development",
                description: 'using Delphi/ Lazarus Pascal'
            },
            {
                title: 'General data-driven app',
                description: 'build system with data centric functionality, or provide services designing Data warehouse, Database Replication system, Real-time data communication, Data Analysis, and Business Intelligence report'
            }
        ],
        skillsets: [
            {
                title: 'Programming Language',
                skills: [
                    'Javascript/ Node JS',
                    'Python',
                    'PHP',
                    'Golang',
                    'Java',
                    'Delphi',
                    'SQL, PL/PGSQL',
                ] 
            }
        ],
        educations: [
            {
                campus: 'Hasanuddin University, Indonesia',
                program: 'Bachelor degree, Digital control and computer system'
            }
        ],
        organizations: [
            {

            }
        ]
    },
}
profile.summaryText = helper.truncateText(475, profile.data.text, true)

export default profile