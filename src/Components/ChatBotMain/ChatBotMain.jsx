import React from 'react'
import LeftComponent from '../LeftHeaderComponent/LeftComponent'
import RightHeaderComponent from '../RightHeaderComponent/RightHeaderComponent'
import "./chatBotMain.css"
const ChatBotMain = () => {
    return (
        <section id="userBlock">
                <article>
                    <LeftComponent/>
                    <RightHeaderComponent/>
                </article>
            </section>
    )
}

export default ChatBotMain
