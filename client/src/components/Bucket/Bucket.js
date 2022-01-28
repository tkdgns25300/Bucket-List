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
            <tr className='bucket'>
                <td className='square'></td>
                <td className='description'>{description}</td>
                <td>
                    <button className='edit-btn' onClick={handleClick}>Edit</button>
                    <button className='delete-btn' onClick={handleDelete}>Delete</button>
                </td>
            </tr>
            {isOn && <EditBucket description={description} id={id} handleClick={handleClick} />}
        </>
    )
};

export default Bucket;