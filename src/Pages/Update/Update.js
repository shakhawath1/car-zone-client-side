import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const { carId } = useParams();
    const [car, setCar] = useState({});
    const { image, name, supplier, description, _id, price, quantity } = car;

    useEffect(() => {
        const url = `https://mysterious-bayou-78729.herokuapp.com/cars/${carId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [carId]);

    const decreaseItem = () => {
        let quantity = document.getElementById('quantity');

        let quantityNumber = quantity.innerText;

        let newQuantity = parseInt(quantityNumber) - 1;
        if (newQuantity > 0) {
            quantity.innerText = newQuantity;
        }
        else {
            const zero = 0;
            quantity.innerText = zero;
        }
    }

    // restock car
    const handleRestock = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(quantity)

        const updatedQuantity = { quantity };

        // send data to the server
        const url = `https://mysterious-bayou-78729.herokuapp.com/cars/${carId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Added successfully!!!');
                event.target.reset();
            })
    }


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
                    <p className="card-text">Quantity: <span id='quantity'>{quantity}</span></p>
                </div>
                <button onClick={decreaseItem} className='btn'>Delivered</button>
            </div>
            <br />
            <form onSubmit={handleRestock}>
                <input type="number" name="quantity" placeholder='Add Quantity' required />
                <br />
                <br />
                <input type="submit" name='quantity' value="Restock" />
            </form>
        </div>
    );
};

export default Update;