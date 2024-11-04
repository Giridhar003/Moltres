import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage(
            <div>
                Welcome to our Firefighter Services!<br />
                If you need non-emergency assistance, please choose one of the following services by entering the corresponding number:<br />
                1. Fire Safety Inspection<br />
                2. Smoke Detector Installation<br />
                3. Community Education Programs<br />
                4. Fire Extinguisher Training<br />
                5. Emergency Preparedness Consultation<br />
                Please enter the number of the service you're interested in!
            </div>
        );
        updateState(message,"name");
    };

    const afterNameMessage = () => {
        const message = createChatBotMessage("Please enter your name.")
        updateState(message,"number")
    }
    const afterPhoneMessage = () => {
        const message = createChatBotMessage("Please enter your PhoneNumber.")
        updateState(message,"email")
    }
    const afterEmailMessage = () => {
        const message = createChatBotMessage("Please enter your Email ID.")
        updateState(message,"Address")
    }
    const afterAddressMessage = () => {
        const message = createChatBotMessage("Please enter your Address")
        updateState(message,"remarks")
    }
    const afterRemarksMessage = () => {
        const message = createChatBotMessage("Please enter your Remarks...(If you wish to give additional info)")
        updateState(message)
    }
    
    const finalResult = (Name) => {
        const message = createChatBotMessage(`Got it, ${Name}! We have recorded your inputs!!`)
        updateState(message)
    }
    const updateState = (message, checker = "") => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterPhoneMessage,
                        afterEmailMessage,
                        afterAddressMessage,
                        afterRemarksMessage,
                        finalResult
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
