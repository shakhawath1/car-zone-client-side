import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const { carId } = useParams();
    const [car, setCar] = useState({});
    const { image, name, supplier, description, _id, price, quantity } = car;

    useEffect(() => {
        const url = `https://mysterious-bayou-78729.herokuapp.com/cars/${carId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [carId]);


    return (
        <div className="col w-50 mx-auto">
            <h2 className='text-center m-4'>Update Car</h2>
            <div className="card h-100">
                <img src={image} className="card-img-top service-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{supplier}</p>
                    <h6 className="card-title">Id: {_id}</h6>
                    <h6 className="card-title">Price: {price}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                </div>

                <button className='btn'>Delivered</button>

            </div>
        </div>
    );
};

export default Update;