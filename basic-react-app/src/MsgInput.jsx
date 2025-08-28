import React from 'react';
import Message from './Msg';

function MsgInput() {
    return (
        <div>
            <Message userName="Aman" textColor="blue" />
            <Message userName="John" textColor="green" />
            <Message userName="Jane" textColor="red" />
        </div>
    );
}

export default MsgInput;