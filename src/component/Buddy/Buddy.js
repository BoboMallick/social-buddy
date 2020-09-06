import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
    
    const Buddy = (props) => {
        const { title, id } = props.buddy;
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
      return (
            <div style={buddyStyles} >
                <h2>{id}</h2>
                <h3>{title}</h3>
                <Link to={`/post/${id}`}>
                <Button variant="contained" color="primary">
                  Show Detail
                </Button>
                </Link>

            </div>
        );
    };
    
    export default Buddy;