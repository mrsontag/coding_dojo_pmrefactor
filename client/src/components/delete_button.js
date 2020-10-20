import React from 'react';
import { useNavigate} from '@reach/router';
import Axios from 'axios';

const DeleteButton = props => {
    const Navigate = useNavigate();

    const deleteItem = () => {
        Axios.delete("http://localhost:8000/api/products/delete/" + props.id)
            .catch(err => console.log(err));
        if (props.reload === "yes") {
            window.location.reload();
        }
        if (props.redirect === "yes") {
            Navigate("/");
        }


    }

    return(
        <button type="button" name="delete" onClick={ deleteItem }>Delete item.</button>
    )
}

export default DeleteButton;