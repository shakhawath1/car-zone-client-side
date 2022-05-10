import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SortedCar from './SortedCar';

const MyCar = () => {
    const [user] = useAuthState(auth);
    const [myCar, setMyCar] = useState([]);

    useEffect(() => {
        // const getMyCars = () => {
        const email = user.email;
        const url = `http://localhost:5000/cars?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyCar(data));
        // }
        // getMyCars();

    }, [user])

    const newCar = myCar.filter(car => car.email === user.email);
    // setMyCar(newCar);


    return (
        <div>
            <h3 className='text-center my-3'>My Cars</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4" >
                {
                    newCar.map(car => <SortedCar key={car._id} car={car}></SortedCar>)
                }
            </div >
        </div>
    );
};

export default MyCar;