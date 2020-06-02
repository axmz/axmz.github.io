import React from 'react'
import Project from './project/project'
// drag navigation
import withback from "../../images/with-back.gif"
import withloading from "../../images/with-loading.gif"
import withroute from "../../images/with-route.gif"
// bottom sheet awesome
import bsdarkgif from "../../images/bottom-sheet-dark.gif"
import bslightgif from "../../images/bottom-sheet-light.gif"
import bslight from "../../images/bottom-sheet-light.png"
import bssocial from "../../images/bottom-sheet-social.png"
// searchbox
import searchbox from "../../images/searchbox.gif"
// fab
import fab from "../../images/fab.gif"
import fabdoge from "../../images/fab-doge.gif"
// news feed
import news from "../../images/news-feed-template.png"



const Projects = () => {

    return (
        <div style={{display: "grid", gap: "2rem"}}>
            <Project
                name={'VSCode Color Assist'}
                description={'VSCode extension that allows you to highlight entire blocks of code.'}
                link={'https://marketplace.visualstudio.com/items?itemName=axmz.color-assist'}
                image={'color-assist-vscode.png'}
            />
            <Project
                name={'Drag Navigation'}
                description={'A set of components that allows you to replicate iOS-like card navigation in your web apps.'}
                link={'https://github.com/axmz/react-drag-navigation'}
                image={''}
            >
                <div >
                    <img src={withback} width="33.333%" alt="with back gif"></img>
                    <img src={withloading} width="33.333%" alt="wtih loading gif"></img>
                    <img src={withroute} width="33.333%" alt="with route gif"></img>
                </div>
            </Project>
            <Project
                name={'Bottom Sheet Awesome'}
                description={'iOS-like, touch-friendly, bottom sheet for web apps.'}
                link={'https://github.com/axmz/react-bottom-sheet-awesome'}
                image={''}
            >
                <div >
                    <img src={bslightgif} width="25%" alt="bottom sheet light gif"></img>
                    <img src={bslight} width="25%" alt="bottom sheet light png"></img>
                    <img src={bsdarkgif} width="25%" alt="bottom sheet dark gif"></img>
                    <img src={bssocial} width="25%" alt="bottom sheet social"></img>
                </div>
            </Project>
            <Project
                name={'Searchbox Awesome'}
                description={'Minimalistic google-like searchbox with keybindings support.'}
                link={'https://github.com/axmz/react-searchbox-awesome'}
                image={''}
            >
                <div >
                    <img src={searchbox} width="100%" alt="searchbox gif"></img>
                </div>
            </Project>
            <Project
                name={'Floating Action Button Awesome'}
                description={'Fab that makes sense. Thumb-only navigation.'}
                link={'https://github.com/axmz/react-fab-awesome'}
                image={''}
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
                image={''}
            >
                <div >
                    <img src={news} width="30%" alt="news feed template"></img>
                </div>
            </Project>
            <Project
                name={'Layout Navigation Helper'}
                description={'A set of components to simplify navigation and improve accessibility in web apps.'}
                link={'https://axmz.github.io/react-layout-navigation-page/'}
                image={''}
            />
            <Project
                name={'Typescript Design Patterns Site'}
                description={'A Gatsby.js website with over 20 TypeScript design patterns examples.'}
                link={'https://axmz.github.io/design-patterns-ts/'}
                image={''}
            />
        </div>
    )
}

export default Projects