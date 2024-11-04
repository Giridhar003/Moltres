import { createChatBotMessage } from 'react-chatbot-kit';
import NonEmerg from './NonEmerg';

const botName = 'Mr Fire Fighter';
const config = {
    initialMessages: [createChatBotMessage(`Hello...I am ${botName}.In face of emergency call 101`, {
        widget: "startBtn"
    })],
    state: {
        checker: null,
        userData: {
            name: "",
            number:"",
            email:"",
            Address:"",
            remarks:""
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <NonEmerg {...props} />,
        }
    ]
};

export default config;