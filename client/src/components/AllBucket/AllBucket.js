import React, { Fragment, useState, useEffect} from 'react';
import './AllBucket.css';
import Bucket from '../Bucket/Bucket';

const AllBucket = () => {
    const [bucketList, setBucketList] = useState([])

    useEffect(async() => {
        const newBucketList = await fetch('http://localhost:5000/list').then(response => response.json());
        setBucketList(newBucketList)
    }, [])

    return (
        <>
            <table>
                <tbody>
                    {bucketList.map(bucket => {
                        return <Bucket description={bucket.description} key={bucket.id} />
                    })}
                </tbody>
            </table>
        </>
    )
};

export default AllBucket;