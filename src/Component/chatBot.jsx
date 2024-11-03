import React, { useState } from 'react';
import chatbot_logo from '../assets/chatbot_logo.png';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import './chatBot.css';

export default function ChatBot1() {
    const [showChatbot, setShowChatbot] = useState(false);
    const [showIcon, setShowIcon] = useState(true);

    const toggleChatBotBox = () => {
        setShowChatbot(true);
        setShowIcon(false);
    };

    const hidechatBot = () => {
        setShowIcon(true);
        setShowChatbot(false);
    };

    return (
        <div className="icon-container">
            {showIcon && (
                <a className='icon-anchor' onClick={toggleChatBotBox} aria-label="Open Chatbot">
                    <img src={chatbot_logo} alt="Chatbot Logo"  className='chat-bot-img'/>
                </a>
            )}
            {showChatbot && (
                <div className="chatbot-container">
                    <div className="subchat-container">
                        <button onClick={hidechatBot} className='chatbot-button' aria-label="Close Chatbot">X</button>
                        <div className='chat-bot-place'>
                            <Chatbot 
                                config={config}
                                messageParser={MessageParser}
                                actionProvider={ActionProvider}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
