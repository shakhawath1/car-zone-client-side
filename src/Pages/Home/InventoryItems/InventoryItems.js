import { useNavigate } from 'react-router-dom';
import useCars from '../../../hooks/LoadCars/useCars';
import Cars from '../Cars/Cars';

const InventoryItems = () => {
    const navigate = useNavigate();
    const [cars, setCars] = useCars();
    const sixCars = cars.slice(0, 6);

    const navigateToInventories = () => {
        navigate('/manage-inventories');
    }

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
                    const remaining = cars.filter(product => product._id !== id);
                    setCars(remaining);
                })
        }
    }

    return (
        <div className="container">
            <h2 className='mt-5 text-center'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4" >
                {
                    sixCars.map(car => <Cars key={car._id} car={car} handleDelete={handleDelete}></Cars>)
                }
            </div >
            <button onClick={() => navigateToInventories()} className='btn checkout-btn'>Manage Inventories</button>
        </div>
    );
};

export default InventoryItems;