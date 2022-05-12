import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SortedCar from './SortedCar';

const MyCar = () => {
    const [user] = useAuthState(auth);
    const [myCar, setMyCar] = useState([]);

    useEffect(() => {
        const email = user.email;
        const url = `https://mysterious-bayou-78729.herokuapp.com/cars?email=${email}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setMyCar(data));

    }, [user])


    const newCar = myCar.filter(car => car.email === user.email);
    // setMyCar(newCar);

    // delete item
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
                    const remaining = newCar.filter(car => car._id !== id);
                    setMyCar(remaining);
                });
        };
    };

    return (
        <div className='mx-auto'>
            <h3 className='text-center my-3'>My Cars</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4 d-flex justify-content-center" >
                {
                    newCar.map(car => <SortedCar key={car._id} car={car} handleDelete={handleDelete}></SortedCar>)
                }
            </div >
        </div>
    );
};

export default MyCar;