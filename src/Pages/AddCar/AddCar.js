import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddCar = () => {
    const [user] = useAuthState(auth);
    const [cars, setCars] = useState([])

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'https://mysterious-bayou-78729.herokuapp.com/cars';
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
                console.log(result)
            });
    };

    return (
        <div className='p-5 text-center'>
            <h3>Add Car</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} required />
                <textarea className='mb-2' placeholder='Description' {...register("description")} required />
                <input className='mb-2' type="text" placeholder='Supplier'  {...register("supplier")} required />
                <input className='mb-2' type="text" value={user.email} {...register("email")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} required />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} required />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} required />
                <input type="submit" value="Add Car" />
            </form>

        </div>
    );
};

export default AddCar;