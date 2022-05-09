import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const { carId } = useParams();
    console.log(carId)

    return (
        <div>

        </div>
    );
};

export default Update;