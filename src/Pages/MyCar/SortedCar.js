import React from 'react';
import { useNavigate } from 'react-router-dom';

const SortedCar = ({ car }) => {
    // console.log(car)
    const { image, name, supplier, description, price, _id } = car;

    const navigate = useNavigate();

    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mysterious-bayou-78729.herokuapp.com/cars/${id}`;
            console.log(url)
            fetch(url, {
                method: 'put'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // const remaining = cars.filter(product => product._id !== id);
                    // setProducts(remaining);
                })
        }
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top service-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Price: {price}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{supplier}</p>
                </div>

                <div className='d-flex mx-auto '>
                    <button onClick={() => navigateToUpdate(_id)} className='btn checkout-btn mx-2'>Update</button>
                    <button onClick={() => handleDelete(_id)} className='btn checkout-btn mx-2'>Delete</button>
                </div>

            </div>
        </div>
    );
};

export default SortedCar;