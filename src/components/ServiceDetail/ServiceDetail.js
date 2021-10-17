import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    const ExactItem = data.filter(td => td._id===id)
    console.log(ExactItem)
    return (
        <div>
            <h1>This is service Detail Page {id}</h1>
            <p>Name : {ExactItem[0]?.name}</p>
            <p>Price : {ExactItem[0]?.price}</p>
            <p>Description : {ExactItem[0]?.name}</p>
        </div>
    );
};

export default ServiceDetail;