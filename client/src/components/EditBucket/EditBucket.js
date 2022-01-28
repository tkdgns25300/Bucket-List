import React, { Fragment, useState } from 'react';
import './EditBucket.css';

const EditBucket = ({ description, id, handleClick }) => {
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
                    <div className='modal__btn'>
                        <button className='modal__edit-btn'>Edit</button>
                        <button className='modal__cancel-btn' onClick={handleClick}>Cancel</button>
                    </div>
                </form>

            </div>

            <div className='background' onClick={handleClick}></div>
        </>
    )
};

export default EditBucket;