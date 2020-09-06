import React from 'react';

const Comments = (props) => {
    const {name, body, email} = props.comment;
    
                     
    return (
        <div>
            <h3>Name: {name}</h3>
            <h5>Email: {email}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Comments;