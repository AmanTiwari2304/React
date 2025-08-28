import React from 'react';

function Message({ userName, textColor }) {
    return (
        <div style={{ color: textColor }}>
            Hello, {userName}!
        </div>
    );
}

export default Message;