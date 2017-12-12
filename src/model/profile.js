import helper from '../lib/helper'

var profile = {
    fullName: "Erdiansyah",
    phone: '+685396888896',
    email: 'erdivartanovich@gmail.com',
    address: {
        line1: "Beverly dago apartmen, No. W-215. ",
        line2: "Dago Coblong, Bandung, Indonesia. ",
    },
    subtTitle1: "Fullstack Software Engineer",
    subtTitle2: "Now @Refactory @KellerWilliam. Previously @Monommania @MITConsulting",
    data: {
        text: `
            Hello there, 
            I am Erdi,
            an accomplished Software Engineer specializing in Object-Oriented Design and Development,
            with an extensive experience over 9+ years in the full life cycle of the software development process,
            including requirements definition, prototyping, proof of concept, well-documented design, interface implementation, testing, and maintenance.
            I love to embrace new knowledge, from teamwork, learning by doing and understand the fundamental concept before reading through technical documentation. 
            My passion is to help anyone to design and build a new software/ system from the ground up, 
            as well as bring innovative enhancements to an existing one. Mostly, I work in Backend side, but I am good at Frontend Development too. 
            I would glad to discuss the requirements before getting the job done, so we both know each other what we need to achieve together,
            or maybe i can provide you with useful advices. So you have an idea or need a solution? let's get the job done!
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
                        highlights: 'Multiplatform, Role Base Access Control system, RDBMS, Data Warehouse, Database Replication, Business Intelligence',
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
                years: 'Jan 2017 - present'
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
                        description: 'KW-Kelle is a chat-based mobile app to provide assists and services for all of the KW agents to manage their daily works. My job is to develop Backend/API services leveraging Natural Language Understanding (NLP) and Natural Language Processing (NLP) System. I also involve in the initialization of the Mobile App development.',
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
                years: 'Jan 2017 - present'
            },
            {
                company: 'Indonesia Developer Summit',
                companyWeb: 'http://Devsummit.io',
                jobTitle: 'Engineer/ Technical Committee',
                projects: [
                    {
                        title: 'Desvsummit 2017',
                        description: `Devsummit is a one-stop app based event engagement system. 
                            Almost all aspect of the event management and interaction is done through the app, 
                            such as exhibitor/booth, and attendee registration, ticket payment, on-site attendee check-in, speed-dating system etc.
                            I am the core developer who build the backend system, and also the Admin Web Page.
                            <br> The project source can found <a href="https://github.com/devsummit/backend"> here </a> 
                            <br> This is <a href="https://api.devsummit.io/"> the admin web app. </a>    
                            <br> The mobile app can downloaded <a href="https://play.google.com/store/apps/details?id=io.devsummit.app.android"> here </a>, it also available in IOS.    

                            `,
                        highlights: 'OAuth, Payment Verification, Beacon',
                        stacks: 'Python (Flask), HTML5, Javascript (jQuery)'
                    }
                ],
                years: 'Aug 2017 - Nop 2017'
            },
        ],
        qualifications: [{
                title: 'Backend/ Restful API Services',
                description: 'Build web services/API using NodeJS, PHP Laravel, Python Flask, Golang, from simple monolithic MVC onto Microservices design.'
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
                    'Java',
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