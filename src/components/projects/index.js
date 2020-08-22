import React from 'react'
import Project from './project/project'
// fab
import fab from "../../images/fab.gif"
import fabdoge from "../../images/fab-doge.gif"
// news feed
import news from "../../images/news-feed-template.png"

const Projects = () => {
    return (
        <div style={{ display: "grid", gap: "2rem" }}>
            <Project
                name={'VSCode Color Assist'}
                description={'VSCode extension that allows you to highlight entire blocks of code.'}
                link={'https://marketplace.visualstudio.com/items?itemName=axmz.color-assist'}
                image={'color-assist-vscode.png'}
            />
            <Project
                name={'Microservices app'}
                description={'Ticketing app based on microservices architecture. \
                NATS, Typescript, Google Kubernetes Engine, Stripe, Auth, MongoDB.'}
                link={'http://34.107.111.208/'}
                image={'microservices-gke.png'}
            />
            <Project
                name={'E-commerce site'}
                description={'Frontend for e-commerce site, built with \
                React.js, Redux Saga, GraphQL, Stripe and Firebase'}
                link={'https://crwn-axmz.herokuapp.com/'}
                image={'crwn-stripe.png'}
            />
            <Project
                name={'Searchbox Awesome'}
                description={'Minimalistic google-like searchbox with keybindings support.'}
                link={'https://github.com/axmz/react-searchbox-awesome'}
                video={'searchbox.mp4'}
            >
            </Project>
            <Project
                name={'Drag Navigation'}
                description={'Components to replicate iOS cards navigation in your web apps. \
                Touch-based lazy-loading and routing.'}
                link={'https://github.com/axmz/react-drag-navigation'}
                video={'drag.mp4'}
            >
            </Project>
            <Project
                name={'Bottom Sheet Awesome'}
                description={'iOS-like, touch-based, bottom sheet for web apps.'}
                link={'https://github.com/axmz/react-bottom-sheet-awesome'}
                video={'bottom-sheet.mp4'}
            >
            </Project>
            <Project
                name={'Floating Action Button Awesome'}
                description={'Fab that makes sense. Thumb-only navigation.'}
                link={'https://github.com/axmz/react-fab-awesome'}
            >
                <div >
                    <img src={fab} width="30%" alt="fab gif"></img>
                    <img src={fabdoge} width="30%" alt="fab doge gif"></img>
                </div>
            </Project>
            <Project
                name={'News Feed Web App Template'}
                description={'News feed web app template with GraphQL in the front and backend.'}
                link={'https://news-feed-template-client.herokuapp.com/'}
            >
                <div >
                    <img src={news} width="30%" alt="news feed template"></img>
                </div>
            </Project>
            <Project
                name={'Layout Navigation Helper'}
                description={'A set of components to simplify navigation and improve accessibility in web apps. \
                Navigate anywhere on the page with only a few keys.'}
                link={'https://axmz.github.io/react-layout-navigation-page/'}
                image={'a11y.png'}
            />
            <Project
                name={'Typescript Design Patterns Site'}
                description={'A Gatsby.js website with over 20 TypeScript design patterns examples.'}
                link={'https://axmz.github.io/design-patterns-ts/'}
                image={'tsdp.png'}
            />
            <Project
                name={'Golang app with authentication'}
                description={'A server in Go that allows authentication. Deployed on AWS.'}
                link={'http://ec2-18-184-228-48.eu-central-1.compute.amazonaws.com/'}
                image={'goauth.png'}
            />
            <Project
                name={'CMS app'}
                description={'A simple CMS app, \
                with Nginx as entrypoint, \
                frontend in React, \
                backend in Express.js and MongoDB as database. \
                Tested with Jest and Puppeteer and CI with Travis CI.\
                Orchestration with docker compose.'}
                link={'https://github.com/axmz/node-ci'}
            />
            <Project
                name={'MVC framework'}
                description={'Backbone.js-like framework written in Typescript. '}
                link={'https://github.com/axmz/mvc-framework-ts'}
                image={'mvc-framework.png'}
            />
            <Project
                name={'Express.js decorators'}
                description={'Use of Typescript decorators with Express.js library to build a server.'}
                link={'https://github.com/axmz/express-ts'}
                image={'decorators.png'}
            />
            <Project
                name={'Typescript Drag-n-drop'}
                description={'Drag and drop functionality implemented in Typescript'}
                link={'https://github.com/axmz/drag-n-drop-ts'}
            />
            <Project
                name={'Node advanced patterns'}
                description={'Concurrency, streams, networking, child processes, event-driven architecture...'}
                link={'https://github.com/axmz/node-advanced'}
            />
            <Project
                name={'Node.js Tasks'}
                description={'An app for tasks management built with Express.js, MongoDB, JWT.'}
                link={'https://github.com/axmz/node-mead/tree/master/node-tasks/src'}
            />
            <Project
                name={'Weather Web Server'}
                description={'Simple weather web server in Express.js and Handlebar.js.'}
                link={'https://github.com/axmz/node-mead/tree/master/node-web-server'}
            />
            <Project
                name={'Node.js Notes CLI'}
                description={'A Node.js CLI for taking notes.'}
                link={'https://github.com/axmz/node-mead/tree/master/node-notes'}
            />
            <Project
                name={'EasyHTTP'}
                description={'Lightweight Http API.'}
                link={'https://github.com/axmz/http-api'}
            />
            <Project
                name={'Golang Data structures and algorithms'}
                description={''}
                link={'https://github.com/axmz/go-dsa'}
            />
        </div>
    )
}

export default Projects