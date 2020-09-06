import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])
    const buddyStyles = {
        border: '1px solid black',
        marginTop: '40px',
        marginLeft: '200px',
        marginRight: '200px',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: 'lightblue'
        }
        const commentStyle = {
            border: '1px solid black',
            marginTop: '40px',
            marginLeft: '200px',
            marginRight: '200px',
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            backgroundColor: 'lightgray'
        }
    return (
        <div>
            <div style={buddyStyles} >
            <h2>{postId}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/home`}>
                <Button variant="contained" color="primary">
                  Back to home
                </Button>
                </Link>
        </div>
        <div style={commentStyle}>
            <Comments></Comments>
        </div>
        </div>
    );
};

export default PostDetails;