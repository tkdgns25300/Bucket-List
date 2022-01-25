import React, { Fragment, useState } from 'react';
import './InputBucket.css'

const InputBucket = () => {
    const [bucket, setBucket] = useState('');

    const handleChange = (event) => {
        setBucket(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(
            'http://localhost:5000/list',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ description: bucket })
            }
        );
        setBucket('');
    }

    return (
        <>
            <h1 className='title'>Bucket List</h1>
            <form className='input' onSubmit={handleSubmit}>
                <input 
                    className='input__text'
                    value={bucket}
                    type='text'
                    placeholder="What's your Bucket List?"
                    onChange={handleChange}
                />
                <button className='input__btn'>Add</button>
            </form>
        </>
    )
};

export default InputBucket;