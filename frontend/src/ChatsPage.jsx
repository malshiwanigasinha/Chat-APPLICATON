import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(

        '706760c4-2bd3-49de-b3f3-d79982d2bab0', 
        props.user.username, props.user.secret
    );

    return (
        
        <div style={{height: '100vh'}}>

        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        
        </div>
    );
};

export default ChatsPage;