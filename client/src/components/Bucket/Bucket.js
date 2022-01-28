import React, { Fragment, useState } from 'react';
import './Bucket.css';
import EditBucket from '../EditBucket/EditBucket';

const Bucket = ({ description, id }) => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn)
    }

    const handleDelete = async () => {
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
                    <button onClick={handleClick}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </td>
            </tr>
            {isOn && <EditBucket description={description} id={id} handleClick={handleClick} />}
        </>
    )
};

export default Bucket;