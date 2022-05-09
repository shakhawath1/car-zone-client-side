import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';

const InventoryItems = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars/')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <h2 className='mt-5 text-center'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4" >
                {
                    services.map(service => <Cars key={service._id} service={service}></Cars>)
                }
            </div >
        </div>
    );
};

export default InventoryItems;