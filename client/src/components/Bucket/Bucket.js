import React, { Fragment } from 'react';
import './Bucket.css';
import EditBucket from '../EditBucket/EditBucket';

const Bucket = ({ description, id }) => {
    const handleDelete = async() => {
        await fetch(`http://localhost:5000/list/${id}`, {
            method: 'DELETE'
        })
        window.location.reload();
    }

    return (
        <>
            <tr>
                <td className='square'></td>
                <td>{description}</td>
                <td>
                    <button><EditBucket /></button>
                    <button onClick={handleDelete}>Delete</button>
                </td>
            </tr>
        </>
    )
};

export default Bucket;