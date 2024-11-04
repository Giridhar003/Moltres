import React from 'react';

const MessageParser = ({ children, actions }) => {
    const { checker } = children.props.state;

    const parse = (message) => {
        if (checker === "name" && ["1", "2", "3", "4", "5"].includes(message)) {
            actions.afterNameMessage();
        } else if (checker === "number" && /^[a-zA-Z]+$/.test(message)) {
            actions.afterPhoneMessage();
            children.props.state.userData.name=message;
        } else if (checker === "email" && /^\d{10}$/.test(message)) {
            actions.afterEmailMessage();
        } else if (checker === "Address" && message.includes("@")) {
            actions.afterAddressMessage();
        } else if (checker === "remarks" && /^[a-zA-Z]+$/) {
            actions.afterRemarksMessage();
        } else if (/^[a-zA-Z]*$/) {
            actions.finalResult(children.props.state.userData.name);
        } 
        else {
            const invalidMessage = actions.createChatBotMessage("That input is not valid, please try again.");
            actions.updateState(invalidMessage,checker);
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
