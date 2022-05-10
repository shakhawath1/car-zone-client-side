import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
// import auth from '../../firebase.init';

const AddCar = () => {
    // const [user] = useAuthState(auth);
    const [cars, setCars] = useState([])

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/cars`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const newCar = [...cars, data];
                setCars(newCar);
            })
    };

    return (
        <div>
            <h3>Add Car

            </h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Car" />
            </form>

        </div>
    );
};

export default AddCar;