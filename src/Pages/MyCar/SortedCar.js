import React from 'react';

const SortedCar = ({ car }) => {
    console.log(car)
    const { image, name, supplier, description, price } = car;

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

                {/* <button onClick={() => navigateToUpdate(_id)} className='btn checkout-btn'>Update</button>
                <button onClick={() => handleDelete(_id)} className='btn checkout-btn'>Delete</button> */}

            </div>
        </div>
    );
};

export default SortedCar;