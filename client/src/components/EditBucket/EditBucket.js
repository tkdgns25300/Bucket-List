import React, { Fragment, useState } from 'react';
import './EditBucket.css';

const EditBucket = ({ description }) => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn)
    }

    return (
        <>
            <div className='open-modal' onClick={handleClick}>Edit</div>

            {isOn &&
                <div className='modal'>
                    <h1 className='modal__title'>Edit Bucket</h1>
                    <input value={description} />
                    <button className='modal__edit-btn'>Edit</button>
                    <button className='modal__cancel-btn'>Cancel</button>
                </div>
            }


        </>
    )
};

export default EditBucket;