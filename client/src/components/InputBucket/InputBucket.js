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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: bucket })
            }
        );
        setBucket('');
        window.location.reload();
    }

    return (
        <>
            <div className='input-bucket'>
                <h1 className='title'>Bucket List</h1>
                <h2 className='sub-title__one'>BUCKET LIST CHALLENGE</h2>
                <p className='sub-title__two'>HOW MANY THINGS HAVE <br></br> YOU SEEN, BEEN TO OR DONE?</p>
                <form className='input' onSubmit={handleSubmit}>
                    <input
                        className='input__text'
                        value={bucket}
                        type='text'
                        placeholder="What's your Bucket?"
                        onChange={handleChange}
                    />
                    <button className='input__btn'>ADD</button>
                </form>
            </div>
        </>
    )
};

export default InputBucket;