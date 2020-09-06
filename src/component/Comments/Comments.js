// import React, { useState, useEffect } from 'react';

// const Comments = () => {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/comments`)
//         .then(res => res.json())
//         .then(data => setComments(data))
//     }, [])
//     return (
//         <div>
//             <h3>Comments: {comments.length}</h3>
//         </div>
//     );
// };

// export default Comments;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState({});
    useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setComments(data));
    }, [])                 
    return (
        <div>
            <h4>{postId}</h4>
            <h3>{comments.name}</h3>
            <p>{comments.email}</p>
            <p>{comments.body}</p>
        </div>
    );
};

export default Comments;