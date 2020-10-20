import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './delete_button'
const List = () => {
    const [products, setProducts] = useState([]);

    const runUpdate = () => {
        Axios.get("http://localhost:8000/api/products/")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        runUpdate();

    }, [])

    return (
        <div>
            <ul>
                {products.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link to={"/detail/"+item._id}>{item.title} - {item.description}</Link>
                            <DeleteButton id={item._id} redirect="yes" reload="yes" />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;

/**/