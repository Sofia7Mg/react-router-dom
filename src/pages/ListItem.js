import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios'

function ListItem(props) {
    
    const [item, setItem] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => setItem(response.data))
        .catch((error) => console.log(error));
    }, [item]);

    return (
        <div>
            { item && <p>{item.title} {item.id}</p> }
        </div>
    );
}

export default ListItem;