import helper from '../lib/helper'

var profile = {
    fullName: "Erdiansyah",
    phone: '+685396888896',
    email: 'erdiansyah@misteraladin.com, erdivartanovich@gmail.com',
    address: {
        line1: "Jl. Muara Baru No. 3A",
        line2: "Jakarta Utara, Jakarta, Indonesia. ",
    },
    subtTitle1: "Software Engineer, Architect and Technical Lead",
    subtTitle2: "Now @Misteraladin Previously @Refactory @KellerWilliam @Monommania @MITConsulting",
    data: {
        text: `
            An accomplished Software Engineer specializing in Object-Oriented Design and Development,
            with an extensive experience over 13 years in the full life cycle of the software development process,
            including requirements definition, prototyping, proof of concept, well-documented design, interface implementation, testing, delivery, and maintenance.
            I love to embrace new knowledge, from teamwork, learning by doing and understand the fundamental concept along with reading through technical documentation. 
            My passion is to help anyone to design and build a new software/ system from the ground up, 
            as well as bring innovative enhancements to an existing one.
            `,
        experiences: [
            {
                company: 'MIT Consulting, Makassar Indonesia',
                companyWeb: '',
                jobTitle: 'Software Developer',
                projects: [
                    {
                        title: 'SISKEU',
                        description: 'e-Government Finance and Budgeting System, my job is to design the database model, write server-side business logic, and build the desktop application interface.',
                        highlights: 'RDBMS, Data Warehouse, Database Replication, Business intelligence',
                        stacks: 'PostgreSQL, Delphi, SAP Crystal Report'
                    }
                ],
                years: 'early 2006 - Dec 2007'
            },
            {
                company: 'Monommania, Makassar Indonesia',
                companyWeb: '',
                jobTitle: 'CTO',
                projects: [
                    {
                        title: 'SIKD',
                        description: 'I lead a small engineer team to develop a multi platform application for e-Government Finance and Budgeting System.',
                        highlights: 'Multiplatform, Role Based Access Control system, RDBMS, Data Warehouse, Database Replication, Business Intelligence',
                        stacks: 'PostgreSQL, Delphi, SAP Crystal Report'
                    }
                ],
                years: 'Jan 2008 - Feb 2013'
            },
            {
                company: 'Refactory, Bandung Indonesia',
                companyWeb: 'https://refactory.id',
                description: 'Refactory is a Programmer Bootcamp, Programmer Agency.',
                jobTitle: 'Software Engineer, Mentor',
                projects: [
                    {
                        title: 'Refactory Online Learning Platform',
                        description: 'Develop web application for the learning platform of Refactory.',
                        highlights: 'Curriculum and project assignment management with Kanban interface, Slack Bot Integration, Web Crawler.',
                        stacks: 'PHP (Laravel), HTML5, Bootstrap CSS3, JQuery'
                    },
                    {
                        title: 'Bootcamp Mentoring',
                        description: 'Mentoring Refactory junior engineer/ student in Backend and Frontend/Mobile Programming.',
                        highlights: 'Teach Software Development design and implementation utilizing industry-grade technology and methodology e.g Design Pattern, Agile/Scrum, Software Testing, Automation and Distribution',
                        stacks: 'Javascript (React, ReactNative), PHP, Python, Golang'
                    }
                ],
                years: 'Jan 2017 - 2018'
            },
            {
                company: 'Keller William Realty inc, Austin Texas',
                companyWeb: 'http://kw.com',
                description: 'Developing CRM system for Keller William (under refactory agency). KW is one of the biggest real-estate franchise company in the world, source: https://en.wikipedia.org/wiki/Keller_Williams_Realty',
                jobTitle: 'Software Engineer (Remote Work)',
                projects: [
                    {
                        title: 'KW Gluu',
                        description: 'KW Gluu is an Identity Provider and Access Management Microservices to manage authentication and authorization of all kw agents through Single Sign-On (SSO) interface. My job is to help configuration of Gluu server and write the mobile app SDK for the SSO functionality.',
                        highlights: 'Gluu, IDP, OpenID, OAuth, JWT',
                        stacks: 'Javascript(React Native), Java'
                    },
                    {
                        title: 'KW Workflow Microservices',
                        description: 'KW Workflow is a cron job microservices to automatically execute all jobs that can be handled by machine/ server. My job is to write the CRUD functionality parts and unit testing.',
                        highlights: 'Concurrent/ Asynchronous programming, Test Driven Development',
                        stacks: 'NodeJS, then rewritten in Golang'
                    },
                    {
                        title: 'KW Kelle',
                        description: 'KW-Kelle is a chat-based mobile app to provide assists and services for all of the KW agents to manage their daily works. My job is to develop Backend/API services leveraging Natural Language Understanding (NLP) and Natural Language Processing (NLP) System. I also involve in the initialization of the Mobile App development. See more about KELLE here: <a href="https://blog.kw.com/meet-kelle">https://blog.kw.com/meet-kelle</a>',
                        highlights: 'RestfulAPI, NLU/ NLP, Meta-Programming, Domain Driven Design, Microservices Architecture',
                        stacks: 'Python, PHP, React-Native, Api.ai/ Dialogflow'
                    },
                    {
                        title: 'KW MailChimp Microservices',
                        description: 'KW MailChimp is a microservices to manage all email communication within the CRM system. My job is to provide API for retrieving all possible metrics/reports from maichimp communication and campaign.',
                        highlights: 'RestfulAPI',
                        stacks: 'PHP(Lumen), MailChimp'
                    },
                    {
                        title: 'KW Notification Microservices',
                        description: 'KW Notification is a microservices to manage realtime communication/ push notification system between all subsystems of the KW-CRM (web, mobile app, and microservice).',
                        highlights: 'Websocket, Messages Queue, Asynchronous Programming',
                        stacks: 'PHP(Lumen), PubNub'
                    },
                ],
                years: 'Jan 2017 - 2019'
            },
            {
                company: 'Misteraladin',
                companyWeb: 'https://misteraladin.com',
                jobTitle: 'Head Of Software Engineering',
                projects: [
                    {
                        title: 'Managing Development Of All Apps in misteraladin.com',
                        description: `My main role as Head Of Software Engineering are
                            <ul>
                              <li>
                                  Architecting new Products Development and Enhancements of existing
                              </li>
                              <li>
                                  Lead and drive all aspect of developments in all platform
                              </li>
                            </ul>  

                            `,
                        highlights: 'Develop and release 5 new Products in 2 years',
                        stacks: 'NodeJs, Typescript, Golang, PHP, VueJs, AWS EC2/ECS, Google Cloud'
                    }
                ],
                years: 'September 2018 - now'
            },
        ],
        qualifications: [{
                title: 'Backend/ Restful API Services',
                description: 'Build web services/API using NodeJS + Typescript, PHP Laravel, Python Flask, Golang, from simple monolithic MVC onto Microservices design.'
            },
            {
                title: 'Web Frontend Development',
                description: 'using Javascript (VanillaJS, Jquery, React, Angular, Vue, or my personal favorite one: Mithril JS.'
            },
            {
                title: 'Mobile App Development',
                description: 'using React-native'
            },
            {
                title: "Desktop Application Development",
                description: 'using Delphi/ Lazarus Pascal'
            },
            {
                title: 'General Data-driven Application',
                description: 'build system with data centric functionality e.g designing Data Warehouse, Database Replication System, Real-time Data Communication, Data Analysis, and Business Intelligence Report.'
            }
        ],
        skillsets: [
            {
                title: 'Programming Language',
                skills: [
                    'Javascript/ Node JS',
                    'Typescript',
                    'Python',
                    'PHP',
                    'Golang',
                    'Java/ Kotlin',
                    'Delphi',
                    'SQL, PL/PGSQL',
                ]
            },
            {
                title: 'Pattern, Tools, Framework, and Platform',
                skills: [
                    'Pattern/ Architectural Design: OOP, MVC, Rest, GraphQL, SOLID, DDD, Microservices',
                    'Protocol: HTTP, Websocket',
                    'Databases: PostgreSQL, SQL Server, MySQL, SQLite, MongoDB, Firebase',
                    'Backend: Express, Hapi, NestJS, Laravel, Flask',
                    'Web: JQuery, Angular2+, Ionic, React, VueJS, MithrilJS',
                    'Mobile: ReactNative, Java Android',
                    'API Spec & Documentation: Swagger, Oracle Apiary',
                    'Testing: Mocha, Jest, PHPUnit, Pytest, Go Test',
                    'Others: Docker, Travis, CodePush, Fabric, FastLane'
                ]
            },
            {
              title: 'Infrastructure',
              skills: [
                  'CI/CD: docker, jenkins, bitbucket-pipeline, github-actions',
                  'Google Cloud Services: Google App Engine, Firebase, Firestore, Cloud Function',
                  'AWS Cloud Services: EC2, ECS Cluster',
              ]
          }
        ],
        educations: [{
            campus: 'Hasanuddin University, Indonesia',
            program: 'Bachelor degree, Digital control and computer system'
        }],
        organizations: [{

        }]
    },
}
profile.summaryText = helper.truncateText(475, profile.data.text, true)
profile.address.line3 = 'Mobile(work): ' + profile.phone + ', Email: ' + profile.email

export default profile
