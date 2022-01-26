import React, { Fragment } from 'react';
import './Bucket.css';

const Bucket = ({ description }) => {
    return (
        <>
            <tr>
                <td className='square'></td>
                <td>{description}</td>
                <td>Columns</td>
            </tr>
        </>
    )
};

export default Bucket;