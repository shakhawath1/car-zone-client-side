import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Cars.css'

const AllCars = ({ car }) => {
    const { image, name, supplier, description, _id, price } = car;
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

                <button onClick={() => navigateToUpdate(_id)} className='btn checkout-btn'>Update</button>
                <button onClick={() => handleDelete(_id)} className='btn checkout-btn'>Delete</button>

            </div>
        </div>
    );
};

export default AllCars;