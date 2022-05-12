import { useNavigate } from 'react-router-dom';
import useCars from '../../hooks/LoadCars/useCars';
import AllCars from '../Home/InventoryItems/AllCars';


const ManageInventories = () => {

    const [cars, setCars] = useCars();
    const navigate = useNavigate();

    const navigateToAddNewCar = id => {
        navigate('/addCar');
    }

    // delete item
    const handleDelete = id => {
        console.log(id)
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
                    const remaining = cars.filter(car => car._id !== id);
                    setCars(remaining);
                });
        };
    };

    return (
        <div className="container">
            <h2 className='mt-5 text-center'>Inventory Items</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4" >
                {
                    cars.map(car => <AllCars key={car._id} car={car} handleDelete={handleDelete}></AllCars>)
                }
            </div >
            <div className='mx-auto'>
                <button onClick={() => navigateToAddNewCar()} className='btn checkout-btn mx-5 px-5'>Add New Car</button></div>
        </div>
    );
};

export default ManageInventories;