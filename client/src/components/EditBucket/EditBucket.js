import React, { Fragment, useState } from 'react';
import './EditBucket.css';

const EditBucket = ({ description, id }) => {
    const [bucket, setBucket] = useState(description);

    const handleChange = (event) => {
        setBucket(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(bucket)
        await fetch(

            `http://localhost:5000/list/${id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: bucket })
            }
        );
        setBucket('');
        window.location.reload();
    }

    return (
        <>
            <div className='modal'>
                <h1 className='modal__title'>Edit Bucket</h1>
                <form className='modal__submit' onSubmit={handleSubmit}>
                    <input className='modal__input' value={bucket} onChange={handleChange} />
                    <button className='modal__edit-btn'>Edit</button>
                </form>
                <button className='modal__cancel-btn'>Cancel</button>
            </div>
        </>
    )
};

export default EditBucket;