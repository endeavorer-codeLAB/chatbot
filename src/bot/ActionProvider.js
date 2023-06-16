import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {

        const botMessage = createChatBotMessage('Hello, Nice to meet you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));

    };

    const handleDev = () => {
        const botMessage = createChatBotMessage("Fun day! to you Christian Jerome A. Perlas");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleWeather = () => {
        const botMessage = createChatBotMessage("Its moderate to heavy rain may you expect in coming hours");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };


    const handleDog = () => {
        const botMessage = createChatBotMessage(
            "Here's a nice dog picture",
            {
                widget: 'dogPicture',
            }
            );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };



    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleDev,
                        handleWeather,
                        handleDog,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;